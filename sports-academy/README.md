# 🏏 Sports Academy Bandra – Website

A professional, modern, fully responsive React website for **Sports Academy Bandra** – a cricket and sports training academy located in Bandra, Mumbai, Maharashtra, India.

---

## 🚀 Quick Start

```bash
# 1. Navigate to the project folder
cd sports-academy

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Deploy to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

---

## 📁 Project Structure

```
sports-academy/
├── public/
│   └── favicon.svg              # Cricket ball favicon
├── src/
│   ├── components/              # All React UI components
│   │   ├── Navbar.jsx           # Sticky navbar with hamburger menu
│   │   ├── Navbar.css
│   │   ├── Hero.jsx             # Full-screen hero section
│   │   ├── Hero.css
│   │   ├── About.jsx            # About the academy
│   │   ├── About.css
│   │   ├── Programs.jsx         # Training programs with filter
│   │   ├── Programs.css
│   │   ├── CricketInspiration.jsx  # Cricket image & quote section
│   │   ├── CricketInspiration.css
│   │   ├── Coaches.jsx          # Coaches cards with hover overlay
│   │   ├── Coaches.css
│   │   ├── Achievements.jsx     # Animated stats & milestones
│   │   ├── Achievements.css
│   │   ├── Gallery.jsx          # Photo gallery with lightbox
│   │   ├── Gallery.css
│   │   ├── Videos.jsx           # Video section with player
│   │   ├── Videos.css
│   │   ├── Testimonials.jsx     # Auto-rotating student reviews
│   │   ├── Testimonials.css
│   │   ├── Contact.jsx          # Contact form with validation
│   │   ├── Contact.css
│   │   ├── Footer.jsx           # Footer with all links
│   │   └── Footer.css
│   ├── data/                    # Configuration data (easy to update)
│   │   ├── programs.js          # Training program cards data
│   │   ├── coaches.js           # Coach profiles data
│   │   ├── gallery.js           # Gallery image URLs & metadata
│   │   ├── videos.js            # Video URLs, thumbnails, metadata
│   │   └── testimonials.js      # Student testimonial data
│   ├── App.jsx                  # Main app – assembles all sections
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global CSS variables & styles
├── index.html                   # HTML with SEO meta tags
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

All colors, spacing, and typography are defined as CSS custom properties in `src/index.css`:

```css
--primary: #0a0f1e        /* Dark navy background */
--accent: #f59e0b         /* Gold/amber (main brand color) */
--secondary: #1e40af      /* Deep blue */
```

To change the brand color, update `--accent` and `--accent-dark` in `src/index.css`.

---

## 📝 How to Customize

### Update Programs
Edit `src/data/programs.js` to add, remove, or modify training programs.

### Update Coaches
Edit `src/data/coaches.js` — replace demo names with real coach information.
Add real coach photos by updating the `image` URLs.

### Update Gallery Photos
Edit `src/data/gallery.js` — replace Unsplash URLs with actual academy photos.

### Update Videos
Edit `src/data/videos.js` — replace placeholder YouTube embed URLs with real video URLs.
Format: `https://www.youtube.com/embed/VIDEO_ID`

### Update Testimonials
Edit `src/data/testimonials.js` — replace demo testimonials with real student feedback.

### Update Contact Info
Edit `src/components/Contact.jsx` — update the address, phone, email, and Google Maps link.

---

## ✨ Features

| Feature | Implementation |
|---|---|
| Sticky Navbar | CSS `position: fixed` + scroll detection |
| Mobile Hamburger Menu | CSS animation + React state |
| Smooth Scrolling | `scrollIntoView({ behavior: 'smooth' })` |
| Active Section Tracking | Scroll position + `offsetTop` |
| Hero Parallax | CSS `background-position` on scroll |
| Animated Stats | Custom `useCountUp` hook with `setInterval` |
| Gallery Lightbox | React state + keyboard navigation |
| Video Player | YouTube embed via `<iframe>` |
| Lazy Loading | `IntersectionObserver` for images |
| Scroll Animations | `IntersectionObserver` + CSS transitions |
| Form Validation | Client-side JS validation with error states |
| Responsive Layout | CSS Grid + Flexbox + media queries |
| SEO | Full meta tags, Open Graph, Schema.org JSON-LD |

---

## 📱 Responsive Breakpoints

- **Desktop**: 1280px max-width container
- **Laptop**: 1024px – 3-column grids
- **Tablet**: 768px – 2-column grids, hamburger nav
- **Mobile**: 480px – single column, compact buttons

---

## 🔧 Tech Stack

- **React 18** – Component-based UI
- **Vite 8** – Fast build tool and dev server
- **CSS3** – Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** – Hooks, IntersectionObserver, etc.
- **No external CSS framework** – Pure custom CSS for full control

---

## ⚠️ Important Notes

1. **Demo Data**: Coaches, testimonials, and statistics are demo/placeholder data. Replace with real information.
2. **Video URLs**: YouTube embed URLs in `src/data/videos.js` are placeholders. Replace with real video IDs.
3. **Images**: All gallery/coach images use Unsplash royalty-free URLs. Replace with actual academy photos.
4. **Contact**: The contact form does not send emails (no backend). Integrate with Formspree, EmailJS, or similar service.
5. **Phone/Address**: No real phone number or exact address is used intentionally.

---

## 📞 Need Help?

To add email functionality to the contact form, use:
- [Formspree](https://formspree.io) – Free tier available, no backend needed
- [EmailJS](https://www.emailjs.com) – Send emails directly from React

---

*Sports Academy Bandra – Building Champions Since 2014 | Bandra, Mumbai, Maharashtra, India*
