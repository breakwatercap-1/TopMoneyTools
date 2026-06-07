import { useState, useMemo } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CalcInput from '@/components/calculators/CalcInput';
import ResultShield from '@/components/calculators/ResultShield';
import { CreditCard, Info } from 'lucide-react';
import ResultExplainer from '@/components/calculators/ResultExplainer';

const DEBT_EXPLAINER = [
  {
    title: 'Interest is the price of borrowing',
    body: 'When a lender gives you money, they charge a fee for the service. That fee is interest — calculated as a percentage of what you owe, every single year until it\'s paid off.',
  },
  {
    title: 'Why longer loans cost more',
    body: 'A 5-year loan at 8% charges that 8% on your outstanding balance each year. The longer you take to repay, the more years the lender collects their fee — even if the rate never changes.',
  },
  {
    title: 'The difference between rate and cost',
    body: 'A "low" interest rate of 5% on a £20,000 loan over 10 years still adds thousands in interest. The rate tells you the speed; the term tells you the distance. Both determine the total cost.',
  },
];

function fmt(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function DebtCostCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(8);
  const [termYears, setTermYears] = useState(5);

  const results = useMemo(() => {
    const principal = Number(loanAmount);
    const r = Number(interestRate) / 100 / 12;
    const n = Number(termYears) * 12;

    if (r === 0) {
      const monthly = principal / n;
      return { monthly, totalRepayment: principal, totalInterest: 0, interestPct: 0 };
    }

    const monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalRepayment = monthly * n;
    const totalInterest = totalRepayment - principal;
    const interestPct = (totalInterest / principal) * 100;

    return { monthly, totalRepayment, totalInterest, interestPct };
  }, [loanAmount, interestRate, termYears]);

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <CreditCard className="w-5 h-5 gold-text" />
          </div>
          <span className="label-caps gold-text">Debt Cost Calculator</span>
        </div>
        <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
          Find out the true cost<br />of any loan.
        </h1>
        <p className="text-silver max-w-2xl" style={{ lineHeight: 1.7 }}>
          The price tag on a loan isn't just what you borrow. Enter your loan details and see exactly how much you'll really pay — including the extra cost of interest, in plain numbers.
        </p>
      </div>

      <hr className="section-divider max-w-7xl mx-auto px-6" />

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(212,175,55,0.15)' }}>

          {/* LEFT: Inputs */}
          <div className="p-8 md:p-12 flex flex-col gap-8" style={{ background: 'rgba(18,18,18,0.9)', borderRight: '1px solid rgba(212,175,55,0.12)' }}>
            <CalcInput
              id="loanAmount"
              label="How much do you want to borrow?"
              hint="Enter the total loan amount — e.g. for a car, a personal loan, or credit card balance."
              prefix="$"
              value={loanAmount}
              onChange={v => setLoanAmount(Number(v))}
              min={100}
              step={100}
            />

            <CalcInput
              id="interestRate"
              label="What is the annual interest rate?"
              hint="Check your loan agreement or credit card statement. A typical personal loan is 6–20%."
              suffix="%"
              value={interestRate}
              onChange={v => setInterestRate(Number(v))}
              min={0}
              max={100}
              step={0.1}
            />

            <CalcInput
              id="termYears"
              label="How many years will you be repaying it?"
              hint="Most personal loans are 1–7 years. Mortgages are typically 15–30 years."
              suffix="years"
              value={termYears}
              onChange={v => setTermYears(Number(v))}
              min={1}
              max={30}
              step={1}
            />

            {/* Rate display */}
            <div className="flex items-center gap-2 p-4 rounded-xl" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.12)' }}>
              <Info className="w-4 h-4 gold-text flex-shrink-0" />
              <p className="text-sm text-silver">
                At <span className="gold-text font-semibold">{interestRate}%</span> annual interest over{' '}
                <span className="gold-text font-semibold">{termYears} year{termYears !== 1 ? 's' : ''}</span> ({termYears * 12} monthly payments).
              </p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="p-8 md:p-12 flex flex-col gap-6" style={{ background: 'rgba(10,10,10,0.95)' }}>
            <ResultShield
              label="Your total interest paid"
              value={fmt(results.totalInterest)}
              subtext={`That's the extra cost on top of what you actually borrowed — money paid just for the privilege of borrowing.`}
              color={results.totalInterest > Number(loanAmount) * 0.3 ? '#F59E0B' : '#D4AF37'}
            />

            <hr style={{ borderColor: 'rgba(212,175,55,0.1)' }} />

            {/* Secondary stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Monthly payment', value: fmt(results.monthly), color: '#D4AF37' },
                { label: 'Total you will repay', value: fmt(results.totalRepayment), color: '#F59E0B' },
                { label: 'Interest as % of loan', value: results.interestPct.toFixed(1) + '%', color: '#F59E0B' },
              ].map(s => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <p className="label-caps mb-2" style={{ fontSize: '0.7rem' }}>{s.label}</p>
                  <p className="font-heading font-bold" style={{ fontSize: '1.5rem', color: s.color }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Repayment breakdown bar */}
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.1)' }}>
              <p className="label-caps mb-3" style={{ fontSize: '0.7rem' }}>Where your money goes</p>
              <div className="flex rounded-full overflow-hidden h-4 mb-3">
                <div
                  style={{
                    width: `${(Number(loanAmount) / results.totalRepayment) * 100}%`,
                    background: '#10B981',
                    transition: 'width 0.4s ease',
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    background: '#F59E0B',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-silver">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#10B981' }} />
                  Principal: {fmt(Number(loanAmount))}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#F59E0B' }} />
                  Interest: {fmt(results.totalInterest)}
                </span>
              </div>
            </div>

            {/* Plain English explanation */}
            <div className="rounded-xl p-5" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
              <p className="text-sm text-silver" style={{ lineHeight: 1.7 }}>
                <span className="gold-text font-semibold">What this means:</span>{' '}
                You borrow <span className="text-white font-semibold">{fmt(Number(loanAmount))}</span>, but you'll actually repay{' '}
                <span className="text-white font-semibold">{fmt(results.totalRepayment)}</span> in total.
                That extra <span style={{ color: '#F59E0B' }} className="font-semibold">{fmt(results.totalInterest)}</span> goes entirely to the lender as their fee for giving you the loan.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Results use standard amortization formula. For educational purposes only. Actual loan costs may include fees not shown here.
        </p>

        <ResultExplainer items={DEBT_EXPLAINER} />
      </div>

      {/* Contextual image */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop"
            alt="A hand holding a key against a dark background"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) saturate(0.6)' }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-heading text-white text-xl md:text-2xl mb-2">Knowledge unlocks better decisions.</p>
            <p className="text-silver text-sm">Understanding what you truly owe is the first step to getting ahead of it.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}