import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SelectedWork } from './components/SelectedWork';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#171717] selection:bg-[#3158A8]/15 selection:text-[#171717]">
      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>

      {/* Minimalistic Footer */}
      <Footer />
    </div>
  );
};

export default App;
