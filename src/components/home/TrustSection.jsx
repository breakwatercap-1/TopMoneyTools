import { Shield, Lock, Zap, BookOpen } from 'lucide-react';

const trust = [
  { icon: Shield, label: 'No account needed', desc: 'Start using the tools immediately. No email, no password.' },
  { icon: Lock, label: 'Your data stays with you', desc: 'Calculations happen in your browser. Nothing is sent to us.' },
  { icon: Zap, label: 'Free forever', desc: 'No freemium tricks. No premium tier. Just free tools.' },
  { icon: BookOpen, label: 'Educational, not advice', desc: 'We explain what the numbers mean, without telling you what to do.' },
];

export default function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: message */}
        <div>
          <p className="label-caps gold-text mb-4">Why Trust Us</p>
          <h2 className="font-heading text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
            We're on your side.<br />
            <span className="gold-text">Full stop.</span>
          </h2>
          <p className="text-silver mb-4" style={{ lineHeight: 1.7 }}>
            Most financial websites have something to sell you — a product, a referral, an upgrade.
            We don't. Our only goal is to give you clear, honest numbers so you can make better decisions.
          </p>
          <p className="text-silver" style={{ lineHeight: 1.7 }}>
            That's it. No hidden agenda. No upsell. Just tools that work.
          </p>
        </div>

        {/* Right: trust pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trust.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-6 rounded-xl"
                style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.12)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)' }}
                >
                  <Icon className="w-4 h-4 gold-text" />
                </div>
                <p className="text-white font-semibold mb-1 text-sm">{item.label}</p>
                <p className="text-muted-foreground text-sm" style={{ lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}