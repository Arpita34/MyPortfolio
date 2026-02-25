import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/arpita_image.jpg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const About = () => {
  const words = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Competitive Programmer",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const delta = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, delta);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);



  return (
    <section
      id="about"
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1349bd]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-800/10 blur-[100px] pointer-events-none" />

      <div
        className={`flex flex-col md:flex-row justify-between items-center gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1349bd]/15 border border-[#1349bd]/30 text-[#6eb5ff] text-sm font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            Open to Work
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm
          </h1>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #6eb5ff 50%, #b79cff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arpita Pathak
            </span>
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            <span className="text-gray-300">I am a </span>
            <span
              style={{
                background: "linear-gradient(90deg, #4a90e2, #9b6fd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {text}
            </span>
            <span
              className="text-[#4a90e2] font-thin ml-0.5"
              style={{ animation: "blink 1s step-end infinite" }}
            >
              |
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed pt-2 max-w-lg">
            I'm a full-stack developer building scalable, user-centric web apps.
            I specialize in the{" "}
            <span className="text-[#6eb5ff] font-medium">MERN stack</span> and{" "}
            <span className="text-[#b79cff] font-medium">Python/Django</span>,
            passionate about clean code and seamless user experiences.
          </p>



          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a
              href="https://drive.google.com/file/d/1uWLlgy3eBL8Iuz3Qta6EoM4zpniZq1A1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white py-3 px-8 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1349bd, #4a6ed5, #7c3aed)",
                boxShadow: "0 0 20px rgba(19, 73, 189, 0.5), 0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              <FaDownload size={16} className="group-hover:animate-bounce" />
              Download CV
            </a>
            <a
              href="https://github.com/Arpita34"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 py-3 px-8 rounded-full text-base font-semibold border border-white/15 hover:border-[#1349bd]/60 hover:text-white hover:bg-[#1349bd]/10 transition-all duration-300"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #1349bd, #7c3aed, #1349bd, transparent)",
                padding: "3px",
                borderRadius: "50%",
                animation: "spinSlow 8s linear infinite",
              }}
            />
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.15}
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 relative z-10"
            >
              <div className="w-full h-full rounded-full p-1.5"
                style={{
                  background: "linear-gradient(135deg, #1349bd, #7c3aed)",
                }}>
                <img
                  src={profileImage}
                  alt="Arpita Pathak"
                  className="w-full h-full rounded-full object-cover"
                  style={{
                    boxShadow: "0 0 40px rgba(19, 73, 189, 0.4)",
                  }}
                />
              </div>
            </Tilt>


          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#4a90e2]"
            style={{ animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
};
