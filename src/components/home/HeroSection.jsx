import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, CreditCard } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Hero image - coin on dark stone */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1600&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #070707 0%, rgba(7,7,7,0.6) 50%, #070707 100%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
          style={{ border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.06)' }}
        >
          <span className="label-caps gold-text">Simple · Free · Private</span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-white mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.1, fontWeight: 700 }}
        >
          Money, finally{' '}
          <span className="gold-text">explained clearly.</span>
        </h1>

        {/* Sub */}
        <p className="text-silver mb-12 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
          Free calculators that turn confusing financial questions into clear, honest answers.
          No sign-up. No jargon. No agenda — just numbers you can actually use.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tools/food-inflation"
            className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold animate-pulse-gold"
          >
            <TrendingDown className="w-5 h-5" />
            Inflation Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/tools/debt-cost"
            className="btn-ghost-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
          >
            <CreditCard className="w-5 h-5" />
            Debt Cost Calculator
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)' }} />
      </div>
    </section>
  );
}