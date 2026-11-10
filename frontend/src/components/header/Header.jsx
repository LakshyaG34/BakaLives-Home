import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand-mark"
          to="/"
          aria-label="Bakalives home"
          onClick={() => {
            setMenuOpen(false);
            if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="brand-symbol" aria-hidden="true">b.</span>
          <span>bakalives</span>
        </Link>

        <button
          className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <Nav isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
