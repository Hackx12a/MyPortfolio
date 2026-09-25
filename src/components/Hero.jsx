import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import profilePic from "../assets/profile.png";
import brushStroke from "../assets/brush-stroke-final.png";

const Hero = () => {
  const { hero } = portfolioData;
  const [brushLoaded, setBrushLoaded] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-glow"></div>
        <div className="hero-grid-lines"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="greeting-dot"></span>
            Hello, my name is
          </p>
          <h1 className="hero-name">{hero.name}</h1>
          <h2 className="hero-title">{hero.title}</h2>
          <p className="hero-tagline">{hero.tagline}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              <i className="fas fa-folder-open"></i> View My Work
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
              <i className="fas fa-paper-plane"></i> Get In Touch
            </button>
          </div>

          <div className="hero-meta">
            <span><i className="fas fa-map-marker-alt"></i> {hero.location}</span>
            <span><i className="fas fa-circle-check"></i> Available for work</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-stage">
            <div className="avatar-glow"></div>

            {/* Brush stroke â€” fades in when loaded */}
            <div className={`hero-media ${brushLoaded ? "loaded" : "loading"}`}>
              <img
                src={brushStroke}
                alt=""
                className="avatar-brush"
                aria-hidden="true"
                onLoad={() => setBrushLoaded(true)}
              />
            </div>

            <div className="avatar-ring"></div>

            {/* Profile photo â€” fades in when loaded */}
            <div className={`hero-media ${photoLoaded ? "loaded" : "loading"}`}>
              <img
                src={profilePic}
                alt={hero.name}
                className="hero-avatar-img"
                onLoad={() => setPhotoLoaded(true)}
              />
            </div>

            <div className="avatar-shadow"></div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;