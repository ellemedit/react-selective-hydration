"use client";

export default function ArtificialDelay() {
  if (typeof window === "undefined") {
    return null;
  }
  const now = performance.now();
  while (performance.now() - now < 1) {
    // Do nothing
  }
}
