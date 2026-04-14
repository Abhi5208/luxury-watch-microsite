# FLOWS - luxury-watch-microsite

## Purpose

Track planned user flows and screen transitions for the 3-page premium brand site.

Pages:

- Home
- About
- Contact

## User Flows

### Landing On Home And Experiencing Scroll Story

- Entry point: User opens the site at Home.
- User steps:
  - User lands on the Home hero.
  - User begins scrolling through the watch story.
  - User moves through hero reveal, macro details, dissection, movement showcase, reassembly, and final CTA.
  - User may pause, scroll backward, or continue to the final CTA.
- System response:
  - Home loads a premium watch visual immediately above the fold.
  - Scroll progress drives the Home storytelling transitions.
  - Frame sequence or fallback visuals remain responsive and readable.
  - Navigation remains available without distracting from the story.
- Exit/result:
  - User understands the premium watch concept and reaches a CTA or navigation choice.
- Edge cases:
  - If animation assets are slow to load, meaningful content must still appear without a blank screen.
  - If advanced animation is unsupported, the story must degrade to static or simplified section visuals.
  - If the user scrolls quickly, section transitions must not trap or break navigation.

### Moving From Home To About

- Entry point: User is on Home.
- User steps:
  - User selects About from navigation or a contextual link.
  - User arrives on About.
  - User reviews concise brand and craft content.
- System response:
  - Site transitions to About using standard page navigation.
  - About presents lightweight brand philosophy, craftsmanship, materials, and movement context.
  - SEO title and meta description reflect the About page.
- Exit/result:
  - User gains brand/craft context and can return Home or proceed to Contact.
- Edge cases:
  - If user opens About directly, page must still make sense without prior Home context.
  - About must not expand into a blog, CMS, or long-form editorial experience.

### Moving From Home Or About To Contact

- Entry point: User is on Home or About.
- User steps:
  - User selects Contact from navigation or CTA.
  - User arrives on Contact.
  - User reviews the inquiry form.
- System response:
  - Site transitions to Contact using standard page navigation.
  - Contact displays a focused UI-only inquiry form with accessible labels and clear required fields.
  - SEO title and meta description reflect the Contact page.
- Exit/result:
  - User is ready to submit an inquiry or navigate elsewhere.
- Edge cases:
  - If Contact is opened directly, the form must be usable without previous page context.
  - Contact must not introduce auth, account creation, shop checkout, CMS behavior, backend handling, API submission, or email sending.

### Submitting Contact Form Successfully

- Entry point: User is on Contact with valid form input.
- User steps:
  - User fills required form fields.
  - User submits the form.
  - User sees submit feedback.
- System response:
  - System validates required fields.
  - If valid, system keeps the action client-side only.
  - System shows a success toast.
  - Toast feedback is non-blocking and accessible.
- Exit/result:
  - User sees success feedback without any data being sent externally.
- Edge cases:
  - Toast copy must not imply real message delivery.
  - If an email address is shown anywhere in Contact, it must be fake placeholder copy such as `hello@brand.com`.
  - No backend, API, email sending, or real contact handling is allowed.

### Contact Form Validation Failure

- Entry point: User is on Contact with incomplete or invalid form input.
- User steps:
  - User leaves a required field empty or enters invalid input.
  - User submits the form.
  - User reviews validation feedback.
- System response:
  - System blocks submission client-side.
  - System identifies invalid fields with clear messages.
  - Focus and screen-reader behavior support correction.
  - Toast may be used only if it does not replace field-level validation.
- Exit/result:
  - User can correct input and retry UI-only submission.
- Edge cases:
  - Validation feedback must remain visible long enough to act on.
  - Error states must not rely only on color.
  - Keyboard users must be able to reach and correct all invalid fields.

### Reduced-Motion / Fallback Experience

- Entry point: User has reduced-motion preference enabled or device/browser cannot support the full Home animation.
- User steps:
  - User opens Home.
  - User scrolls through the story.
  - User navigates to About or Contact as needed.
- System response:
  - System reduces or disables intensive motion.
  - Home still presents the same story order with static, simplified, or lower-motion visuals.
  - Contact form and navigation remain unchanged.
- Exit/result:
  - User receives the core premium brand experience without motion-heavy interaction.
- Edge cases:
  - Reduced-motion mode must not remove core content.
  - Fallback visuals must not create layout jumps or blank sections.
  - SEO-readable content must remain available.

### Mobile Simplified Flow

- Entry point: User opens the site on a mobile viewport.
- User steps:
  - User lands on Home.
  - User scrolls through a simplified Home story.
  - User uses mobile navigation to visit About or Contact.
  - User submits or corrects the Contact form if needed.
- System response:
  - Home preserves story order while reducing animation complexity and frame load if needed.
  - Navigation remains reachable and does not obscure content.
  - About remains concise and readable.
  - Contact form remains usable at 360px width and above.
- Exit/result:
  - User can understand the brand story, read About, and complete the Contact flow on mobile.
- Edge cases:
  - Text must not overflow horizontally.
  - Form controls must remain tappable and labeled.
  - Toast feedback must not cover required form messages or primary navigation.
