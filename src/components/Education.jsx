import React from "react";
import { portfolioData } from "../data/portfolioData";

const Education = () => {
  const { education } = portfolioData;
  return (
    <section id="education" className="section">
      <div className="section-head">
        <span className="section-label">05</span>
        <h2 className="section-title">{education.heading}</h2>
        <p className="section-sub">{education.subheading}</p>
      </div>

      <div className="edu-grid">
        {education.items.map((item, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-icon">
              <i className={item.icon}></i>
            </div>
            <div>
              <h3 className="edu-school">{item.school}</h3>
              <p className="edu-degree">{item.degree}</p>
              <span className="edu-year">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
