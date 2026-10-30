import { SkillsInfo } from "../../constants";
import { SectionHeading } from "../SectionHeading";

const tints = {
  Frontend: "bg-lavender",
  Backend: "bg-peach",
  Languages: "bg-sky",
  Tools: "bg-mint",
};

// One compact sticker row per category instead of four big logo cards.
export const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32 px-[7vw] lg:px-[12vw] font-sans">
    <SectionHeading
      eyebrow="What I work with"
      title="Tools &"
      highlight="skills"
      color="bg-mint"
      blurb="Everything here has shipped in at least one of the projects above."
    />

    <div className="mt-12 flex flex-col gap-5">
      {SkillsInfo.map((cat) => (
        <div key={cat.title} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 items-start">
          <span className={`inline-block w-fit font-display font-bold text-lg px-3 py-1 rounded-xl border-[1.5px] border-ink ${tints[cat.title] || "bg-lavender"}`}>
            {cat.title}
          </span>
          <ul className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <li
                key={s.name}
                className="flex items-center gap-2 bg-white border-[1.5px] border-ink rounded-full pl-2 pr-3 py-1.5 text-sm font-medium text-ink hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#2B2540] transition-all"
              >
                <img src={s.logo} alt="" className="w-4 h-4 object-contain" />
                {s.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
