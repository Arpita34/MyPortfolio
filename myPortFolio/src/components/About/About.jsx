import { useState } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/arpita_image.jpg";
import { FaGithub, FaArrowDown, FaFileAlt } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { heroStats, codingProfiles, resumeUrl } from "../../constants";

const profileIcons = {
  LeetCode: <SiLeetcode size={14} />,
  CodeChef: <SiCodechef size={14} />,
  GitHub: <FaGithub size={14} />,
};

// Split-screen hero: left = developer, right = problem solver.
// Hovering a side lets it grow, the way adhamdannaway.com's hero does.
export const About = () => {
  const [side, setSide] = useState(null);

  const leftBasis = side === "left" ? "md:basis-[58%]" : side === "right" ? "md:basis-[42%]" : "md:basis-1/2";
  const rightBasis = side === "right" ? "md:basis-[58%]" : side === "left" ? "md:basis-[42%]" : "md:basis-1/2";

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="relative font-sans">
      <div className="flex flex-col md:flex-row md:min-h-[88vh] border-y-[1.5px] border-ink">
        {/* LEFT — Developer */}
        <div
          onMouseEnter={() => setSide("left")}
          onMouseLeave={() => setSide(null)}
          className={`relative ${leftBasis} transition-[flex-basis] duration-500 ease-out bg-lavender-soft border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-ink px-[7vw] md:px-[6vw] pt-28 pb-16 md:py-24 flex flex-col justify-center gap-6`}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">01 / Developer</span>

          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-mint border-[1.5px] border-ink text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#2F9E6E] animate-pulse" />
            Open to work · 2026
          </div>

          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[2.6rem] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="inline-block bg-lavender border-[1.5px] border-ink rounded-2xl px-3 shadow-hard -rotate-1">
              Arpita
            </span>
            <br />
            I build full-stack
            <br />
            &amp; AI products.
          </h1>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-md">
            CSE graduate from IIITDM Jabalpur, B.Tech 2026. I ship end-to-end web apps with the{" "}
            <span className="font-semibold text-ink bg-peach px-1.5 rounded-md">MERN stack</span>,{" "}
            <span className="font-semibold text-ink bg-sky px-1.5 rounded-md">Next.js</span> and{" "}
            <span className="font-semibold text-ink bg-butter px-1.5 rounded-md">Python</span>, and lately
            RAG and LLM features that actually reach users.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => scrollTo("work")}
              className="btn-press flex items-center gap-2 bg-peach border-[1.5px] border-ink rounded-2xl px-6 py-3 font-bold text-ink"
            >
              See projects <FaArrowDown size={13} />
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center gap-2 bg-white border-[1.5px] border-ink rounded-2xl px-6 py-3 font-bold text-ink"
            >
              <FaFileAlt size={14} /> Résumé
            </a>
          </div>

          {/* Proof tiles */}
          <dl className="grid grid-cols-3 gap-3 max-w-md pt-2">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-white border-[1.5px] border-ink rounded-xl px-3 py-2.5">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">{s.label}</dt>
                <dd className="font-display font-extrabold text-xl sm:text-2xl text-ink leading-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — Problem solver */}
        <div
          onMouseEnter={() => setSide("right")}
          onMouseLeave={() => setSide(null)}
          className={`relative ${rightBasis} transition-[flex-basis] duration-500 ease-out bg-ink text-cream px-[7vw] md:px-[6vw] py-16 md:py-24 flex flex-col justify-center gap-6 overflow-hidden`}
        >
          {/* faint grid */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />

          <span className="relative font-mono text-xs uppercase tracking-[0.3em] text-cream/60">02 / Problem solver</span>

          {/* Photo — straddles both personalities */}
          <div className="relative flex items-center gap-6">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} className="shrink-0">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-[1.5px] border-cream p-1 bg-cream shadow-[5px_5px_0_#D9CCFF]">
                <img src={profileImage} alt="Arpita Pathak" className="w-full h-full rounded-full object-cover" />
                {/* right half rendered as "code" tone */}
                <img
                  src={profileImage}
                  alt=""
                  aria-hidden
                  className="absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] rounded-full object-cover grayscale contrast-125"
                  style={{ clipPath: "inset(0 0 0 50%)" }}
                />
              </div>
            </Tilt>
            <div className="font-display font-extrabold leading-[0.95] tracking-tight text-3xl sm:text-5xl">
              Competitive
              <br />
              <span className="inline-block bg-lavender text-ink border-[1.5px] border-cream rounded-2xl px-2 rotate-1">programmer</span>
            </div>
          </div>

          {/* Code card */}
          <div className="relative rounded-2xl border-[1.5px] border-cream/70 bg-[#1F1A33] font-mono text-xs sm:text-sm overflow-hidden max-w-md">
            <div className="flex items-center gap-2 px-4 py-2 border-b-[1.5px] border-cream/40">
              <span className="w-2.5 h-2.5 rounded-full bg-blush" />
              <span className="w-2.5 h-2.5 rounded-full bg-butter" />
              <span className="w-2.5 h-2.5 rounded-full bg-mint" />
              <span className="ml-2 text-cream/60">arpita.ts</span>
            </div>
            <pre className="px-4 py-4 leading-relaxed text-cream/90 whitespace-pre-wrap">
{`const arpita = {
  stack:   ["React", "Node", "Django", "Next.js"],
  dsa:     ["C++", "graphs", "DP", "greedy"],
  ai:      ["RAG", "FAISS", "LLM apps"],
  loves:   "turning hard problems into shipped code",
};`}
            </pre>
          </div>

          <div className="relative flex flex-wrap gap-2">
            {codingProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-[1.5px] border-cream/70 px-4 py-2 text-sm font-semibold text-cream hover:bg-cream hover:text-ink transition-colors"
              >
                {profileIcons[p.name]} {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
