import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = portfolioData.navLinks.map((l) => document.getElementById(l.id));
      const fromTop = window.scrollY + 120;
      let current = "home";
      sections.forEach((sec) => {
        if (sec && sec.offsetTop <= fromTop) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => scrollTo("home")}>
          <span className="brand-dot-online"></span>
          <span>Prince Albert Martinez</span>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {portfolioData.navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={active === link.id ? "active" : ""}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
