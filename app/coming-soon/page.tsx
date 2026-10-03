import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import Countdown from "@/components/coming-soon/Countdown";
import UpcomingCard from "@/components/coming-soon/UpcomingCard";
import { upcoming } from "@/lib/upcoming";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Coming soon | Arnold Amani",
  description: "Projects I am still building, with honest progress and launch targets.",
};

export default function ComingSoonPage() {
  const dated = upcoming
    .filter((p) => p.target)
    .sort((a, b) => new Date(a.target as string).getTime() - new Date(b.target as string).getTime());
  const next = dated[0];

  const mailto =
    "mailto:" + profile.email + "?subject=" + encodeURIComponent("Let me know when your next project launches");

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <Link href="/" className="flex items-center gap-2 font-semibold transition hover:text-brand">
            <ArrowLeft size={16} /> Portfolio
          </Link>
          <span className="font-normal text-sm">the workbench</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <p className="font-hand text-2xl ">still on the workbench</p>
        <h1 className="mt-1 font-display text-5xl font-black tracking-tight sm:text-7xl">
          Coming <span>soon</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          These are the projects I am still building. The progress bars are worked out from real checklists, so they
          only move when something is actually finished.
        </p>

        <div className="mt-10">
          {next ? (
            <>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Next launch target: <span className="text-ink">{next.name}</span>
              </p>
              <Countdown target={next.target as string} />
            </>
          ) : (
            <p className="font-hand text-2xl text-muted">
              no launch dates yet. I would rather not promise what I cannot ship.
            </p>
          )}
        </div>

        <section aria-label="Projects in progress" className="mt-16">
          {upcoming.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {upcoming.map((p) => (
                <UpcomingCard key={p.slug} p={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-line p-10 text-center">
              <p className="font-hand text-3xl text-accent">the workbench is empty</p>
              <p className="mt-2 text-muted">Everything has shipped. Check the projects section.</p>
            </div>
          )}
        </section>

        <section className="mt-16 rounded-lg border border-line bg-card p-8 shadow-[5px_5px_0_0_var(--line)]">
          <h2 className="font-display text-2xl font-bold">Want to know when something ships?</h2>
          <p className="mt-2 max-w-xl text-muted">
            Send me a quick email and I will let you know when it is live, or follow the repositories on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              <Mail size={16} /> Notify me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:border-ink"
            >
              Follow on GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}