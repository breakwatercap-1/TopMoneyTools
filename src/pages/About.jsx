import PageLayout from '@/components/layout/PageLayout';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <span className="label-caps gold-text block mb-4">About Us</span>
        <h1 className="font-heading text-white mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Built for real people,<br />
          <span className="gold-text">not finance professors.</span>
        </h1>

        <div className="flex flex-col gap-8 text-silver" style={{ lineHeight: 1.8, fontSize: '1.0625rem' }}>
          <p>
            Most financial websites are built for people who already understand money. They assume you know what "APR" means,
            why compound interest matters, or how food inflation data is compiled. We don't assume any of that.
          </p>

          <div style={{ borderLeft: '3px solid #D4AF37', paddingLeft: '24px' }}>
            <p className="text-white font-semibold text-lg mb-2">Our mission is simple:</p>
            <p>
              Give anyone — regardless of financial background — access to clear, honest calculators that help them understand
              how inflation and debt affect their real lives.
            </p>
          </div>

          <p>
            We are not a bank. We are not a broker. We have nothing to sell you. Every tool on this site is free, private,
            and designed to be used without creating an account or sharing any personal information.
          </p>

          <h2 className="font-heading text-white text-2xl mt-4">How our calculators work</h2>

          <p>
            Each calculator uses well-established financial formulas that are standard in the industry. For example,
            the Debt Cost Calculator uses the amortization formula — the same one your bank uses to set your monthly
            payment. We just make it readable.
          </p>

          <p>
            The Food Inflation Calculator applies compound interest math to your current grocery spend, using typical
            food inflation rates by country. You can always enter your own custom rate if you have local data.
          </p>

          <h2 className="font-heading text-white text-2xl mt-4">Accuracy & limitations</h2>

          <p>
            Our tools are designed for education and planning, not for legal, tax, or investment advice. Real-world
            results will differ based on fees, taxes, and market changes. Always double-check important decisions with
            a qualified professional.
          </p>

          <div className="p-6 rounded-2xl" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <p className="text-white font-semibold mb-2">Ready to use the tools?</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/tools/food-inflation" className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold inline-block">
                Food Inflation Calculator
              </Link>
              <Link to="/tools/debt-cost" className="btn-ghost-gold px-6 py-3 rounded-xl text-sm inline-block">
                Debt Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}