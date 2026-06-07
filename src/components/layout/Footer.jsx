import { Link } from 'react-router-dom';
import { Shield, Lock, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(212,175,55,0.12)', backgroundColor: '#070707' }} className="mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <p className="font-heading text-3xl md:text-4xl text-white mb-4">
            No accounts. No tracking.<br />
            <span className="gold-text">Just your numbers.</span>
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every calculation runs in your browser. We never see your data.
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{ borderTop: '1px solid rgba(212,175,55,0.1)', paddingTop: '48px' }}>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <Lock className="w-4 h-4 gold-text" />
            </div>
            <p className="font-semibold text-white">100% Private</p>
            <p className="text-sm text-muted-foreground">Your inputs never leave your device.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <Zap className="w-4 h-4 gold-text" />
            </div>
            <p className="font-semibold text-white">Free Forever</p>
            <p className="text-sm text-muted-foreground">No subscriptions. No hidden costs. Ever.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <Shield className="w-4 h-4 gold-text" />
            </div>
            <p className="font-semibold text-white">No Jargon</p>
            <p className="text-sm text-muted-foreground">Built for real people, not finance professors.</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8" style={{ borderTop: '1px solid rgba(212,175,55,0.1)', paddingTop: '32px' }}>
          {[
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms', to: '/terms' },
            { label: 'Disclaimer', to: '/disclaimer' },
          ].map(l => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-silver transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} TopMoneyTools. For educational purposes only. Not financial advice.
        </p>
      </div>
    </footer>
  );
}