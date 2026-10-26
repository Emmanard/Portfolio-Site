import { education, workExperience } from "@/data";
import Reveal from "./Reveal";

const Experience = () => (
  <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <Reveal>
      <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">
        Experience
      </p>
      <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Where I&apos;ve worked.</h2>
    </Reveal>

    <ol className="mt-12 border-t border-black/10">
      {workExperience.map((job) => (
        <Reveal key={job.role + job.company}>
          <li className="grid gap-4 border-b border-black/10 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
            <div>
              <p className="text-sm font-medium">{job.period}</p>
              <p className="mt-1 text-sm text-[#8b9099]">{job.kind}</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl">{job.role}</h3>
              <p className="mt-1 text-[#4b5058]">{job.company}</p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#2a2d33]">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b9099]" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>

    <p className="mt-8 text-sm text-[#4b5058]">
      <span className="font-medium text-black">{education.degree}</span> ·{" "}
      {education.school} · {education.year}
    </p>
  </section>
);

export default Experience;
