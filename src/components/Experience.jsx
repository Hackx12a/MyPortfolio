import React from "react";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  const { experience } = portfolioData;
  return (
    <section id="experience" className="section reveal">
      <div className="section-head">
        <span className="section-label">04</span>
        <h2 className="section-title">{experience.heading}</h2>
        <p className="section-sub">{experience.subheading}</p>
      </div>

      <div className="timeline">
        {experience.items.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-company">
                    {item.company}, {item.location}
                  </p>
                </div>
                <span className="timeline-date">{item.date}</span>
              </div>

              <p className="timeline-desc">{item.description}</p>

              <ul className="timeline-achievements">
                {item.achievements.map((a, i) => (
                  <li key={i}>
                    <i className="fas fa-angle-right"></i>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;