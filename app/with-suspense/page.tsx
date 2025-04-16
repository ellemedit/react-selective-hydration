"use client";

import Link from "next/link";
import { Suspense } from "react";
import ArtificialDelay from "~/components/ArtificialDelay";
import { HydrationDetecter } from "~/components/HydrationDetecter";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Suspense>
        <Header />
      </Suspense>
      <div className="flex flex-1">
        <Suspense>
          <Sidebar />
        </Suspense>
        <Suspense>
          <Content />
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
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
      <UrgentButton />
    </header>
  );
}

function Content() {
  return (
    <main className="p-4 has-[[data-hydrated]]:bg-green-300 grow">
      <h2>Content</h2>
      {Array(1000)
        .fill(null)
        .map((_, i) => (
          <ArtificialDelay key={i} />
        ))}
      <HydrationDetecter />
      <UrgentButton />
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="p-4 border-r border-gray-500 w-[300px] shirnk-0 has-[[data-hydrated]]:bg-green-300">
      <div className="grid gap-2">
        <Link href="/with-suspense?a">Home</Link>
        <Link href="/with-suspense?b">About</Link>
        <Link href="/with-suspense?c">Contact</Link>
      </div>
      {Array(1000)
        .fill(null)
        .map((_, i) => (
          <ArtificialDelay key={i} />
        ))}
      <HydrationDetecter />
      <UrgentButton />
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
      <UrgentButton />
    </footer>
  );
}

function UrgentButton() {
  return (
    <button className="bg-black text-white rounded font-bold px-3 py-1 cursor-pointer hover:bg-black/80 active:bg-black/60 transition-colors">
      Make This Area Urgent !!!
    </button>
  );
}
