import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Gauge,
  Braces,
  Zap,
  Layers,
  Code2,
  Boxes,
  Palette,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Send,
} from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Tech Stack', href: '#stack' },
];

const trustMetrics = [
  { icon: Gauge, value: '99+', label: 'PageSpeed score' },
  { icon: Braces, value: '100%', label: 'Type-safe codebases' },
  { icon: Zap, value: '2–4 wks', label: 'Sprint delivery cycles' },
  { icon: Layers, value: 'Zero', label: 'Agency bloat' },
];

const services = [
  {
    icon: Code2,
    title: 'Web Applications',
    description:
      'High-performance web apps built on React, Next.js, and .NET — architected for speed, scale, and long-term maintainability.',
    tags: ['React', 'Next.js', 'C# / .NET'],
    span: 'md:col-span-4',
  },
  {
    icon: Boxes,
    title: 'Custom SaaS Development',
    description:
      'End-to-end SaaS platforms: multi-tenant architecture, billing, auth, and role-based access, built to production standards.',
    tags: ['PostgreSQL', 'Node.js', 'Stripe'],
    span: 'md:col-span-2',
  },
  {
    icon: Palette,
    title: 'UI/UX Systems',
    description:
      'Design systems and component libraries that keep your product consistent as your team and surface area grow.',
    tags: ['Figma', 'Tailwind', 'Radix'],
    span: 'md:col-span-2',
  },
  {
    icon: TrendingUp,
    title: 'Performance & Refactoring',
    description:
      'Audits and rebuilds for slow, brittle, or hard-to-maintain applications — measured in load time, not opinions.',
    tags: ['Core Web Vitals', 'CI/CD', 'Testing'],
    span: 'md:col-span-4',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Direct Engineer Contact',
    description:
      'You talk to the person writing the code, not an account manager. Every decision happens in real time, with full context.',
  },
  {
    number: '02',
    title: 'Rapid 2-Week Sprints',
    description:
      'Fixed-scope sprints ship working software every two weeks, with a live staging build you can review at any point.',
  },
  {
    number: '03',
    title: 'Enterprise Delivery',
    description:
      'Documented architecture, tested code, and a clean handoff — built to the standard your internal team can take over.',
  },
];

const projects = [
  {
    name: 'FinTech Analytics Dashboard',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    challenge:
      'A legacy dashboard was driving churn — slow queries and a confusing information hierarchy left users unable to find key metrics.',
    solution:
      'Rebuilt the data layer and UI from scratch on Next.js with server-side rendering and a redesigned metric hierarchy.',
    results: ['+45% Conversion', '2x Load speed', '-60% Support tickets'],
    span: 'lg:col-span-3',
    preview: 'dashboard',
  },
  {
    name: 'B2B Logistics Platform',
    tags: ['C# / .NET', 'React', 'Azure'],
    challenge:
      'Operations ran on spreadsheets with no single source of truth, creating costly errors across a 40-person ops team.',
    solution:
      'A custom SaaS platform with role-based workflows, automated status tracking, and a real-time operations dashboard.',
    results: ['3x Faster onboarding', '99.9% Uptime', '-70% Manual hours'],
    span: 'lg:col-span-3',
    preview: 'table',
  },
  {
    name: 'E-Commerce Storefront Refactor',
    tags: ['React', 'Tailwind', 'Vercel'],
    challenge:
      'Failing Core Web Vitals were suppressing organic search rankings and inflating paid acquisition costs.',
    solution:
      'A full performance refactor: code-split rendering, optimized assets, and a rebuilt critical rendering path.',
    results: ['99+ PageSpeed', '+32% Organic traffic', '-55% Bounce rate'],
    span: 'lg:col-span-6',
    preview: 'grid',
  },
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'C# / .NET',
  'Python',
  'PostgreSQL',
  'Tailwind CSS',
  'Node.js',
];

const qualityBadges = [
  { icon: Braces, label: '100% TypeScript coverage' },
  { icon: Gauge, label: 'Core Web Vitals: Pass' },
  { icon: ShieldCheck, label: 'WCAG 2.1 AA accessible' },
  { icon: CheckCircle2, label: 'Automated CI/CD on every build' },
];

const projectTypeOptions = ['Landing Page', 'Web App / SaaS', 'Design System', 'Custom Build'];

const heroMetrics = [
  { label: 'Avg. Sprint Cycle', value: '2 Weeks', badge: 'Fixed Scope', kind: 'status' },
  { label: 'Direct Engineer Access', value: '100%', badge: 'Zero Middlemen', kind: 'status' },
  { label: 'Avg. Load Speed', value: '0.4s', badge: 'Core Web Vitals', kind: 'delta' },
];

