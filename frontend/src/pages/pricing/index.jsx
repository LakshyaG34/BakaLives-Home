import { useEffect } from "react";
import WOW from "wow.js";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    tagline: "Establish",
    price: "25,000",
    duration: "3-5 weeks",
    bestFor: "Service firms, studios, portfolios, and local businesses.",
    warranty: "30-day post-launch defect warranty",
    features: [
      "Responsive branded website, up to 5 pages",
      "Template-based design and inquiry forms",
      "Basic content editing and technical SEO",
      "Security baseline and production deployment",
      "Core informational pages",
    ],
  },
  {
    name: "Advanced",
    tagline: "Sell",
    price: "85,000",
    duration: "6-10 weeks",
    bestFor: "Product sellers who need orders, payments, and inventory.",
    warranty: "60-day post-launch defect warranty",
    features: [
      "Everything in Basic, with custom design",
      "Up to 10 pages and 100 products",
      "Cart, checkout, customer accounts, and orders",
      "One payment gateway and one shipping provider",
      "Single-location inventory and basic sales reports",
      "Full content management and daily backups",
    ],
  },
  {
    name: "Premium",
    tagline: "Scale",
    price: "2,50,000",
    duration: "12-20+ weeks",
    bestFor: "Growing firms connecting commerce, CRM, and operations.",
    warranty: "90-day post-launch defect warranty",
    features: [
      "Everything in Advanced, with a custom design system",
      "Up to 20 pages and 500 products",
      "Scoped custom CRM, customer segmentation, and automation",
      "Multi-location inventory and advanced order workflows",
      "Custom analytics dashboards and access roles",
      "Up to 2 scoped external API integrations",
    ],
  },
];

const carePlans = [
  { name: "Essential Care", price: "2,500", detail: "Monitoring, backups, patches, and 2 minor edits." },
  { name: "Commerce Care", price: "7,500", detail: "Store and checkout checks, maintenance, and 4 minor edits." },
  { name: "Business Care", price: "18,000+", detail: "Enhanced monitoring and up to 6 scoped support hours." },
];

const addOns = [
  ["Additional website page", "₹2,500"],
  ["Additional product upload", "₹100 / product"],
  ["Blog or CMS module", "₹8,000"],
  ["WhatsApp Business API integration", "₹12,000"],
  ["Appointment booking", "₹18,000"],
  ["Custom analytics dashboard", "₹25,000"],
  ["Additional CRM workflow module", "₹35,000"],
  ["Additional payment gateway", "₹12,000"],
  ["Additional inventory location", "₹20,000"],
  ["ERP or accounting integration", "Custom quote"],
];

function PriceCard({ plan, index }) {
  return (
    <article
      className={`pricing-card wow fadeInUp${index === 1 ? " pricing-card-featured" : ""}`}
      data-wow-delay={`${index * 0.12}s`}
    >
      <div className="pricing-card-heading">
        <div>
          <span className="pricing-tier">{plan.tagline}</span>
          <h2>{plan.name}</h2>
        </div>
        <span className="pricing-card-number">0{index + 1}</span>
      </div>
      <p className="pricing-best-for">{plan.bestFor}</p>
      <div className="pricing-cost">
        <span className="pricing-currency">₹</span>
        <span>{plan.price}</span>
        <sup>+</sup>
      </div>
      <p className="pricing-cost-note">Starting one-time build price</p>
      <div className="pricing-meta">
        <span>Typical duration</span>
        <strong>{plan.duration}</strong>
      </div>
      <Link className="pricing-cta" to={`/contact?plan=${encodeURIComponent(plan.name)}`}>Discuss this package <span aria-hidden="true">↗</span></Link>
      <div className="pricing-features-heading">Package includes</div>
      <ul className="pricing-feature-list">
        {plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
      </ul>
      <p className="pricing-warranty">{plan.warranty}</p>
    </article>
  );
}

export default function PricingPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Pricing | Bakalives";
    const wow = new WOW({ mobile: true, live: false });
    wow.init();
    return () => {
      wow.stop();
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="pricing-page">
      <section className="pricing-intro wow fadeInUp">
        <span className="pricing-eyebrow">CLEAR SCOPE. PRACTICAL PRICING.</span>
        <h1>Choose the right starting point for your business.</h1>
        <p>From your first professional website to a connected digital business platform, every project is scoped around your goals.</p>
        <p className="pricing-disclaimer">Starting prices exclude applicable taxes and third-party fees.</p>
      </section>

      <section className="pricing-plans" aria-label="Website service packages">
        {plans.map((plan, index) => <PriceCard key={plan.name} plan={plan} index={index} />)}
      </section>

      <section className="pricing-security wow fadeInUp">
        <div className="pricing-security-heading">
          <span className="pricing-eyebrow">BUILT INTO EVERY PROJECT</span>
          <h2>Security is part of the baseline.</h2>
        </div>
        <p>HTTPS/TLS, security headers, input validation, dependency and secret checks, and appropriate access controls are considered at every tier. Commerce plans also include payment signature and webhook checks. No package can guarantee a site is completely secure.</p>
      </section>

      <section className="pricing-care">
        <div className="pricing-section-heading wow fadeInUp">
          <span className="pricing-eyebrow">AFTER LAUNCH</span>
          <h2>Ongoing care, priced separately.</h2>
          <p>One-time deployment is included in the build price. Choose an optional monthly care plan for monitoring, maintenance, and minor edits.</p>
        </div>
        <div className="care-grid">
          {carePlans.map((plan, index) => (
            <article className="care-card wow fadeInUp" data-wow-delay={`${index * 0.12}s`} key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.detail}</p>
              <div><span>From</span><strong>₹{plan.price}</strong><small>/ month</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-infrastructure wow fadeInUp">
        <div>
          <span className="pricing-eyebrow">PAID TO THE HOSTING PROVIDER</span>
          <h2>Estimated monthly infrastructure</h2>
          <p>Indicative budgets only. Final costs depend on architecture, traffic, and vendor pricing.</p>
        </div>
        <div className="infrastructure-ranges">
          <div><span>Basic</span><strong>₹0-₹1,500</strong></div>
          <div><span>Advanced</span><strong>₹3,000-₹10,000</strong></div>
          <div><span>Premium</span><strong>₹12,000-₹40,000+</strong></div>
        </div>
      </section>

      <section className="pricing-addons">
        <div className="pricing-section-heading wow fadeInUp">
          <span className="pricing-eyebrow">GROW AS YOU NEED</span>
          <h2>Optional add-on services.</h2>
          <p>Starting prices for common add-ons. Complex integrations are quoted after technical discovery.</p>
        </div>
        <ul className="addon-list wow fadeInUp">
          {addOns.map(([name, price]) => <li key={name}><span>{name}</span><strong>{price}</strong></li>)}
        </ul>
        <p className="pricing-footnote">Third-party messaging, transaction, storage, and API costs are billed separately. Final scope, delivery milestones, warranties, and client responsibilities are confirmed in a written proposal.</p>
      </section>
    </main>
  );
}
