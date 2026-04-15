"use client";

import { FormEvent, useState } from "react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: FormErrors = {};

    if (!name) {
      nextErrors.name = "Enter your name.";
    }

    if (!email) {
      nextErrors.email = "Enter your email.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Enter a message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setToast("");
      return;
    }

    form.reset();
    setToast("Message prepared. No backend is connected yet.");
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <span className="contact-form__error" id="name-error">
            {errors.name}
          </span>
        ) : null}
      </label>

      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <span className="contact-form__error" id="email-error">
            {errors.email}
          </span>
        ) : null}
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <span className="contact-form__error" id="message-error">
            {errors.message}
          </span>
        ) : null}
      </label>

      <button type="submit">Send Message</button>
      {toast ? (
        <p className="contact-form__toast" role="status">
          {toast}
        </p>
      ) : null}
    </form>
  );
}
