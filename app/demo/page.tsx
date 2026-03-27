export default function DemoPage() {
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
            <a href="/about" className="transition hover:text-white">
              About
            </a>
            <a
              href="/demo"
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-white"
            >
              Book Demo
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Book Demo
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            See how ZenDM fits your prop firm workflow
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Book a walkthrough to see how ZenDM can support campaign execution,
            segmentation, and revenue-focused reporting for your Discord community.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
          <h2 className="text-2xl font-semibold">Demo Request</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            For now, this can be replaced later with your Cal.com or Calendly embed.
          </p>

          <div className="mt-8 grid gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <input
              type="email"
              placeholder="Work email"
              className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <input
              type="text"
              placeholder="Company"
              className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <textarea
              placeholder="Tell us a bit about your community"
              rows={5}
              className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}