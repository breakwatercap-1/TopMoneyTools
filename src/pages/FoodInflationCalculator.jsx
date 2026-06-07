import { useState, useMemo } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CalcInput from '@/components/calculators/CalcInput';
import ResultShield from '@/components/calculators/ResultShield';
import { TrendingDown, Info } from 'lucide-react';
import ResultExplainer from '@/components/calculators/ResultExplainer';

const INFLATION_EXPLAINER = [
  {
    title: 'Inflation compounds — just like interest',
    body: 'If food prices rise 4% this year, next year\'s 4% applies to the already-higher price. Each year builds on the last, which is why even modest inflation adds up dramatically over time.',
  },
  {
    title: 'Your salary has to keep up',
    body: 'If food costs 20% more in 5 years but your pay doesn\'t rise, you\'ve effectively taken a pay cut. Inflation is a hidden reduction in what your money can actually buy.',
  },
  {
    title: 'Food inflation ≠ general inflation',
    body: 'The headline inflation figure covers everything from rent to electronics. Food prices often rise faster — especially for staples like bread, dairy, and vegetables — so your grocery bill can outpace the official number.',
  },
];

const COUNTRY_RATES = [
  { label: 'United States', rate: 3.5 },
  { label: 'United Kingdom', rate: 4.0 },
  { label: 'Canada', rate: 3.8 },
  { label: 'Australia', rate: 4.2 },
  { label: 'Germany', rate: 3.0 },
  { label: 'France', rate: 3.2 },
  { label: 'Brazil', rate: 8.5 },
  { label: 'India', rate: 6.5 },
  { label: 'South Africa', rate: 7.0 },
  { label: 'Mexico', rate: 6.0 },
  { label: 'Custom rate', rate: null },
];

function fmt(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function FoodInflationCalculator() {
  const [spend, setSpend] = useState(400);
  const [years, setYears] = useState(5);
  const [countryIdx, setCountryIdx] = useState(0);
  const [customRate, setCustomRate] = useState(3.5);

  const rate = COUNTRY_RATES[countryIdx].rate ?? customRate;

  const results = useMemo(() => {
    const r = rate / 100;
    const futureMonthly = spend * Math.pow(1 + r, years);
    const extraMonthly = futureMonthly - spend;
    const totalExtra = extraMonthly * 12 * years;
    const powerLoss = ((1 - spend / futureMonthly) * 100);
    return { futureMonthly, extraMonthly, totalExtra, powerLoss };
  }, [spend, years, rate]);

  const extraCarts = Math.round((results.totalExtra / (spend || 1)) * 10) / 10;

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <TrendingDown className="w-5 h-5 gold-text" />
          </div>
          <span className="label-caps gold-text">Food Inflation Calculator</span>
        </div>
        <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
          What will your groceries<br />cost in the future?
        </h1>
        <p className="text-silver max-w-2xl" style={{ lineHeight: 1.7 }}>
          Enter your monthly grocery spend below and see how inflation could quietly increase that cost over time — in plain, honest numbers.
        </p>
      </div>

      <hr className="section-divider max-w-7xl mx-auto px-6" />

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(212,175,55,0.15)' }}>

          {/* LEFT: Inputs */}
          <div className="p-8 md:p-12 flex flex-col gap-8" style={{ background: 'rgba(18,18,18,0.9)', borderRight: '1px solid rgba(212,175,55,0.12)' }}>
            <CalcInput
              id="spend"
              label="What is your monthly grocery spend?"
              hint="Include all food shopping — supermarket, market, everything."
              prefix="$"
              value={spend}
              onChange={v => setSpend(Number(v))}
              min={1}
              step={10}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="label-caps">Which country do you live in?</label>
              <p className="text-muted-foreground text-sm mb-1">This sets the typical food inflation rate for your region.</p>
              <select
                id="country"
                value={countryIdx}
                onChange={e => setCountryIdx(Number(e.target.value))}
                className="w-full rounded-xl px-4 py-4 text-white font-semibold text-base"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  outline: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              >
                {COUNTRY_RATES.map((c, i) => (
                  <option key={i} value={i} style={{ background: '#121212' }}>
                    {c.label}{c.rate !== null ? ` (${c.rate}% avg)` : ''}
                  </option>
                ))}
              </select>
            </div>

            {COUNTRY_RATES[countryIdx].rate === null && (
              <CalcInput
                id="customRate"
                label="Enter your inflation rate"
                hint="Check your country's official statistics website."
                suffix="%"
                value={customRate}
                onChange={v => setCustomRate(Number(v))}
                min={0}
                max={50}
                step={0.1}
              />
            )}

            <CalcInput
              id="years"
              label="How many years ahead do you want to see?"
              hint="Try 5 years to start — small changes add up fast."
              suffix="years"
              value={years}
              onChange={v => setYears(Number(v))}
              min={1}
              max={30}
              step={1}
            />

            {/* Rate display */}
            <div className="flex items-center gap-2 p-4 rounded-xl" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.12)' }}>
              <Info className="w-4 h-4 gold-text flex-shrink-0" />
              <p className="text-sm text-silver">Using <span className="gold-text font-semibold">{rate}%</span> annual food inflation rate.</p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="p-8 md:p-12 flex flex-col gap-6" style={{ background: 'rgba(10,10,10,0.95)' }}>
            <ResultShield
              label="Your future monthly grocery bill"
              value={fmt(results.futureMonthly)}
              subtext={`In ${years} year${years !== 1 ? 's' : ''}, that's the equivalent of buying ${extraCarts > 0 ? extraCarts : '—'} extra months of groceries at today's prices.`}
            />

            <hr style={{ borderColor: 'rgba(212,175,55,0.1)' }} />

            {/* Secondary stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Extra per month', value: fmt(results.extraMonthly), color: '#F59E0B' },
                { label: `Total extra over ${years} yr${years !== 1 ? 's' : ''}`, value: fmt(results.totalExtra), color: '#F59E0B' },
                { label: 'Purchasing power lost', value: results.powerLoss.toFixed(1) + '%', color: '#D4AF37' },
              ].map(s => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <p className="label-caps mb-2" style={{ fontSize: '0.7rem' }}>{s.label}</p>
                  <p className="font-heading font-bold" style={{ fontSize: '1.5rem', color: s.color }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Plain English explanation */}
            <div className="rounded-xl p-5" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
              <p className="text-sm text-silver" style={{ lineHeight: 1.7 }}>
                <span className="gold-text font-semibold">What this means:</span>{' '}
                If food prices rise at {rate}% per year, your {fmt(spend)}/month grocery spend today will cost{' '}
                <span className="text-white font-semibold">{fmt(results.futureMonthly)}/month</span> in {years} year{years !== 1 ? 's' : ''}.
                That's{' '}
                <span style={{ color: '#F59E0B' }} className="font-semibold">{fmt(results.totalExtra)} more</span>{' '}
                out of your pocket over that period — just from inflation.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Results are estimates for educational purposes only. Actual inflation rates may vary.
        </p>

        <ResultExplainer items={INFLATION_EXPLAINER} />
      </div>

      {/* Contextual image */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop"
            alt="A simple loaf of bread on dark linen"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) saturate(0.6)' }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-heading text-white text-xl md:text-2xl mb-2">Even the basics cost more each year.</p>
            <p className="text-silver text-sm">Knowing the number gives you the power to plan ahead.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}