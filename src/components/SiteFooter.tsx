export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="text-2xl font-black text-white">
            Rak<span className="text-violet-400">Vexa</span>
          </div>
          <p className="mt-3 max-w-sm leading-7">
            Digital Growth & Software Solutions for businesses that want a stronger online
            presence and smarter workflows.
          </p>
          <p className="mt-5 text-sm">Ludhiana, Punjab, India</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Services</h3>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="/services">Website Development</a>
            <a href="/services">Google Business</a>
            <a href="/services">WhatsApp Business</a>
            <a href="/services">Lead Generation</a>
            <a href="/services">Business Software</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Company</h3>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="/portfolio">Portfolio</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="mailto:hello@rakvexa.com">hello@rakvexa.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm">
        © 2026 RakVexa. All rights reserved.
      </div>
    </footer>
  );
}
