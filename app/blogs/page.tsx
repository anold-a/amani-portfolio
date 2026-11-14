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
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-28">  
       <h1 className="text-4xl font-medium tracking-tight text-[#111] sm:text-5xl">Notebook</h1>
       
        <p className="mt-3 max-w-xl text-[#6b6b6b]">
          Notes and write-ups on web development, tooling and learning in public.
        </p>
        
        <BlogIndex items={sortedPosts.map(toMeta)} />
      </main>
    </>
  );
}