import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// TikTok Shop Logos
import logo1 from "../assets/graphicdesign/Copy of LOGO1.png";
import logo2 from "../assets/graphicdesign/Copy of LOGO2.png";
import logo3 from "../assets/graphicdesign/Copy of LOGO4.png";

// Birthday Tarpaulins
import tarp1 from "../assets/graphicdesign/f52a542e-135f-46a1-9e0d-eedf543df205.jpg";
import tarp2 from "../assets/graphicdesign/d65ca918-eb68-473f-b661-817a89f2a5f6.jpg";

// Dashboard Guidelines Walkthrough
import guide1 from "../assets/graphicdesign/guide1.png";
import guide2 from "../assets/graphicdesign/guide2.png";
import guide3 from "../assets/graphicdesign/guide3.png";
import guide4 from "../assets/graphicdesign/guide4.png";
import guide5 from "../assets/graphicdesign/guide5.png";
import guide6 from "../assets/graphicdesign/guide6.png";
import guide7 from "../assets/graphicdesign/guide7.png";
import guide8 from "../assets/graphicdesign/guide8.png";
import guide9 from "../assets/graphicdesign/guide9.png";
import guide10 from "../assets/graphicdesign/guide10.jpg";
import guide11 from "../assets/graphicdesign/guide11.jpg";
import guide12 from "../assets/graphicdesign/guide12.jpg";

const guidelineSteps = [
  { src: guide1, description: "New Flagged Incident. Click close to proceed." },
  { src: guide2, description: "The incident appears in the Flagged Incidents report. Click validate to view." },
  { src: guide3, description: "After validating, review the details to determine whether the report is valid or invalid. Click accept if it is valid." },
  { src: guide4, description: "Accepted reports go to the Accepted Incidents panel. Click view to see details." },
  { src: guide5, description: "View the sender's location and press share location to scan the QR code." },
  { src: guide6, description: "Scan the QR code using your phone." },
  { src: guide7, description: "If you click decline, the report goes to the Decline Incidents panel." },
  { src: guide8, description: "In the Decline panel, click view to see details." },
  { src: guide9, description: "Inside, you can resolve the report if it is solved, or accept." },
  { src: guide10, description: "Clicking resolve sends the report to the Resolve Incidents panel." },
  { src: guide11, description: "In the Resolve panel, the report is now marked as solved." },
  { src: guide12, description: "Mobile Dashboard with four buttons. Tap any button to capture an incident." },
];

