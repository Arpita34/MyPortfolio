import PropTypes from "prop-types";

// Left-aligned section header shared by every section, in the pastel sticker style.
export const SectionHeading = ({ eyebrow, title, highlight, color = "bg-lavender", blurb }) => (
  <div className="max-w-2xl">
    <p className="text-muted text-xs font-mono uppercase tracking-[0.3em] mb-3">{eyebrow}</p>
    <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-ink leading-tight">
      {title}{" "}
      <span className={`inline-block ${color} border-[1.5px] border-ink rounded-xl px-2 shadow-hard -rotate-1`}>
        {highlight}
      </span>
    </h2>
    {blurb && <p className="text-ink-soft mt-5 text-base leading-relaxed">{blurb}</p>}
  </div>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  color: PropTypes.string,
  blurb: PropTypes.string,
};
