"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  // Simple prefers-reduced-motion safety
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } });
  }, [controls]);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans">

      {/* Warning Nav */}

      <div className="bg-yellow-500 p-4 text-center w-full">UNDER CONSTRUCTION</div>

      {/* Top Nav */}
      <header className="sticky inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-lg font-semibold tracking-tight">Filfla · Feelful Island</a>
          <div className="hidden gap-4 sm:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#geology">Geology</a>
            <a className="nav-link" href="#wildlife">Wildlife</a>
            <a className="nav-link" href="#history">History</a>
            <a className="nav-link" href="#visiting">Visiting</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </div>
          <a
            href="#visiting"
            className="rounded-full bg-cyan-400 px-4 py-2 text-slate-950 font-medium shadow-sm shadow-cyan-400/30 hover:bg-cyan-300 transition"
          >
            Plan Your Read
          </a>
        </nav>
      </header>

      {/* Hero / Landing */}
      <section id="top" className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Filfla_Island.jpg"
          alt="Filfla Island sea cliffs under a calm blue sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-1000/40 via-slate-990/50 to-slate-950" />

        {/* Centered title */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={controls}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Filfla — A Tiny Island With a Giant Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.8 } }}
            className="mt-4 text-base sm:text-lg text-slate-200"
          >
            Discover the geology, wildlife, and history of Malta’s southernmost dot in the Mediterranean.
          </motion.p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#about"
              className="rounded-full bg-white/95 text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-white transition"
            >
              Start Exploring
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              Photo Gallery
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
        >
          Scroll
        </a>
      </section>

      {/* Content Wrapper */}
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        {/* About */}
        <section id="about" className="scroll-mt-28 py-16">
          <h2 className="section-title">About Filfla</h2>
          <p className="section-body">
            Use this space to introduce Feelful/Filfla Island in clear, welcoming language. Keep 2–3 concise
            paragraphs. Include pronunciation, location (off Malta’s southern coast), and why it matters.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Coordinates", value: "~5 km south of Malta" },
              { label: "Area", value: "~0.06 km² (tiny!)" },
              { label: "Status", value: "Nature Reserve" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-cyan-300">{item.label}</div>
                <div className="mt-1 text-lg font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Geology */}
        <section id="geology" className="scroll-mt-28 py-16">
          <h2 className="section-title">Geology & Formation</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              Explain how the island formed, rock types, and distinctive cliffs. Add a simple diagram or bullet
              list of layers if helpful.
            </p>
            <ul>
              <li>Limestone terraces</li>
              <li>Sea-erosion shaping</li>
              <li>Conservation-sensitive geology</li>
            </ul>
          </div>
        </section>

        {/* Wildlife */}
        <section id="wildlife" className="scroll-mt-28 py-16">
          <h2 className="section-title">Wildlife & Habitat</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Birdlife</h3>
              <p className="mt-2 text-slate-200">Talk about nesting seabirds and protected species.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Flora & Micro-ecosystems</h3>
              <p className="mt-2 text-slate-200">Unique plants adapted to salt spray and cliffs.</p>
            </div>
          </div>
        </section>

        {/* History timeline */}
        <section id="history" className="scroll-mt-28 py-16">
          <h2 className="section-title">History at a Glance</h2>
          <ol className="relative mt-8 border-l border-white/10 pl-6">
            {[
              { year: "Ancient", text: "Early references / navigation marker." },
              { year: "20th C.", text: "Military use nearby; later protected." },
              { year: "Today", text: "Strict reserve with controlled access." },
            ].map((i) => (
              <li key={i.year} className="mb-8 ml-2">
                <span className="absolute -left-2 mt-1 h-3 w-3 rounded-full bg-cyan-400" />
                <div className="text-sm text-cyan-300">{i.year}</div>
                <div className="text-base font-medium">{i.text}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Visiting info */}
        <section id="visiting" className="scroll-mt-28 py-16">
          <h2 className="section-title">Visiting Responsibly</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="section-body">
              Outline protection rules, safe viewing distances, best vantage points from Malta, and how to
              respect wildlife. If access is restricted, explain alternatives.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="chip">No landing zones</span>
              <span className="chip">Binocular views</span>
              <span className="chip">Boat tours (licensed)</span>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-28 py-16">
          <h2 className="section-title">Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-video overflow-hidden rounded-xl border border-white/10">
                <img
                  src={`https://source.unsplash.com/collection/190727/800x45${n}`}
                  alt="Placeholder coastal scene"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 py-16">
          <h2 className="section-title">FAQ</h2>
          <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
            {[
              { q: "Can I visit the island?", a: "Add your official guidance here." },
              { q: "Why is it protected?", a: "Explain ecological and historical reasons." },
              { q: "Where can I see it best?", a: "List safe viewpoints on Malta’s coast." },
            ].map((item) => (
              <details key={item.q} className="group open:bg-white/5">
                <summary className="cursor-pointer list-none px-4 py-3 text-base font-medium hover:bg-white/5">
                  {item.q}
                </summary>
                <div className="px-4 pb-4 text-slate-200">{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Filfla · Feelful Island</p>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#visiting">Visiting</a>
              <a className="hover:text-white" href="#faq">FAQ</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global utility styles (Tailwind layer shortcuts) */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .section-title { @apply text-2xl sm:text-3xl font-bold tracking-tight text-cyan-300; }
        .section-body { @apply text-slate-200 max-w-3xl; }
        .chip { @apply rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200; }
        .nav-link { @apply rounded-full px-3 py-1 text-sm text-slate-200 hover:bg-white/10; }
      `}</style>
    </div>
  );
}
