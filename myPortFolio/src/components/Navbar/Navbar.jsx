import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Auto-detect active section
      const sections = ["about", "skills", "experience", "work", "education"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const socialLinks = [
    { href: "https://github.com/Arpita34", icon: <FaGithub size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/arpita-pathak-48a47122b/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
    { href: "https://leetcode.com/u/Arpita_34/", icon: <SiLeetcode size={20} />, label: "LeetCode" },
    { href: "https://www.codechef.com/users/arpita2025", icon: <SiCodechef size={20} />, label: "CodeChef" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "py-3 bg-[#050414]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="px-[7vw] md:px-[7vw] lg:px-[20vw] flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-lg font-bold cursor-pointer select-none group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-[#4a90e2] group-hover:text-[#6eb5ff] transition-colors duration-300">&lt;</span>
          <span className="text-white">Arpita</span>
          <span className="text-[#4a90e2] group-hover:text-[#6eb5ff] transition-colors duration-300">/</span>
          <span className="text-white">Pathak</span>
          <span className="text-[#4a90e2] group-hover:text-[#6eb5ff] transition-colors duration-300">&gt;</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-1 text-sm">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-white bg-[#1349bd]/20 border border-[#1349bd]/40"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}

              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-[#1349bd]/30 border border-transparent hover:border-[#1349bd]/40 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-gray-300 hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-4 mt-2 mb-4 rounded-2xl bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
          <ul className="flex flex-col p-4 space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${activeSection === item.id
                      ? "text-white bg-[#1349bd]/25 border border-[#1349bd]/40"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center space-x-3 p-4 border-t border-white/5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-[#1349bd]/30 border border-white/10 hover:border-[#1349bd]/40 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
