import PageShell from '@/components/PageShell';

interface Plan {
  name: string;
  price: string;
  desc: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹7,999',
    desc: 'Small local businesses',
    features: [
      '5-page responsive website',
      'WhatsApp integration',
      'Contact form',
      'Basic SEO',
      'Launch support',
    ],
  },
  {
    name: 'Business',
    price: '₹14,999',
    desc: 'Growing businesses',
    features: [
      '8–10 page website',
      'Catalogue',
      'WhatsApp integration',
      'Google Business support',
      'Analytics setup',
    ],
  },
  {
    name: 'Growth',
    price: '₹9,999/mo',
    desc: 'Ongoing digital growth',
    features: [
      'Website maintenance',
      'Google Business management',
      'Social media support',
      'Content updates',
      'Monthly report',
    ],
  },
];

export default function Pricing() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">
          Simple packages. <span className="gradient-text">Clear scope.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Custom software and larger projects are quoted after understanding your
          requirements.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                i === 1 ? 'border-violet-300 shadow-xl shadow-violet-100' : 'bg-white'
              }`}
            >
              <div className="text-sm font-bold text-violet-600">
                {i === 1 ? 'MOST POPULAR' : 'PACKAGE'}
              </div>
              <h2 className="mt-4 text-2xl font-black">{plan.name}</h2>
              <div className="mt-4 text-4xl font-black">{plan.price}</div>
              <p className="mt-3 text-sm text-slate-600">{plan.desc}</p>
              <ul className="mt-7 grid gap-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-8 block rounded-full bg-slate-950 px-5 py-3 text-center font-bold text-white"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          * Advertising spend, domain/hosting and third-party software fees are separate
          unless included in a written proposal.
        </p>
      </section>
    </PageShell>
  );
}
