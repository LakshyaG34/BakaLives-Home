import { Link } from "react-router-dom";

const templates = [
  { label: "Ecommerce", slug: "ecommerce", thumbnail: "/images/template-thumbnail/template-ecommerce.webp" },
  { label: "CRM", slug: "cms", thumbnail: "/images/template-thumbnail/template-crm.png" },
  { label: "CMS", slug: "blogging", thumbnail: "/images/template-thumbnail/templates-cms.png" },
  { label: "Site templates", slug: "site-templates", thumbnail: "/images/template-thumbnail/template-site.png" },
  { label: "Marketing", slug: "marketing", thumbnail: "/images/template-thumbnail/template-marketing.webp" },
];

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
  const handleNavigate = (event) => {
    onNavigate?.();
    event.currentTarget.blur();
  };

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
              <Link to="/templates" className="menu-view-all" onClick={handleNavigate}>View all templates <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="template-grid">
              {templates.map((template, index) => (
                <Link className={`template-card template-card-${index + 1}`} to={`/templates/${template.slug}`} key={template.slug} onClick={handleNavigate}>
                  <span className="template-preview" aria-hidden="true">
                    <img src={template.thumbnail} alt="" />
                  </span>
                  <span className="template-caption">
                    <span>{template.label}</span><span className="template-arrow" aria-hidden="true">↗</span>
                  </span>
                </Link>
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
                  <a href="#services" onClick={handleNavigate}>
                    <span className="service-number">0{index + 1}</span>
                    <span>{service}</span>
                    <span className="service-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="nav-item"><Link className="nav-link" to="/pricing" onClick={handleNavigate}>Pricing</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about" onClick={handleNavigate}>About</Link></li>
        <li className="nav-item"><a className="nav-link" href="#work" onClick={handleNavigate}>Previous works</a></li>
        <li className="nav-item nav-contact"><Link className="contact-link" to="/contact" onClick={handleNavigate}>Contact us <span aria-hidden="true">↗</span></Link></li>
      </ul>
    </nav>
  );
}
