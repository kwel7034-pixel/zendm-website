"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function FeaturesPage() {
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
              Features
            </motion.p>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold leading-[1] tracking-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              Campaign infrastructure built for{" "}
              <span className="text-zinc-400">prop firm execution</span>.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              ZenDM is designed to help prop firms run structured campaigns,
              improve trader targeting, and measure performance against actual
              business outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          {[
            {
              title: "Campaign Workflows",
              text: "Build recovery, onboarding, retry, and reactivation campaigns with a structure designed for prop firm funnels and operational consistency.",
            },
            {
              title: "Behavior-Based Segmentation",
              text: "Target traders based on lifecycle stage, activity level, and conversion intent instead of broad one-size-fits-all groups.",
            },
            {
              title: "Revenue-Focused Analytics",
              text: "Track the outcomes that matter — clicks, conversions, segment performance, and revenue impact from each campaign.",
            },
            {
              title: "Operational Clarity",
              text: "Keep execution simple with a focused interface that helps teams launch campaigns faster and review results clearly.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, borderColor: "#3f3f46" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <motion.section
        className="border-t border-zinc-900"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Campaigns
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Recovery, onboarding, retry, and reactivation flows
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Segmentation
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Lifecycle-aware targeting for higher conversion quality
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Reporting
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Clear performance visibility tied to revenue outcomes
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
            Explore the system behind better campaign execution
          </h2>

          <p className="mt-4 text-zinc-400">
            ZenDM is built to help prop firm teams move from scattered outreach
            to structured, measurable campaigns.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/demo"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Book Demo
            </a>

            <a
              href="/pricing"
              className="rounded-xl border border-zinc-800 px-6 py-3 text-sm text-white transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              View Pricing
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}