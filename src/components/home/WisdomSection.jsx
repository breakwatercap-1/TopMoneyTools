const concepts = [
  {
    num: '01',
    title: 'Inflation is a Hidden Tax',
    body: 'Every year, the same $100 buys less than it did the year before. This invisible force quietly erodes your purchasing power — even when your salary stays the same.',
  },
  {
    num: '02',
    title: 'Debt Costs More Than You Think',
    body: 'The price tag on a loan isn\'t just the amount you borrow. Interest charges can add thousands to the total — and the longer the loan, the more you really pay.',
  },
  {
    num: '03',
    title: 'Small Numbers, Big Impact',
    body: 'A 1% change in interest rate or inflation might sound tiny. Over 5–10 years, it can mean the difference of hundreds or thousands of dollars from your pocket.',
  },
];

export default function WisdomSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="mb-16">
        <p className="label-caps mb-2 gold-text">Why It Matters</p>
        <h2 className="font-heading text-white" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
          Understanding the forces<br />working against your wallet.
        </h2>
      </div>

      {/* Educational image */}
      <div className="relative rounded-2xl overflow-hidden mb-16 h-48 md:h-64">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop"
          alt="A quiet library at dusk, a single lamp glowing on a dark wood table"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) saturate(0.7)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-heading text-white text-xl md:text-3xl text-center px-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            "An investment in knowledge<br />pays the best interest."
          </p>
        </div>
        <div className="absolute bottom-4 right-6">
          <span className="label-caps gold-text">— Benjamin Franklin</span>
        </div>
      </div>

      {/* Grid of Truth */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(212,175,55,0.1)' }}>
        {concepts.map((c) => (
          <div key={c.num} className="p-8 md:p-10" style={{ backgroundColor: '#070707' }}>
            <span
              className="font-heading block mb-6"
              style={{ fontSize: '3.5rem', lineHeight: 1, color: 'rgba(212,175,55,0.2)', fontWeight: 700 }}
            >
              {c.num}
            </span>
            <h3 className="font-heading text-white text-xl mb-4">{c.title}</h3>
            <p className="text-silver" style={{ lineHeight: 1.7, fontSize: '1rem' }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}