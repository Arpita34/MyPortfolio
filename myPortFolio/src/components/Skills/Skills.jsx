import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const categoryColors = {
  Frontend: { from: "#1349bd", to: "#4a90e2", glow: "rgba(19,73,189,0.35)" },
  Backend: { from: "#7c3aed", to: "#a855f7", glow: "rgba(124,58,237,0.35)" },
  Languages: { from: "#0ea5e9", to: "#38bdf8", glow: "rgba(14,165,233,0.35)" },
  Tools: { from: "#10b981", to: "#34d399", glow: "rgba(16,185,129,0.35)" },
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section
      id="skills"
      className="relative py-28 pb-28 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #04070b 0%, #080d1f 50%, #0d2254 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1349bd]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-[#1349bd]/5 blur-[80px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-[#4a90e2] text-sm font-semibold uppercase tracking-[0.3em] mb-3">
          What I work with
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
            Skills
          </span>
        </h2>
        <div className="section-divider w-32 mx-auto" />
        <p className="text-gray-400 mt-6 text-base max-w-xl mx-auto leading-relaxed">
          A curated collection of technologies and tools I've mastered through
          real-world projects and dedicated practice.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {SkillsInfo.map((category) => {
          const colors = categoryColors[category.title] || categoryColors.Frontend;
          const isActive = activeCategory === category.title;

          return (
            <Tilt
              key={category.title}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              scale={1.02}
              transitionSpeed={800}
              className="w-full sm:w-[calc(50%-12px)]"
            >
              <div
                className="relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-500 h-full"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(20px)",
                  border: isActive
                    ? `1px solid ${colors.from}60`
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isActive
                    ? `0 0 40px ${colors.glow}, 0 8px 32px rgba(0,0,0,0.4)`
                    : "0 4px 24px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.from}, ${colors.to}, transparent)`,
                  }}
                />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${colors.from}, ${colors.to})`,
                    }}
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-xl py-2.5 px-3 transition-all duration-300 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${colors.from}18`;
                        e.currentTarget.style.borderColor = `${colors.from}50`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 object-contain"
                      />
                      <span className="text-xs sm:text-sm text-gray-300 font-medium truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};
