import type { Metadata } from "next";
import BlogHeader from "@/components/homepage/blog/BlogHeader";
import BlogIndex from "@/components/homepage/blog/BlogIndex";
import { sortedPosts, toMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notebook | Arnold Amani",
  description: "Notes and write-ups on web development, tooling and learning in public.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogHeader />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-28">
        <p className="font-hand text-2xl text-accent">thinking out loud</p>
        <h1 className="mt-1 font-display text-4xl font-black tracking-tight sm:text-6xl">
          The <span className="marker">notebook</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Things I learned while building, written down so I do not forget them.
        </p>
        <BlogIndex items={sortedPosts.map(toMeta)} />
      </main>
    </>
  );
}