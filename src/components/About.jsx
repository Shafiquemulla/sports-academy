import './About.css';

const cricketPillars = [
  {
    icon: '🏏',
    title: 'Turf & Astro-Turf Nets',
    description:
      'Practice on dedicated natural red-soil turf wickets and true-bounce all-weather astro-turf pitches prepared to standard match specifications.',
  },
  {
    icon: '⚡',
    title: 'Automated Bowling Machines',
    description:
      'Face precision line, length, and variable pace up to 140+ kmph. Drill inswing, outswing, and spin variations repeatedly to build muscle memory.',
  },
  {
    icon: '🎥',
    title: 'High-Speed Video Biomechanics',
    description:
      'Frame-by-frame video capture to analyze batting bat-swing paths, front-foot brace, bowling delivery strides, and release points with our coaches.',
  },
  {
    icon: '🧤',
    title: 'Specialist Position Clinics',
    description:
      'Dedicated coaching batches for wicket-keeping glovework, pace bowling speed generation, spin revs, and slip cordon reflex catching.',
  },
  {
    icon: '⚔️',
    title: 'Mumbai Match Simulation',
    description:
      'Weekly intra-academy weekend red and white-ball matches under real tournament conditions, preparing students for MCA and Mumbai club leagues.',
  },
  {
    icon: '🧠',
    title: 'Tactical Mindset & Fitness',
    description:
      'Mental toughness training for high-pressure situations, situational awareness, and cricket-specific athletic conditioning.',
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">🏏 About Our Cricket Academy</span>
          <h2 className="section-title">
            Developing Cricket Champions in <span>Bandra, Mumbai</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Established in Bandra, Mumbai — the beating heart of Indian cricket culture. We provide structured, professional, and passion-driven cricket training for grassroots beginners through to elite tournament players.
          </p>
        </div>

        {/* Main Content: Text + Image */}
        <div className="about-main">
          {/* Left: Image */}
          <div className="about-image-col animate-on-scroll">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=600&fit=crop"
                alt="Turf cricket nets and batting masterclass training at Sports Academy Bandra in Mumbai"
                className="about-main-image"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?w=800&h=600&fit=crop";
                }}
              />
              <div className="about-image-badge" aria-label="10+ years of cricket training excellence">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years of Cricket<br />Excellence</span>
              </div>
              <div className="about-image-accent" aria-hidden="true"></div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="about-text-col animate-on-scroll">
            <span className="section-badge">Our Heritage</span>
            <h3 className="about-heading">
              From Bandra Turf Nets to Mumbai League Dominance
            </h3>
            <p className="about-para">
              Founded in 2014, Sports Academy Bandra was born out of a relentless passion for cricket. Bandra and the Mumbai maidaans have gifted India some of its greatest cricket legends — and our academy carries forward that legacy of discipline, technique, and courage.
            </p>
            <p className="about-para">
              We focus 100% on cricket. Every net session, drill, fitness circuit, and match scenario is designed specifically for cricketers. We do not compromise our focus: whether you are an 8-year-old learning the forward defense or an 18-year-old fast bowler aiming to break into district squads, our coaching faculty provides the exact technical guidance you need.
            </p>
            <p className="about-para">
              Equipped with high-performance bowling machines, certified BCCI mentors, floodlit training nets, and video analysis labs, we provide Mumbai's aspiring cricketers with an unrivaled environment to thrive.
            </p>

            {/* CTA Row */}
            <div className="about-cta">
              <button
                className="btn btn-primary"
                onClick={() => {
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🏏 View Cricket Programs
              </button>
              <button
                className="btn btn-outline about-btn-outline"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Net Trial →
              </button>
            </div>
          </div>
        </div>

        {/* Cricket Facility Feature Cards */}
        <div className="about-features">
          {cricketPillars.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card animate-on-scroll"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
