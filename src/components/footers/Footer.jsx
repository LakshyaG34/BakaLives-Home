import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const serviceLinks = [
  ["Basic Shopify setup", "#services"],
  ["Advanced store design", "#services"],
  ["Premium growth", "#services"],
  ["Theme development", "#services"],
  ["Store optimization", "#services"],
];

const studioLinks = [
  ["Templates", "#templates"],
  ["Previous works", "#work"],
  ["Our process", "#services"],
  ["About us", "/about"],
  ["Pricing", "/pricing"],
  ["Contact us", "/contact"],
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [signupMessage, setSignupMessage] = useState("");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 575);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSection = (section) => {
    if (!isMobile) return;
    setOpenSections((current) => ({ ...current, [section]: !current[section] }));
  };

  const isSectionOpen = (section) => !isMobile || Boolean(openSections[section]);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSignupMessage("This form is ready to connect to your newsletter service.");
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-main">
        <div className="site-footer-grid">
          <div className="footer-about">
            <Link
              className="footer-brand"
              to="/"
              aria-label="Bakalives home"
              onClick={() => {
                if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="brand-symbol" aria-hidden="true">b.</span>
              <span>bakalives</span>
            </Link>
            <p>Thoughtful Shopify stores for ambitious brands ready for what’s next.</p>
            <Link className="footer-email-link" to="/pricing">
              Explore service levels <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="footer-column">
            <button className="footer-column-heading" type="button" aria-expanded={isSectionOpen("services")} onClick={() => toggleSection("services")}>
              Services <span aria-hidden="true" />
            </button>
            <ul className={`footer-link-list${isSectionOpen("services") ? " is-open" : ""}`}>
              {serviceLinks.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            </ul>
          </div>

          <div className="footer-column">
            <button className="footer-column-heading" type="button" aria-expanded={isSectionOpen("studio")} onClick={() => toggleSection("studio")}>
              Explore <span aria-hidden="true" />
            </button>
            <ul className={`footer-link-list${isSectionOpen("studio") ? " is-open" : ""}`}>
              {studioLinks.map(([label, href]) => <li key={label}>{href.startsWith("/") ? <Link to={href}>{label}</Link> : <a href={href}>{label}</a>}</li>)}
            </ul>
          </div>

          <div className="footer-newsletter">
            <span className="footer-eyebrow">THE OCCASIONAL GOOD EMAIL</span>
            <h2>Ideas for your next big move.</h2>
            <p>Shopify notes, useful ideas, and studio updates. No noise.</p>
            <form className="footer-subscribe-form" onSubmit={handleSubscribe}>
              <label className="visually-hidden" htmlFor="footer-email">Email address</label>
              <input id="footer-email" type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe to studio updates">↗</button>
            </form>
            <p className="footer-signup-message" aria-live="polite">{signupMessage}</p>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {new Date().getFullYear()} Bakalives Studio. All rights reserved.</p>
        <p>Shopify experiences, made with intention.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
