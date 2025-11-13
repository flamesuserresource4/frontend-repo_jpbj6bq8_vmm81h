import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Auth from './components/Auth';

function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-rose-200 via-sky-200 to-emerald-200 border border-white shadow" />
          <span className="font-semibold text-slate-800">PastelPay</span>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} PastelPay Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Blog />
      <Auth />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
