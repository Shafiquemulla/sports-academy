import { useEffect, useRef, useState } from 'react';
import './Achievements.css';

// Cricket-Specific Statistics (Editable Demo Data)
const cricketStats = [
  { id: 1, number: 500, suffix: '+', label: 'Cricketers Trained', icon: '🏏', description: 'Across all youth & senior batches' },
  { id: 2, number: 52, suffix: '+', label: 'Tournament Wins', icon: '🏆', description: 'Mumbai district & club trophies' },
  { id: 3, number: 1250, suffix: '+', label: 'Matches Played', icon: '⚔️', description: 'Competitive T20 & 2-day fixtures' },
  { id: 4, number: 45, suffix: '+', label: 'Players Developed', icon: '🌟', description: 'Selected for district/state trials' },
  { id: 5, number: 10, suffix: '+', label: 'Years of Cricket Excellence', icon: '⭐', description: 'At Bandra training grounds' },
  { id: 6, number: 120, suffix: '+', label: 'Centuries & 5-Wkt Hauls', icon: '🎯', description: 'Scored by academy trainees' },
];

const cricketMilestones = [
  { year: '2014', event: 'Cricket Academy Founded in Bandra with 2 turf nets', icon: '🏏' },
  { year: '2016', event: 'First BCCI Level 3 certified coaching staff appointed', icon: '📜' },
  { year: '2018', event: 'Installed automated bowling machines & floodlights', icon: '⚡' },
  { year: '2020', event: 'High-speed video biomechanics lab established', icon: '🎥' },
  { year: '2022', event: 'Crowned Mumbai Inter-Academy U-19 Champions', icon: '🏆' },
  { year: '2024', event: 'Surpassed 500+ registered cricketers trained', icon: '⭐' },
];

function useCountUp(target, isVisible, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isVisible, duration]);

  return count;
}

function StatItem({ stat, isVisible }) {
  const count = useCountUp(stat.number, isVisible);

  return (
    <div className="stat-item">
      <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
      <div className="stat-number" aria-label={`${stat.number}${stat.suffix} ${stat.label}`}>
        {count}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-desc">{stat.description}</div>
    </div>
  );
}

function Achievements() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="achievements-bg" aria-hidden="true">
        <div className="achievements-bg-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Cricket Track Record</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Cricket Numbers That <span>Define Our Legacy</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            A decade of relentless cricket training on Bandra turf wickets. Our statistics reflect our dedication to nurturing disciplined, high-performing Mumbai cricketers.
          </p>
          <p className="stats-demo-note">
            * All figures represent cumulative training and match statistics across academy cohorts. Contact administration for official scorebook records.
          </p>
        </div>

        {/* Cricket Stats Grid */}
        <div className="stats-grid" role="list" aria-label="Cricket Academy Statistics">
          {cricketStats.map((stat) => (
            <div key={stat.id} className="animate-on-scroll" role="listitem">
              <StatItem stat={stat} isVisible={isVisible} />
            </div>
          ))}
        </div>

        {/* Cricket Milestones */}
        <div className="milestones animate-on-scroll">
          <h3 className="milestones-title">Decade of Cricket Excellence in Bandra</h3>
          <div className="milestone-list" role="list">
            {cricketMilestones.map((m) => (
              <div key={m.year} className="milestone-item" role="listitem">
                <div className="milestone-year">{m.year}</div>
                <div className="milestone-dot" aria-hidden="true"></div>
                <div className="milestone-event">
                  <span className="milestone-icon" aria-hidden="true">{m.icon}</span>
                  <span>{m.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
