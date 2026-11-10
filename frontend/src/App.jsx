import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footers/Footer.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const PricingPage = lazy(() => import("./pages/pricing/index.jsx"));
const ContactPage = lazy(() => import("./pages/contact/index.jsx"));
const AboutPage = lazy(() => import("./pages/about/index.jsx"));
const TemplateCategoryPage = lazy(() => import("./pages/templates/index.jsx"));

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <span id="top" className="site-top-anchor" aria-hidden="true" />
      <Header />
      <Suspense fallback={<div className="route-loading" role="status" aria-label="Loading page"><span className="route-loading-spinner" /></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/templates" element={<TemplateCategoryPage />} />
          <Route path="/templates/:category" element={<TemplateCategoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
