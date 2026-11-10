import { motion } from "framer-motion";

const principles = [
  { number: "01", title: "Start with the business", text: "We learn how your business works, who it serves, and what needs to change before shaping a solution." },
  { number: "02", title: "Make the complex clear", text: "We turn requirements into thoughtful design and practical features that are easy for customers and teams to use." },
  { number: "03", title: "Build for the long run", text: "We consider performance, security, and maintainability throughout delivery, then help you move confidently into launch." },
];

export default function About() {
  return (
    <section className="about-approach">
      <div className="about-container about-approach-grid">
        <motion.div className="about-approach-image" role="img" aria-label="Planning a digital commerce project" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} />
        <motion.div className="about-approach-content" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
          <span className="about-eyebrow">OUR APPROACH</span>
          <h2>Built around your people, your platform, and your next step.</h2>
          <p>Every store has its own constraints and opportunities. Our job is to understand them, then bring design and technology together in a way that supports the business behind the screen.</p>
          <div className="about-principles">
            {principles.map((item) => (
              <article className="about-principle" key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

