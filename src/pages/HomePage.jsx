import { useEffect } from "react";
import WOW from "wow.js";
import Hero from "../components/homes/home-1/Hero.jsx";
import ServiceLevels from "../components/homes/home-1/ServiceLevels.jsx";
import ShowcaseSlider from "../components/homes/home-1/ShowcaseSlider.jsx";
import ServicesOverview from "../components/homes/home-1/ServicesOverview.jsx";
import StudioIntro from "../components/homes/home-1/StudioIntro.jsx";
import ReasonsToChoose from "../components/homes/home-1/ReasonsToChoose.jsx";
import InsightsPreview from "../components/homes/home-1/InsightsPreview.jsx";

export default function HomePage() {
  useEffect(() => {
    const wow = new WOW({ mobile: true, live: false });
    wow.init();
    return () => wow.stop();
  }, []);

  return (
    <main>
      <Hero />
      <ServiceLevels />
      <ServicesOverview />
      <StudioIntro />
      <ReasonsToChoose />
      <ShowcaseSlider />
      <InsightsPreview />
    </main>
  );
}
