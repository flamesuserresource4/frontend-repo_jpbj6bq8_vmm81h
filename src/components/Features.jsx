import { Shield, Sparkles, CreditCard, Zap, Globe2, Gauge } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'Modern auth, hashed passwords, and secure APIs out of the box.'
  },
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Pastel aesthetics with subtle motion and delightful micro-interactions.'
  },
  {
    icon: CreditCard,
    title: 'Payments-ready',
    desc: 'Pricing tiers structured for conversion and upgrade paths.'
  },
  {
    icon: Zap,
    title: 'Fast performance',
    desc: 'Vite + React on the front, FastAPI on the back.'
  },
  {
    icon: Globe2,
    title: 'SEO friendly',
    desc: 'Clean semantic markup and fast load for better discoverability.'
  },
  {
    icon: Gauge,
    title: 'Scales with you',
    desc: 'MongoDB persistence and a clean API layer as you grow.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Everything you need, nothing you don’t</h2>
          <p className="mt-3 text-slate-600">Launch and iterate confidently with a foundation designed for SaaS.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white/70 border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-200 to-emerald-200 grid place-items-center">
                <f.icon className="text-slate-700" size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
