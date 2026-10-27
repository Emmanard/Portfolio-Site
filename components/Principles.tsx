import { principles } from "@/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const Principles = () => (
  <section className="border-y border-black/10 bg-[#eceef1]">
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead eyebrow="How I work" title="Five habits behind the work." />

      <ol className="mt-12 grid gap-5 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <li className="flex h-full gap-5 rounded-2xl bg-white p-7">
              <span className="font-serif text-4xl text-[#b0b5be]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5058]">
                  {p.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Principles;
