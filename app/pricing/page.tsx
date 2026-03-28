"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
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
              Pricing
            </motion.p>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold leading-[1] tracking-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              Clear pricing for{" "}
              <span className="text-zinc-400">prop firm campaign infrastructure</span>.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              ZenDM is priced for operators who want structured campaign execution,
              clearer targeting, and revenue-focused reporting without the noise of
              generic tools.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, borderColor: "#52525b" }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Professional
              </p>

              <div className="mt-6 flex items-end gap-2">
                <h2 className="text-5xl font-semibold">$385</h2>
                <span className="pb-1 text-zinc-500">/ month</span>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
                Built for prop firms that want a focused campaign system with
                segmentation, analytics, and cleaner operational workflows.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Structured campaign workflows",
                  "Behavior-based segmentation",
                  "Revenue-focused reporting",
                  "Clear execution interface",
                  "Priority support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-900 bg-black px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="/demo"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book Demo
              </a>
            </motion.div>

            <motion.div
              className="rounded-[32px] border border-zinc-900 bg-zinc-950 p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, borderColor: "#3f3f46" }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Enterprise
              </p>

              <div className="mt-6 flex items-end gap-2">
                <h2 className="text-5xl font-semibold">Custom</h2>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
                For larger operations that need multi-server support, deeper
                customization, or expanded execution requirements.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Custom workflows",
                  "Multi-server support",
                  "Advanced implementation scope",
                  "Higher-touch onboarding",
                  "Custom commercial terms",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-900 bg-black px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="/demo"
                className="mt-8 inline-flex rounded-xl border border-zinc-800 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                Talk to Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING STRIP */}
      <motion.section
        className="border-t border-zinc-900"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Positioning
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Built specifically for prop firm campaign execution
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Model
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Revenue-focused infrastructure, not generic DM tooling
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Commercial Flow
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Demo-led sales for qualified operators and teams
            </p>
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
            Choose the pricing path that fits your operation
          </h2>

          <p className="mt-4 text-zinc-400">
            ZenDM is designed to support prop firm teams that care about execution,
            targeting, and measurable campaign outcomes.
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
              Explore Features
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}