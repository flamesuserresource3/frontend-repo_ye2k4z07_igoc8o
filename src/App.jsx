import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Minimal top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-tight">Your Name</a>
          <nav className="hidden gap-6 text-sm text-neutral-700 sm:flex">
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#work" className="hover:text-neutral-900">Work</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-900 sm:text-sm">Let’s talk</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
