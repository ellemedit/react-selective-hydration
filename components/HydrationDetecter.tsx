"use client";

import { ReactNode, useEffect, useState } from "react";

export function HydrationDetecter({
  children = <p data-hydrated>Hydrated!</p>,
  fallback = <p>Waiting for hydration...</p>,
}: {
  children?: ReactNode;
  fallback?: ReactNode;
}) {
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
}
