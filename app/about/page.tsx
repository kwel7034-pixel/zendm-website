export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
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
            <a href="/about" className="text-white">
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

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
            About
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Built for prop firms that want clearer campaign execution
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            ZenDM is a campaign and revenue infrastructure platform designed for
            prop firms operating Discord-based communities. It focuses on
            structured execution, better targeting, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">Why ZenDM exists</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Most Discord marketing tools are generic. ZenDM is being built
              specifically for prop firm communities that need better structure,
              better targeting, and a stronger link between campaigns and revenue.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">What it is designed to do</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              ZenDM helps teams run onboarding, recovery, reactivation, and
              conversion-focused campaigns with a cleaner workflow and more
              visibility into performance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}