import { profile } from "@/data";
import Reveal from "./Reveal";

const links = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "X", href: profile.links.x },
  { label: "WhatsApp", href: profile.links.whatsapp },
];

const Contact = () => (
  <>
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28 text-center sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-[#8b9099]">
          Contact
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
          Have something to build?{" "}
          <em className="text-[#8b9099]">Let&apos;s talk.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[#4b5058]">
          Open to remote full-stack and React Native roles, and to contract
          work. I reply within a day or two.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-[#0a0a0a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#2a2d33]"
        >
          {profile.email}
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/20 px-5 py-2 text-sm transition-colors hover:border-black"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>

    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[#8b9099] sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  </>
);

export default Contact;
