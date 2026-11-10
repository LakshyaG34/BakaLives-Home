import { motion } from "framer-motion";

const values = [
  {
    title: "Thoughtful technology",
    text: "We choose tools and features for the problems they solve, keeping the experience useful and maintainable.",
    icon: <><path d="M12 3 4.5 6v5.5c0 4.5 3.2 7.7 7.5 9.5 4.3-1.8 7.5-5 7.5-9.5V6L12 3Z"/><path d="m8.5 11.5 2.2 2.2 4.8-4.8"/></>,
  },
  {
    title: "Built around your goals",
    text: "Each project starts with your customers, your team, and the outcomes your business needs to reach.",
    icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 15v-3M12 15V8M16 15v-5M8 8h.01"/></>,
  },
  {
    title: "Ready for what's next",
    text: "We create a solid foundation for your store, with room for new ideas, services, and future growth.",
    icon: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83"/><circle cx="12" cy="12" r="4"/></>,
  },
];

export default function Values() {
  return (
    <section className="about-values" aria-labelledby="about-values-title">
      <div className="about-container about-values-grid">
        {values.map((value) => (
          <motion.article className="about-value-card" key={value.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: (values.indexOf(value) * 0.12) }}>
            <span className="about-value-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{value.icon}</svg>
            </span>
            <h2 id={value.title === values[0].title ? "about-values-title" : undefined}>{value.title}</h2>
            <p>{value.text}</p>
          </motion.article>
        ))}
      </div>
      <div className="about-values-divider about-container" />
    </section>
  );
}

