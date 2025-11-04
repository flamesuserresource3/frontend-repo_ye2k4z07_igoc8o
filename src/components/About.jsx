import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">About</h2>
            <p className="mt-3 text-neutral-600">
              I design clean, modern interfaces with a focus on clarity and effortless usability. From early research
              to polished prototypes, I collaborate closely with teams to solve real problems and ship delightful
              products.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">Expertise</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-800 sm:grid-cols-3">
                <li className="rounded-lg bg-neutral-50 p-3">Product Design</li>
                <li className="rounded-lg bg-neutral-50 p-3">UI Systems</li>
                <li className="rounded-lg bg-neutral-50 p-3">Prototyping</li>
                <li className="rounded-lg bg-neutral-50 p-3">Design Strategy</li>
                <li className="rounded-lg bg-neutral-50 p-3">Accessibility</li>
                <li className="rounded-lg bg-neutral-50 p-3">Design Ops</li>
              </ul>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wider text-neutral-500">Toolbox</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Figma','Framer','Notion','Jira','Illustrator','After Effects'].map((t) => (
                  <span key={t} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
