import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Inflation', href: '/tools/food-inflation' },
  { label: 'Debt Cost', href: '/tools/debt-cost' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      style={{ borderBottom: '1px solid rgba(212,175,55,0.12)', backgroundColor: 'rgba(7,7,7,0.95)', backdropFilter: 'blur(12px)' }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-heading text-xl font-bold gold-text tracking-wide">TopMoneyTools</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'gold-text'
                  : 'text-silver hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
          <Shield className="w-3.5 h-3.5 gold-text" />
          <span className="text-xs font-semibold gold-text tracking-wide">Private & Free</span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-silver hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${
                location.pathname === link.href ? 'gold-text' : 'text-silver'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <Shield className="w-3.5 h-3.5 gold-text" />
            <span className="text-xs font-semibold gold-text">Private & Free</span>
          </div>
        </div>
      )}
    </nav>
  );
}