/**
 * App.jsx – Main application component
 * Sports Academy Bandra
 *
 * Assembles all sections in order. Each section is a separate
 * React component for easy maintenance and beginner readability.
 */
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import CricketInspiration from './components/CricketInspiration';
import Coaches from './components/Coaches';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Fixed sticky navigation bar */}
      <Navbar />

      {/* Main page content */}
      <main>
        {/* 1. Hero Section – Full screen landing */}
        <Hero />

        {/* 2. About Section – Academy story & features */}
        <About />

        {/* 3. Programs Section – Training programs with filter */}
        <Programs />

        {/* 4. Cricket Inspiration – Visual cricket section */}
        <CricketInspiration />

        {/* 5. Coaches Section – Meet the coaching staff */}
        <Coaches />

        {/* 6. Achievements – Stats & milestones */}
        <Achievements />

        {/* 7. Gallery – Photo gallery with lightbox */}
        <Gallery />

        {/* 8. Videos – Training video library */}
        <Videos />

        {/* 9. Testimonials – Student reviews */}
        <Testimonials />

        {/* 10. Contact – Enrollment form & info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
