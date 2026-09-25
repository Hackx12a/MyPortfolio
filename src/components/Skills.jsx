import React from "react";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <span className="section-label">02</span>
        <h2 className="section-title">{skills.heading}</h2>
        <p className="section-sub">{skills.subheading}</p>
      </div>

      <div className="skills-grid">
        {skills.groups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-card-head">
              <div className="skill-icon">
                <i className={group.icon}></i>
              </div>
              <h3>{group.title}</h3>
            </div>

            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span
                    className="skill-item-icon"
                    style={{ color: item.color }}
                  >
                    <i className={item.icon}></i>
                  </span>
                  <span className="skill-item-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;