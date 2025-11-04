import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay that does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-rose-500" /> Available for freelance
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Hi, I’m <span className="underline decoration-rose-400 decoration-4 underline-offset-4">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600 md:text-lg">
          UI/UX designer crafting minimalist, human-centered interfaces and thoughtful interactions.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
