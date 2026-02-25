import React from 'react';
import { experiences } from '../../constants';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 sm:px-12 md:px-[7vw] lg:px-[16vw] font-sans overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d2254 0%, #070b12 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1349bd]/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#1349bd]/5 blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Work{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #b79cff, #6eb5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Experience
          </span>
        </h2>
        <div className="section-divider w-40 mx-auto" />
        <p className="text-gray-400 mt-6 text-base max-w-xl mx-auto leading-relaxed">
          A collection of my professional roles and impactful contributions across organizations.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col items-center gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className="w-full max-w-3xl group transition-all duration-500"
          >
            <div
              className="relative rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(19,73,189,0.4)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(19,73,189,0.2), 0 8px 32px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
              }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #1349bd, #7c3aed, transparent)",
                }}
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                {/* Company Logo */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-white/10"
                  style={{ background: "#fff" }}
                >
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(19,73,189,0.2)",
                        border: "1px solid rgba(19,73,189,0.4)",
                        color: "#6eb5ff",
                      }}
                    >
                      <FaBriefcase className="inline mr-1 mb-0.5" size={10} />
                      Part-time
                    </span>
                  </div>
                  <h4 className="text-base text-gray-300 font-medium mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt size={12} className="text-[#4a90e2]" />
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6 pl-0 sm:pl-0">
                {exp.desc}
              </p>

              {/* Skills */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
                      style={{
                        background: "rgba(19,73,189,0.15)",
                        border: "1px solid rgba(19,73,189,0.3)",
                        color: "#93c5fd",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
