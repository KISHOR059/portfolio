// App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Optimize for high refresh rate displays on mount
  useEffect(() => {
    // Enable smooth scrolling optimization
    if (document.documentElement.style) {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // Prevent default pull-to-refresh on mobile to avoid jank
    const preventDefault = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventDefault, { passive: false });
    return () => document.removeEventListener("touchmove", preventDefault);
  }, []);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      <div className="relative hardware-accelerated will-change-scroll-position">
        <Navbar />
        <main className="hardware-accelerated">
          <Hero />
          <About />
          <section id="skills" className="hardware-accelerated"><Skills /></section>
          <section id="projects" className="hardware-accelerated"><Projects /></section>
          <section id="contact" className="hardware-accelerated"><Contact /></section>
        </main>
      </div>
    </>
  );
}
