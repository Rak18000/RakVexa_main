import PageShell from '@/components/PageShell';
const industries = [
  [
    'Manufacturing',
    'B2B websites, product catalogues, quote enquiries and workflow software.',
  ],
  [
    'Garments & Textile',
    'Product showcases, buyer enquiries and catalogue-first websites.',
  ],
  ['Furniture', 'Visual catalogues, WhatsApp enquiries and local discovery.'],
  ['Restaurants', 'Menu websites, Google presence and direct enquiry flows.'],
  ['Salons & Gyms', 'Service pages, appointment enquiries and social presence.'],
  ['Clinics', 'Trust-focused websites, services, location and enquiry CTAs.'],
  ['Traders', 'Product catalogues, lead capture and customer management.'],
  ['Professional Services', 'Authority websites, landing pages and lead generation.'],
];
export default function Industries() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <span className="eyebrow">Industries</span>
        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">
          Digital solutions for <span className="gradient-text">real businesses.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          We tailor the digital experience to how your customers discover, compare and
          contact you.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(([t, d], i) => (
            <div key={t} className="industry-card rounded-3xl border bg-white p-7">
              <div className="text-sm font-black text-violet-600">0{i + 1}</div>
              <h2 className="mt-5 text-xl font-bold">{t}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
              <a href="/contact" className="mt-6 inline-flex font-bold text-slate-950">
                Discuss your business →
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
