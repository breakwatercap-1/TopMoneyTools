import PageLayout from '@/components/layout/PageLayout';
import { BookOpen, TrendingDown, CreditCard, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const inflationTopics = [
  {
    title: 'Why Inflation Compounds Over Time',
    body: 'Inflation is the rate at which prices increase each year. But here\'s what catches most people off guard: it compounds. If food prices rise 4% this year, next year\'s 4% is applied to the already-higher figure. Over 10 years, that 4% annual rise doesn\'t add up to 40% — it adds up to over 48%. Understanding this helps you plan your budget more honestly.',
  },
  {
    title: 'How Food Inflation Affects Your Daily Budget',
    body: 'Food inflation is one of the most noticeable forms of inflation because it hits everyday essentials: groceries, produce, meat, dairy, and household staples. Even small increases in food prices add up quickly, especially for families or anyone on a fixed income. Our Food Inflation Calculator helps you estimate how rising food prices impact your monthly and yearly spending.',
  },
  {
    title: 'Why Inflation Varies by Country',
    body: 'Inflation is not the same everywhere. Some countries experience stable, low inflation, while others face rapid price increases. Factors include supply chains, currency strength, interest rates, and government policy. This is why our calculators let you select your country — the same nominal rate can have very different real-world effects depending on where you live.',
  },
  {
    title: 'How to Plan for Inflation',
    body: 'While inflation is unavoidable, you can reduce its impact by planning ahead. Running "what-if" scenarios helps you understand how future prices may change and how much extra you may need to save or budget. Track inflation trends in your region, adjust your budget for rising food and living costs, and test different inflation rates to see long-term effects.',
  },
];

const debtTopics = [
  {
    title: 'Why Good Calculators Help You Decide',
    body: 'Good calculators help you test "what-if" scenarios before you commit. You can compare different interest rates, inflation assumptions, or time horizons and see how they change your outcomes. That\'s often the difference between a guess and a confident decision — clarity, speed, and no sales pitch.',
  },
  {
    title: 'The True Cost of Borrowing',
    body: 'The interest rate on a loan tells you the annual percentage charged on your balance. But the total interest paid over the life of a loan depends on both the rate AND the term. A "low" rate of 5% on a £20,000 loan over 10 years can still add thousands in total interest. Our Debt Cost Calculator makes this visible so you can compare options clearly.',
  },
  {
    title: 'Accuracy and Limitations of Our Tools',
    body: 'Our calculators are built around well-known financial formulas and transparent assumptions. Where possible, we use publicly available data and clearly label every input you can change. However, they are designed for education and planning, not for legal, tax, or investment advice. Real-world results may differ based on fees, taxes, and changing market conditions.',
  },
];

const faqs = [
  { q: 'Are these calculators free to use?', a: 'Yes. All TopMoneyTools calculators are free to use. There is no account, subscription, or sign-up required.' },
  { q: 'Do you store my personal data?', a: 'No. The calculators run entirely in your browser. We don\'t ask for personal identifiers like your name, address, or account numbers.' },
  { q: 'How accurate are the results?', a: 'The formulas are standard and widely used in finance. However, results depend on the inputs you provide and may not reflect future changes in inflation, interest rates, or fees. Treat the outputs as planning tools, not guarantees.' },
  { q: 'Can I use these tools for professional advice?', a: 'No. TopMoneyTools is for educational and informational purposes only. Always consult a qualified professional before making major financial decisions.' },
];

function Section({ icon: Icon, title, children }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg" style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.2)' }}>
          <Icon className="w-5 h-5" style={{ color: '#D4AF37' }} />
        </div>
        <h2 className="font-heading text-white text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Education() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Page header */}
        <div className="mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{ border: '1px solid rgba(212,175,55,0.28)', background: 'rgba(212,175,55,0.07)' }}
          >
            <BookOpen className="w-4 h-4" style={{ color: '#D4AF37' }} />
            <span className="label-caps gold-text">Financial Education</span>
          </div>
          <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
            Understand Your Money
          </h1>
          <p className="text-silver" style={{ fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '600px' }}>
            Plain-English guides on inflation, debt, and interest — so the numbers from our calculators actually mean something to you.
          </p>
        </div>

        {/* Inflation section */}
        <Section icon={TrendingDown} title="Inflation & Purchasing Power">
          <div className="space-y-6">
            {inflationTopics.map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(212,175,55,0.12)' }}>
                <h3 className="font-heading text-white text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-silver" style={{ lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
            <div className="pt-2">
              <Link
                to="/tools/food-inflation"
                className="inline-flex items-center gap-2 btn-ghost-gold px-6 py-3 rounded-xl text-sm font-semibold"
              >
                <TrendingDown className="w-4 h-4" />
                Try the Food Inflation Calculator
              </Link>
            </div>
          </div>
        </Section>

        {/* Debt section */}
        <Section icon={CreditCard} title="Debt, Interest & Borrowing">
          <div className="space-y-6">
            {debtTopics.map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(212,175,55,0.12)' }}>
                <h3 className="font-heading text-white text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-silver" style={{ lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
            <div className="pt-2">
              <Link
                to="/tools/debt-cost"
                className="inline-flex items-center gap-2 btn-ghost-gold px-6 py-3 rounded-xl text-sm font-semibold"
              >
                <CreditCard className="w-4 h-4" />
                Try the Debt Cost Calculator
              </Link>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section icon={HelpCircle} title="Frequently Asked Questions">
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(212,175,55,0.12)' }}>
                <h3 className="font-heading text-white text-base font-semibold mb-2">{item.q}</h3>
                <p className="text-silver text-sm" style={{ lineHeight: 1.75 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </PageLayout>
  );
}