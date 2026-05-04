import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllSlugs } from "../../../lib/blog-posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artikel tidak ditemukan | Amaraloka Property" };

  return {
    title: `${post.title} | Amaraloka Property`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen">
      {/* Decorative top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-brass z-50" />

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 pt-28 pb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-inter text-xs text-navy/40 hover:text-brass transition-colors duration-200 mb-10 tracking-wide uppercase"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Kembali ke Blog
        </Link>

        {/* Dateline: category + date on same line, small caps */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-inter text-xs tracking-[0.2em] text-brass uppercase">
            {post.category}
          </span>
          <span className="text-navy/20">·</span>
          <span className="font-inter text-xs tracking-[0.12em] text-navy/35 uppercase">
            {formatDate(post.date)}
          </span>
          <span className="text-navy/20">·</span>
          <span className="font-inter text-xs tracking-[0.12em] text-navy/35 uppercase">
            {post.readTime} baca
          </span>
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl text-navy leading-tight mb-5 max-w-xl">
          {post.title}
        </h1>

        <p className="font-inter text-base text-navy/50 leading-relaxed max-w-lg mt-4">
          {post.excerpt}
        </p>

        {/* Thin divider below hero */}
        <div className="mt-10 h-px bg-sand" />
      </section>

      {/* Article Content */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 pt-10 pb-20">
        <div
          className="
            [&_h2]:font-playfair [&_h2]:text-3xl [&_h2]:text-navy [&_h2]:font-normal [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-brass/30
            [&_h3]:font-playfair [&_h3]:text-xl [&_h3]:text-navy/80 [&_h3]:italic [&_h3]:font-normal [&_h3]:mt-10 [&_h3]:mb-4
            [&_p]:font-inter [&_p]:text-[17px] [&_p]:leading-[1.85] [&_p]:text-navy/65 [&_p]:mb-6
            [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:pl-4
            [&_li]:font-inter [&_li]:text-[16px] [&_li]:text-navy/65 [&_li]:leading-relaxed [&_li]:list-none [&_li]:pl-5 [&_li]:relative
            [&_li]:before:content-['·'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-brass [&_li]:before:font-bold [&_li]:before:text-lg
            [&_strong]:text-navy [&_strong]:font-semibold
            [&_blockquote]:border-l-2 [&_blockquote]:border-brass [&_blockquote]:pl-6 [&_blockquote]:my-10 [&_blockquote]:italic [&_blockquote]:font-playfair [&_blockquote]:text-2xl [&_blockquote]:text-navy/70 [&_blockquote]:leading-snug
            [&_p:first-child]:first-letter:text-[4.5rem] [&_p:first-child]:first-letter:font-playfair [&_p:first-child]:first-letter:text-brass [&_p:first-child]:first-letter:float-left [&_p:first-child]:first-letter:leading-[0.8] [&_p:first-child]:first-letter:mr-3 [&_p:first-child]:first-letter:mt-1
            [&_hr]:border-none [&_hr]:h-px [&_hr]:bg-sand [&_hr]:my-12
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-inter text-brass text-xs uppercase tracking-[0.25em] mb-4">
            INVESTASI PROPERTI PREMIUM
          </p>
          <h2 className="font-playfair text-3xl text-white mb-4">
            Tertarik dengan Hekfield Rempoa?
          </h2>
          <p className="font-inter text-cream/60 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Properti kost eksklusif di Rempoa, Jakarta Selatan. Yield kompetitif
            dengan lokasi strategis dekat TB Simatupang dan MRT Lebak Bulus.
          </p>
          <Link
            href="/projects/hekfield"
            className="inline-block px-8 py-3 bg-brass text-white font-inter text-sm tracking-wide hover:bg-brass/90 transition-colors duration-200"
          >
            Lihat Proyek Hekfield
          </Link>
        </div>
      </section>
    </main>
  );
}
