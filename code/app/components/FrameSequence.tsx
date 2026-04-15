"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 72;
const CANVAS_SIZE = 1080;
const FRAME_PATH = "/frame-audit/optimized-webp-72/watch-scroll-{index}.webp";
const FALLBACK_VIDEO_PATH = "/frame-audit/watch-scroll-72-1080p.mp4";

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

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      return;
    }

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });

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
      <canvas
        ref={canvasRef}
        className="frame-sequence__canvas"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
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
