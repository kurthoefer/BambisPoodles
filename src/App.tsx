import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      {/* Hero Section */}
      <header className='hero'>
        <h1>Bambi's Poodles</h1>
        <p className='tagline'>
          Standard Poodles – Elegant, Loyal, and Family-Friendly
        </p>
        <p className='subtagline'>
          Specializing in black, white, and cream coats — from champion
          bloodlines.
        </p>
        <a
          href='#puppies'
          className='cta-button'
        >
          View Available Puppies
        </a>
      </header>

      {/* About Section */}
      <section id='about'>
        <h2>About Us</h2>
        <p>
          At Bambi’s Poodles, we breed healthy, well-socialized standard poodles
          with exceptional temperaments. Some of our dogs have earned accolades
          in hunting competitions and “Best in Show” events, while others are
          beloved companions in family homes.
        </p>
      </section>

      {/* Available Puppies */}
      <section id='puppies'>
        <h2>Available Puppies</h2>
        <p>
          Our next litter is expected soon! Contact us for reservation details.
        </p>
        <div className='gallery'>
          <div className='puppy-card'>🐩 Black Poodle</div>
          <div className='puppy-card'>🤍 White Poodle</div>
          <div className='puppy-card'>✨ Cream Poodle</div>
        </div>
      </section>

      {/* Awards Section */}
      <section id='awards'>
        <h2>Awards & Recognition</h2>
        <ul>
          <li>🏆 Best in Show – 2023, 2021</li>
          <li>🎯 Hunting Champion – 2022</li>
          <li>🏅 Multiple obedience and agility titles</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id='contact'>
        <h2>Contact Us</h2>
        <p>
          Interested in adopting a puppy or learning more about our breeding
          program? Reach out via email or phone.
        </p>
        <p>
          Email:{' '}
          <a href='mailto:info@bambispoodles.com'>info@bambispoodles.com</a>
        </p>
        <p>Phone: (555) 123-4567</p>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Bambi's Poodles – All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
