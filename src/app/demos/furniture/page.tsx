import PageShell from '@/components/PageShell';
const products = [
  ['Luna 3-Seater Sofa', '₹34,999'],
  ['Oakline Dining Set', '₹42,500'],
  ['Milo King Bed', '₹38,999'],
  ['Nordic Lounge Chair', '₹12,999'],
  ['Urban TV Console', '₹18,500'],
  ['Craft 6-Door Wardrobe', '₹29,999'],
];
export default function FurnitureDemo() {
  return (
    <PageShell>
      <div className="bg-stone-50">
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-black tracking-[.2em] text-amber-800">
                URBANWOOD FURNITURE
              </div>
              <h1 className="mt-5 text-5xl font-black tracking-tight md:text-6xl">
                Furniture that makes{' '}
                <span className="text-amber-800">home feel yours.</span>
              </h1>
              <p className="mt-6 max-w-xl leading-8 text-stone-600">
                A demo catalogue experience for a Ludhiana furniture business, built
                around discovery and WhatsApp enquiries.
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  href="#catalogue"
                  className="rounded-full bg-stone-950 px-6 py-3 font-bold text-white"
                >
                  Explore Catalogue
                </a>
                <a
                  href="https://wa.me/919999999999?text=Hi%20UrbanWood%2C%20I%20want%20to%20know%20more%20about%20your%20products."
                  className="rounded-full border border-stone-300 px-6 py-3 font-bold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-gradient-to-br from-stone-900 via-amber-900 to-stone-700 p-8 text-white shadow-2xl">
              <div className="text-sm opacity-70">FEATURED COLLECTION</div>
              <div className="mt-24 text-4xl font-black">
                Warm Wood
                <br />
                Collection
              </div>
              <div className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                A visual hero area designed to showcase premium products before the
                customer reaches the catalogue.
              </div>
            </div>
          </div>
        </section>
        <section id="catalogue" className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-black text-amber-800">CATALOGUE</div>
              <h2 className="mt-2 text-4xl font-black">Featured pieces</h2>
            </div>
            <div className="hidden text-sm text-stone-500 md:block">
              Demo project — product data is sample content.
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(([n, p], i) => (
              <div key={n} className="rounded-3xl border border-stone-200 bg-white p-5">
                <div className="flex h-52 items-end rounded-2xl bg-gradient-to-br from-stone-200 via-amber-100 to-stone-300 p-5">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold">
                    Collection {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black">{n}</h3>
                <div className="mt-2 font-bold text-amber-800">{p}</div>
                <a
                  href={`https://wa.me/919999999999?text=Hi%20UrbanWood%2C%20I%27m%20interested%20in%20${encodeURIComponent(n)}.`}
                  className="mt-5 block rounded-full bg-stone-950 px-5 py-3 text-center text-sm font-bold text-white"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-stone-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-4xl font-black">Visit our showroom</h2>
            <p className="mt-3 text-stone-300">
              Ludhiana, Punjab • Mon–Sun • 10:00 AM–8:00 PM
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-stone-950"
            >
              Build a website like this →
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
