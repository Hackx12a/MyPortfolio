import React from "react";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { about } = portfolioData;
  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="section-label">01</span>
        <h2 className="section-title">{about.heading}</h2>
        <p className="section-sub">A little about who I am and what I do</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-intro">{about.intro}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-para">{p}</p>
          ))}
        </div>

        <div className="about-facts">
          <h3 className="facts-title">Quick Facts</h3>
          <ul>
            {about.funFacts.map((fact, i) => (
              <li key={i}>
                <i className={fact.icon}></i>
                <span>{fact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