const heroStatusItems = [
  'Sprint Status: Active',
  'Staging Build: Live',
  'Codebase: 100% Type-Safe',
];

const chartLines = {
  '7D': 'M0,60 L57,40 L114,70 L171,30 L228,55 L285,20 L343,45 L400,10',
  '30D': 'M0,90 C40,80 60,95 100,70 C140,50 160,65 200,40 C240,20 260,35 300,15 C340,0 360,10 400,5',
  '90D': 'M0,100 C80,95 120,80 160,85 C220,70 260,60 300,50 C340,35 370,25 400,15',
};

const glassCard =
  'rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all hover:border-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]';

const btnPrimary =
  'group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

const btnSecondary =
  'group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

const btnPrimarySmall =
  'inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200';

function SectionHeader({ title, description }) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <h2 className="font-display max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="max-w-sm text-zinc-400 md:text-right">{description}</p>
    </div>
  );
}

function PreviewChrome() {
  return (
    <div className="mb-2 flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      <span className="ml-auto h-1.5 w-16 rounded-full bg-white/10" />
    </div>
  );
}

function ProjectPreview({ variant }) {
  if (variant === 'table') {
    return (
      <div className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
        <PreviewChrome />
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 p-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-white/20" />
              <span className="h-1.5 flex-1 rounded-full bg-white/10" />
              <span className="h-1.5 w-10 shrink-0 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
        <PreviewChrome />
        <div className="grid flex-1 grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((cell) => (
            <div key={cell} className="rounded-md border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
      <PreviewChrome />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((card) => (
          <div key={card} className="rounded-md border border-white/10 bg-white/5 p-2">
            <span className="block h-1.5 w-6 rounded-full bg-white/10" />
            <span className="mt-2 block h-2.5 w-10 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
      <div className="mt-2 flex-1 rounded-md border border-white/10 bg-white/5" />
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chartRange, setChartRange] = useState('30D');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', scope: '', projectType: '' });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const siteDotGridStyle = {
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
  };

  const heroDotGridStyle = {
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    maskImage: 'linear-gradient(to bottom, black, transparent)',
    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
  };

  const heroSpotlightStyle = {
    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.14), transparent 60%)',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'dcea16c5-5477-44f9-893c-f5567a55c89d',
          subject: `⚡ New Project Request: ${form.name}`,
          from_name: 'Veridex Studio Website',
          replyto: form.email, // Ответ из почты сразу пойдет клиенту
          
          // Красиво отформатированные поля для письма:
          'Client Name': form.name,
          'Client Email': form.email,
          'Project Type': form.projectType || 'Not specified',
          'Project Brief': form.scope || 'No description provided',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage('Failed to send brief. Please contact us directly.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="font-body relative min-h-screen text-zinc-200 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
        .font-mono-custom { font-family: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace; }

        @keyframes veridex-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: veridex-marquee 22s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 bg-black" />
      <div className="pointer-events-none fixed inset-0 -z-10" style={siteDotGridStyle} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display flex items-center gap-2 font-semibold text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4 L12 20 L20 4" />
            </svg>
            Veridex Studio
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className={btnPrimarySmall}>
              Book a call
            </a>
          </div>

          <button
            className="text-zinc-300 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 bg-black px-6 py-4 md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-zinc-400 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className={`${btnPrimarySmall} text-center`}>
              Book a call
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0" style={heroSpotlightStyle} />
        <div className="pointer-events-none absolute inset-0" style={heroDotGridStyle} />

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-24 text-center md:pt-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new projects
          </div>

          <h1 className="font-display bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-semibold leading-tight tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Enterprise-Grade Web Engineering for Scaling Tech Companies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            We build high-speed web apps, custom digital platforms, and design systems with direct engineering
            access and zero agency bloat.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className={btnPrimary}>
              Book a call <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" className={btnSecondary}>
              View our work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pb-24 md:pb-32">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono-custom">Live</span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {heroMetrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-left">
                    <div className="text-xs text-zinc-500">{m.label}</div>
                    <div className="mt-2 flex items-end justify-between gap-2">
                      <span className="font-display text-xl font-semibold text-white sm:text-2xl">{m.value}</span>
                      <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs text-emerald-400">
                        {m.kind === 'delta' ? <ArrowUpRight size={12} /> : <CheckCircle2 size={12} />}
                        {m.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-5 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <Activity size={14} className="text-zinc-500" />
                    System Response Time (TTFB)
                  </div>
                  <div className="flex gap-1 rounded-md border border-white/10 p-0.5">
                    {['7D', '30D', '90D'].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setChartRange(r)}
                        className={`font-mono-custom rounded px-2 py-1 text-xs transition-colors ${
                          chartRange === r ? 'bg-white text-black' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="mt-3 h-28 w-full">
                  <defs>
                    <linearGradient id="veridexChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${chartLines[chartRange]} L400,120 L0,120 Z`} fill="url(#veridexChartFill)" stroke="none" />
                  <path d={chartLines[chartRange]} fill="none" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {heroStatusItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {trustMetrics.map((m) => (
            <div key={m.label} className={`${glassCard} flex flex-col items-center justify-center gap-2 px-6 py-8 text-center`}>
              <m.icon className="text-zinc-500" size={20} />
              <div className="font-display text-2xl font-semibold text-white">{m.value}</div>
              <div className="text-sm text-zinc-500">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-b border-white/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Web engineering, SaaS builds, and systems that hold up at scale"
            description="Four focused disciplines — no generalist scope creep, no junior hand-offs."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
            {services.map((s) => (
              <div key={s.title} className={`${glassCard} p-8 ${s.span}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10">
                  <s.icon size={18} className="text-zinc-300" />
                </div>
                <h3 className="font-display mt-5 text-lg font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-custom rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="The Solo-PM Advantage"
            description="One senior engineer owns your project end to end — no account managers, no hand-offs, no lost context."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {processSteps.map((p) => (
              <div key={p.number} className={`${glassCard} p-8`}>
                <div className="font-mono-custom text-sm text-zinc-600">{p.number}</div>
                <h3 className="font-display mt-4 text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-white/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Selected work"
            description="Recent engagements and the outcomes they produced, measured in numbers."
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className={`${glassCard} relative transform-gpu p-8 ${p.span} hover:z-10 hover:scale-[1.02]`}
              >
                <div className="h-40 sm:h-44">
                  <ProjectPreview variant={p.preview} />
                </div>

                <div className="mb-6 mt-6 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-medium text-white">{p.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-custom rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 text-xs font-medium text-zinc-500">Challenge</div>
                    <p className="text-sm leading-relaxed text-zinc-300">{p.challenge}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-medium text-zinc-500">Solution</div>
                    <p className="text-sm leading-relaxed text-zinc-300">{p.solution}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-medium text-zinc-500">Results</div>
                    <div className="flex flex-wrap gap-3">
                      {p.results.map((r) => (
                        <div
                          key={r}
                          className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 text-sm text-white"
                        >
                          <TrendingUp size={14} className="text-zinc-500" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-zinc-300"
                >
                  View case study
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-b border-white/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader title="Tech stack & standards" description="The tools and practices behind every build we ship." />

          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 py-6 backdrop-blur-md"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="animate-marquee flex w-max gap-4">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="font-mono-custom whitespace-nowrap rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {qualityBadges.map((b) => (
              <div key={b.label} className={`${glassCard} flex items-center gap-3 p-5`}>
                <b.icon size={16} className="shrink-0 text-zinc-500" />
                <span className="text-sm text-zinc-300">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Start a project"
            description="Tell us what you're building. We typically reply within one business day."
          />
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="leading-relaxed text-zinc-400">
                Every project starts with a direct conversation with the engineer who will build it — not a sales
                rep.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Direct reply from the engineer who will build your project',
                  'No sales calls unless you want one',
                  'NDA available on request',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-zinc-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:office@veridexstudio.com"
                className="mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-zinc-300"
              >
                <Mail size={16} /> office@veridexstudio.com
              </a>
            </div>

            <div className={`${glassCard} p-8`}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={32} className="text-white" />
                  <p className="mt-4 font-medium text-white">Brief received.</p>
                  <p className="mt-1 text-sm text-zinc-400">We'll reply within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Cooper"
                      className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="scope" className="mb-2 block text-sm text-zinc-400">
                      Project scope
                    </label>
                    <textarea
                      id="scope"
                      rows={4}
                      value={form.scope}
                      onChange={(e) => setForm({ ...form, scope: e.target.value })}
                      placeholder="What are you building, and what problem does it solve?"
                      className="w-full resize-none rounded-md border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <span className="mb-2 block text-sm text-zinc-400">Project type</span>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypeOptions.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`font-mono-custom rounded-md border px-3 py-2.5 text-sm transition-colors ${
                            form.projectType === type
                              ? 'border-white bg-white text-black'
                              : 'border-white/15 text-zinc-400 hover:border-white/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-400">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`${btnPrimary} w-full ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send project brief <Send size={16} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <p className="text-sm text-zinc-500">© 2026 Veridex Studio. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:office@veridexstudio.com"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >

          <p className="text-xs text-gray-500 mt-2">
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">
              Privacy Policy
            </a>.
          </p>
            <Mail size={14} /> office@veridexstudio.com
          </a>
        </div>
      </footer>
    </div>
  );
}