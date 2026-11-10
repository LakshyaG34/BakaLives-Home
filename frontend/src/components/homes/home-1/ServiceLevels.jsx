import { Link } from "react-router-dom";

const serviceLevels = [
  {
    title: "Basic",
    image: "/images/services/basic-shopify-setup.jpg",
    alt: "Laptop displaying a minimal Shopify homewares store on a bright studio desk",
    delay: "0s",
  },
  {
    title: "Advanced",
    image: "/images/services/advanced-shopify-design.jpg",
    alt: "Laptop displaying a custom-designed ecommerce storefront alongside color swatches",
    delay: "0.15s",
  },
  {
    title: "Premium",
    image: "/images/services/professional-shopify-growth.jpg",
    alt: "Ecommerce analytics dashboard on a laptop and phone beside a packed order",
    delay: "0.3s",
  },
];

export default function ServiceLevels() {
  return (
    <section className="service-levels" id="services" aria-label="Shopify service levels">
      <div className="service-levels-grid">
        {serviceLevels.map((service, index) => (
          <article
            className={`service-level-card wow fadeInUp service-level-card-${index + 1}`}
            data-wow-delay={service.delay}
            key={service.title}
          >
            <img className="service-level-image" src={service.image} alt={service.alt} loading="lazy" decoding="async" />
            <Link className="service-level-link" to="/pricing">
              <span className="service-level-title">{service.title}</span>
              <span className="service-level-divider" aria-hidden="true" />
              <span className="service-level-more">More Details</span>
              <span className="service-level-arrow" aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
