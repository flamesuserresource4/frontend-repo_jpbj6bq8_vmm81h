import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get('email'),
      password: form.get('password'),
      name: form.get('name') || undefined,
    };

    try {
      const res = await fetch(`${API_BASE}/api/auth/${mode === 'login' ? 'login' : 'register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: `Welcome ${data.user?.name || ''}!` });
        localStorage.setItem('token', data.token);
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
    <section id="auth" className="py-16 md:py-24 bg-gradient-to-b from-white to-violet-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
            <p className="mt-3 text-slate-600">{mode === 'login' ? 'Sign in to continue.' : 'Start your journey in minutes.'}</p>
            <div className="mt-6 p-6 rounded-2xl bg-white/80 border">
              <form onSubmit={handleSubmit} className="grid gap-4">
                {mode === 'register' && (
                  <input name="name" placeholder="Full name" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" required />
                )}
                <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" required />
                <input type="password" name="password" placeholder="Password" className="px-4 py-3 rounded-xl bg-white border outline-none focus:ring-2 focus:ring-slate-900/10" required />
                <button disabled={loading} className="mt-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium disabled:opacity-60">{loading ? 'Please wait…' : (mode === 'login' ? 'Sign in' : 'Create account')}</button>
              </form>
              {status && (
                <div className={`mt-3 text-sm ${status.ok ? 'text-emerald-700' : 'text-rose-700'}`}>{status.msg}</div>
              )}
              <div className="mt-4 text-sm text-slate-600">
                {mode === 'login' ? (
                  <button onClick={() => setMode('register')} className="underline">New here? Create an account</button>
                ) : (
                  <button onClick={() => setMode('login')} className="underline">Already have an account? Sign in</button>
                )}
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/60 border">
            <h3 className="font-semibold text-slate-800">What you get</h3>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm">
              <li>• Secure accounts with token auth</li>
              <li>• Access to all core features</li>
              <li>• Smooth upgrade path when you need more</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
