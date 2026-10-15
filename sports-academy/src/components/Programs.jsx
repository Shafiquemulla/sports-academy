import { useState, useRef } from 'react';
import { programs, programCategories } from '../data/programs';
import './Programs.css';

function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="programs-section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Cricket Training Programs</span>
          <h2 className="section-title">
            Specialized <span>Cricket Programs</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            From grassroots kids cricket to advanced competitive training — structured curriculum
            delivered by BCCI-certified cricket coaches on dedicated turf wickets in Bandra, Mumbai.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="programs-filter animate-on-scroll" role="tablist" aria-label="Filter cricket programs by category">
          {programCategories.map((cat) => (
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

        {/* Program Cards Grid */}
        <div className="programs-grid" role="list">
          {filtered.map((program, index) => (
            <div
              key={program.id}
              className="program-card animate-on-scroll"
              style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
              role="listitem"
            >
              {/* Top Row: Icon & Badge */}
              <div className="program-card-top">
                <span className="program-icon" aria-hidden="true">{program.icon}</span>
                <span
                  className="program-badge"
                  style={{ background: program.badgeColor, color: '#050505' }}
                >
                  {program.badge}
                </span>
              </div>

              {/* Title & Category */}
              <div className="program-title-wrap">
                <h3 className="program-title">{program.title}</h3>
                <span className="program-category-tag">{program.category}</span>
              </div>

              {/* Description */}
              <p className="program-desc">{program.description}</p>

              {/* Program Meta */}
              <div className="program-meta">
                <div className="meta-item">
                  <span className="meta-icon" aria-hidden="true">⏱️</span>
                  <span>{program.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon" aria-hidden="true">👤</span>
                  <span>{program.age}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon" aria-hidden="true">📅</span>
                  <span>{program.sessions}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="program-features" aria-label={`${program.title} cricket curriculum`}>
                {program.features.map((feature) => (
                  <li key={feature} className="program-feature">
                    <span className="feature-check" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="program-footer">
                <div className="program-price">
                  <span className="price-label">Fee Structure</span>
                  <span className="price-value">{program.price}</span>
                </div>
                <button
                  className="program-enroll-btn"
                  onClick={scrollToContact}
                  aria-label={`Enroll in ${program.title}`}
                >
                  Enroll in Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="programs-cta animate-on-scroll">
          <p>Need advice choosing between batting, pace bowling, or all-round cricket training?</p>
          <button className="btn btn-primary" onClick={scrollToContact}>
            🏏 Consult Our Head Cricket Coach
          </button>
        </div>

      </div>
    </section>
  );
}

export default Programs;
