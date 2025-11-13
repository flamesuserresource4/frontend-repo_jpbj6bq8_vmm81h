import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject') || undefined,
      message: form.get('message'),
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' });
        e.currentTarget.reset();
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong.' });
      }
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Let’s talk</h2>
            <p className="mt-3 text-slate-600">Have questions about plans or integrations? Drop a note and we’ll help you decide.</p>
            <div className="mt-6 p-6 rounded-2xl bg-white/80 border">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input name="name" placeholder="Name" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" required />
                <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" required />
                <input name="subject" placeholder="Subject (optional)" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" />
                <textarea name="message" rows="4" placeholder="Message" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" required />
                <button disabled={loading} className="mt-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium disabled:opacity-60">{loading ? 'Sending…' : 'Send message'}</button>
              </form>
              {status && (
                <div className={`mt-3 text-sm ${status.ok ? 'text-emerald-700' : 'text-rose-700'}`}>{status.msg}</div>
              )}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/60 border">
            <h3 className="font-semibold text-slate-800">Why teams choose us</h3>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm">
              <li>• Pastel UI with modern UX patterns</li>
              <li>• Built-in auth and content system</li>
              <li>• Scalable API and database</li>
              <li>• Friendly docs and support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
