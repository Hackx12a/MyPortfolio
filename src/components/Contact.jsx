import React from "react";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { hero } = portfolioData;
  return (
    <section id="contact" className="section">
      <div className="section-head">
        <span className="section-label">08</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">Let us build something together</p>
      </div>

      <div className="contact-wrap">
        <p className="contact-blurb">
          I am always open to new opportunities, freelance work, or just a good
          conversation about software and IT. Feel free to reach out through any
          of the channels below.
        </p>

        <div className="contact-grid">
          <a href={`mailto:${hero.email}`} className="contact-card">
            <i className="fas fa-envelope"></i>
            <span className="contact-label">Email</span>
            <span className="contact-value">{hero.email}</span>
          </a>
          <a href={`tel:${hero.phone.replace(/\s/g, "")}`} className="contact-card">
            <i className="fas fa-phone-alt"></i>
            <span className="contact-label">Phone</span>
            <span className="contact-value">{hero.phone}</span>
          </a>
          <a
            href={hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <i className="fab fa-github"></i>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">{hero.github}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
