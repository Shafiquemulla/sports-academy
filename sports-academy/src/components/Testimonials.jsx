import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            What Our <span>Students Say</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Real stories from our students and parents about their experience at
            Sports Academy Bandra.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', marginTop: '0.5rem' }}>
            * Testimonials are for demonstration. Please replace with real student feedback.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="testimonial-featured animate-on-scroll">
          <div className="testimonial-quote-icon" aria-hidden="true">"</div>

          <div className="testimonial-content">
            <StarRating rating={active.rating} />
            <blockquote className="testimonial-text">
              &ldquo;{active.text}&rdquo;
            </blockquote>
            <div className="testimonial-author">
              <img
                src={active.image}
                alt={`Photo of cricket trainee ${active.name}`}
                className="testimonial-avatar"
                loading="lazy"
                decoding="async"
                width="70"
                height="70"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(active.name)}&background=111827&color=f59e0b`;
                }}
              />
              <div className="testimonial-author-info">
                <strong className="author-name">{active.name}</strong>
                <span className="author-role">{active.role}</span>
                <span className="author-joined">{active.joined}</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonial Cards (small) */}
        <div className="testimonials-grid" role="list">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              role="listitem"
              aria-label={`View testimonial from ${t.name}`}
              aria-pressed={index === activeIndex}
            >
              <div className="tcard-header">
                <img
                  src={t.image}
                  alt={`Student ${t.name}`}
                  className="tcard-avatar"
                  loading="lazy"
                  decoding="async"
                  width="50"
                  height="50"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=111827&color=f59e0b&size=60`;
                  }}
                />
                <div>
                  <strong className="tcard-name">{t.name}</strong>
                  <span className="tcard-role">{t.role}</span>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="tcard-text">{t.text.slice(0, 100)}…</p>
            </button>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

