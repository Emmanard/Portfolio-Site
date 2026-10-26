import { openSourceContributions, proof } from "@/data";
import Reveal from "./Reveal";

const Proof = () => (
  <section id="proof" className="bg-[#0a0a0a] text-white">
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">
          Proof beyond the code
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">
          Numbers from production, and pull requests anyone can read.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {proof.map((item) => (
          <div key={item.label} className="bg-[#0a0a0a] p-7">
            <p className="font-serif text-6xl text-[#c3c7cf]">{item.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#9aa0a9]">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-serif text-3xl">Open source: Aframp</h3>
        <p className="mt-2 max-w-2xl text-sm text-[#9aa0a9]">
          Merged work on a Next.js, TypeScript and Redis codebase. Each link
          opens the pull request.
        </p>
        <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {openSourceContributions.map((c) => (
            <li key={c.prUrl}>
              <a
                href={c.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1 py-5 transition-colors hover:bg-white/[0.03] sm:grid-cols-[1.2fr_2fr_auto] sm:items-center sm:gap-6 sm:px-3"
              >
                <span className="font-medium">{c.title}</span>
                <span className="text-sm text-[#9aa0a9]">{c.description}</span>
                <span className="text-xs text-[#6b7079] group-hover:text-[#c3c7cf]">
                  {c.tech} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Proof;
