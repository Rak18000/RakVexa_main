import PageShell from '@/components/PageShell';
import {
  Globe,
  MapPin,
  MessageCircle,
  Users,
  Package,
  Target,
  Code2,
  Settings,
} from 'lucide-react';
const items = [
  [
    'Website Development',
    'Professional, fast and mobile-first websites designed around enquiries.',
    Globe,
  ],
  [
    'Google Business',
    'Profile setup, optimization, services, photos and local visibility.',
    MapPin,
  ],
  [
    'WhatsApp Business',
    'Business profile, catalogue, quick replies and enquiry flows.',
    MessageCircle,
  ],
  [
    'Social Media',
    'Content planning and consistent social presence for local brands.',
    Users,
  ],
  [
    'Online Catalogue',
    'Product/service catalogue with direct WhatsApp enquiry actions.',
    Package,
  ],
  [
    'Lead Generation',
    'Landing pages, tracking and campaign support built around enquiries.',
    Target,
  ],
  ['Business Software', 'Custom CRM, inventory, billing and workflow software.', Code2],
  [
    'Maintenance & Support',
    'Updates, backups, security, content changes and technical support.',
    Settings,
  ],
];
export default function Services() {
  return (
    <PageShell>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <span className="eyebrow">Our Services</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight md:text-6xl">
            Everything your business needs to{' '}
            <span className="gradient-text">grow digitally.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Start with one service or build a complete digital growth system with RakVexa.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {items.map(([t, d, I]) => (
              <div
                key={t as string}
                className="service-card rounded-3xl border bg-white p-6"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-violet-50 p-3 text-violet-700">
                  <I size={22} />
                </div>
                <h2 className="text-xl font-bold">{t as string}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{d as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
