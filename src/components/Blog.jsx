import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Blog() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Latest from the blog</h2>
          <p className="mt-3 text-slate-600">Insights on design, growth, and building fintech products.</p>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-slate-600">Loading…</div>
        ) : (
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {items.map((post) => (
              <article key={post._id} className="rounded-2xl border bg-white/80 p-5 hover:shadow-md transition-shadow">
                <div className="h-36 rounded-xl bg-gradient-to-tr from-rose-200 via-sky-200 to-emerald-200 mb-4" />
                <h3 className="font-semibold text-slate-800">{post.title}</h3>
                <p className="mt-2 text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                <a href="#" className="mt-3 inline-block text-sm text-slate-900">Read more →</a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
