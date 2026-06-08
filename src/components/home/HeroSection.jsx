import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, CreditCard, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '2 tools', label: 'Free to use' },
  { value: '0 sign-ups', label: 'No account needed' },
  { value: '100%', label: 'Runs in your browser' },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-28 pb-24 overflow-hidden">

      {/* Deep radial glow — warm gold bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.03) 45%, transparent 70%)',
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=20&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
          filter: 'grayscale(100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #070707 0%, rgba(7,7,7,0) 30%, rgba(7,7,7,0) 70%, #070707 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Trust pill */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full"
          style={{ border: '1px solid rgba(201,168,76,0.28)', background: 'rgba(201,168,76,0.07)' }}
        >
          <ShieldCheck className="w-4 h-4" style={{ color: '#C9A84C' }} />
          <span className="label-caps gold-text tracking-widest">Free · Private · No jargon</span>
        </div>

        {/* Main headline */}
        <h1
          className="font-heading text-white mb-6"
          style={{ fontSize: 'clamp(2.75rem, 7.5vw, 5rem)', lineHeight: 1.08, fontWeight: 700 }}
        >
          Finally understand
          <br />
          <span
            style={{
              color: '#C9A84C',
              textShadow: '0 0 60px rgba(201,168,76,0.35), 0 0 120px rgba(201,168,76,0.12)',
            }}
          >
            your money.
          </span>
        </h1>

        {/* Subheadline — warm, friendly, zero jargon */}
        <p
          className="text-silver mb-6 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', lineHeight: 1.75 }}
        >
          We built two simple tools to answer the questions most people are too embarrassed to Google.
          <br className="hidden sm:block" />
          How much is inflation really costing you at the supermarket? What does your loan actually cost in total?
        </p>

        <p
          className="mb-12 max-w-xl mx-auto"
          style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(209,209,209,0.6)' }}
        >
          Type in a number. Get a clear answer. No account, no email, no nonsense.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            to="/tools/food-inflation"
            className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
            style={{ boxShadow: '0 0 32px rgba(201,168,76,0.25)' }}
          >
            <TrendingDown className="w-5 h-5" />
            How much is food inflation costing me?
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/tools/debt-cost"
            className="btn-ghost-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
          >
            <CreditCard className="w-5 h-5" />
            What does my loan really cost?
          </Link>
        </div>

        {/* Stat strip */}
        <div
          className="inline-flex flex-col sm:flex-row gap-0 divide-y sm:divide-y-0 sm:divide-x rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(18,18,18,0.7)', backdropFilter: 'blur(10px)', divideColor: 'rgba(201,168,76,0.12)' }}
        >
          {stats.map(s => (
            <div key={s.label} className="px-8 py-5 flex flex-col items-center gap-1" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
              <span className="font-heading font-bold text-white text-xl" style={{ color: '#C9A84C' }}>{s.value}</span>
              <span className="label-caps" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gold scroll line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
      </div>
    </section>
  );
}