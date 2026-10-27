"use client";
import { useEffect, useRef, useState } from "react";
import { useIntroReady } from "./introReady";

type Segment = string | { text: string; className?: string };

type TypedProps = {
  text?: string;
  /** Use instead of `text` when parts of the line need their own styling. */
  segments?: Segment[];
  as?: React.ElementType;
  className?: string;
  /** ms to wait before typing starts (after the element is on screen). */
  delay?: number;
  /** ms per character. */
  speed?: number;
  /** Upper bound on total typing time, so long paragraphs stay quick. */
  maxMs?: number;
};

// Types its text out like a terminal once the welcome screen has opened and the
// element is on screen. The full text is always in the DOM (screen-reader text
// plus an invisible remainder), so layout never shifts, search engines read it,
// and reduced-motion users get it instantly.
const Typed = ({
  text,
  segments,
  as: Tag = "span",
  className,
  delay = 0,
  speed = 26,
  maxMs = 1400,
}: TypedProps) => {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroReady();
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);

  const segs = (segments ?? [text ?? ""]).map((s) =>
    typeof s === "string" ? { text: s, className: undefined } : s
  );
  const full = segs.map((s) => s.text).join("");
  const total = full.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || !inView || done || total === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      setDone(true);
      return;
    }

    const perChar = Math.min(speed, maxMs / total);
    let raf = 0;
    const timer = setTimeout(() => {
      setTyping(true);
      const start = performance.now();
      const tick = (now: number) => {
        const n = Math.min(total, Math.floor((now - start) / perChar) + 1);
        setCount(n);
        if (n >= total) {
          setTyping(false);
          setDone(true);
          return;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [ready, inView, done, total, delay, speed, maxMs]);

  const shown = done ? total : count;
  let offset = 0;
  const parts = segs.map((seg, i) => {
    const start = offset;
    offset += seg.text.length;
    const visible = Math.max(0, Math.min(seg.text.length, shown - start));
    const hasCaret =
      typing && shown >= start && (shown < offset || i === segs.length - 1);
    return (
      <span key={i} className={seg.className}>
        {seg.text.slice(0, visible)}
        {hasCaret && (
          <span aria-hidden className="relative inline-block w-0 align-baseline">
            <span className="caret absolute left-px top-[0.12em] h-[0.95em] w-[2px] bg-current" />
          </span>
        )}
        <span className="tw-rest invisible">{seg.text.slice(visible)}</span>
      </span>
    );
  });

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{full}</span>
      <span aria-hidden>{parts}</span>
    </Tag>
  );
};

export default Typed;
