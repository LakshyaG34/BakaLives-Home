import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Build your foundation",
    copy: "A responsive, branded website with the core pages, content tools, and inquiry forms your business needs to get online.",
    icon: "layout",
  },
  {
    number: "02",
    title: "Make every sale smoother",
    copy: "Product catalogs, checkout, payments, orders, and inventory brought together in a clear online store.",
    icon: "commerce",
  },
  {
    number: "03",
    title: "Keep improving after launch",
    copy: "Security checks, backups, maintenance, and scoped support to help your website stay dependable as you grow.",
    icon: "care",
  },
];

function ServiceIcon({ type }) {
  const paths = {
    layout: <><rect x="4" y="5" width="40" height="34" rx="2" /><path d="M4 13h40M11 20h12M11 26h26M11 32h18" /></>,
    commerce: <><path d="M8 18h32l-3 24H11L8 18Z" /><path d="M17 18a7 7 0 0 1 14 0M17 27h.01M31 27h.01" /></>,
    care: <><path d="M24 4 40 10v11c0 11-6.8 18-16 23C14.8 39 8 32 8 21V10l16-6Z" /><path d="m17 23 5 5 10-11" /></>,
  };
  return <svg className="overview-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function ServicesOverview() {
  return (
    <section className="services-overview" aria-labelledby="services-overview-title">
      <motion.div
        className="home-section-heading centered-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="home-section-eyebrow">OUR SERVICES</span>
        <h2 id="services-overview-title">Build with clarity. Launch with confidence.</h2>
      </motion.div>
      <div className="services-overview-grid">
        {services.map((service, index) => (
          <motion.article
            className="overview-card"
            key={service.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <span className="overview-number">{service.number}</span>
            <ServiceIcon type={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <a href="#services" className="overview-link">Explore service levels <span aria-hidden="true">↗</span></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
