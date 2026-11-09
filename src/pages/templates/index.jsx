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
        <div className="templates-category-links">
          <span>Browse categories</span>
          {Object.entries(categories).map(([slug, item]) => <Link key={slug} to={`/templates/${slug}`}>{item.title.replace(" templates", "")}</Link>)}
        </div>
      </section>
    </main>
  );
}
