export default function Navbar() {
  return (
    <header className="border-b border-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400"
        >
          ZenDM
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="/features" className="transition hover:text-white">
            Features
          </a>
          <a href="/pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a
            href="/demo"
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-white transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            Book Demo
          </a>
        </nav>
      </div>
    </header>
  );
}