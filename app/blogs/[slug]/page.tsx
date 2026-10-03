import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import BlogHeader from "@/components/homepage/blog/BlogHeader";
import CopyLink from "@/components/homepage/blog/CopyLink";
import PostBody from "@/components/homepage/blog/PostBody";
import PostCover from "@/components/homepage/blog/PostCover";
import Toc from "@/components/homepage/blog/Toc";
import Tag from "@/components/layout/Tag";
import { formatDate, getAdjacent, getPost, posts, readingTime, slugify } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Arnold Amani`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { newer, older } = getAdjacent(slug);
  const headings = post.content.flatMap((b) =>
    b.type === "h2" ? [{ id: slugify(b.text), text: b.text }] : []
  );

  return (
    <>
      <BlogHeader />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-24">
        <article>
          <header>
            <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
              <span className="flex items-center gap-2"><Calendar size={14} /> {formatDate(post.date)}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {readingTime(post)} min read</span>
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{post.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </header>

          <div className="mt-10 max-w-3xl -rotate-1 rounded-sm  backdrop-blur-md shadow-2xl border border-white/20 p-6">
            <span className="font-bold text-3xl leading-none ">text</span>
            <p className="mt-1 text-sm">{post.intro}</p>
          </div>

          <PostCover
            title={post.title}
            src={post.cover}
            tag={post.tags[0]}
            className="mt-10 aspect-21/9 rounded-lg border border-line"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_14rem]">
            <aside className="lg:col-start-2 lg:row-start-1">
              <Toc headings={headings} />
            </aside>

            <div className="min-w-0 max-w-3xl lg:col-start-1 lg:row-start-1">
              <PostBody blocks={post.content} />

              <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className=" text-sm ">enjoyed this? pass it on</p>
                <CopyLink />
              </div>

              <nav aria-label="More notes" className="mt-10 grid gap-4 sm:grid-cols-2">
                {newer ? (
                  <Link href={`/blogs/${newer.slug}`} className=" rounded-lg border border-line bg-card p-5">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                      <ArrowLeft size={14} /> Newer
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold">{newer.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {older ? (
                  <Link href={`/blogs/${older.slug}`} className=" rounded-lg border border-line bg-card p-5 sm:text-right">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted sm:justify-end">
                      Older <ArrowRight size={14} />
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold">{older.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}