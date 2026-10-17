import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function HomeBlog() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative bg-neutral-50 py-24 lg:py-32">
      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="wow fadeInUp text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Latest News
            </p>
            <h2 className="wow fadeInUp mt-3 font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl" data-wow-delay="100ms">
              Read our insightful blogs
            </h2>
          </div>
          <Link
            to="/blog"
            className="wow fadeInRight inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-accent-600"
          >
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="wow fadeInUp flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-lg"
              data-wow-delay={`${i * 120}ms`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <CalendarDays className="h-3.5 w-3.5" />
                {post.date}
              </div>
              <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug text-neutral-900">
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}