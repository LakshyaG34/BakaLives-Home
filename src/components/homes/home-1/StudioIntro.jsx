import { motion } from "framer-motion";

const studioPillars = [
  { number: "01", title: "Clear scope", copy: "Pages, products, integrations, timelines, and handover are agreed before development begins." },
  { number: "02", title: "Security from day one", copy: "HTTPS, input validation, dependency checks, and appropriate access controls belong in every build." },
  { number: "03", title: "Support beyond launch", copy: "Choose ongoing maintenance for monitoring, backups, patches, and minor edits after go-live." },
];

export default function StudioIntro() {
  return (
    <section className="studio-intro" aria-labelledby="studio-intro-title">
      <motion.div
        className="studio-intro-copy"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="home-section-eyebrow">A WEB PARTNER FOR WHAT’S NEXT</span>
        <h2 id="studio-intro-title">From your first website to a connected digital business.</h2>
        <p>We shape each build around the business behind it: its customers, day-to-day work, and next stage of growth.</p>
      </motion.div>

      <div className="studio-stats" aria-label="Service scope at a glance">
        <div><strong>03</strong><span>clear service tiers</span></div>
        <div><strong>20</strong><span>pages in the Premium base scope</span></div>
        <div><strong>90</strong><span>day maximum defect warranty</span></div>
      </div>

      <div className="studio-pillars">
        {studioPillars.map((pillar, index) => (
          <motion.article
            className="studio-pillar"
            key={pillar.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <span className="pillar-mark" aria-hidden="true">{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
