import React from "react";
import { portfolioData } from "../data/portfolioData";

const References = () => {
  const { references } = portfolioData;
  return (
    <section id="references" className="section">
      <div className="section-head">
        <span className="section-label">07</span>
        <h2 className="section-title">{references.heading}</h2>
        <p className="section-sub">{references.subheading}</p>
      </div>

      <div className="ref-grid">
        {references.items.map((ref, i) => (
          <div className="ref-card" key={i}>
            <div className="ref-avatar">
              <i className={ref.icon}></i>
            </div>
            <h3 className="ref-name">{ref.name}</h3>
            <p className="ref-role">{ref.role}</p>
            <p className="ref-phone">
              <i className="fas fa-phone-alt"></i> {ref.phone}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
