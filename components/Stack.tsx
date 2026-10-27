import { skills } from "@/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const Group = ({
  title,
  items,
  strong,
}: {
  title: string;
  items: string[];
  strong?: boolean;
}) => (
  <div>
    <h3 className="text-xs uppercase tracking-[0.2em] text-[#8b9099]">{title}</h3>
    <ul className="mt-4 flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={
            strong
              ? "rounded-full bg-[#0a0a0a] px-4 py-2 text-sm text-white"
              : "rounded-full border border-black/15 bg-white px-4 py-2 text-sm text-[#2a2d33]"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Stack = () => (
  <section id="stack" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <SectionHead eyebrow="Stack" title="What I reach for, and what I've used." />
    <Reveal className="mt-10 space-y-10" delay={0.1}>
      <Group title="Strong" items={skills.strong} strong />
      <Group title="Experienced" items={skills.experienced} />
    </Reveal>
  </section>
);

export default Stack;
