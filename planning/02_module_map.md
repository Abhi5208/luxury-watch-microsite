# MODULE_MAP — luxury-watch-microsite

## Purpose

Map the planned modules for the 3-page premium brand site.

No implementation decisions are made here.

## Modules

| Module | Responsibility | Dependencies |
| --- | --- | --- |
| Routing / Layout | Define the top-level site structure for Home, About, and Contact; provide shared page shell, navigation, footer, and consistent premium presentation. | Framework decision, SEO/meta module, accessibility module |
| Home Page | Own the flagship scroll storytelling experience and assemble Home sections in the approved narrative order. | Routing / Layout, Home Animation System, Section Components, Asset Pipeline, SEO/meta module |
| Home Animation System | Map scroll progress to section transitions and frame-sequence playback for the Home page. | Animation approach decision, rendering method decision, Asset Pipeline, performance constraints, accessibility module for reduced motion |
| Section Components | Define reusable Home storytelling sections such as hero reveal, macro details, dissection, movement showcase, reassembly, and final CTA. | Home Page, Home Animation System, Asset Pipeline, SEO/meta module for semantic content |
| About Page | Present lightweight brand and craft content without expanding into long-form editorial or CMS scope. | Routing / Layout, About Content Sections, SEO/meta module, accessibility module |
| About Content Sections | Define concise content blocks for brand philosophy, craftsmanship, materials, and movement context. | About Page, copy/content decisions, Asset Pipeline if supporting imagery is used |
| Contact Page | Provide a realistic-looking inquiry page with a UI-only contact form and submit feedback. | Routing / Layout, Contact Form, SEO/meta module, accessibility module |
| Contact Form | Define form fields, client-side validation behavior, and success toast feedback on valid submit. | Contact Page, accessibility module |
| Toast Feedback | Provide non-blocking user feedback after Contact form submission. | Contact Form, accessibility module for announcement behavior |
| SEO / Meta | Define unique page titles, descriptions, canonical handling, Open Graph metadata, Twitter/X metadata, and semantic heading expectations for each page. | Routing / Layout, page content definitions |
| Accessibility | Define keyboard access, focus states, reduced-motion support, form labeling, toast announcement behavior, contrast expectations, and 200% zoom usability. | Routing / Layout, Home Animation System, Contact Form, Toast Feedback, Section Components |
| Asset Pipeline | Define source, generation, optimization, naming, and delivery approach for watch frames and supporting images. | Asset generation decision, rendering method decision, Home Animation System, Section Components, performance constraints |

## Page Coverage

| Page | Primary Modules |
| --- | --- |
| Home | Routing / Layout, Home Page, Home Animation System, Section Components, SEO / Meta, Accessibility, Asset Pipeline |
| About | Routing / Layout, About Page, About Content Sections, SEO / Meta, Accessibility, Asset Pipeline if imagery is used |
| Contact | Routing / Layout, Contact Page, Contact Form, Toast Feedback, SEO / Meta, Accessibility |

## Dependency Notes

- Framework choice must be locked before final routing/layout module design.
- Animation approach and rendering method must be locked before final Home Animation System planning.
- Contact form behavior is fixed as UI-only: client-side validation followed by success toast feedback.
- Contact form submission must not send data externally and must not use backend, API, or email sending.
- Asset pipeline decisions affect Home performance, visual quality, SEO image metadata, and reduced-motion fallback planning.
- Accessibility requirements apply across every module and should be validated before build starts.
