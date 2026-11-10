import { useEffect } from "react";
import WOW from "wow.js";
import PageTitle from "../../components/other-pages/about/PageTitle.jsx";
import Hero from "../../components/other-pages/about/Hero.jsx";
import About from "../../components/other-pages/about/About.jsx";
import BrandStory from "../../components/other-pages/about/BrandStory.jsx";
import Values from "../../components/other-pages/about/Values.jsx";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Bakalives";
    const wow = new WOW({ mobile: true, live: false });
    wow.init();
    return () => wow.stop();
  }, []);

  return (
    <main className="about-page">
      <PageTitle />
      <Hero />
      <Values />
      <About />
      <BrandStory />
    </main>
  );
}
