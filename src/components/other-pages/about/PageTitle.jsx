import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageTitle() {
  return (
    <section className="about-page-title">
      <div className="about-title-image" role="img" aria-label="Modern digital workspace with website designs" />
      <motion.div className="about-title-content" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <span className="about-eyebrow">ABOUT BAKALIVES</span>
        <h1>WE BUILD DIGITAL EXPERIENCES THAT HELP BUSINESSES MOVE FORWARD.</h1>
        <Link className="about-pill-link" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </motion.div>
    </section>
  );
}
