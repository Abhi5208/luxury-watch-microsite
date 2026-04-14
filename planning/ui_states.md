# UI_STATES - luxury-watch-microsite

## Purpose

Define planned UI states for the 3-page premium brand site.

No implementation decisions are made here.

## State Matrix

| Area | State Name | Trigger | UI Elements Visible | Transitions | Edge Cases |
| --- | --- | --- | --- | --- | --- |
| Home | Initial Hero Loaded | User lands on Home. | Premium watch hero visual, primary heading, minimal navigation, first story cue or CTA. | Page enters the first scroll storytelling section. | Hero must not show a blank screen if animation assets are delayed. |
| Home | Story Scroll Active | User scrolls past the hero into the Home story. | Current story section, watch visual/frame state, minimal supporting copy, navigation. | Scroll progress advances section transitions and frame progression. | Fast scrolling must not trap the user or skip required readable content. |
| Home | Macro Details Section | Scroll reaches macro details range. | Close-detail watch visual, concise materials/craft copy, current section context. | Scroll moves forward to dissection or backward to hero reveal. | Text must remain readable over imagery at supported viewport sizes. |
| Home | Dissection Highlight Section | Scroll reaches dissection range. | Dissection visual/frame sequence, minimal explanatory copy, section CTA if planned. | Scroll drives dissection progression and then moves toward movement showcase. | If frame sequence fails, fallback visual must still communicate the dissection concept. |
| Home | Movement Showcase Section | Scroll reaches movement showcase range. | Movement-focused visual, concise mechanical/craft messaging. | Scroll transitions from dissection to movement and toward reassembly. | Motion must not obscure text or create unreadable overlays. |
| Home | Reassembly Section | Scroll reaches reassembly range. | Reassembled watch visual progression, minimal transition copy. | Scroll moves toward final CTA. | Frame jumps must degrade gracefully to static section states if needed. |
| Home | Final CTA Section | User reaches end of Home story. | Final premium watch visual, CTA to Contact, navigation to About/Contact. | CTA can move user to Contact; navigation can move user to About or Contact. | CTA must be keyboard reachable and available on mobile. |
| About | About Page Loaded | User navigates to About or opens About directly. | Page heading, concise brand philosophy, craft/materials/movement sections, navigation. | Standard page navigation to Home or Contact. | About must make sense without requiring prior Home context. |
| About | About Content Reading | User scrolls or reads About content. | Lightweight brand/craft content blocks, any supporting imagery, navigation. | User can continue reading or navigate away. | Content must not expand into blog, CMS, or long-form editorial scope. |
| Contact | Contact Page Loaded | User navigates to Contact or opens Contact directly. | Page heading, UI-only inquiry form, required field indicators, navigation, fake placeholder email if shown. | User can fill form, submit, or navigate away. | Form must be usable without previous page context; any shown email must be fake placeholder copy such as `hello@brand.com`. |
| Contact Form | Empty Form | Contact page loads with no user input. | Empty form fields, labels, submit button, required indicators. | User input moves fields into active/dirty states. | Required fields must be clear without relying only on placeholder text. |
| Contact Form | Input Active | User focuses a form field. | Focused field, label, current input value, submit button. | Blur or continued typing updates field state. | Focus state must be visible for keyboard users. |
| Contact Form | Valid Input Ready | Required fields contain valid input. | Completed fields, submit button, no validation errors. | Submit runs client-side validation and then moves to success toast state. | Validity rules must be clear before implementation planning is finalized. |
| Contact Form | Validation Failure | User submits with missing or invalid required input. | Field-level error messages, invalid field indicators, form fields, submit button. | User correction can return fields to valid state. | Errors must not rely only on color; toast must not replace field-level messages. |
| Contact Form | Submit Success | User submits valid form input. | Form and success toast. | Client-side validation passes; toast appears, then dismisses or times out. | Form submission does not send data externally and must not imply real message delivery. |
| Toast | Success Toast Visible | Contact form accepts a valid submit action. | Non-blocking success toast with concise message. | Toast dismisses automatically or through user action, depending on final UX decision. | Toast must be announced accessibly and must not cover critical form content. |
| Toast | Toast Dismissed | Toast timeout completes or user dismisses toast. | Underlying Contact form remains visible; toast is no longer visible. | User may continue editing, resubmit, or navigate away. | Dismiss behavior must not remove field-level errors. |
| Loading | Home Animation Assets Loading | Home starts loading large frame/image assets. | Initial meaningful Home content, hero fallback or placeholder visual, navigation. | Assets load into the full Home visual experience when ready. | No blank screen stall; content must remain readable if loading is slow. |
| Loading | Page Navigation Loading | User moves between Home, About, and Contact. | Current or target page shell, navigation state, minimal loading indication if needed. | Target page becomes interactive. | Loading indication should not introduce a new feature pattern beyond basic feedback. |
| Error | Animation Asset Error | Home frame/image asset fails to load. | Static fallback visual, Home story text, navigation. | User can continue scrolling or navigate to About/Contact. | Failure must not break the entire Home page. |
| Reduced Motion | Reduced Motion Home | User has reduced-motion preference enabled. | Home story sections, static or lower-motion visuals, readable copy, navigation. | Scroll moves through sections without intensive animation. | Reduced-motion mode must not remove story content. |
| Reduced Motion | Reduced Motion Contact | User has reduced-motion preference enabled and submits Contact form. | Contact form, field messages, toast or inline feedback with minimal/no motion. | Feedback appears without motion-heavy entrance/exit. | Feedback must remain perceivable without relying on animated movement. |
| Mobile | Mobile Home Simplified | User opens Home on mobile viewport. | Simplified Home story, optimized visuals, mobile navigation, CTA. | Vertical scroll moves through story sections. | Text must not overflow; visual load may be reduced while preserving story order. |
| Mobile | Mobile Contact Form | User opens Contact on mobile viewport. | Stacked form fields, labels, submit button, toast/validation feedback. | User fills, corrects, and submits form through touch or keyboard input. | Toast must not cover required fields or navigation; controls must remain tappable. |

## Notes

- Home remains the only scroll-storytelling page.
- About remains lightweight and content-focused.
- Contact owns UI-only form, client-side validation, and toast feedback states.
- Contact form submission does not send data externally.
- No Contact backend, API submission, email sending, or real contact handling is planned.
- Blog, shop, CMS, and auth states are intentionally excluded.
