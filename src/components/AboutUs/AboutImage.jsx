function AboutImage({ src, alt, className = "", priority = false }) {
  return (
    <div className={`about-image ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}

export default AboutImage;
