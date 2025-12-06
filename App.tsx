import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="antialiased scroll-smooth bg-bg">
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <Gallery />
        <LocationSection />
        <AIStylist />
      </main>
      <Footer />
    </div>
  );
};

export default App;