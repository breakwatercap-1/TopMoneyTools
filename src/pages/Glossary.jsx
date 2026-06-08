import PageLayout from '@/components/layout/PageLayout';
import { BookMarked } from 'lucide-react';

const glossaryTerms = [
  { term: 'Inflation', def: 'The rate at which prices increase over time. When inflation rises, each dollar buys less than before. Inflation affects groceries, housing, transportation, and long-term savings.' },
  { term: 'Food Inflation', def: 'A specific type of inflation that measures how the cost of groceries and essential food items changes over time. Food inflation often rises faster than general inflation and impacts household budgets directly.' },
  { term: 'Purchasing Power', def: 'The amount of goods or services you can buy with a given amount of money. Inflation reduces purchasing power, meaning your money buys less as prices rise.' },
  { term: 'Cost of Living', def: 'The total amount of money needed to cover basic expenses such as housing, food, transportation, and healthcare. Inflation increases the cost of living over time.' },
  { term: 'Interest Rate', def: 'The percentage charged by lenders when you borrow money, or earned when you save or invest. Interest rates influence loan payments, mortgage costs, and credit card balances.' },
  { term: 'Real Interest Rate', def: 'The interest rate after adjusting for inflation. If inflation is higher than your interest rate, your real return may be negative even if the nominal rate looks positive.' },
  { term: 'Nominal Interest Rate', def: 'The stated interest rate before adjusting for inflation. Most loans, mortgages, and savings accounts advertise nominal rates.' },
  { term: 'Compound Interest', def: 'Interest calculated on both the original amount and any interest already earned. Compound interest can grow savings quickly—or make debt more expensive over time.' },
  { term: 'Debt-to-Income Ratio (DTI)', def: 'A measure of how much of your monthly income goes toward debt payments. Lenders use DTI to evaluate creditworthiness and loan eligibility.' },
  { term: 'Amortization', def: 'The process of paying off a loan through regular payments over time. Each payment includes both principal and interest, with the interest portion decreasing as the loan matures.' },
  { term: 'Principal', def: 'The original amount of money borrowed or invested, not including interest. Loan payments reduce the principal over time.' },
  { term: 'APR (Annual Percentage Rate)', def: 'The total yearly cost of borrowing, including interest and fees. APR provides a more accurate picture of loan costs than the nominal interest rate alone.' },
];

export default function Glossary() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Page header */}
        <div className="mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{ border: '1px solid rgba(212,175,55,0.28)', background: 'rgba(212,175,55,0.07)' }}
          >
            <BookMarked className="w-4 h-4" style={{ color: '#D4AF37' }} />
            <span className="label-caps gold-text">Financial Glossary</span>
          </div>
          <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
            Key Financial Terms, Plain and Simple
          </h1>
          <p className="text-silver" style={{ fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '600px' }}>
            A reference guide to the terms used in our calculators and guides — written in plain English, no jargon.
          </p>
        </div>

        {/* Glossary grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {glossaryTerms.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(212,175,55,0.12)' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#D4AF37', fontSize: '1rem' }}>{item.term}</p>
              <p className="text-silver text-sm" style={{ lineHeight: 1.7 }}>{item.def}</p>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}