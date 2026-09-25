import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className = "", onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-wrapper ${loaded ? "img-loaded" : "img-loading"} ${className}`}>
      {!loaded && <div className="img-skeleton"></div>}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageWithLoader;