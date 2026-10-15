import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Inspiration', href: '#cricket-inspiration' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled || menuOpen ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`} role="navigation" aria-label="Main cricket academy navigation">
      <div className="nav-container">
        {/* Cricket Academy Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')} aria-label="Sports Academy Bandra - Cricket Academy Home">
          <span className="logo-icon" aria-hidden="true">🏏</span>
          <div className="logo-text">
            <span className="logo-main">Cricket Academy</span>
            <span className="logo-sub">BANDRA • MUMBAI</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Now Button */}
        <a
          href="#contact"
          className="btn-join"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Join Academy
        </a>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`mobile-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-menu-cta-group">
            <a
              href="#contact"
              className="mobile-join-btn"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              🏏 Join Cricket Academy
            </a>
            <a
              href="https://wa.me/919820000000?text=Hi%20Sports%20Academy%20Bandra%2C%20I%20would%20like%20to%20inquire%20about%20Cricket%20Coaching%20batches%20and%20net%20trials"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp-btn"
              onClick={() => setMenuOpen(false)}
            >
              <span className="whatsapp-icon-svg" aria-hidden="true">💬</span>
              WhatsApp Enquiry
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
