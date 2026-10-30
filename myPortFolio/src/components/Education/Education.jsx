import { education } from "../../constants";
import { FaMedal } from "react-icons/fa";
import { SectionHeading } from "../SectionHeading";

const tints = ["bg-sky", "bg-blush", "bg-butter"];

// Same two-column rhythm as Experience, so the page scans as one system.
export const Education = () => (
  <section id="education" className="relative py-24 md:py-32 px-[7vw] lg:px-[12vw] font-sans">
    <SectionHeading eyebrow="Academic background" title="My" highlight="education" color="bg-sky" />

    <div className="mt-14 flex flex-col divide-y-[1.5px] divide-dashed divide-ink/40">
      {education.map((edu, idx) => (
        <article key={edu.id} className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-12 py-10">
          <div className="flex md:flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-[1.5px] border-ink shadow-hard shrink-0">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-mono text-xs text-muted">{edu.date}</p>
              {edu.grade && (
                <span className={`inline-flex items-center gap-1.5 mt-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tints[idx % tints.length]} border-[1.5px] border-ink`}>
                  <FaMedal size={10} /> {edu.grade}
                </span>
              )}
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink leading-snug">{edu.degree}</h3>
            <p className="font-semibold text-ink-soft mt-1">{edu.school}</p>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">{edu.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
