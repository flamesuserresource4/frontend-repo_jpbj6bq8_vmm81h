const tiers = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'For trying things out',
    features: ['Basic analytics', 'Community support', 'Up to 3 projects'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    tagline: 'For growing teams',
    features: ['Everything in Free', 'Priority support', 'Unlimited projects', 'Team seats'],
    cta: 'Start Pro',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$49',
    tagline: 'For scale and security',
    features: ['Everything in Pro', 'SAML SSO', 'Audit logs', 'Uptime SLA'],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-rose-50/40 to-sky-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-600">Only pay when you’re getting value. Upgrade or cancel anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border shadow-sm p-6 bg-white/80 ${t.highlighted ? 'ring-2 ring-slate-900' : ''}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-slate-800">{t.name}</h3>
                {t.highlighted && <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Most Popular</span>}
              </div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{t.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <p className="mt-1 text-slate-600 text-sm">{t.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2"><span>•</span>{f}</li>
                ))}
              </ul>
              <a href="#auth" className={`mt-6 inline-flex justify-center w-full px-4 py-2.5 rounded-xl text-sm font-medium ${t.highlighted ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
