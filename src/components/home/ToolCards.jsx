import { Link } from 'react-router-dom';
import { TrendingDown, CreditCard, ArrowRight } from 'lucide-react';

const tools = [
  {
    icon: TrendingDown,
    title: 'Food Inflation Calculator',
    description: 'See exactly how rising food prices will affect your monthly grocery bill — in plain numbers, not confusing charts.',
    cta: 'Calculate my grocery impact',
    href: '/tools/food-inflation',
    tag: 'Inflation',
  },
  {
    icon: CreditCard,
    title: 'Debt Cost Calculator',
    description: 'Find out the true cost of any loan or credit card — including how much extra you\'ll pay in interest over time.',
    cta: 'See my total debt cost',
    href: '/tools/debt-cost',
    tag: 'Debt',
  },
];

export default function ToolCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="mb-16" style={{ borderLeft: '3px solid #D4AF37', paddingLeft: '24px' }}>
        <p className="label-caps mb-2">Our Tools</p>
        <h2 className="font-heading text-white" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
          Two tools. Endless clarity.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              to={tool.href}
              className="glass-card rounded-2xl p-8 group transition-all duration-300 hover:border-gold block"
              style={{ border: '1px solid rgba(212,175,55,0.15)' }}
            >
              {/* Tag */}
              <span className="label-caps gold-text mb-6 block">{tool.tag}</span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <Icon className="w-6 h-6 gold-text" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-white text-2xl mb-4">{tool.title}</h3>
              <p className="text-silver mb-8" style={{ lineHeight: 1.7 }}>{tool.description}</p>

              {/* CTA */}
              <div className="flex items-center gap-2 gold-text font-semibold group-hover:gap-4 transition-all duration-200">
                {tool.cta}
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Gold rule bottom */}
              <div
                className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'rgba(212,175,55,0.4)' }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}