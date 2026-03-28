"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function AboutPage() {
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
              About
            </motion.p>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold leading-[1] tracking-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              Built for <span className="text-zinc-400">prop firm operators</span>, not generic marketers.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              ZenDM was created to solve a specific problem: prop firm communities
              running large Discord servers without a structured way to convert,
              recover, and retain traders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STORY BLOCKS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-6">
            {[
              {
                title: "The Problem",
                text: "Most Discord-based communities rely on announcements, promotions, and manual messaging without clear targeting or measurable outcomes. This creates noise, low conversion, and wasted opportunity across the funnel.",
              },
              {
                title: "The Shift",
                text: "ZenDM introduces a campaign-based approach — where actions are structured, audiences are segmented, and outcomes are tracked against revenue instead of activity alone.",
              },
              {
                title: "The Goal",
                text: "To give prop firm teams a clear operational layer for executing campaigns consistently, improving trader conversion, and building a more predictable growth system.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[28px] border border-zinc-900 bg-zinc-950 p-8 md:p-10"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, borderColor: "#3f3f46" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <h2 className="text-2xl font-semibold md:text-3xl">{item.title}</h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POSITION STRIP */}
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
              Market
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Built around monetized prop firm communities
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              System
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Structured campaign execution with segmentation and analytics
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Outcome
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Clearer conversion, recovery, and retention workflows
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
            Built for teams that want clarity, not noise
          </h2>

          <p className="mt-4 text-zinc-400">
            ZenDM is for operators who want a structured system behind campaign execution.
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