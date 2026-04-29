import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllSlugs } from "@/lib/blog-posts";
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
    <main className="bg-cream min-h-screen pt-24">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 lg:px-10 pt-10 pb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-inter text-sm text-navy/50 hover:text-brass transition-colors duration-200 mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Kembali ke Blog
        </Link>

        <div className="mb-4">
          <span className="inline-block font-inter text-xs uppercase tracking-[0.2em] text-brass border border-brass px-3 py-1">
            {post.category}
          </span>
        </div>

        <h1 className="font-playfair text-3xl md:text-4xl text-navy leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-xs font-inter text-navy/40 pb-8 border-b border-sand">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime} baca</span>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-16">
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-playfair prose-headings:text-navy prose-headings:font-normal
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:font-inter prose-p:text-navy/70 prose-p:leading-relaxed prose-p:text-base
            prose-li:font-inter prose-li:text-navy/70 prose-li:text-base
            prose-strong:text-navy prose-strong:font-semibold
            prose-ul:my-4 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
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
