import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-wrapper ${loaded ? "img-loaded" : "img-loading"} ${className}`}>
      {!loaded && (
        <div className="img-skeleton">
          <div className="img-skeleton-shimmer"></div>
          <div className="img-skeleton-pulse"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithLoader;