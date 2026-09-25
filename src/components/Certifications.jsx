import React from "react";
import { portfolioData } from "../data/portfolioData";

const Certifications = () => {
  const { certifications } = portfolioData;
  return (
    <section id="certifications" className="section">
      <div className="section-head">
        <span className="section-label">06</span>
        <h2 className="section-title">{certifications.heading}</h2>
        <p className="section-sub">{certifications.subheading}</p>
      </div>

      <div className="cert-grid">
        {certifications.items.map((cert, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-icon">
              <i className={cert.icon}></i>
            </div>
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-date">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
