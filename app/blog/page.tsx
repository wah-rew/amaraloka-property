import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import FadeIn from "@/app/components/FadeIn";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const metadata = {
  title: "Blog | Amaraloka Property",
  description:
    "Panduan investasi properti, analisis kawasan, dan wawasan pasar dari tim Amaraloka Property.",
};

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <FadeIn>
          <p
            className="font-inter text-brass text-xs uppercase tracking-[0.25em] mb-4"
          >
            WAWASAN PROPERTI
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-navy leading-tight">
            Panduan &amp; Perspektif
          </h1>
          <p className="font-inter text-navy/60 text-base mt-4 max-w-xl leading-relaxed">
            Analisis mendalam, panduan praktis, dan wawasan pasar untuk investor
            properti yang serius.
          </p>
        </FadeIn>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="bg-white border border-sand h-full flex flex-col transition-shadow duration-300 group-hover:shadow-md">
                  {/* Category Badge */}
                  <div className="px-6 pt-6 pb-0">
                    <span className="inline-block font-inter text-xs uppercase tracking-[0.2em] text-brass border border-brass px-3 py-1">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
                    <h2 className="font-playfair text-xl text-navy leading-snug mb-3 group-hover:text-brass transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="font-inter text-sm text-navy/60 leading-relaxed flex-1 mb-6">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between border-t border-sand pt-4">
                      <span className="font-inter text-xs text-navy/40">
                        {formatDate(post.date)}
                      </span>
                      <span className="font-inter text-xs text-navy/40">
                        {post.readTime} baca
                      </span>
                    </div>
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
