import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const packages = ["Basic", "Advanced", "Premium"];

const inquiryTypes = [
  { number: "01", title: "New website", copy: "Starting from scratch, refreshing your current site, or planning a move to online commerce?" },
  { number: "02", title: "Online store", copy: "Share what you sell and the catalog, payment, shipping, and inventory needs you have." },
  { number: "03", title: "Growth & operations", copy: "Tell us about CRM, reporting, integrations, or workflows you want to bring together." },
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const requestedPlan = searchParams.get("plan");
  const initialPlan = packages.includes(requestedPlan) ? requestedPlan : "";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contact | Bakalives";
    return () => { document.title = previousTitle; };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const inquiry = Object.fromEntries(formData.entries());

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your inquiry.");

      form.reset();
      setFormMessage("Thanks. Your project inquiry has been sent.");
    } catch (error) {
      setFormMessage(error.message || "Unable to send your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page" id="contact-page">
      <section className="contact-intro">
        <span className="contact-eyebrow">LET’S START WITH A CONVERSATION</span>
        <h1>Tell us what you’re building.</h1>
        <p>Share a little about your business, what you need, and where you’d like to go next. We’ll use that to shape a useful first conversation.</p>
      </section>

      <section className="contact-inquiry-types" aria-label="Ways we can help">
        {inquiryTypes.map((item) => (
          <article className="contact-type-card" key={item.number}>
            <span className="contact-type-number">{item.number}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-form-heading">
          <span className="contact-eyebrow">PROJECT INQUIRY</span>
          <h2 id="contact-form-title">A few details to get us started.</h2>
          <p>Fields marked with * are required.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Full name <span>*</span></label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-company">Organization</label>
            <input id="contact-company" name="organization" type="text" autoComplete="organization" placeholder="Company or brand" />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Work email <span>*</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-phone">Phone number</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Include your country code" />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-package">Package or service of interest</label>
            <select id="contact-package" name="package" defaultValue={initialPlan}>
              <option value="">Choose an option</option>
              <option value="Basic">Basic - Establish</option>
              <option value="Advanced">Advanced - Sell</option>
              <option value="Premium">Premium - Scale</option>
              <option value="Care">Ongoing care</option>
              <option value="Not sure">Not sure yet</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="contact-field">
            <label htmlFor="contact-timing">Ideal start time</label>
            <select id="contact-timing" name="timing" defaultValue="">
              <option value="" disabled>Choose a timeframe</option>
              <option>As soon as practical</option>
              <option>Within 1-3 months</option>
              <option>More than 3 months from now</option>
              <option>Just exploring</option>
            </select>
          </div>
          <div className="contact-field contact-field-full">
            <label htmlFor="contact-message">How can we help? <span>*</span></label>
            <textarea id="contact-message" name="message" rows="6" placeholder="Tell us about your goals, features, integrations, or questions." required />
          </div>
          <div className="contact-submit-row">
            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send project inquiry"} <span aria-hidden="true">↗</span>
            </button>
            <p className="contact-form-status" aria-live="polite">{formMessage}</p>
          </div>
        </form>
      </section>
    </main>
  );
}
