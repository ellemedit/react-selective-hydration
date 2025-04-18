"use client";

import Link from "next/link";
import ArtificialDelay from "~/components/ArtificialDelay";
import { HydrationDetecter } from "~/components/HydrationDetecter";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="p-4 border-b border-gray-500 h-[160px] has-[[data-hydrated]]:bg-green-300">
      <h1>Header</h1>
      {Array(1000)
        .fill(null)
        .map((_, i) => (
          <ArtificialDelay key={i} />
        ))}
      <HydrationDetecter />
    </header>
  );
}

function Content() {
  return (
    <main className="p-4 has-[[data-hydrated]]:bg-green-300">
      <h2>Content</h2>
      {Array(1000)
        .fill(null)
        .map((_, i) => (
          <ArtificialDelay key={i} />
        ))}
      <HydrationDetecter />
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="p-4 border-r border-gray-500 w-[200px] shirnk-0 has-[[data-hydrated]]:bg-green-300 grow">
      <div className="grid gap-2">
        <Link href="/?a">Home</Link>
        <Link href="/?b">About</Link>
        <Link href="/?c">Contact</Link>
      </div>
      {Array(1000)
        .fill(null)
        .map((_, i) => (
          <ArtificialDelay key={i} />
        ))}
      <HydrationDetecter />
    </aside>
  );
}

function Footer() {
  return (
    <footer className="p-4 border-t border-gray-500 h-[160px] has-[[data-hydrated]]:bg-green-300">
      <h2>Footer</h2>
      {Array(1000)
        .fill(null)
        .map((_, i) => (
          <ArtificialDelay key={i} />
        ))}
      <HydrationDetecter />
    </footer>
  );
}
