import { Link } from "react-router-dom";

const templates = ["Template 1", "Template 2", "Template 3", "Template 4"];

const services = [
  "Shopify store setup",
  "Store design & redesign",
  "Theme development",
  "Custom Shopify development",
  "Store migration",
  "App integration",
  "Conversion rate optimization",
  "SEO & store optimization",
  "Ongoing support",
];

export default function Nav({ isOpen, onNavigate }) {
  return (
    <nav className={`main-navigation${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
      <ul className="nav-list">
        <li className="nav-item has-mega-menu">
          <a className="nav-link" href="#templates">
            Templates <span className="nav-chevron" aria-hidden="true" />
          </a>
          <div className="mega-menu template-menu">
            <div className="mega-menu-heading">
              <div>
                <span className="eyebrow">EXPLORE THE COLLECTION</span>
                <h2>Made to move your brand forward.</h2>
              </div>
              <a href="#templates" className="menu-view-all">View all templates <span aria-hidden="true">↗</span></a>
            </div>
            <div className="template-grid">
              {templates.map((template, index) => (
                <a className={`template-card template-card-${index + 1}`} href="#templates" key={template} onClick={onNavigate}>
                  <span className="template-preview" aria-hidden="true">
                    <span className="preview-topline" />
                    <span className="preview-heading" />
                    <span className="preview-copy" />
                    <span className="preview-art" />
                  </span>
                  <span className="template-caption">
                    <span>{template}</span><span className="template-arrow" aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </li>

        <li className="nav-item has-mega-menu">
          <a className="nav-link" href="#services">
            Services <span className="nav-chevron" aria-hidden="true" />
          </a>
          <div className="mega-menu services-menu">
            <div className="services-intro">
              <span className="eyebrow">WHAT WE DO</span>
              <h2>Shopify, from first idea to next stage.</h2>
              <p>Thoughtful commerce experiences, built around the way your business works.</p>
            </div>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={service}>
                  <a href="#services" onClick={onNavigate}>
                    <span className="service-number">0{index + 1}</span>
                    <span>{service}</span>
                    <span className="service-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="nav-item"><Link className="nav-link" to="/pricing" onClick={onNavigate}>Pricing</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about" onClick={onNavigate}>About</Link></li>
        <li className="nav-item"><a className="nav-link" href="#work" onClick={onNavigate}>Previous works</a></li>
        <li className="nav-item nav-contact"><Link className="contact-link" to="/contact" onClick={onNavigate}>Contact us <span aria-hidden="true">↗</span></Link></li>
      </ul>
    </nav>
  );
}
