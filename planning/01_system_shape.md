# SYSTEM_SHAPE — luxury-watch-microsite

## 1. System Overview

A small premium brand site that uses Home as the flagship scroll-driven storytelling experience and supports lightweight About and Contact pages.

The system is optimized for:

- high visual quality
- smooth scroll interaction on Home
- strong performance (Lighthouse targets)
- SEO baseline compliance
- clear multi-page navigation

---

## 2. Core Architecture

### Layers

1. Presentation Layer

- Site pages (Home, About, Contact)
- Home UI sections (Hero, Details, Dissection, etc.)
- Minimal text overlays
- CTA, navigation, and Contact form components

2. Animation Layer

- Scroll-driven animation controller
- Frame sequence handler
- Home section transition manager

3. Asset Layer

- Image/frame sequences (generated via Whisk + Flow)
- Optimized image delivery (compressed formats)

4. Performance Layer

- Lazy loading
- Asset preloading strategy
- Scroll performance optimization

---

## 3. Rendering Strategy (To Be Finalized)

Options:

- DOM + CSS transforms
- Canvas-based frame rendering
- Hybrid approach

Decision pending → Operator

---

## 4. Animation Strategy (To Be Finalized)

Options:

- Frame-by-frame image sequence (primary candidate)
- Layered parallax
- Hybrid (recommended)

Key requirement:

- Dissection sequence must feel smooth and controlled

Decision pending → Operator

---

## 5. Scroll System

- On Home, scroll position drives:
  - frame progression
  - section transitions
- Sticky sections likely required
- Mapping:
  scroll progress → animation progress

---

## 6. Pages And Sections (Mapped from PRD)

### Pages

- Home: flagship scroll/storytelling watch experience
- About: lightweight brand/craft content
- Contact: inquiry form with toast feedback on submit

### Home Sections

- Hero Reveal
- Macro Details
- Dissection Sequence
- Movement Showcase
- Reassembly
- Final CTA

Each section:

- has its own visual state
- may have its own animation logic

---

## 7. Asset Strategy (IMPORTANT)

### Pipeline

1. Define key scenes
2. Generate start + end frames (Whisk)
3. Generate intermediate frames (Flow)
4. Optimize images
5. Integrate into frame sequence

---

## 8. SEO Strategy

- Semantic HTML structure
- Minimal JS blocking
- Metadata:
  - title
  - description
  - Open Graph
- Unique metadata per page
- Indexable content (not only images)

---

## 9. Responsiveness Strategy

- Desktop-first
- Mobile:
  - simplified animations
  - reduced frame usage
  - fallback behavior if needed

---

## 10. Constraints

- Must meet Lighthouse targets
- Must not overload with heavy assets
- Must degrade gracefully on weaker devices
- Must avoid adding blog, shop, CMS, or auth scope

---

## 11. Open Decisions

- Framework
- Animation library
- Rendering method
- Asset format strategy
- Deployment platform
- Contact form field validation rules and toast copy
