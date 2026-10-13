
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p>Have a question? Send us a message.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email Address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            minLength={10}
            placeholder="Write your message"
            rows={5}
          />
        </label>

        <button className="primary-button" type="submit">
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message passed validation.
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
