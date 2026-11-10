import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="about-intro about-container">
      <motion.div className="about-spin-mark" aria-label="Bakalives digital studio" initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
        <svg className="about-spin-ring" viewBox="0 0 200 200" aria-hidden="true">
          <defs><path id="about-wordmark-circle" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" /></defs>
          <text><textPath href="#about-wordmark-circle">BAKALIVES • DIGITAL STUDIO • </textPath></text>
        </svg>
        <span className="about-spin-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="m17 15-9 9 9 9M31 15l9 9-9 9M28 10l-8 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.div>
      <motion.div className="about-intro-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
        <span className="about-eyebrow">A DIGITAL PARTNER FOR WHAT'S NEXT</span>
        <h2>Good technology should make business feel simpler.</h2>
        <p>We design and build Shopify experiences around real business goals: clearer journeys, easier store management, and a foundation ready to grow. From the first conversation through launch, we keep the work collaborative, considered, and clear.</p>
      </motion.div>
    </section>
  );
}
