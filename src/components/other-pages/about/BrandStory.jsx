import { motion } from "framer-motion";

const steps = [
  { index: "01", title: "Discover", text: "We align on your goals, audience, current setup, and the details that will shape a useful solution." },
  { index: "02", title: "Design", text: "We map the experience and visual direction so the store feels clear, distinctive, and easy to navigate." },
  { index: "03", title: "Develop", text: "We build, integrate, and refine the experience, keeping quality and agreed requirements in view." },
  { index: "04", title: "Launch & support", text: "We prepare for launch, hand over the essentials, and can continue supporting improvements over time." },
];

export default function BrandStory() {
  return (
    <section className="about-story">
      <div className="about-container">
        <div className="about-story-heading">
          <span className="about-eyebrow">FROM FIRST IDEA TO LAUNCH</span>
          <h2>A considered process. A store ready to grow.</h2>
          <p>Clear milestones and open communication make good work easier to deliver.</p>
        </div>
        <div className="about-story-grid">
          {steps.map((step) => (
          <motion.article className="about-story-card" key={step.index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.48, delay: (steps.indexOf(step) * 0.1) }}>
              <span className="about-story-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="about-story-rule" />
          </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

