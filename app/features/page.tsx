import Navbar from "../components/Navbar";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Features
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Campaign infrastructure for prop firm communities
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            ZenDM is built to help prop firms run structured campaigns, improve
            targeting, and understand which actions drive actual revenue.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">Campaign Workflows</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Build recovery, onboarding, retry, and reactivation campaigns with
              a structure designed for prop firm funnels.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">Behavior-Based Segmentation</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Target traders based on lifecycle stage, activity level, and
              conversion intent instead of broad one-size-fits-all groups.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">Revenue-Focused Analytics</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Track the outcomes that matter — clicks, conversions, segment
              performance, and revenue impact from each campaign.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">Operational Clarity</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Keep execution simple with a focused interface that helps teams
              launch campaigns faster and review results clearly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}