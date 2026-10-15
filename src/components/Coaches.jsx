import { useRef } from 'react';
import { coaches } from '../data/coaches';
import './Coaches.css';

function Coaches() {
  const sectionRef = useRef(null);

  return (
    <section id="coaches" className="coaches-section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Cricket Coaching Faculty</span>
          <h2 className="section-title">
            BCCI-Certified <span>Cricket Mentors</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Our faculty brings elite Ranji Trophy and first-class cricket experience, modern biomechanical
            insights, and a proven track record of nurturing champions in Bandra, Mumbai.
          </p>
          <p className="coaches-demo-note">
            * Coach profiles shown below are demo profiles for curriculum presentation. Contact academy office for current season roster and private coaching slots.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="coaches-grid" role="list">
          {coaches.map((coach, index) => (
            <div
              key={coach.id}
              className="coach-card animate-on-scroll"
              style={{ transitionDelay: `${index * 0.08}s` }}
              role="listitem"
            >
              {/* Coach Image */}
              <div className="coach-image-wrap">
                <img
                  src={coach.image}
                  alt={`${coach.name} - ${coach.role} at Sports Academy Bandra in Mumbai`}
                  className="coach-image"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(coach.name)}&background=0f172a&color=10b981&size=200`;
                  }}
                />
                <div className="coach-overlay" aria-hidden="true">
                  <div className="coach-overlay-content">
                    <p className="coach-bio-overlay">{coach.bio}</p>
                    <div className="coach-certs">
                      {coach.certifications.map((cert) => (
                        <span key={cert} className="cert-tag">{cert}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coach Info */}
              <div className="coach-info">
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-role">{coach.role}</p>

                <div className="coach-meta">
                  <div className="coach-meta-item">
                    <span className="coach-meta-icon" aria-hidden="true">🏏</span>
                    <span>{coach.specialization}</span>
                  </div>
                  <div className="coach-meta-item">
                    <span className="coach-meta-icon" aria-hidden="true">⏱️</span>
                    <span>{coach.experience} Cricket Coaching</span>
                  </div>
                </div>

                {/* Visible Certifications for mobile & desktop */}
                <div className="coach-certs-visible" aria-label="Certifications">
                  {coach.certifications.map((cert) => (
                    <span key={cert} className="cert-tag">{cert}</span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="coach-achievements">
                  {coach.achievements.map((ach) => (
                    <span key={ach} className="coach-achievement">✓ {ach}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Coaching Staff Banner */}
        <div className="coaches-join-banner animate-on-scroll">
          <div className="join-banner-content">
            <div>
              <h3 className="join-banner-title">Certified Cricket Coach in Mumbai?</h3>
              <p className="join-banner-desc">
                We are actively looking for passionate BCCI Level 1/2 coaches, former Ranji players, and cricket analysts to join our Bandra academy faculty.
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🏏 Apply to Join Faculty →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Coaches;
