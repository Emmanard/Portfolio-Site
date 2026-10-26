import { navItems, profile } from "@/data";

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fafafa]/85 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#top" className="font-serif text-2xl leading-none">
        {profile.name}
      </a>

      <nav className="hidden items-center gap-8 text-sm text-[#4b5058] md:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transition-colors hover:text-black"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <a
        href={profile.cv}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#0a0a0a] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2a2d33]"
      >
        Resume
      </a>
    </div>
  </header>
);

export default Nav;
