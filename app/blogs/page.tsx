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
        <h1 className="text-lg font-bold text-brand tracking-[0.09em] sm:text-xl">
           <span className="text-[#b8c2d9]"> ALL</span> BLOGS
          </h1>
        
        <BlogIndex items={sortedPosts.map(toMeta)} />
      </main>
    </>
  );
}