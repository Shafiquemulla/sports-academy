import './CricketInspiration.css';

// Dedicated Indian Cricket Inspiration Collection
// Using properly licensed royalty-free sports & cricket imagery
const cricketThemes = [
  {
    id: 1,
    title: "Indian Cricket Stadium Heritage",
    subtitle: "Where dreams of 1.4 billion cricket lovers take flight",
    src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop",
    alt: "Iconic cricket stadium under floodlights in India",
    tag: "Stadium",
  },
  {
    id: 2,
    title: "Young Indian Cricketers in the Nets",
    subtitle: "Hours of relentless sweat on Mumbai maidaans building champions",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&h=600&fit=crop",
    alt: "Young Indian cricket player practicing batting in the academy nets",
    tag: "Grassroots",
  },
  {
    id: 3,
    title: "The Craft of Classical Batting",
    subtitle: "High elbow, balanced head, and crisp timing through the covers",
    src: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=600&fit=crop",
    alt: "Cricket batter playing an immaculate drive shot with full follow-through",
    tag: "Batting",
  },
  {
    id: 4,
    title: "Fast & Spin Bowling Excellence",
    subtitle: "Pounding the pitch with pace, seam, and deception",
    src: "https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?w=800&h=600&fit=crop",
    alt: "Cricket bowler in full delivery stride on turf pitch",
    tag: "Bowling",
  },
  {
    id: 5,
    title: "Sharp Reflexes in the Field",
    subtitle: "Catches win matches — commitment to every diving stop",
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop",
    alt: "Cricket fielding drills and high catching practice",
    tag: "Fielding",
  },
  {
    id: 6,
    title: "The Willow & The Leather",
    subtitle: "English willow bats, pristine leather balls, and pure cricket dedication",
    src: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&h=600&fit=crop",
    alt: "Cricket equipment, bat, leather ball, pads and gloves",
    tag: "Equipment",
  },
];

const cricketWisdom = [
  {
    quote: "Cricket is not just a game in India; it is an emotion that unites every gully, street, and stadium.",
    author: "Indian Cricket Ethos",
  },
  {
    quote: "Technique gives you consistency, fitness gives you longevity, but heart gives you champions.",
    author: "Cricket Academy Philosophy",
  },
  {
    quote: "In Mumbai, cricket is born on the maidaans of Shivaji Park, Azad, Cross, and Bandra.",
    author: "Mumbai Cricket Tradition",
  },
];

function CricketInspiration() {
  return (
    <section id="cricket-inspiration" className="inspiration-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">🇮🇳 Cricket Inspiration</span>
          <h2 className="section-title">
            The Soul &amp; Spirit of <span>Indian Cricket</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            From the bustling cricket maidaans of Mumbai to world-class stadiums, cricket in India is a religion of discipline, passion, and character. We instill this championship ethos into every student at Sports Academy Bandra.
          </p>
          <div className="inspiration-legal-notice">
            📌 <em>Inspiration Tribute:</em> This section celebrates the heritage and passion of cricket in India. Sports Academy Bandra is an independent private coaching academy and does not claim official representation or endorsement by national team players.
          </div>
        </div>

        {/* Cricket Image Grid */}
        <div className="inspiration-grid" role="list" aria-label="Indian Cricket Inspiration Showcase">
          {cricketThemes.map((item, idx) => (
            <div
              key={item.id}
              className={`inspiration-card ${idx === 0 ? 'hero-item' : ''} animate-on-scroll`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
              role="listitem"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="inspiration-img"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=600&fit=crop";
                }}
              />
              <div className="inspiration-overlay" aria-hidden="true">
                <span className="inspiration-tag">{item.tag}</span>
                <h3 className="inspiration-img-title">{item.title}</h3>
                <p className="inspiration-img-caption">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cricket Quotes Row */}
        <div className="quotes-row" role="list" aria-label="Cricket Quotes">
          {cricketWisdom.map((item) => (
            <blockquote key={item.author} className="quote-card animate-on-scroll" role="listitem">
              <p className="quote-text">&ldquo;{item.quote}&rdquo;</p>
              <cite className="quote-author">— {item.author}</cite>
            </blockquote>
          ))}
        </div>

        {/* Academy Cricket Pillars */}
        <div className="cricket-pillars-card animate-on-scroll">
          <div className="pillars-content">
            <span className="pillars-badge">Our Coaching Foundation</span>
            <h3 className="pillars-title">The Four Pillars of Bandra Cricket Mastery</h3>
            <p className="pillars-desc">
              Every practice session at our Bandra facility is engineered around the four pillars of modern cricket mastery:
            </p>
            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">🏏</div>
                <h4>Flawless Technique</h4>
                <p>Correct grip, head still at point of impact, and balanced foot movement against all bowling styles.</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">⚡</div>
                <h4>Cricket Fitness</h4>
                <p>Explosive sprint speed between wickets, high shoulder durability, and core rotational power.</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">🧠</div>
                <h4>Tactical Acumen</h4>
                <p>Match awareness, reading pitch conditions, field setting, and performing under tournament pressure.</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">🤝</div>
                <h4>Sportsmanship</h4>
                <p>Playing the game with fierce competitive fire combined with respect for cricket traditions.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CricketInspiration;
