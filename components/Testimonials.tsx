import { testimonials } from "@/data";
import Reveal from "./Reveal";

const Testimonials = () => (
  <section className="bg-[#0a0a0a] text-white">
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">
          Kind words
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
          What people I&apos;ve built for say.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <blockquote className="flex-1 text-sm leading-relaxed text-[#d4d7dd]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-[#8b9099]">{t.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
