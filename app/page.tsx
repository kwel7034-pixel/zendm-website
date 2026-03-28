"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="mb-6 inline-flex rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-400"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Campaign Infrastructure for Prop Firms
            </motion.p>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold leading-[1] tracking-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              Turn your Discord into a{" "}
              <span className="text-zinc-400">revenue system</span>, not just a
              community.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              ZenDM helps prop firms run structured campaigns across Discord —
              from failed trader recovery to onboarding and reactivation — with
              clearer targeting, cleaner execution, and measurable revenue impact.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
            >
              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book Demo
              </a>

              <a
                href="/features"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                Explore Features
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              <span>Built for prop firm communities</span>
              <span>Campaign-based execution</span>
              <span>Revenue-first analytics</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="border-y border-zinc-900 bg-zinc-950/40">
        <motion.div
          className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-sm text-zinc-400 md:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </section>

      {/* VALUE PILLARS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          {[
            {
              label: "Campaigns",
              title: "Structured campaign execution",
              text: "Run recovery, onboarding, discount, and reactivation campaigns with clear objectives and controlled delivery.",
            },
            {
              label: "Segmentation",
              title: "Behavior-based targeting",
              text: "Target traders based on lifecycle stage, activity, or conversion signals — not just broad server roles.",
            },
            {
              label: "Analytics",
              title: "Revenue-first tracking",
              text: "Understand which campaigns generate clicks, conversions, and real revenue — not just message delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, borderColor: "#3f3f46" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POSITIONING SHIFT */}
      <motion.section
        className="border-t border-zinc-900"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            This is not a mass messaging tool
          </h2>

          <p className="mt-6 text-zinc-400">
            ZenDM is a campaign and revenue infrastructure layer designed
            specifically for prop firms operating Discord-based communities.
          </p>
        </div>
      </motion.section>

      {/* TRUST / PROOF BLOCKS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Focused on one niche",
                text: "Built specifically around prop firm use cases like failed trader recovery, onboarding flows, retry offers, and reactivation campaigns.",
              },
              {
                title: "Designed around outcomes",
                text: "The platform is framed around campaigns, segments, conversion quality, and revenue visibility — not just sending more messages.",
              },
              {
                title: "Built for operational clarity",
                text: "Clean workflows, simple campaign setup, and focused reporting make it easier for teams to execute consistently.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, borderColor: "#3f3f46" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          <motion.div
            className="mt-12 overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30"
            initial={{ opacity: 0, y: 34, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
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
                  {[
                    ["Revenue", "$48,320", "Attributed campaign revenue"],
                    ["CTR", "6.8%", "Average click-through rate"],
                    ["Conversion", "312", "Tracked conversions"],
                  ].map(([label, value, sub], index) => (
                    <motion.div
                      key={label}
                      className="rounded-2xl border border-zinc-800 bg-black p-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {label}
                      </p>
                      <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-2 text-xs text-zinc-500">{sub}</p>
                    </motion.div>
                  ))}
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
                    {[
                      [
                        "Failed Challenge Recovery",
                        "Targeting inactive and failed traders",
                        "$18,240",
                        "4.9% conversion",
                      ],
                      [
                        "25% Retry Discount Campaign",
                        "Discount-focused reactivation flow",
                        "$12,880",
                        "6.1% conversion",
                      ],
                      [
                        "New Trader Activation",
                        "Onboarding sequence for new joiners",
                        "$9,430",
                        "5.3% conversion",
                      ],
                    ].map(([title, desc, amount, rate], index) => (
                      <motion.div
                        key={title}
                        className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-white">{title}</p>
                            <p className="mt-1 text-xs text-zinc-500">{desc}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-white">{amount}</p>
                            <p className="mt-1 text-xs text-zinc-500">{rate}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
                    {[
                      ["Failed traders", "12,480"],
                      ["Inactive members", "8,920"],
                      ["Funded traders", "1,340"],
                      ["New joiners", "3,110"],
                    ].map(([label, value], index) => (
                      <motion.div
                        key={label}
                        className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <span className="text-sm text-zinc-300">{label}</span>
                        <span className="text-sm text-white">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-black p-6">
                  <p className="text-sm font-medium text-white">Campaign Status</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Current execution layer
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Active delivery", "84%"],
                      ["Segment coverage", "71%"],
                      ["Tracking completeness", "92%"],
                    ].map(([label, pct], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                          <span>{label}</span>
                          <span>{pct}</span>
                        </div>
                        <div className="h-2 rounded-full bg-zinc-900">
                          <motion.div
                            className="h-2 rounded-full bg-white"
                            initial={{ width: 0 }}
                            whileInView={{ width: pct }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 + index * 0.08 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON */}
      <motion.section
        className="border-t border-zinc-900"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
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

            {[
              ["Prop firm positioning", "Built specifically for prop firms", "Broad multi-niche messaging"],
              ["Trader lifecycle campaigns", "Yes", "Usually absent"],
              ["Revenue-focused analytics", "Core workflow", "Often delivery-first"],
              ["Audience targeting", "Behavior-based segmentation", "Basic filters"],
              ["Execution experience", "Modern, focused, campaign-driven", "General dashboard approach"],
            ].map(([left, middle, right], index, arr) => (
              <motion.div
                key={left}
                className={`grid grid-cols-3 px-6 py-5 text-sm ${
                  index !== arr.length - 1 ? "border-b border-zinc-900" : ""
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="text-zinc-300">{left}</div>
                <div className="text-white">{middle}</div>
                <div className="text-zinc-500">{right}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="border-t border-zinc-900"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
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
      </motion.section>
    </main>
  );
}