const Design = () => {
  const [lightbox, setLightbox] = useState(null);
  const [guideIndex, setGuideIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [guideLoading, setGuideLoading] = useState(true);

  // Preload all guideline images once the modal opens
  useEffect(() => {
    if (!showGuide) return;
    guidelineSteps.forEach((step) => {
      const img = new Image();
      img.src = step.src;
    });
  }, [showGuide]);

  // Reset loading when index changes
  useEffect(() => {
    setGuideLoading(true);
  }, [guideIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setShowGuide(false);
      }
      if (showGuide) {
        if (e.key === "ArrowRight" && !guideLoading) setGuideIndex((i) => (i + 1) % guidelineSteps.length);
        if (e.key === "ArrowLeft" && !guideLoading) setGuideIndex((i) => (i - 1 + guidelineSteps.length) % guidelineSteps.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showGuide, guideLoading]);

  useEffect(() => {
    document.body.style.overflow = lightbox || showGuide ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox, showGuide]);

  const openLightbox = (src, alt) => setLightbox({ src, alt });

  const goNext = () => {
    if (guideLoading) return;
    setGuideIndex((i) => (i + 1) % guidelineSteps.length);
  };

  const goPrev = () => {
    if (guideLoading) return;
    setGuideIndex((i) => (i - 1 + guidelineSteps.length) % guidelineSteps.length);
  };

  const lightboxContent = lightbox ? (
    <div className="lightbox" onClick={() => setLightbox(null)}>
      <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
        <i className="fas fa-times"></i>
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox-img" src={lightbox.src} alt={lightbox.alt} />
        <p className="lightbox-caption">{lightbox.alt}</p>
      </div>
    </div>
  ) : null;

  return (
    <section id="design" className="section reveal">
      <div className="section-head">
        <span className="section-label">09</span>
        <h2 className="section-title">Frontend & Design Work</h2>
        <p className="section-sub">UI/UX design, graphic design, and frontend work I have shipped</p>
      </div>

      {/* Dashboard Guidelines */}
      <div className="design-block">
        <div className="design-block-head">
          <div className="design-block-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <div>
            <h3 className="design-block-title">Dashboard Guidelines UI</h3>
            <p className="design-block-desc">
              Designed and built an interactive onboarding guide for a Fire Incident Dashboard.
              This walks users through the full incident lifecycle, from flagging, validating,
              accepting, declining, to resolving reports, with step by step visuals and a mobile flow.
            </p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => { setShowGuide(true); setGuideIndex(0); setGuideLoading(true); }}>
          <i className="fas fa-play"></i> Open Guidelines Walkthrough
        </button>
      </div>

      {/* TikTok Shop Logos */}
      <div className="design-block">
        <div className="design-block-head">
          <div className="design-block-icon">
            <i className="fas fa-palette"></i>
          </div>
          <div>
            <h3 className="design-block-title">TikTok Shop Logo Designs</h3>
            <p className="design-block-desc">
              Custom logo designs created in Adobe Illustrator for our TikTok Shop in 2024.
              Focused on bold typography and clean branding.
            </p>
          </div>
        </div>
        <div className="design-gallery">
          {[
            { src: logo1, alt: "TikTok Shop Logo Design 1" },
            { src: logo2, alt: "TikTok Shop Logo Design 2" },
            { src: logo3, alt: "TikTok Shop Logo Design 3" },
          ].map((img, i) => (
            <button key={i} className="design-thumb" onClick={() => openLightbox(img.src, img.alt)}>
              <img src={img.src} alt={img.alt} />
              <div className="design-thumb-overlay">
                <i className="fas fa-expand"></i>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Birthday Tarpaulins */}
      <div className="design-block">
        <div className="design-block-head">
          <div className="design-block-icon">
            <i className="fas fa-birthday-cake"></i>
          </div>
          <div>
            <h3 className="design-block-title">Birthday Tarpaulin Designs</h3>
            <p className="design-block-desc">
              Custom birthday tarpaulin layouts designed with balanced typography, photo placement,
              and print ready sizing.
            </p>
          </div>
        </div>
        <div className="design-gallery">
          {[
            { src: tarp1, alt: "Birthday Tarpaulin Design 1" },
            { src: tarp2, alt: "Birthday Tarpaulin Design 2" },
          ].map((img, i) => (
            <button key={i} className="design-thumb" onClick={() => openLightbox(img.src, img.alt)}>
              <img src={img.src} alt={img.alt} />
              <div className="design-thumb-overlay">
                <i className="fas fa-expand"></i>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Guidelines Modal */}
      {showGuide && createPortal(
        <div className="guide-modal" onClick={() => setShowGuide(false)}>
          <button className="lightbox-close" onClick={() => setShowGuide(false)} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>

          <button
            className={`lightbox-nav lightbox-prev ${guideLoading ? "guide-nav-disabled" : ""}`}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
            disabled={guideLoading}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            className={`lightbox-nav lightbox-next ${guideLoading ? "guide-nav-disabled" : ""}`}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
            disabled={guideLoading}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="guide-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="guide-header">
              <span className="guide-step-badge">Step {guideIndex + 1} of {guidelineSteps.length}</span>
              <h3 className="guide-title">Dashboard Guidelines</h3>
            </div>

            <div className="guide-image-wrap">
              {guideLoading && (
                <div className="guide-loader">
                  <div className="guide-spinner"></div>
                  <span className="guide-loading-text">Loading image...</span>
                </div>
              )}
              <img
                key={guideIndex}
                className={`guide-image ${guideLoading ? "guide-image-hidden" : "guide-image-visible"}`}
                src={guidelineSteps[guideIndex].src}
                alt={`Step ${guideIndex + 1}`}
                onLoad={() => setGuideLoading(false)}
                onError={() => setGuideLoading(false)}
              />
            </div>

            <p className="guide-desc">{guidelineSteps[guideIndex].description}</p>
          </div>
        </div>,
        document.body
      )}

      {createPortal(lightboxContent, document.body)}
    </section>
  );
};

export default Design;