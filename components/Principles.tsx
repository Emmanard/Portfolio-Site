import { principles } from "@/data";
import Reveal from "./Reveal";

const Principles = () => (
  <section className="border-y border-black/10 bg-[#eceef1]">
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">
          How I work
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
          Five habits behind the work.
        </h2>
      </Reveal>

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
