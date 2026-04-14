# PRD (Lean) — luxury-watch-microsite

## Goal

Small premium brand site for a luxury watch concept.
Focus: flagship visual storytelling on Home, premium feel, realistic portfolio impact.

---

## Success Criteria

- Feels premium (subjective)
- Smooth scroll experience on Home
- Strong visual impact
- Clear multi-page structure: Home, About, Contact
- Contact form provides toast feedback on submit
- Lighthouse:
  - Performance ≥ 85
  - SEO ≥ 90
  - Accessibility ≥ 85

---

## Audience

- Affluent users (28–50)
- Watch enthusiasts / design-focused users

---

## Experience

- Home: scroll-driven storytelling and cinematic watch presentation
- About: lightweight brand/craft page
- Contact: UI-only inquiry page with client-side validation and success toast feedback
- Minimal UI
- Desktop-first

---

## Site Structure

1. Home
2. About
3. Contact

---

## Home Flow

1. Hero reveal
2. Macro details
3. Dissection (main highlight)
4. Movement showcase
5. Reassembly
6. Final visual + CTA

---

## Features

- Multi-page navigation
- Home scroll animation
- Home frame-based sequences
- Home section transitions
- About brand/craft content
- Contact inquiry form
- Client-side Contact form validation
- Toast feedback on Contact form submit
- Minimal text

---

## Explicitly Out of Scope

- Blog
- Shop / e-commerce
- CMS
- Auth
- Product configurator
- Backend Contact handling
- API submission
- Email sending

---

## Constraints (Open)

- Framework
- Animation approach
- Asset generation (Whisk + Flow)
- Deployment

## Contact Constraints

- Contact form is UI-only.
- Form validation is client-side only.
- Form submission shows a success toast after valid input.
- Form submission does not send data externally.
- No backend, API, or email sending is included.
- Use fake placeholder email only if an email address is shown, e.g. `hello@brand.com`.
