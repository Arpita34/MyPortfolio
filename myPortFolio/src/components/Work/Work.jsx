import React, { useState } from 'react';
import { projects } from '../../constants';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-28 pb-28 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #070b12 0%, #050414 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1349bd]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-[#4a90e2] text-sm font-semibold uppercase tracking-[0.3em] mb-3">
          What I've built
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Featured{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6eb5ff, #b79cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </span>
        </h2>
        <div className="section-divider w-36 mx-auto" />
        <p className="text-gray-400 mt-6 text-base max-w-xl mx-auto leading-relaxed">
          A showcase of real-world projects highlighting my expertise in building full-stack applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "1px solid rgba(19,73,189,0.35)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(19,73,189,0.2), 0 20px 40px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
            }}
          >
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(90deg, #1349bd, #7c3aed)",
              }}
            />

            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f] via-transparent to-transparent opacity-80" />

              {/* Hover overlay with icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#050414]/60 backdrop-blur-sm">
                <span className="text-white text-sm font-semibold border border-white/30 rounded-full px-5 py-2 hover:bg-white/10 transition-colors">
                  View Details
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#6eb5ff] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(19,73,189,0.15)",
                      border: "1px solid rgba(19,73,189,0.25)",
                      color: "#93c5fd",
                    }}
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-3 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs text-[#4a90e2] hover:text-[#6eb5ff] transition-colors duration-200 ml-auto"
                  >
                    Live Demo <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0a0f1e, #0d1428)",
              border: "1px solid rgba(19,73,189,0.3)",
              boxShadow: "0 0 80px rgba(19,73,189,0.2), 0 20px 60px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 z-10"
              style={{ background: "linear-gradient(90deg, #1349bd, #7c3aed, #1349bd)" }}
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <FaTimes size={14} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain max-h-72"
                  style={{ background: "#080d1f" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(19,73,189,0.18)",
                        border: "1px solid rgba(19,73,189,0.35)",
                        color: "#93c5fd",
                      }}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#d1d5db",
                      }}
                    >
                      <FaGithub size={16} /> View Code
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #1349bd, #4a6ed5)",
                        boxShadow: "0 4px 20px rgba(19,73,189,0.4)",
                      }}
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );

  function handleCloseModal() {
    setSelectedProject(null);
  }
};
