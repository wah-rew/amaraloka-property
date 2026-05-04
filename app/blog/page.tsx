import Link from "next/link";
import { blogPosts } from "../../lib/blog-posts";
import FadeIn from "../components/FadeIn";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const metadata = {
  title: "Artikel | Amaraloka Property",
  description:
    "Panduan investasi properti, analisis kawasan, dan wawasan pasar dari tim Amaraloka Property.",
};

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        {/* Thin decorative top bar */}
        <div className="w-12 h-[3px] bg-brass mb-8" />
        <FadeIn>
          <p className="font-inter text-brass text-xs uppercase tracking-[0.25em] mb-5">
            WAWASAN PROPERTI
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-navy leading-tight">
            Panduan &amp; Perspektif
          </h1>
          <p className="font-inter text-navy/55 text-base mt-5 max-w-xl leading-relaxed">
            Analisis mendalam, panduan praktis, dan wawasan pasar untuk investor
            properti yang serius.
          </p>
        </FadeIn>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-0">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full flex flex-col py-8 border-b border-sand hover:shadow-sm transition-shadow duration-300">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-brass">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-playfair text-xl text-navy leading-snug mb-3 group-hover:text-brass transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-inter text-sm text-navy/55 leading-relaxed flex-1 mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta footer */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-inter text-xs text-navy/35">
                      {formatDate(post.date)}
                    </span>
                    <span className="font-inter text-xs text-navy/35">
                      {post.readTime} baca
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
