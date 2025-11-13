import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 md:p-10 shadow-lg max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-700 bg-white/80 px-3 py-1 rounded-full shadow">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Live demo • Pastel fintech theme
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-800">
            Launch your SaaS faster with a clean, modern foundation
          </h1>
          <p className="mt-3 md:mt-4 text-slate-700 text-sm md:text-base">
            Beautiful pastel visuals, authentication, pricing, blog, and a contact form built-in. Customizable and production‑ready.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#pricing" className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium shadow">
              Get Started
            </a>
            <a href="#features" className="px-5 py-2.5 rounded-xl bg-white/80 text-slate-800 text-sm font-medium shadow border border-white">
              Explore Features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
    </section>
  );
}
