import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-slate-700 hover:text-slate-900 transition-colors text-sm">
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-200 via-sky-200 to-emerald-200 border border-white shadow" />
          <span className="font-semibold text-slate-800">PastelPay</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#auth" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm">Sign in</a>
          <a href="#auth" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Create account</a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <div className="grid gap-3">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="pt-3 flex gap-3">
            <a href="#auth" className="px-4 py-2 rounded-lg text-slate-700 bg-slate-100 text-sm">Sign in</a>
            <a href="#auth" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Create account</a>
          </div>
        </div>
      )}
    </header>
  );
}
