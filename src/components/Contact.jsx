import React from 'react';
import { Mail, Github, Linkedin, Figma } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">Let’s build something great</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            I’m currently taking on a limited number of projects. Share a few details and I’ll get back to you within 24–48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:bg-neutral-50"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:bg-neutral-50"
              >
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://www.figma.com/@yourhandle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:bg-neutral-50"
              >
                <Figma className="h-4 w-4" />
                <span className="hidden sm:inline">Figma</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Your Name — Portfolio
        </p>
      </div>
    </section>
  );
}
