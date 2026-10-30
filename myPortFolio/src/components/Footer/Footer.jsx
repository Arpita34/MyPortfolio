import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-ink py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t-[1.5px] border-ink bg-cream">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-display font-bold text-ink">
          <span className="bg-lavender border-[1.5px] border-ink rounded-lg px-2">Arpita Pathak</span>
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-5">
          {[
            { name: "About", id: "about" },
            { name: "Projects", id: "work" },
            { name: "Experience", id: "experience" },
            { name: "Skills", id: "skills" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-ink-soft hover:text-link text-sm sm:text-base my-1 font-medium"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/arpita-pathak-48a47122b/", label: "LinkedIn" },
            { icon: <FaGithub />, link: "https://github.com/Arpita34", label: "GitHub" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="btn-press w-11 h-11 flex items-center justify-center rounded-full text-xl text-ink bg-white hover:bg-peach border-[1.5px] border-ink"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-muted font-mono mt-6">
          © 2026 Arpita Pathak.  All rights reserved.
        </p>
      </div>
    </footer>
  )
}
