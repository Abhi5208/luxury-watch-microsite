import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="content-page">
      <section className="content-section content-section--hero" aria-labelledby="contact-title">
        <div className="content-section__inner">
          <h1 id="contact-title">Contact</h1>
          <p>
            Share a launch inquiry, collaboration note, or appointment request.
            This form is a front-end placeholder only.
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="contact-form-title">
        <div className="content-section__inner">
          <h2 id="contact-form-title">Send a Note</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
