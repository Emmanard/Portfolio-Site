"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data";
import { markIntroReady } from "./introReady";

// Welcome screen: a short terminal boot log about me. When it finishes, the
// screen splits across the middle and the two halves slide away (top up,
// bottom down) to reveal the portfolio. Shown once per browser session; a
// click or any key skips it. Uses only the local clock, nothing is sent
// anywhere.

const SEEN_KEY = "intro-seen";

type Line = { cmd: string; out?: string };

const SCRIPT: { cmd: string; out: string }[] = [
  { cmd: "whoami", out: profile.name },
  { cmd: "role", out: profile.role },
  { cmd: "now", out: "Lead engineer at Mestranow · 3 live mobile apps" },
  { cmd: "status", out: "Open to remote work · Lagos (WAT, UTC+1)" },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const greeting = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good morning";
  if (h >= 12 && h < 17) return "Good afternoon";
  return "Good evening";
};

type ScreenProps = {
  header: string;
  lines: Line[];
  closing: string;
};

const Screen = ({ header, lines, closing }: ScreenProps) => {
  const last = lines[lines.length - 1];
  const caretAt = closing
    ? "closing"
    : last && last.out === undefined
      ? "cmd"
      : !lines.length && header
        ? "header"
        : null;
  const caret = (
    <span className="caret ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-[#c3c7cf]" />
  );

  return (
    <div className="relative flex h-[100dvh] flex-col justify-center bg-[#070708] px-6 font-mono text-[15px] leading-relaxed text-[#9aa0a9] sm:text-base">
      <div className="mx-auto w-full max-w-xl">
        <p className="min-h-[1.6em] text-[#6b7079]">
          {header}
          {caretAt === "header" && caret}
        </p>
        <ul className="mt-5 space-y-3">
          {lines.map((l, i) => (
            <li key={i}>
              <p>
                <span className="mr-3 text-[#6b7079]">$</span>
                <span className="text-[#c3c7cf]">{l.cmd}</span>
                {caretAt === "cmd" && i === lines.length - 1 && caret}
              </p>
              {l.out !== undefined && (
                <p className="animate-[introIn_0.3s_ease-out] pl-6 text-white">
                  {l.out}
                </p>
              )}
            </li>
          ))}
        </ul>
        {closing && (
          <p className="mt-7 text-white">
            {closing}
            {caretAt === "closing" && caret}
          </p>
        )}
      </div>
      <p className="absolute inset-x-0 bottom-8 text-center text-xs tracking-wide text-[#6b7079]">
        Click or press any key to skip
      </p>
    </div>
  );
};

const PANEL =
  "absolute inset-x-0 h-1/2 overflow-hidden bg-[#070708] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform";

const Intro = () => {
  const [active, setActive] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [header, setHeader] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const [closing, setClosing] = useState("");

  useEffect(() => {
    // The inline script in layout.tsx sets data-intro="skip" before paint when
    // the intro was already seen this session or reduced motion is requested.
    if (document.documentElement.dataset.intro === "skip") {
      markIntroReady();
      setActive(false);
      return;
    }

    let cancelled = false;
    let finished = false;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    // Start from a blank screen (React strict mode runs this effect twice in dev).
    setHeader("");
    setLines([]);
    setClosing("");

    const finish = async () => {
      if (finished) return;
      finished = true;
      cancelled = true;
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* storage blocked */
      }
      setLeaving(true);
      root.style.overflow = "";
      // Let the page start typing just as the shutter opens.
      setTimeout(markIntroReady, 380);
      await sleep(1000);
      setActive(false);
    };

    const type = async (text: string, set: (s: string) => void, ms: number) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        set(text.slice(0, i));
        await sleep(ms);
      }
    };

    const run = async () => {
      await sleep(200);
      await type(`# ${greeting()}. Welcome.`, setHeader, 20);
      await sleep(260);
      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const { cmd, out } = SCRIPT[i];
        setLines((prev) => [...prev, { cmd: "" }]);
        await type(
          cmd,
          (s) =>
            setLines((prev) =>
              prev.map((l, j) => (j === i ? { ...l, cmd: s } : l))
            ),
          55
        );
        await sleep(140);
        if (cancelled) return;
        setLines((prev) => prev.map((l, j) => (j === i ? { ...l, out } : l)));
        await sleep(240);
      }
      await sleep(150);
      await type("Opening portfolio", setClosing, 28);
      await sleep(650);
      if (!cancelled) finish();
    };

    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    run();

    return () => {
      cancelled = true;
      root.style.overflow = "";
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  if (!active) return null;

  const props = { header, lines, closing };

  return (
    <div
      id="intro"
      role="dialog"
      aria-label="Welcome"
      className={`fixed inset-0 z-[100] overflow-hidden ${
        leaving ? "pointer-events-none" : ""
      }`}
    >
      {/* Top half: shows the upper half of the screen, slides up */}
      <div className={`${PANEL} top-0 ${leaving ? "-translate-y-full" : ""}`}>
        <div aria-live="polite">
          <Screen {...props} />
        </div>
      </div>

      {/* Bottom half: the same screen shifted up by half, slides down */}
      <div className={`${PANEL} bottom-0 ${leaving ? "translate-y-full" : ""}`}>
        <div aria-hidden className="-translate-y-1/2">
          <Screen {...props} />
        </div>
      </div>

      {/* Seam of light along the split while the shutter opens */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-0 top-[calc(50%-0.5px)] h-px w-full bg-[#c3c7cf] ${
          leaving ? "animate-[seam_0.9s_ease-out_forwards]" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Intro;
