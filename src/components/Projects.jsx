import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;
  const [lightbox, setLightbox] = useState(null);

  const imageMap = {
    "erp.png": require("../assets/projects/erp.png"),
    "ecommerce-1.png": require("../assets/projects/ecommerce-1.png"),
    "ecommerce-2.png": require("../assets/projects/ecommerce-2.png"),
    "ecommerce-3.png": require("../assets/projects/ecommerce-3.png"),
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (lightbox) {
        const imgs = projects.items[lightbox.projectIdx].images;
        if (e.key === "ArrowRight") {
          setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + 1) % imgs.length });
        }
        if (e.key === "ArrowLeft") {
          setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx - 1 + imgs.length) % imgs.length });
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, projects.items]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-label">03</span>
        <h2 className="section-title">{projects.heading}</h2>
        <p className="section-sub">{projects.subheading}</p>
      </div>

      <div className="projects-grid">
        {projects.items.map((project, idx) => (
          <article className="project-card" key={idx}>
            <div className="project-card-glow"></div>

            <header className="project-head">
              <div className="project-icon-wrap">
                <i className={project.icon}></i>
              </div>

              <div className="project-heading">
                <div className="project-meta">
                  <span className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
              </div>
            </header>

            <p className="project-tagline">{project.tagline}</p>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-chip">{tech}</span>
              ))}
            </div>

            <div className="project-highlights">
              <h4 className="highlights-title">Key Features</h4>
              <ul>
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="check-icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="project-gallery">
                <h4 className="highlights-title">Screenshots</h4>
                <div className={`gallery-grid gallery-${Math.min(project.images.length, 3)}`}>
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      className="gallery-thumb"
                      onClick={() => setLightbox({ projectIdx: idx, imgIdx: i })}
                      aria-label={`View ${img.caption}`}
                    >
                      <img src={imageMap[img.src]} alt={img.caption} loading="lazy" />
                      <div className="thumb-overlay">
                        <span className="thumb-expand">
                          <i className="fas fa-expand"></i>
                        </span>
                      </div>
                      <span className="thumb-caption">{img.caption}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>

          {projects.items[lightbox.projectIdx].images.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  const imgs = projects.items[lightbox.projectIdx].images;
                  setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx - 1 + imgs.length) % imgs.length });
                }}
                aria-label="Previous"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="lightbox-nav lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  const imgs = projects.items[lightbox.projectIdx].images;
                  setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + 1) % imgs.length });
                }}
                aria-label="Next"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageMap[projects.items[lightbox.projectIdx].images[lightbox.imgIdx].src]}
              alt={projects.items[lightbox.projectIdx].images[lightbox.imgIdx].caption}
            />
            <div className="lightbox-footer">
              <p className="lightbox-caption">
                {projects.items[lightbox.projectIdx].images[lightbox.imgIdx].caption}
              </p>
              <span className="lightbox-counter">
                {lightbox.imgIdx + 1} / {projects.items[lightbox.projectIdx].images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;