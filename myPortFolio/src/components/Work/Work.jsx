import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SectionHeading } from "../SectionHeading";

const pastels = ["#D9CCFF", "#FFD8C2", "#C6EBDC", "#CFE2FF", "#FFD6E5", "#FFF0B8"];

// Stacked, alternating image / text rows — one project per row,
// like the resource blocks on adhamdannaway.com/learn-ui-design.
export const Work = () => {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-24 md:py-32 px-[7vw] lg:px-[12vw] font-sans">
      <SectionHeading
        eyebrow="What I've built"
        title="Featured"
        highlight="projects"
        color="bg-peach"
        blurb="Four projects I would show in an interview. Each one is live or has a demo, and the code is public."
      />

      <div className="flex flex-col gap-16 md:gap-24 mt-16">
        {featured.map((project, idx) => {
          const flip = idx % 2 === 1;
          const tint = pastels[idx % pastels.length];
          return (
            <article
              key={project.id}
              className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-14`}
            >
              {/* Image */}
              <a
                href={project.webapp || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift w-full md:w-1/2 rounded-2xl border-[1.5px] border-ink overflow-hidden bg-white block"
              >
                <div className="flex items-center gap-2 px-4 py-2 border-b-[1.5px] border-ink font-mono text-xs" style={{ background: tint }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-ink" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-ink" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-ink" />
                  <span className="ml-2 truncate">{project.title.trim().toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
                <div className="aspect-[16/10] p-4 sm:p-6" style={{ background: tint }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-xl bg-white border-[1.5px] border-ink"
                  />
                </div>
              </a>

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  0{idx + 1} — Featured
                </span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight text-ink">
                  {project.title.trim()}
                </h3>
                <p className="text-ink-soft leading-relaxed text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border-[1.5px] border-ink text-ink"
                      style={{ background: pastels[(idx + i) % pastels.length] }}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press flex items-center gap-2 bg-peach border-[1.5px] border-ink rounded-xl px-5 py-2.5 text-sm font-bold text-ink"
                    >
                      <FaExternalLinkAlt size={12} /> Live demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press flex items-center gap-2 bg-white border-[1.5px] border-ink rounded-xl px-5 py-2.5 text-sm font-bold text-ink"
                    >
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* More work — compact list */}
      {more.length > 0 && (
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-2xl text-ink mb-6 flex items-center gap-3">
            More work
            <span className="font-mono text-xs bg-white border-[1.5px] border-ink rounded-lg px-2 py-0.5">{more.length}</span>
          </h3>
          <ul className="rounded-2xl border-[1.5px] border-ink bg-white shadow-hard overflow-hidden divide-y-[1.5px] divide-ink">
            {more.map((project) => (
              <li key={project.id} className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 hover:bg-lavender-soft transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-ink">{project.title.trim()}</p>
                  <p className="text-xs font-mono text-muted truncate">{project.tags.map((t) => t.trim()).join(" · ")}</p>
                </div>
                <div className="flex gap-4 text-sm font-semibold shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-ink hover:text-link">
                      <FaGithub size={13} /> Code
                    </a>
                  )}
                  {project.webapp && (
                    <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-link hover:text-ink">
                      Live <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
