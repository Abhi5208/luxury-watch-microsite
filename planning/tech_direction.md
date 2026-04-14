# TECH_DIRECTION — luxury-watch-microsite

## Goal

Lock the build direction before asset generation or coding starts.

---

## Framework

- Preferred: Next.js

### Why

- Strong SEO baseline
- Good routing for Home / About / Contact
- Easy deployment
- Good metadata support
- Good fit for portfolio-quality frontend builds

---

## Animation Approach

- Preferred: Hybrid
  - layered parallax for depth
  - frame sequence for key showcase moments
  - strongest use on Home page only

### Why

- Full frame-sequence everywhere is heavy
- pure parallax may not deliver the dissection impact
- hybrid keeps the experience premium while controlling performance

---

## Rendering Strategy

- Preferred:
  - DOM/CSS for layout and standard motion
  - image sequence for the key dissection section
- Avoid WebGL unless absolutely necessary

### Why

- simpler implementation
- better control over performance
- easier SEO/accessibility handling
- lower complexity for a portfolio build

---

## Animation Library

- Preferred: GSAP

### Why

- strong scroll control
- good timeline handling
- widely used for premium storytelling sites

---

## Contact Page Behavior

- UI-only
- client-side validation only
- success toast only
- no backend
- no API
- no real email sending

---

## Asset Generation Direction

- Use Whisk for key frames
- Use Flow for interpolated sequence exploration
- Generate assets only for the Home flagship experience first

---

## Mobile Strategy

- Simplified version of Home
- reduced animation intensity
- fewer frames if needed
- preserve content and structure, not full visual parity

---

## Performance Strategy

- prioritize premium desktop experience
- optimize images aggressively
- lazy load non-critical assets
- keep frame-sequence usage limited to high-impact sections only

---

## Locked Recommendations

- Framework: Next.js
- Animation library: GSAP
- Experience model: Hybrid
- Rendering: DOM/CSS + image sequence
- Contact: UI-only toast form
