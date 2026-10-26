import Image from "next/image";
import { worksWith } from "@/data";

const WorksWith = () => (
  <section className="border-y border-black/10 bg-[#eceef1]">
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#8b9099]">
        Built with and for
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {worksWith.map((c) => (
          <li
            key={c.name}
            className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5"
          >
            {c.logo ? (
              <Image
                src={c.logo}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-lg object-contain grayscale"
              />
            ) : (
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0a0a0a] font-serif text-lg text-[#c3c7cf]"
              >
                {c.name[0]}
              </span>
            )}
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-medium text-[#0a0a0a]">
                {c.name}
              </span>
              {"note" in c && c.note && (
                <span className="block text-xs text-[#8b9099]">{c.note}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WorksWith;
