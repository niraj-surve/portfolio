import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(sectionsRef.current);
      let activeSection = "#home";

      for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          activeSection = `#${section.id}`;
          break;
        }
      }

      const navLinks = document.querySelectorAll("nav a");
      navLinks.forEach((link) => {
        link.classList.toggle(
          "bg-primary",
          link.getAttribute("href") === activeSection
        );
        link.classList.toggle(
          "text-bg",
          link.getAttribute("href") === activeSection
        );
        link.classList.toggle(
          "text-white",
          link.getAttribute("href") !== activeSection
        );
        link.classList.toggle(
          "bg-transparent",
          link.getAttribute("href") !== activeSection
        );
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Home ref={(el) => (sectionsRef.current.home = el)} />
      <About ref={(el) => (sectionsRef.current.about = el)} />
      <Skills ref={(el) => (sectionsRef.current.skills = el)} />
    </>
  );
}

export default App;
