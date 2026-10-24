import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import BlogHeader from "@/components/homepage/blog/BlogHeader";
import CopyLink from "@/components/homepage/blog/CopyLink";
import PostBody from "@/components/homepage/blog/PostBody";
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
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
    },
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

      <main className="min-h-screen bg-[#fdf8f2] px-5 pb-20 pt-28 text-[#17131a] sm:px-8 lg:px-10">
        <article className="mx-auto max-w-6xl">
          <header className="mb-12">
            <p className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-wider text-[#716873]">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {readingTime(post)} min read
              </span>
            </p>

              
            <h1 className=" text-brand text-lg font-bold tracking-[0.09em] sm:text-xl">
              {post.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#716873] sm:text-lg">
              {post.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 flex h-0.75 w-64 max-w-full bg-[#eee9e4]">
              <span className="w-12 shrink-0 bg-brand" />
            </div>
          </header>

          <section
            aria-labelledby="context-heading"
            className="mb-12 max-w-3xl  bg-white/50 px-6 py-5"
          >
            <h2
              id="context-heading"
              className="text-xs font-bold uppercase tracking-[0.09em] text-brand"
            >
              Context
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#514852]">
              {post.intro}
            </p>
          </section>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_14rem]">
            <div className="min-w-0 max-w-3xl lg:col-start-1 lg:row-start-1">
              <PostBody blocks={post.content} />

              <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#e6ded7] pt-6">
                <p className="text-sm text-[#716873]">
                  Enjoyed this? Pass it on.
                </p>
                <CopyLink />
              </div>

              <nav
                aria-label="More notes"
                className="mt-10 grid gap-4 sm:grid-cols-2"
              >
                {newer ? (
                  <Link
                    href={`/blogs/${newer.slug}`}
                    className="rounded-lg border border-[#e6ded7] bg-white/50 p-5 transition hover:border-brand/50"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#716873]">
                      <ArrowLeft size={14} />
                      Newer
                    </span>
                    <span className="mt-2 block text-lg font-normal">
                      {newer.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}

                {older ? (
                  <Link
                    href={`/blogs/${older.slug}`}
                    className="rounded-lg border border-[#e6ded7] bg-white/50 p-5 transition hover:border-brand/50 sm:text-right"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#716873] sm:justify-end">
                      Older
                      <ArrowRight size={14} />
                    </span>
                    <span className="mt-2 block text-lg font-normal">
                      {older.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            </div>

            <aside className="lg:col-start-2 lg:row-start-1">
                <Toc headings={headings} />
              
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
