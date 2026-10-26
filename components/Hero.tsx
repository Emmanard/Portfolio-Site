import { profile } from "@/data";
import Reveal from "./Reveal";

const facts = [
  ["Now", "Lead React Native & Full-Stack Engineer, Mestranow"],
  ["Owns", "API, job queues, payments, admin console, 3 mobile apps"],
  ["Writes", "TypeScript · React · Next.js · React Native · Node.js"],
  ["Works", "Remote and async from Lagos (WAT, UTC+1)"],
];

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 md:pt-24">
    <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">
          {profile.role}
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          I build apps, the APIs and the payments{" "}
          <em className="text-[#8b9099]">behind them.</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4b5058]">
          {profile.summary}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-[#0a0a0a] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2d33]"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-black/20 px-7 py-3 text-sm font-medium transition-colors hover:border-black"
          >
            Get in touch
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="rounded-3xl bg-[#0a0a0a] p-8 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
          <p className="font-serif text-3xl">{profile.name}</p>
          <dl className="mt-6 divide-y divide-white/10">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[4.5rem_1fr] gap-4 py-3.5">
                <dt className="text-xs uppercase tracking-widest text-[#8b9099]">
                  {k}
                </dt>
                <dd className="text-sm leading-relaxed text-[#d4d7dd]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Hero;
