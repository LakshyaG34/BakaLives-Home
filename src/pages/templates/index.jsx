import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const categories = {
  ecommerce: { title: "Ecommerce templates", description: "Storefront concepts for brands ready to sell online." },
  cms: { title: "CMS templates", description: "Flexible website starting points for content-managed experiences." },
  blogging: { title: "Blogging templates", description: "Editorial layouts for publishing ideas, stories, and updates." },
  "site-templates": { title: "Site templates", description: "Versatile website designs for businesses and growing teams." },
  marketing: { title: "Marketing templates", description: "Landing page concepts made to present offers and drive action." },
};

const ecommerceTemplates = [
  {
    name: "The Whole Truth",
    description: "Clean-label food storefront",
    preview: "https://thewholetruthfoods.com/",
    thumbnail: "/images/template-thumbnail/template-thewholetruth.png",
  },
  {
    name: "Graza",
    description: "Olive oil and pantry essentials",
    preview: "https://www.graza.co/",
    thumbnail: "/images/template-thumbnail/template-graza.png",
  },
  {
    name: "Minimalist",
    description: "Skincare and beauty storefront",
    preview: "https://beminimalist.co/",
    thumbnail: "/images/template-thumbnail/template-minimalist.png",
  },
];

const examples = ["Template 01", "Template 02", "Template 03"];

export default function TemplateCategoryPage() {
  const { category } = useParams();
  const current = categories[category];
  const title = current?.title || "Website templates";
  const description = current?.description || "Explore our collection of website template concepts.";

  useEffect(() => {
    document.title = `${title} | Bakalives`;
  }, [title]);

  return (
    <main className="templates-page">
      <section className="templates-page-heading">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="templates-eyebrow">BAKALIVES TEMPLATE LIBRARY</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </motion.div>
      </section>
      <section className="templates-page-content" aria-label={`${title} list`}>
        {category === "ecommerce" ? (
          <div className="templates-page-grid">
            {ecommerceTemplates.map((template, index) => (
              <motion.article className="templates-example templates-example-card" key={template.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.1 }}>
                <a className="templates-example-image-link" href={template.preview} target="_blank" rel="noreferrer" aria-label={`Open ${template.name} live preview`}>
                  <img className="templates-example-image" src={template.thumbnail} alt={`${template.name} ecommerce storefront preview`} />
                </a>
                <div className="templates-example-details">
                  <h2>{template.name}</h2>
                  <p>{template.description}</p>
                  <div className="templates-example-rating" aria-label="Placeholder rating: 5 out of 5 stars">
                    <span aria-hidden="true">★★★★★</span><span className="templates-rating-value">5.0</span>
                  </div>
                  <a className="templates-live-preview" href={template.preview} target="_blank" rel="noreferrer">Live Preview <span aria-hidden="true">↗</span></a>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="templates-page-grid">
            {examples.map((name, index) => (
              <motion.article className={`templates-example templates-example-${index + 1}`} key={name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.1 }}>
                <div className="templates-example-preview" aria-hidden="true">
                  <span className="example-browser"><i /><i /><i /></span>
                  <span className="example-hero-line" />
                  <span className="example-copy-line" />
                  <span className="example-art" />
                  <span className="example-bottom-line" />
                </div>
                <div className="templates-example-caption"><h2>{name}</h2><span>Coming soon</span></div>
              </motion.article>
            ))}
          </div>
        )}
        <div className="templates-category-links">
          <span>Browse categories</span>
          {Object.entries(categories).map(([slug, item]) => <Link key={slug} to={`/templates/${slug}`}>{item.title.replace(" templates", "")}</Link>)}
        </div>
      </section>
    </main>
  );
}
