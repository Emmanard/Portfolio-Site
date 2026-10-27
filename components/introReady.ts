import { useSyncExternalStore } from "react";

// Tiny shared flag: flips to true when the welcome screen starts opening (or
// immediately when it is skipped), so page text knows when to start typing.

let ready = false;
const listeners = new Set<() => void>();

export const markIntroReady = () => {
  if (ready) return;
  ready = true;
  listeners.forEach((l) => l());
};

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

const getSnapshot = () =>
  ready || document.documentElement.dataset.intro === "skip";

export const useIntroReady = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => false);
