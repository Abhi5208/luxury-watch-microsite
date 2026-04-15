export class FrameSequence {
  constructor(section, options = {}) {
    this.section = section;
    this.canvas = section.querySelector("canvas");
    this.context = this.canvas.getContext("2d", { alpha: false });
    this.frameCount = Number(section.dataset.frameCount || options.frameCount || 0);
    this.framePath = section.dataset.framePath || options.framePath;
    this.scrollLength = section.dataset.scrollLength || options.scrollLength || "260%";
    this.images = [];
    this.targetFrame = 0;
    this.renderedFrame = -1;
    this.currentFrame = 0;
    this.rafId = 0;
    this.trigger = null;
  }

  async init() {
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = "high";
    this.images = await this.preloadFrames();
    this.drawFrame(0);
    this.startRenderLoop();
    this.createScrollTrigger();
  }

  async preloadFrames() {
    const loaders = Array.from({ length: this.frameCount }, (_, index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = this.frameUrl(index);

      return new Promise((resolve, reject) => {
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
        image.onerror = () => reject(new Error(`Unable to load frame: ${image.src}`));
      });
    });

    return Promise.all(loaders);
  }

  createScrollTrigger() {
    if (!window.gsap || !window.ScrollTrigger) {
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    this.trigger = window.ScrollTrigger.create({
      trigger: this.section,
      start: "top top",
      end: `+=${this.scrollLength}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        /*
          ScrollTrigger progress is normalized from 0 to 1.
          Multiplying by frameCount - 1 maps the scroll range onto
          the available frame indexes, preserving frame 0 at the top
          and frame 71 at the end of the pinned scroll distance.
        */
        this.targetFrame = self.progress * (this.frameCount - 1);
      },
    });
  }

  startRenderLoop() {
    const tick = () => {
      const delta = this.targetFrame - this.currentFrame;
      this.currentFrame += delta * 0.18;

      if (Math.abs(delta) < 0.01) {
        this.currentFrame = this.targetFrame;
      }

      const nextFrame = Math.round(this.currentFrame);
      if (nextFrame !== this.renderedFrame) {
        this.drawFrame(nextFrame);
      }

      this.rafId = window.requestAnimationFrame(tick);
    };

    this.rafId = window.requestAnimationFrame(tick);
  }

  drawFrame(frameIndex) {
    const boundedIndex = Math.max(0, Math.min(this.frameCount - 1, frameIndex));
    const image = this.images[boundedIndex];

    if (!image) {
      return;
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
    this.renderedFrame = boundedIndex;
  }

  frameUrl(index) {
    return this.framePath.replace("{index}", String(index).padStart(3, "0"));
  }

  destroy() {
    if (this.rafId) {
      window.cancelAnimationFrame(this.rafId);
    }

    if (this.trigger) {
      this.trigger.kill();
    }
  }
}
