# DECISION_POLICY — luxury-watch-microsite

## Decision Types

### 1. Execution Decisions (AI can proceed)

- File structure within /code
- Component breakdown
- Naming conventions
- Basic Home/About/Contact routing once framework is selected
- Animation implementation details (once approach is chosen)
- Performance optimizations
- SEO implementation details
- Accessibility implementation

---

### 2. Operator Decisions (Must be explicitly chosen)

- Frontend framework (Next.js / Astro / other)
- Animation approach:
  - Frame sequence vs parallax vs hybrid
- Animation library:
  - GSAP / Framer Motion / custom
- Rendering method:
  - DOM / canvas / WebGL
- Asset generation pipeline:
  - Whisk + Flow usage
- Image format and optimization strategy
- Deployment platform (Vercel / Netlify / other)
- Contact form handling model:
  - demo-only toast vs external form service
- Balance between:
  - visual quality vs performance

---

### 3. Client Decisions (Simulated — already defined)

- Experience style (cinematic, scroll-based)
- Site structure (Home, About, Contact)
- Home story flow (reveal → dissection → reassembly)
- Interaction level (minimal, scroll-driven)
- CTA behavior (soft, non-aggressive)
- Audience and positioning (luxury, high-end)

---

## Rules

- No execution starts before Operator decisions are locked
- No new features added during build
- If a decision affects performance or UX significantly → treat as Operator decision
- If unclear → log in QUESTIONS.md before proceeding

---

## Conflict Handling

- If performance vs visuals conflict:
  → prioritize portfolio impact first, then optimize

- If mobile vs desktop conflict:
  → prioritize desktop experience

- If time constraint arises:
  → reduce scope, not quality of core sections
