import Navbar from "../components/Navbar";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Request Received
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          You're in.
        </h1>

        <p className="mt-6 text-zinc-400 leading-7">
          We’ve received your request. Our team will reach out within 24–48 hours
          to walk you through how ZenDM fits your prop firm.
        </p>

        <div className="mt-10 space-y-4">
          <p className="text-sm text-zinc-500">
            Want faster access?
          </p>

          <a
            href="https://calendly.com/"
            target="_blank"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Book instantly via Calendly
          </a>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="text-sm text-zinc-500 hover:text-white transition"
          >
            ← Back to homepage
          </a>
        </div>
      </section>
    </main>
  );
}