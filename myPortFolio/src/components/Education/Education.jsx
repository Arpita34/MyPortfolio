import React from 'react';
import { education } from '../../constants';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';

export const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 sm:px-12 md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050414 0%, #080d20 50%, #0d2254 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1349bd]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#1349bd]/5 blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-20">
        <p className="text-[#4a90e2] text-sm font-semibold uppercase tracking-[0.3em] mb-3">
          Academic Background
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          My{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6eb5ff, #b79cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Education
          </span>
        </h2>
        <div className="section-divider w-36 mx-auto" />
        <p className="text-gray-400 mt-6 text-base max-w-xl mx-auto leading-relaxed">
          My academic journey has shaped my foundation in computer science and problem-solving.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-7 sm:left-10 top-4 bottom-4 w-px"
          style={{
            background: "linear-gradient(180deg, #1349bd, #7c3aed, #1349bd30)",
          }}
        />

        <div className="flex flex-col gap-10">
          {education.map((edu, idx) => (
            <div key={edu.id} className="relative flex gap-6 sm:gap-10 group">
              {/* Timeline dot */}
              <div className="relative flex-shrink-0 flex flex-col items-center">
                <div
                  className="w-14 sm:w-20 h-14 sm:h-20 rounded-full overflow-hidden z-10 ring-2 transition-all duration-500 group-hover:ring-[#1349bd]/60"
                  style={{
                    background: "#fff",
                    boxShadow: "0 0 20px rgba(19,73,189,0.3)",
                    ringColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(19,73,189,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 35px rgba(19,73,189,0.15), 0 8px 32px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, #1349bd, #7c3aed)",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                />

                {/* Degree & School */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1 group-hover:text-[#6eb5ff] transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-400 font-medium">{edu.school}</h4>
                  </div>
                  {edu.grade && (
                    <div
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: "rgba(16,185,129,0.15)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        color: "#34d399",
                      }}
                    >
                      <FaMedal size={11} />
                      {edu.grade}
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                  <FaCalendarAlt size={11} className="text-[#4a90e2]" />
                  {edu.date}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
