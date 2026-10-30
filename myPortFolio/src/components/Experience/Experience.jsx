import { experiences } from "../../constants";
import { SectionHeading } from "../SectionHeading";

const toBullets = (text) =>
  text
    .split(/\.\s+/)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter(Boolean);

// Two-column rows: logo + dates on the left, role and outcomes on the right.
export const Experience = () => (
  <section id="experience" className="relative py-24 md:py-32 px-[7vw] lg:px-[12vw] font-sans bg-white/40 border-y-[1.5px] border-ink">
    <SectionHeading
      eyebrow="Where I've worked"
      title="Work"
      highlight="experience"
      color="bg-lavender"
    />

    <div className="mt-14 flex flex-col divide-y-[1.5px] divide-dashed divide-ink/40">
      {experiences.map((exp) => (
        <article key={exp.id} className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-12 py-10">
          {/* Left */}
          <div className="flex md:flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border-[1.5px] border-ink shadow-hard shrink-0 flex items-center justify-center">
              {exp.img ? (
                <img src={exp.img} alt={exp.company} className="w-full h-full object-cover" />
              ) : (
                <span className="w-full h-full flex items-center justify-center bg-peach font-display font-extrabold text-xl text-ink">
                  {exp.company.replace(/[^A-Z]/g, "").slice(0, 2) || exp.company.slice(0, 2)}
                </span>
              )}
            </div>
            <div>
              <p className="font-mono text-xs text-muted">{exp.date}</p>
              <p className="font-semibold text-ink mt-1">
                {exp.company}
                {exp.location && <span className="font-normal text-muted"> · {exp.location}</span>}
              </p>
              <span className="inline-block mt-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-butter border-[1.5px] border-ink">
                {exp.type || "Part-time"}
              </span>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">{exp.role}</h3>
            <ul className="mt-4 space-y-2 text-ink-soft text-sm sm:text-base leading-relaxed">
              {toBullets(exp.desc).map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-lavender border border-ink shrink-0" />
                  <span>{b}.</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {exp.skills.map((s) => (
                <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-lavender-soft border-[1.5px] border-ink text-ink">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
