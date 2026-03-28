"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <motion.div
            className="max-w-3xl text-center md:text-left"
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
              Book Demo
            </motion.p>

            <motion.h1
              className="text-4xl font-semibold leading-[1] tracking-tight text-white md:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              See how ZenDM fits your{" "}
              <span className="text-zinc-400">prop firm workflow</span>.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              We’ll walk you through how campaigns, segmentation, and analytics
              work together to improve trader conversion, recovery, and retention.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="rounded-[32px] border border-zinc-900 bg-zinc-950 p-8 md:p-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              What to expect
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Workflow walkthrough",
                  text: "See how ZenDM supports campaign execution, targeting, and performance visibility.",
                },
                {
                  title: "Use-case discussion",
                  text: "We’ll map the platform to recovery, onboarding, retry, and reactivation flows.",
                },
                {
                  title: "Commercial fit",
                  text: "Understand whether ZenDM fits your current team, funnel, and community structure.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20 md:p-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h2 className="text-2xl font-semibold">Request a demo</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Fill this out and we’ll reach out within 24–48 hours.
            </p>

            <form
              action="https://formspree.io/f/xkopgeon"
              method="POST"
              className="mt-8 space-y-6"
            >
              <div>
                <label className="text-sm text-zinc-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Company / Prop Firm
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your firm name"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Monthly Volume (Optional)
                </label>
                <input
                  type="text"
                  name="volume"
                  placeholder="e.g. 5,000 traders"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white"
                />
              </div>

              <input
                type="hidden"
                name="_redirect"
                value="https://zendm-website.vercel.app/success"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Request Demo
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-zinc-500">
              Demo requests are reviewed manually for fit.
            </p>
          </motion.div>
        </div>
      </section>

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
            Ready to see the system in context?
          </h2>

          <p className="mt-4 text-zinc-400">
            We’ll show you how ZenDM fits campaign execution for prop firm communities.
          </p>
        </div>
      </motion.section>
    </main>
  );
}