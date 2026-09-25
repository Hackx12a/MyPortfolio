import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    // Wait for DOM to be ready
    const setup = () => {
      const elements = document.querySelectorAll(".reveal");

      if (elements.length === 0) return;

      // Fallback for browsers without IntersectionObserver
      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("revealed"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              // Don't unobserve — allow re-trigger on scroll back
              // observer.unobserve(entry.target);
            } else {
              // Optional: remove class when out of view for re-trigger
              // entry.target.classList.remove("revealed");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -80px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // Small delay to ensure all sections are rendered
    const timer = setTimeout(setup, 100);
    return () => clearTimeout(timer);
  }, []);
};