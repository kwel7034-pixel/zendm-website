import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Campaign Infrastructure for Prop Firms
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Turn your Discord into a{" "}
            <span className="text-zinc-300">revenue system</span>, not just a
            community
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            ZenDM helps prop firms run structured campaigns across their Discord
            — from failed trader recovery to onboarding and reactivation —
            with visibility into performance, segmentation, and revenue impact.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/demo"
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:opacity-90"
            >
              Book Demo
            </a>

            <a
              href="/features"
              className="rounded-xl border border-zinc-800 px-6 py-3 text-center text-sm font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="border-y border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-sm text-zinc-400 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Focus
            </p>
            <p className="mt-2 text-white">Built for prop firm communities</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Model
            </p>
            <p className="mt-2 text-white">Campaign-based execution</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Core layer
            </p>
            <p className="mt-2 text-white">Segmentation + analytics</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Objective
            </p>
            <p className="mt-2 text-white">Recover, convert, and retain traders</p>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Campaigns
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Structured campaign execution
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Run recovery, onboarding, discount, and reactivation campaigns
              with clear objectives and controlled delivery.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Segmentation
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Behavior-based targeting
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Target traders based on lifecycle stage, activity, or conversion
              signals — not just broad server roles.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Analytics
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Revenue-first tracking
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Understand which campaigns generate clicks, conversions, and real
              revenue — not just message delivery.
            </p>
          </div>
        </div>
      </section>

      {/* POSITIONING SHIFT */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            This is not a mass messaging tool
          </h2>

          <p className="mt-6 text-zinc-400">
            ZenDM is a campaign and revenue infrastructure layer designed
            specifically for prop firms operating Discord-based communities.
          </p>
        </div>
      </section>

      {/* TRUST / PROOF BLOCKS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Why Teams Trust ZenDM
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Designed for operators who care about execution
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              ZenDM is positioned for firms that want structure, clearer
              targeting, and measurable campaign outcomes instead of scattered
              promotions and guesswork.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
              <h3 className="text-lg font-semibold">Focused on one niche</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Built specifically around prop firm use cases like failed trader
                recovery, onboarding flows, retry offers, and reactivation
                campaigns.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
              <h3 className="text-lg font-semibold">Designed around outcomes</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                The platform is framed around campaigns, segments, conversion
                quality, and revenue visibility — not just sending more messages.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
              <h3 className="text-lg font-semibold">Built for operational clarity</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Clean workflows, simple campaign setup, and focused reporting
                make it easier for teams to execute consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Dashboard Preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              A focused interface built for campaign execution
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              ZenDM is designed to make campaign planning, targeting, and performance
              tracking feel simple, fast, and operationally clear.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30">
            <div className="border-b border-zinc-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Campaign Overview</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Performance snapshot for active prop firm campaigns
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-black px-4 py-2 text-xs text-zinc-300">
                  Last 30 days
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Revenue
                    </p>
                    <p className="mt-4 text-2xl font-semibold text-white">$48,320</p>
                    <p className="mt-2 text-xs text-zinc-500">
                      Attributed campaign revenue
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      CTR
                    </p>
                    <p className="mt-4 text-2xl font-semibold text-white">6.8%</p>
                    <p className="mt-2 text-xs text-zinc-500">
                      Average click-through rate
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Conversion
                    </p>
                    <p className="mt-4 text-2xl font-semibold text-white">312</p>
                    <p className="mt-2 text-xs text-zinc-500">
                      Tracked conversions
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-black p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Campaign Performance</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Active campaigns and recent outcomes
                      </p>
                    </div>

                    <div className="text-xs text-zinc-500">Updated 2 mins ago</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Failed Challenge Recovery
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            Targeting inactive and failed traders
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">$18,240</p>
                          <p className="mt-1 text-xs text-zinc-500">4.9% conversion</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-white">
                            25% Retry Discount Campaign
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            Discount-focused reactivation flow
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">$12,880</p>
                          <p className="mt-1 text-xs text-zinc-500">6.1% conversion</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-white">
                            New Trader Activation
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            Onboarding sequence for new joiners
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">$9,430</p>
                          <p className="mt-1 text-xs text-zinc-500">5.3% conversion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-zinc-800 bg-black p-6">
                  <p className="text-sm font-medium text-white">Audience Segments</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    High-value campaign targets
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                      <span className="text-sm text-zinc-300">Failed traders</span>
                      <span className="text-sm text-white">12,480</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                      <span className="text-sm text-zinc-300">Inactive members</span>
                      <span className="text-sm text-white">8,920</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                      <span className="text-sm text-zinc-300">Funded traders</span>
                      <span className="text-sm text-white">1,340</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                      <span className="text-sm text-zinc-300">New joiners</span>
                      <span className="text-sm text-white">3,110</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-black p-6">
                  <p className="text-sm font-medium text-white">Campaign Status</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Current execution layer
                  </p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                        <span>Active delivery</span>
                        <span>84%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-900">
                        <div className="h-2 w-[84%] rounded-full bg-white" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                        <span>Segment coverage</span>
                        <span>71%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-900">
                        <div className="h-2 w-[71%] rounded-full bg-zinc-400" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                        <span>Tracking completeness</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-900">
                        <div className="h-2 w-[92%] rounded-full bg-zinc-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Why ZenDM
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Built for prop firms, not generic Discord marketing
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              ZenDM is designed around trader funnels, revenue campaigns, and
              prop firm execution — not broad one-size-fits-all messaging.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950">
            <div className="grid grid-cols-3 border-b border-zinc-900 px-6 py-4 text-sm text-zinc-400">
              <div>Capability</div>
              <div className="text-white">ZenDM</div>
              <div>Generic Tools</div>
            </div>

            <div className="grid grid-cols-3 border-b border-zinc-900 px-6 py-5 text-sm">
              <div className="text-zinc-300">Prop firm positioning</div>
              <div className="text-white">Built specifically for prop firms</div>
              <div className="text-zinc-500">Broad multi-niche messaging</div>
            </div>

            <div className="grid grid-cols-3 border-b border-zinc-900 px-6 py-5 text-sm">
              <div className="text-zinc-300">Trader lifecycle campaigns</div>
              <div className="text-white">Yes</div>
              <div className="text-zinc-500">Usually absent</div>
            </div>

            <div className="grid grid-cols-3 border-b border-zinc-900 px-6 py-5 text-sm">
              <div className="text-zinc-300">Revenue-focused analytics</div>
              <div className="text-white">Core workflow</div>
              <div className="text-zinc-500">Often delivery-first</div>
            </div>

            <div className="grid grid-cols-3 border-b border-zinc-900 px-6 py-5 text-sm">
              <div className="text-zinc-300">Audience targeting</div>
              <div className="text-white">Behavior-based segmentation</div>
              <div className="text-zinc-500">Basic filters</div>
            </div>

            <div className="grid grid-cols-3 px-6 py-5 text-sm">
              <div className="text-zinc-300">Execution experience</div>
              <div className="text-white">Modern, focused, campaign-driven</div>
              <div className="text-zinc-500">General dashboard approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Start running campaigns that actually convert
          </h2>

          <p className="mt-4 text-zinc-400">
            Replace guesswork with structured execution and measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/demo"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Book Demo
            </a>

            <a
              href="/features"
              className="rounded-xl border border-zinc-800 px-6 py-3 text-sm text-white transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}