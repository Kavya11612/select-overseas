import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink } from 'lucide-react';
import { getBlogPost, blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = getBlogPost(slug);

  useEffect(() => {
    document.title = post
      ? `${post.title} | Select Overseas Education`
      : 'Article | Select Overseas Education';
  }, [post]);

  if (!post) {
    return (
      <main className="flex flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">Article not found</h1>
        <Link to="/blog" className="btn-accent mt-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </main>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <article>
        <header className="relative overflow-hidden bg-[#00305c] text-white">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(243,146,0,0.2), transparent 50%)',
            }}
          />
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="container relative py-14 md:py-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-accent-200"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/70">
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-accent-200 ring-1 ring-white/15">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </div>
            <h1 className="mt-4 max-w-4xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">{post.excerpt}</p>
          </div>
        </header>

        <div className="container py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-10">
              {post.sections.map((section, i) => (
                <section key={i}>
                  {section.heading && (
                    <h2 className="font-display text-2xl font-semibold text-neutral-900">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 48)}
                      className={`text-base leading-relaxed text-neutral-600 ${section.heading || i > 0 ? 'mt-4' : ''}`}
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="rounded-3xl bg-primary-50 p-6 ring-1 ring-primary-100">
                <p className="text-sm font-semibold text-primary-800">Need personalised advice?</p>
                <p className="mt-2 text-sm text-primary-700/90">
                  Book a free consultation with Select Overseas advisors in Madhapur, Hyderabad.
                </p>
                <Link to="/contact" className="btn-accent mt-4 !py-2.5 !text-sm">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="space-y-6">
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-700 ring-1 ring-neutral-100 transition hover:bg-primary-50 hover:text-primary-700"
              >
                View on Select website <ExternalLink className="h-4 w-4" />
              </a>

              {related.length > 0 && (
                <div className="rounded-3xl bg-neutral-50 p-5 ring-1 ring-neutral-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    More articles
                  </p>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/blog/${r.slug}`}
                          className="block text-sm font-medium leading-snug text-neutral-700 transition hover:text-primary-700"
                        >
                          {r.title}
                        </Link>
                        <p className="mt-1 text-xs text-neutral-400">{r.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
