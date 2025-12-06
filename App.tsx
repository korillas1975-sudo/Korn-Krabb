import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased scroll-smooth">
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