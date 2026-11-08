import { motion } from "framer-motion";

const reasons = [
  ["A clear scope", "Page counts, product limits, integrations, and exclusions are defined before work begins."],
  ["Security as a baseline", "Every tier includes practical security checks, with operational depth added as needs grow."],
  ["Design shaped around you", "Start with a professional foundation or build a custom storefront and design system."],
  ["Commerce that works together", "Connect product discovery, checkout, payments, orders, and inventory."],
  ["A planned path to launch", "Move through discovery, design, development, testing, staging, production, and handover."],
  ["Care after go-live", "Keep monitoring, backups, patches, and minor edits covered with an optional monthly plan."],
];

export default function ReasonsToChoose() {
  return (
    <section className="reasons-section" aria-labelledby="reasons-title">
      <motion.div
        className="home-section-heading centered-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="home-section-eyebrow">WHY WORK WITH US</span>
        <h2 id="reasons-title">Good work is clear at every step.</h2>
      </motion.div>
      <div className="reasons-grid">
        {reasons.map(([title, copy], index) => (
          <motion.article
            className="reason-card"
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
          >
            <span className="reason-index">0{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="reasons-cta">Ready to plan your build? <a href="/pricing">Compare packages <span aria-hidden="true">↗</span></a></p>
    </section>
  );
}
