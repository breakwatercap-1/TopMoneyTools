import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";

export default function Resources() {
  return (
    <Layout>
      <SEO title="Financial Resources" description="A curated collection of free TopMoneyTools calculators, beginner guides, and trusted government references for confident money decisions." path="/resources" />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Financial Resources</h1>
        <p className="mt-2 text-[#889988]">A curated collection of free calculators, beginner guides, and trusted government references.</p>

        <div className="mt-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        <h2 className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Calculators</h2>
        <p className="mt-1 text-sm text-[#889988]">All ten instruments — free and private.</p>
        <p className="mt-3">
          <Link to="/tools" className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:gap-2">
            Browse all tools <ArrowRight className="h-3 w-3" />
          </Link>
        </p>

        <h2 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Beginner guides</h2>
        <ul className="mt-2 space-y-2 text-sm text-[#E0E0E0]">
          <li><Link to="/education/how-inflation-affects-your-daily-budget" className="hover:text-[#A3FFD6]">How Inflation Affects Your Daily Budget</Link></li>
          <li><Link to="/education/budgeting-for-beginners-50-30-20-rule-explained" className="hover:text-[#A3FFD6]">Budgeting for Beginners (50/30/20 Rule)</Link></li>
          <li><Link to="/education/how-to-compare-loans-without-getting-confused" className="hover:text-[#A3FFD6]">How to Compare Loans</Link></li>
        </ul>

        <h2 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Government references</h2>
        <ul className="mt-2 space-y-2 text-sm text-[#E0E0E0]">
          <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[#A3FFD6]">Consumer Financial Protection Bureau (CFPB) ↗</a></li>
          <li><a href="https://www.usa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[#A3FFD6]">USA.gov — Government Benefits & Services ↗</a></li>
          <li><a href="https://www.investor.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[#A3FFD6]">Investor.gov — SEC Investor Resources ↗</a></li>
        </ul>

        <p className="mt-10">
          <Link to="/education" className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:gap-2">
            Explore all articles <ArrowRight className="h-3 w-3" />
          </Link>
        </p>
      </section>
    </Layout>
  );
}