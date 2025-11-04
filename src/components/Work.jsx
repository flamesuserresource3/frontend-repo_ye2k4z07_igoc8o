import React from 'react';

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'A modular analytics system with real-time states and clear hierarchy.',
    tags: ['Dashboard', 'Design System', 'Web'],
    link: '#',
  },
  {
    title: 'Healthcare App',
    desc: 'Patient-first mobile flows with accessible patterns and calm visuals.',
    tags: ['Mobile', 'Accessibility', 'UX'],
    link: '#',
  },
  {
    title: 'SaaS Onboarding',
    desc: 'Frictionless signup with guided steps and progressive disclosure.',
    tags: ['Onboarding', 'Growth', 'Web'],
    link: '#',
  },
  {
    title: 'E-commerce PDP',
    desc: 'Conversion-focused product page with rich imagery and variants.',
    tags: ['E‑commerce', 'A/B Testing', 'UI'],
    link: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">Selected Work</h2>
            <p className="mt-2 text-neutral-600">A snapshot of recent projects and case studies.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 md:inline-block">
            Request full portfolio
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50" />
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-block text-sm font-medium text-rose-600 opacity-0 transition group-hover:opacity-100">
                View case study →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
