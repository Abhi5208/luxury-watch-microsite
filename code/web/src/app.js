import { FrameSequence } from "./FrameSequence.js";

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll("[data-frame-sequence]").forEach(async (section) => {
  if (reducedMotionQuery.matches) {
    section.classList.add("is-reduced-motion");
    const video = section.querySelector("video");
    video.currentTime = 0;
    return;
  }

  const sequence = new FrameSequence(section);
  await sequence.init();
});
