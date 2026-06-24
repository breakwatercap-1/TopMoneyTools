import { Link } from "react-router-dom";
import { TOOLS, NAV_LINKS } from "@/config/site.config";

// Single global footer — PRD §4.2 + design spec ("razor-thin line").
// Sections: Tools / Guides / Resources / Legal — and the canonical copyright line.
export default function Footer() {
  return (
    <footer className="border-t border-[#A3FFD6]/15 bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        <nav aria-label="Tools (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Tools</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            {TOOLS.map((t) => (
              <li key={t.slug}>
                <Link to={`/tools/${t.slug}`} className="hover:text-[#A3FFD6]">{t.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Guides (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Guides</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li><Link to="/education" className="hover:text-[#A3FFD6]">Education</Link></li>
            <li><Link to="/education/how-inflation-affects-your-daily-budget" className="hover:text-[#A3FFD6]">Inflation & Budget</Link></li>
            <li><Link to="/education/budgeting-for-beginners-50-30-20-rule-explained" className="hover:text-[#A3FFD6]">Budgeting 50/30/20</Link></li>
            <li><Link to="/education/how-to-compare-loans-without-getting-confused" className="hover:text-[#A3FFD6]">Comparing Loans</Link></li>
            <li><Link to="/start-here" className="hover:text-[#A3FFD6]">Start Here</Link></li>
          </ul>
        </nav>

        <nav aria-label="Resources (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Resources</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li><Link to="/tools" className="hover:text-[#A3FFD6]">All Tools</Link></li>
            <li><Link to="/glossary" className="hover:text-[#A3FFD6]">Glossary (29 terms)</Link></li>
            <li><Link to="/resources" className="hover:text-[#A3FFD6]">Resources</Link></li>
            <li><Link to="/about" className="hover:text-[#A3FFD6]">About</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li><Link to="/privacy" className="hover:text-[#A3FFD6]">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>

      {/* Razor-thin copyright line — design spec */}
      <div className="border-t border-[#A3FFD6]/10 py-4 text-center">
        <p className="font-mono text-xs tracking-[0.05em] text-[#E0E0E0]/50">
          © {new Date().getFullYear()} TopMoneyTools — Making money simple for everyone.
        </p>
      </div>
    </footer>
  );
}