import Navbar from "../components/Navbar";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Pricing
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Clear pricing for prop firm campaign infrastructure
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            ZenDM is priced for operators who want structured campaign execution,
            clearer targeting, and revenue-focused reporting.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Professional
              </p>
              <h2 className="mt-4 text-4xl font-semibold">$385/mo</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Built for prop firms that want a focused campaign system with
                segmentation, analytics, and cleaner operational workflows.
              </p>

              <div className="mt-8 space-y-3 text-sm text-zinc-300">
                <p>• Structured campaign workflows</p>
                <p>• Behavior-based segmentation</p>
                <p>• Revenue-focused reporting</p>
                <p>• Clear execution interface</p>
                <p>• Priority support</p>
              </div>

              <a
                href="/demo"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book Demo
              </a>
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Enterprise
              </p>
              <h2 className="mt-4 text-4xl font-semibold">Custom</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                For larger operations that need multi-server support, deeper
                customization, or expanded execution requirements.
              </p>

              <div className="mt-8 space-y-3 text-sm text-zinc-300">
                <p>• Custom workflows</p>
                <p>• Multi-server support</p>
                <p>• Advanced implementation scope</p>
                <p>• Higher-touch onboarding</p>
                <p>• Custom commercial terms</p>
              </div>

              <a
                href="/demo"
                className="mt-8 inline-flex rounded-xl border border-zinc-800 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}