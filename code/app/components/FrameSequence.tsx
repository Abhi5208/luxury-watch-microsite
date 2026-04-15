"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 72;
const CANVAS_SIZE = 1080;
const FRAME_PATH = "/frame-audit/optimized-webp-72/watch-scroll-{index}.webp";
const FALLBACK_VIDEO_PATH = "/frame-audit/watch-scroll-72-1080p.mp4";
const NARRATIVE_PHASES = [
  {
    eyebrow: "01 Introduction",
    title: "The silhouette arrives first.",
    body: "A controlled reveal sets the product in darkness before the mechanics take focus.",
  },
  {
    eyebrow: "02 Detail Focus",
    title: "Edges, glass, and dial begin to separate.",
    body: "The sequence slows the eye around polished surfaces and disciplined proportions.",
  },
  {
    eyebrow: "03 Engineering",
    title: "The movement becomes the story.",
    body: "Layer by layer, the watch opens into precision, depth, and internal architecture.",
  },
  {
    eyebrow: "04 Final Reveal",
    title: "Every component resolves into one object.",
    body: "The final frame returns the focus to presence: complete, restrained, and exact.",
  },
];

function frameUrl(index: number) {
  return FRAME_PATH.replace("{index}", String(index).padStart(3, "0"));
}

function loadDecodedImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.src = src;

    image.onload = async () => {
      try {
        if (image.decode) {
          await image.decode();
        }
        resolve(image);
      } catch (error) {
        reject(error);
      }
    };

    image.onerror = () => reject(new Error(`Unable to load frame: ${src}`));
  });
}

export default function FrameSequence() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundLayerRef = useRef<HTMLDivElement | null>(null);
  const foregroundLayerRef = useRef<HTMLDivElement | null>(null);
  const phaseRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      return;
    }

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    const backgroundLayer = backgroundLayerRef.current;
    const foregroundLayer = foregroundLayerRef.current;
    const phaseElements = phaseRefs.current.filter(Boolean);

    if (!section || !canvas || !context) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let active = true;
    let rafId = 0;
    let trigger: ScrollTrigger | null = null;
    let targetFrame = 0;
    let currentFrame = 0;
    let renderedFrame = -1;
    const images: HTMLImageElement[] = [];

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    gsap.set(phaseElements, { autoAlpha: 0, y: 28 });
    gsap.set(phaseElements[0], { autoAlpha: 1, y: 0 });
    gsap.set(backgroundLayer, { y: 18, scale: 1 });
    gsap.set(foregroundLayer, { y: -12, opacity: 0.14 });

    const drawFrame = (frameIndex: number) => {
      const boundedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));
      const image = images[boundedIndex];

      if (!image) {
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      renderedFrame = boundedIndex;
    };

    const render = () => {
      const delta = targetFrame - currentFrame;
      currentFrame += delta * 0.18;

      if (Math.abs(delta) < 0.01) {
        currentFrame = targetFrame;
      }

      const nextFrame = Math.round(currentFrame);
      if (nextFrame !== renderedFrame) {
        drawFrame(nextFrame);
      }

      rafId = window.requestAnimationFrame(render);
    };

    const start = async () => {
      try {
        images[0] = await loadDecodedImage(frameUrl(0));
        if (!active) {
          return;
        }

        drawFrame(0);

        const remainingFrames = await Promise.all(
          Array.from({ length: FRAME_COUNT - 1 }, (_, offset) =>
            loadDecodedImage(frameUrl(offset + 1)),
          ),
        );

        if (!active) {
          return;
        }

        remainingFrames.forEach((image, index) => {
          images[index + 1] = image;
        });

        trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            /*
              ScrollTrigger progress is normalized from 0 to 1.
              Multiplying by FRAME_COUNT - 1 maps the pinned scroll range
              to the sequence indexes, so the first scroll position renders
              frame 0 and the final scroll position renders frame 71.
            */
            targetFrame = self.progress * (FRAME_COUNT - 1);

            /*
              Depth layers reuse the same scroll progress:
              the background moves through a smaller range for slower depth,
              while the foreground reflection moves a little farther to feel
              closer to the viewer. Both stay subtle to keep the watch dominant.
            */
            gsap.set(backgroundLayer, {
              y: gsap.utils.interpolate(18, -18, self.progress),
              scale: gsap.utils.interpolate(1, 1.04, self.progress),
            });
            gsap.set(foregroundLayer, {
              y: gsap.utils.interpolate(-16, 22, self.progress),
              opacity: gsap.utils.interpolate(0.1, 0.18, self.progress),
            });

            /*
              The same normalized progress also drives the text overlay.
              Each phase owns an equal progress range:
              0.00-0.25 introduction, 0.25-0.50 detail,
              0.50-0.75 engineering, 0.75-1.00 final reveal.
              Local phase progress fades the copy in near the start,
              keeps it dominant through the middle, then fades it out
              while moving it down slightly before the next phase takes over.
            */
            phaseElements.forEach((element, index) => {
              const phaseStart = index / NARRATIVE_PHASES.length;
              const phaseEnd = (index + 1) / NARRATIVE_PHASES.length;
              const phaseDuration = phaseEnd - phaseStart;
              const localProgress = gsap.utils.clamp(
                0,
                1,
                (self.progress - phaseStart) / phaseDuration,
              );
              const fadeIn = gsap.utils.clamp(0, 1, localProgress / 0.28);
              const fadeOut = gsap.utils.clamp(0, 1, (1 - localProgress) / 0.28);
              const opacity = Math.min(fadeIn, fadeOut);
              const y = gsap.utils.interpolate(24, -8, opacity);

              gsap.set(element, {
                autoAlpha: opacity,
                y,
              });
            });
          },
        });

        rafId = window.requestAnimationFrame(render);
      } catch (error) {
        console.error(error);
      }
    };

    void start();

    return () => {
      active = false;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      trigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="frame-sequence"
      aria-label="Luxury watch motion sequence"
    >
      <div
        ref={backgroundLayerRef}
        className="frame-sequence__depth frame-sequence__depth--background"
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="frame-sequence__canvas"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        aria-hidden="true"
      />
      <div className="frame-sequence__copy" aria-live="polite">
        {NARRATIVE_PHASES.map((phase, index) => (
          <div
            className="frame-sequence__phase"
            key={phase.eyebrow}
            ref={(element) => {
              phaseRefs.current[index] = element;
            }}
          >
            <p className="frame-sequence__eyebrow">{phase.eyebrow}</p>
            <h2>{phase.title}</h2>
            <p>{phase.body}</p>
          </div>
        ))}
      </div>
      <div
        ref={foregroundLayerRef}
        className="frame-sequence__depth frame-sequence__depth--foreground"
        aria-hidden="true"
      />
      <video
        className="frame-sequence__fallback"
        src={FALLBACK_VIDEO_PATH}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </section>
  );
}
