import Image from "next/image";
import { worksWith } from "@/data";

// Companies with a real logo show it next to the name; the rest are just
// their name in the serif face (no placeholder boxes).
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
            className="flex min-h-[4.25rem] items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5"
          >
            {c.logo ? (
              <>
                <Image
                  src={c.logo}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 rounded-lg object-contain grayscale"
                />
                <span className="min-w-0 leading-tight">
                  <span className="block truncate text-sm font-medium text-[#0a0a0a]">
                    {c.name}
                  </span>
                  {"note" in c && c.note && (
                    <span className="block text-xs text-[#8b9099]">{c.note}</span>
                  )}
                </span>
              </>
            ) : (
              <span className="font-serif text-xl text-[#0a0a0a]">{c.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WorksWith;
