import { useState, useEffect, useRef, useCallback } from 'react';
import { galleryImages, galleryCategories } from '../data/gallery';
import './Gallery.css';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef(null);
  const lightboxRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  // Open lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Navigate lightbox
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  }, [filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Photo Gallery</span>
          <h2 className="section-title">
            Life at <span>Sports Academy Bandra</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A glimpse into our training sessions, facilities, matches, and the
            champions we are building every day in Bandra, Mumbai.
          </p>
        </div>

        {/* Category Filter */}
        <div className="gallery-filter animate-on-scroll" role="tablist" aria-label="Filter gallery by category">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid" role="list" aria-label="Gallery images">
          {filtered.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item animate-on-scroll"
              role="listitem"
            >
              <button
                className="gallery-img-btn"
                onClick={() => openLightbox(index)}
                aria-label={`View ${image.title} in full size`}
              >
                <img
                  src={image.thumb}
                  alt={image.alt}
                  className="gallery-img"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=450&fit=crop";
                  }}
                />
                <div className="gallery-overlay" aria-hidden="true">
                  <div className="gallery-overlay-icon">🔍</div>
                  <div className="gallery-overlay-info">
                    <span className="gallery-img-title">{image.title}</span>
                    <span className="gallery-img-category">{image.category}</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="gallery-empty">
            <p>No images in this category yet. Check back soon!</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          ref={lightboxRef}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          {/* Close button */}
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            className="lightbox-nav lightbox-prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div className="lightbox-content">
            <img
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="lightbox-img"
              decoding="async"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1280&h=850&fit=crop";
              }}
            />
            <div className="lightbox-caption">
              <strong>{filtered[lightboxIndex]?.title}</strong>
              <span>{filtered[lightboxIndex]?.category}</span>
              <span className="lightbox-count">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            className="lightbox-nav lightbox-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
