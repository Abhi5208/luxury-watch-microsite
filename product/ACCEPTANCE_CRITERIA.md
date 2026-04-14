# ACCEPTANCE_CRITERIA — luxury-watch-microsite

## 1. Site Structure

- The site must include at minimum:
  1. Home
  2. About
  3. Contact
- Home must remain the flagship storytelling page.
- About must be a lightweight brand/craft page.
- Contact must be a functional inquiry page with a form.
- The Contact form must be UI-only.
- The Contact form must validate inputs client-side only.
- The Contact form must show success toast feedback on valid submit.
- Form submission does not send data externally.
- Contact must not include backend handling, API submission, or email sending.
- If a contact email is shown, it must use fake placeholder copy such as `hello@brand.com`.
- The site must not include a blog, shop, CMS, or auth flow.

---

## 2. Home Scroll Experience

- Home must present a scroll-driven narrative with these sections in order:
  1. Hero reveal
  2. Macro details
  3. Dissection
  4. Movement showcase
  5. Reassembly
  6. Final visual + CTA

- Scrolling must drive the main transitions between sections.
- The dissection sequence must be visibly presented as the primary highlight of the experience.
- The Home page must not rely on autoplay audio.
- The experience must remain usable with standard mouse wheel, trackpad, and keyboard page scrolling.

---

## 3. Visual Quality

- Above-the-fold hero section must display a premium watch visual immediately on first load.
- Each core Home section must include a clearly distinct visual state so progression is obvious.
- Overlay text, if present, must remain readable against the background at all supported viewport sizes.
- UI chrome must remain minimal and premium; navigation must not distract from the watch story.
- The Home final section must include a visible call to action.
- About and Contact must visually match the premium brand direction without adding unnecessary feature scope.

---

## 4. Performance

### Lighthouse Targets
Measured on production build under standard Lighthouse testing:

- Performance score must be **85 or higher** on desktop.
- SEO score must be **90 or higher**.
- Accessibility score must be **85 or higher**.
- Best Practices score should target **90 or higher**.

### Runtime Expectations
- Initial page content must become visibly rendered without a blank screen stall.
- Main Home scrolling experience must remain responsive without severe stutter on a modern desktop browser.
- Large visual assets must be optimized and compressed before use.
- Each page must avoid unnecessary blocking scripts that delay the first visible render.

---

## 5. Responsiveness

- The experience must support desktop, tablet, and mobile viewports.
- Desktop is the primary design target.
- On mobile, Home does not need to match desktop visual richness exactly, but all core content and section order must remain accessible.
- No section may overflow horizontally at common viewport widths.
- Text must remain legible without requiring pinch zoom.
- CTA and Contact form must remain accessible on mobile and desktop.

### Minimum viewport support
- Mobile: 360px width and above
- Tablet: 768px width and above
- Desktop: 1280px width and above

---

## 6. SEO

- Each page must include a unique title tag.
- Each page must include a meta description.
- Each page must use semantic heading structure.
- Primary content must be indexable in HTML and must not depend entirely on images for meaning.
- All meaningful images must include appropriate alt text.
- Canonical URL support must be included.
- Open Graph metadata must be included for social sharing.
- Twitter/X preview metadata must be included.
- The site must be crawlable by search engines unless intentionally blocked.

---

## 7. Accessibility

- All interactive elements must be keyboard reachable.
- Focus states must be visible for interactive elements.
- Color contrast for text and interactive elements must meet accessible contrast expectations.
- The site must not require hover to access critical information.
- Decorative animations must not block reading or navigation.
- A reduced-motion experience must be supported for users who prefer reduced motion.
- CTA, navigation, Contact form controls, and any links/buttons must have accessible names.
- Each page must preserve readability and usability at 200% zoom.

---

## 8. Content Structure

- The site must include the following content themes:
  - Craftsmanship
  - Materials
  - Movement
  - Brand philosophy
  - Final CTA
- Home must carry the cinematic watch story.
- About must carry concise brand/craft context.
- Contact must provide a realistic inquiry path.

- Content must remain minimal and visual-first.
- No long-form copy blocks should interrupt the cinematic flow.
- Technical specs, if shown, must remain concise.

---

## 9. Browser Support

- The site must function correctly in the latest stable versions of:
  - Chrome
  - Edge
  - Safari

- Core content must remain accessible even if some advanced animation effects degrade gracefully.
- The site must not break completely in a browser with partial animation feature limitations.

---

## 10. Portfolio Readiness

- The finished brand site must be presentable as a standalone portfolio project.
- It must demonstrate:
  - strong visual execution
  - smooth storytelling flow
  - performance awareness
  - SEO/accessibility consideration

- The project must avoid placeholder branding or visible template remnants.

---

## 11. Out of Scope

- Full e-commerce flow
- Shop
- Blog
- Product configurator
- Heavy user-controlled 3D interaction
- CMS integration
- Auth
- Backend Contact handling
- API submission
- Email sending
