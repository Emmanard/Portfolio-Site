import Reveal from "./Reveal";

// Eyebrow label + serif heading.
const SectionHead = ({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) => (
  <Reveal className={className}>
    <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{title}</h2>
  </Reveal>
);

export default SectionHead;
