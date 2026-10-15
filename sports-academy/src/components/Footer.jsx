import { useState, useEffect } from 'react';
import './Footer.css';

const currentYear = new Date().getFullYear();

// 100% Cricket Navigation Links
const cricketFooterLinks = {
  "Cricket Programs": [
    { label: 'Beginner Cricket Training', href: '#programs' },
    { label: 'Advanced Cricket Training', href: '#programs' },
    { label: 'Batting Training Clinic', href: '#programs' },
    { label: 'Fast Bowling Academy', href: '#programs' },
    { label: 'Spin Bowling Mastery', href: '#programs' },
    { label: 'Wicket-Keeping Drills', href: '#programs' },
    { label: 'Fielding Drills & Agility', href: '#programs' },
    { label: 'Kids Cricket Coaching', href: '#programs' },
  ],
  "Cricket Academy": [
    { label: 'About Our Academy', href: '#about' },
    { label: 'BCCI Certified Coaches', href: '#coaches' },
    { label: 'Cricket Inspiration', href: '#cricket-inspiration' },
    { label: 'Turf Pitch & Nets Gallery', href: '#gallery' },
    { label: 'Training Video Library', href: '#videos' },
    { label: 'Cricket Track Record', href: '#achievements' },
    { label: 'Trainee Testimonials', href: '#testimonials' },
  ],
  "Admissions": [
    { label: 'Bandra, Mumbai Grounds', href: '#contact' },
    { label: 'Book a Net Trial', href: '#contact' },
    { label: 'Inquire About Batches', href: '#contact' },
    { label: 'Private Coaching Inquiries', href: '#contact' },
    { label: 'Join as Cricket Coach', href: '#contact' },
  ],
};

function handleNavClick(e, href) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer" role="contentinfo">

      {/* ── Top CTA Bar ── */}
      <div className="footer-cta-bar">
        <div className="container footer-cta-content">
          <div>
            <h3 className="footer-cta-title">Ready to Take Your Cricket to the Next Level?</h3>
            <p className="footer-cta-desc">
              Join Sports Academy Bandra — Mumbai's dedicated cricket coaching academy. Limited batch slots for turf net sessions.
            </p>
          </div>
          <a
            href="#contact"
            className="footer-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            🏏 Enroll in Cricket Academy
          </a>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, '#home')}>
                <span className="footer-logo-icon" aria-hidden="true">🏏</span>
                <div>
                  <span className="footer-logo-name">Cricket Academy Bandra</span>
                  <span className="footer-logo-sub">MUMBAI • EST. 2014</span>
                </div>
              </a>
              <p className="footer-tagline">
                Premier dedicated cricket coaching academy located in Bandra, Mumbai. Shaping future champions through disciplined batting, bowling, wicket-keeping, and fielding excellence.
              </p>

              {/* Cricket Keywords */}
              <div className="footer-keywords" aria-label="Cricket specialties offered">
                {[
                  'Cricket Coaching Mumbai',
                  'Bandra Turf Nets',
                  'BCCI Coaches',
                  'Batting Masterclass',
                  'Fast Bowling',
                  'Spin Bowling',
                  'Wicket-Keeping',
                  'Kids Cricket',
                ].map((kw) => (
                  <span key={kw} className="footer-keyword">{kw}</span>
                ))}
              </div>

              {/* Social Icons */}
              <div className="footer-social">
                {[
                  { icon: '📘', label: 'Facebook', href: '#' },
                  { icon: '📸', label: 'Instagram', href: '#' },
                  { icon: '🐦', label: 'Twitter/X', href: '#' },
                  { icon: '▶️', label: 'YouTube', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="footer-social-link"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Columns */}
            {Object.entries(cricketFooterLinks).map(([heading, links]) => (
              <div key={heading} className="footer-col">
                <h4 className="footer-col-title">{heading}</h4>
                <ul className="footer-col-links" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="footer-link"
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="footer-copyright">
            &copy; {currentYear} Sports Academy Bandra — Dedicated Cricket Academy.
            <span> | Bandra, Mumbai, Maharashtra, India</span>
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Coaching</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="footer-bottom-link">
              Contact Academy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top of page"
        >
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;
