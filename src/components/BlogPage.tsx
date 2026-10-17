import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Blog | Select Overseas Education';
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden bg-[#00305c] text-white">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(243,146,0,0.2), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(0,75,141,0.8), transparent 55%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="container relative py-14 md:py-18">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            Latest news
          </p>
          <h1 className="mt-4 max-w-3xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Select Overseas Blog
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Insights on study visas, skilled migration and overseas careers — the same topics we publish
            on selectoverseaseducation.com.
          </p>
        </div>
      </section>

      <section className="container py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="rounded-full bg-accent-50 px-2.5 py-1 text-accent-700 ring-1 ring-accent-100">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {post.date}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-neutral-900 group-hover:text-primary-700">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition group-hover:gap-2.5 group-hover:text-accent-600"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
