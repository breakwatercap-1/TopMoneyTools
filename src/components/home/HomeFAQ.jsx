import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Are these calculators really free?',
    a: 'Yes, completely. No subscription, no sign-up, no hidden fees. All our tools are free to use forever.',
  },
  {
    q: 'Do you store any of my information?',
    a: 'No. Every calculation runs entirely in your browser. We never see your numbers, and nothing is saved to any server.',
  },
  {
    q: 'How accurate are the results?',
    a: 'The formulas we use are standard and widely recognized in finance. However, results are estimates for planning purposes — real-world results can vary based on fees, taxes, and market changes.',
  },
  {
    q: 'What is inflation, in simple terms?',
    a: 'Inflation means prices go up over time. If inflation is 5%, something that costs $100 today will cost $105 next year. Your money buys a little less each year.',
  },
  {
    q: 'Why does my loan cost more than what I borrowed?',
    a: 'When you borrow money, the lender charges interest — a fee for lending it to you. Over time, that fee adds up. Our Debt Cost Calculator shows you exactly how much extra you\'ll pay.',
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-24" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <p className="label-caps gold-text mb-4 text-center">FAQ</p>
      <h2 className="font-heading text-white text-center mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
        Common questions,<br />plain answers.
      </h2>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(212,175,55,0.12)' }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-white font-semibold" style={{ fontSize: '1rem' }}>{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 gold-text flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-5">
                <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)', paddingTop: '16px' }}>
                  <p className="text-silver" style={{ lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}