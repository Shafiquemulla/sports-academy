import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.35}px`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Hero section">
      {/* Background cricket lighting glow */}
      <div className="hero-overlay" aria-hidden="true">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content container">
        <div className="hero-badge animate-fade-in">
          <span className="badge-dot" aria-hidden="true"></span>
          <span>🏏 Premier Cricket Academy in Bandra, Mumbai</span>
        </div>

        <h1 className="hero-title animate-fade-in-up">
          Train Hard.{' '}
          <span className="hero-title-accent">Play Smart.</span>
          <br />
          Become a{' '}
          <span className="hero-title-gradient">Champion.</span>
        </h1>

        <p className="hero-subtitle animate-fade-in-up">
          Professional Cricket Training Academy in Bandra, Mumbai.
          <br className="hero-br" />
          Dedicated turf pitches, high-speed bowling machines, BCCI-certified coaches, and biomechanical video analysis.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons animate-fade-in-up">
          <button
            className="hero-btn-primary"
            onClick={() => scrollToSection('contact')}
            aria-label="Join Cricket Academy"
          >
            <span className="btn-icon" aria-hidden="true">🏏</span>
            Join the Academy
          </button>
          <button
            className="hero-btn-secondary"
            onClick={() => scrollToSection('programs')}
            aria-label="Explore Cricket Programs"
          >
            Explore Cricket Programs
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>

        {/* Cricket Stats Bar */}
        <div className="hero-stats animate-fade-in-up" role="list" aria-label="Cricket Academy Statistics">
          <div className="hero-stat" role="listitem">
            <span className="hero-stat-number">500<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-label">Cricketers Trained</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true"></div>
          <div className="hero-stat" role="listitem">
            <span className="hero-stat-number">20<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-label">BCCI Coaches</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true"></div>
          <div className="hero-stat" role="listitem">
            <span className="hero-stat-number">10<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-label">Years in Bandra</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true"></div>
          <div className="hero-stat" role="listitem">
            <span className="hero-stat-number">50<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-label">Tournament Wins</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down to About Cricket Academy section"
      >
        <div className="scroll-mouse" aria-hidden="true">
          <div className="scroll-wheel"></div>
        </div>
        <span>Explore Academy</span>
      </button>
    </section>
  );
}

export default Hero;
