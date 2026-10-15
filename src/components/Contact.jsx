import { useState, useRef } from 'react';
import './Contact.css';

// 100% Cricket Programs for the dropdown
const cricketPrograms = [
  'Beginner Cricket Training',
  'Advanced Cricket Training',
  'Batting Training',
  'Bowling Training',
  'Fast Bowling',
  'Spin Bowling',
  'Wicket-Keeping',
  'Fielding Training',
  'Cricket Fitness',
  'Kids Cricket Coaching',
  'Private 1-on-1 Cricket Coaching',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  sport: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (form.phone && !/^[0-9+\-\s()]{7,15}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!form.sport) errors.sport = 'Please select a cricket program.';
  if (!form.message.trim()) errors.message = 'Please provide details about your cricket background or goals.';
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">🏏 Admissions &amp; Inquiries</span>
          <h2 className="section-title">
            Start Your <span>Cricket Journey Today</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Join Sports Academy Bandra and take your cricket to the next level. Book a free net trial session or inquire about batch timings with our cricket coaching staff.
          </p>
        </div>

        <div className="contact-main">

          {/* ── Contact Info ── */}
          <div className="contact-info animate-on-scroll">
            <h3 className="contact-info-title">Academy Information</h3>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">📍</div>
                <div>
                  <strong>Cricket Academy Location</strong>
                  <p>Bandra, Mumbai, Maharashtra, India</p>
                  <span className="contact-note">
                    Full ground address &amp; net allocation sent upon registration
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">📞</div>
                <div>
                  <strong>Admissions Desk</strong>
                  <p>
                    <a href="tel:+919820000000" className="contact-link">
                      +91 98200 00000
                    </a>
                  </p>
                  <span className="contact-note">Tuesday – Sunday: 6:00 AM – 7:30 PM (Mondays Closed)</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">📧</div>
                <div>
                  <strong>Email Inquiries</strong>
                  <p>
                    <a href="mailto:cricket@sportsacademybandra.com" className="contact-link">
                      cricket@sportsacademybandra.com
                    </a>
                  </p>
                  <span className="contact-note">Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">⏰</div>
                <div>
                  <strong>Cricket Net Sessions</strong>
                  <p>Morning Batches: 6:00 AM – 9:00 AM</p>
                  <p>Evening Batches: 4:00 PM – 7:30 PM</p>
                  <p>Weekend Matches &amp; Trials: 6:30 AM – 11:30 AM</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Enquiry Box */}
            <a
              href="https://wa.me/919820000000?text=Hi%20Sports%20Academy%20Bandra%2C%20I%20would%20like%20to%20inquire%20about%20Cricket%20Coaching%20batches%20and%20net%20trials"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-box"
              aria-label="Direct WhatsApp Enquiry with Cricket Academy"
            >
              <div className="wa-box-left">
                <span className="wa-box-icon" aria-hidden="true">💬</span>
                <div>
                  <strong className="wa-box-title">Instant WhatsApp Enquiry</strong>
                  <p className="wa-box-desc">Chat directly with our head cricket coach &amp; admissions</p>
                </div>
              </div>
              <span className="wa-box-action">Open WhatsApp →</span>
            </a>

            {/* Social Links */}
            <div className="contact-social">
              <h4>Follow Our Cricket Journey</h4>
              <div className="social-links">
                {[
                  { icon: '📘', label: 'Facebook', href: '#' },
                  { icon: '📸', label: 'Instagram', href: '#' },
                  { icon: '🐦', label: 'Twitter/X', href: '#' },
                  { icon: '▶️', label: 'YouTube', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-link"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Cricket Academy Facility Visual & Location Card */}
            <div className="contact-facility-card" aria-label="Sports Academy Bandra cricket training grounds">
              <div className="facility-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?w=800&h=450&fit=crop"
                  alt="Sports Academy Bandra Turf Cricket Ground & Training Pitch in Bandra, Mumbai"
                  className="facility-img"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop";
                  }}
                />
                <div className="facility-overlay">
                  <span className="facility-badge">🏏 Academy Turf Ground &amp; Practice Nets</span>
                  <p className="facility-address">📍 Bandra, Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="facility-card-footer">
                <a
                  href="https://maps.google.com/?q=Bandra+Mumbai+Maharashtra+Cricket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facility-map-btn"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="contact-form-wrap animate-on-scroll">
            {submitted ? (
              <div className="form-success" role="alert">
                <div className="success-icon" aria-hidden="true">🏏</div>
                <h3>Enrollment Received!</h3>
                <p>
                  Thank you for your interest in Sports Academy Bandra. Our cricket coaching staff will contact you shortly to schedule your trial net session.
                </p>
                <button className="btn btn-primary" onClick={handleReset}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Cricket academy enrollment form"
              >
                <h3 className="form-title">Enroll for Cricket Coaching</h3>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Player / Parent Full Name <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter full name"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="name@example.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+91 98XXX XXXXX"
                    autoComplete="tel"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="form-error" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Cricket Program */}
                <div className="form-group">
                  <label htmlFor="contact-sport" className="form-label">
                    Cricket Program of Interest <span aria-label="required">*</span>
                  </label>
                  <select
                    id="contact-sport"
                    name="sport"
                    value={form.sport}
                    onChange={handleChange}
                    className={`form-input form-select ${errors.sport ? 'error' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.sport ? 'sport-error' : undefined}
                  >
                    <option value="">Select cricket program…</option>
                    {cricketPrograms.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.sport && (
                    <span id="sport-error" className="form-error" role="alert">
                      {errors.sport}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Cricket Background &amp; Goals <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us player's age, whether batting/bowling/wicket-keeping focus, past club/school cricket experience..."
                    rows={4}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={loading}
                  aria-label="Submit cricket enrollment inquiry"
                >
                  {loading ? (
                    <span className="btn-loading">
                      <span className="loading-dot"></span>
                      <span className="loading-dot"></span>
                      <span className="loading-dot"></span>
                      Submitting…
                    </span>
                  ) : (
                    '🏏 Submit Cricket Enrollment Inquiry'
                  )}
                </button>

                <p className="form-privacy">
                  🔒 Your details are secure and only used for cricket academy enrollment communications.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
