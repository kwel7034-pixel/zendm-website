"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 transition duration-200 group-hover:border-zinc-700 group-hover:bg-zinc-900">
            <span className="text-xs font-semibold text-white">Z</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white">
              ZenDM
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Prop Firm Infrastructure
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-400 hover:bg-zinc-950 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="ml-2 h-6 w-px bg-zinc-800" />

          <Link
            href="/demo"
            className="group relative ml-2 inline-flex items-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:border-zinc-600 hover:bg-white hover:text-black"
          >
            <span className="relative z-10">Book Demo</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}