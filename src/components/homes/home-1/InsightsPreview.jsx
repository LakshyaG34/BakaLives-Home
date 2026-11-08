import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const notes = [
  { label: "01 / PLAN", title: "Start with the right website scope.", copy: "Know when a focused informational site is enough, and when commerce features are worth adding." },
  { label: "02 / PROTECT", title: "Make security part of the launch plan.", copy: "Plan access, backups, payment checks, and recovery before your store goes live." },
  { label: "03 / GROW", title: "Add complexity when the business needs it.", copy: "Scope CRM, analytics, integrations, and automation around clear workflows." },
];

export default function InsightsPreview() {
  return (
    <section className="insights-preview" aria-labelledby="insights-title">
      <motion.div
        className="home-section-heading centered-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="home-section-eyebrow">THOUGHTFUL BY DESIGN</span>
        <h2 id="insights-title">A few things worth planning early.</h2>
        <p>Small decisions made up front can make the build and launch much smoother.</p>
      </motion.div>
      <div className="insights-grid">
        {notes.map((note, index) => (
          <motion.article
            className="insight-card"
            key={note.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <span className="insight-label">{note.label}</span>
            <div className="insight-graphic" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
            <h3>{note.title}</h3>
            <p>{note.copy}</p>
            <Link to="/pricing">Explore packages <span aria-hidden="true">↗</span></Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
