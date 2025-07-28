import React, { useState } from 'react';
import { CursorEffect } from './components/CursorEffect';
import { useScrollAnimations } from './components/ScrollAnimations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollAnimations();

  return (
    <div className="min-h-screen">
      <CursorEffect />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;