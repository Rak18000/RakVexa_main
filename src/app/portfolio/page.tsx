import PageShell from '@/components/PageShell';

const projects = [
  ['Furniture', 'UrbanWood Furniture', 'Catalogue + WhatsApp enquiry experience', 'https://urbanwood.rakvexa.com'],
  ['Garment / Textile', 'Textile B2B', 'Product catalogue + bulk enquiry / RFQ experience', 'https://textile.rakvexa.com'],
  ['Restaurant', 'Restaurant Demo', 'Menu + reservation + WhatsApp enquiry experience', 'https://restaurant.rakvexa.com'],
  ['Industrial', 'Industrial Demo', 'Product showcase + lead / RFQ experience', 'https://industrial.rakvexa.com'],
];

export default function Portfolio(){return <PageShell><section className="mx-auto max-w-7xl px-5 py-20"><span className="eyebrow">Portfolio</span><h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">Work designed to <span className="gradient-text">move customers.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Demo concepts created to show how RakVexa can solve practical business problems. These are sample projects, not client claims.</p><div className="mt-12 grid gap-7 md:grid-cols-2">{projects.map(([type,title,desc,href],i)=><article key={title} className="overflow-hidden rounded-[2rem] border bg-white shadow-sm"><div className={`project-visual h-64 p-7 text-white ${i===1?'project-2':i===2?'project-3':'project-1'}`}><div className="text-sm font-bold opacity-80">{type}</div><div className="mt-20 text-2xl font-black">{title}</div></div><div className="p-7"><p className="text-sm leading-6 text-slate-600">{desc}</p><a target="_blank" rel="noreferrer" href={href} className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 font-bold text-white">View live demo →</a></div></article>)}</div></section></PageShell>}
