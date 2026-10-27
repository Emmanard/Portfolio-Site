import Image from "next/image";
import { mestra, projects } from "@/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const linkClass =
  "inline-flex items-center rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white";

const Work = () => (
  <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <SectionHead
      eyebrow="Selected work"
      title="Products people use, and the systems under them."
    />

    {/* Flagship */}
    <Reveal className="mt-12">
      <article className="overflow-hidden rounded-3xl bg-[#e6e8ec]">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6b7079]">
              {mestra.kind}
            </p>
            <h3 className="mt-3 font-serif text-6xl">{mestra.title}</h3>
            <p className="mt-2 text-sm text-[#4b5058]">{mestra.role}</p>
            <p className="mt-6 leading-relaxed text-[#2a2d33]">{mestra.intro}</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#2a2d33]">
              {mestra.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  {p}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {mestra.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#2a2d33]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 items-start gap-3 sm:gap-4">
            {mestra.apps.map((app, i) => (
              <div key={app.name} className={i === 1 ? "mt-8" : ""}>
                <div className="relative aspect-[9/19] overflow-hidden rounded-2xl border-4 border-[#0a0a0a] bg-white shadow-xl">
                  <Image
                    src={app.img}
                    alt={`Mestra ${app.name} app screenshot`}
                    fill
                    sizes="(min-width: 1024px) 18vw, 30vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-[#2a2d33]">
                  {app.name}
                </p>
                <div className="mt-2 flex flex-col gap-1.5 text-xs">
                  <a
                    href={app.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    App Store
                  </a>
                  {"googlePlay" in app && app.googlePlay && (
                    <a
                      href={app.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      Google Play
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>

    <Reveal className="mt-16">
      <h3 className="font-serif text-3xl">More projects</h3>
      <p className="mt-2 text-sm text-[#4b5058]">
        Smaller builds: company and client sites, plus full-stack and mobile
        projects.
      </p>
    </Reveal>

    {/* Pairs of cards, with the third one wide across the middle */}
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => {
        const featured = i === 2;
        return (
          <Reveal
            key={p.title}
            delay={(i % 2) * 0.08}
            className={featured ? "md:col-span-2" : undefined}
          >
            <article
              className={`flex h-full overflow-hidden rounded-2xl border border-black/10 bg-white ${
                featured ? "flex-col md:flex-row" : "flex-col"
              }`}
            >
              <div
                className={`relative bg-[#eceef1] ${
                  featured
                    ? "aspect-[16/10] md:aspect-auto md:min-h-[22rem] md:w-3/5"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes={
                    featured
                      ? "(min-width: 768px) 60vw, 100vw"
                      : "(min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover object-top"
                />
              </div>
              <div
                className={`flex flex-1 flex-col p-6 ${
                  featured ? "md:justify-center md:p-10" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.15em] text-[#8b9099]">
                  {p.tag}
                </p>
                <h3
                  className={`mt-2 font-serif ${
                    featured ? "text-4xl md:text-5xl" : "text-3xl"
                  }`}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4b5058]">
                  {p.des}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-[#eceef1] px-2.5 py-1 text-xs font-medium text-[#2a2d33]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  </section>
);

export default Work;
