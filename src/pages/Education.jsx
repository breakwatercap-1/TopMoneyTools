import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import Reveal from "@/components/Reveal";

const ARTICLES = [
  { slug: "how-inflation-affects-your-daily-budget", mark: "▮", t: "How Inflation Affects Your Daily Budget", d: "Understand why prices rise and how to stay ahead of them." },
  { slug: "budgeting-for-beginners-50-30-20-rule-explained", mark: "▣", t: "Budgeting for Beginners (50/30/20 Rule)", d: "A simple method to bring balance and clarity to your spending." },
  { slug: "how-to-compare-loans-without-getting-confused", mark: "◈", t: "How to Compare Loans", d: "Learn the three numbers that matter most when choosing a loan." },
];

export default function Education() {
  return (
    <Layout>
      <SEO title="Education Center" description="Plain-English guides from TopMoneyTools on inflation, budgeting, loan terms and credit scores — simple, friendly financial education for everyday life." path="/education" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Education Center</h1>
        <p className="mt-2 max-w-xl text-[#889988]">Learn the basics, one clear step at a time. Our articles explain inflation, budgeting, loan terms, and credit scores in simple language that actually makes sense.</p>

        <div className="mt-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Reveal key={a.slug}>
              <Link to={`/education/${a.slug}`} className="group instrument-surface rounded-sm p-5 transition hover:instrument-glow">
                <span aria-hidden="true" className="font-mono text-2xl text-[#A3FFD6]">{a.mark}</span>
                <h2 className="mt-3 font-heading text-lg font-semibold text-[#E0E0E0]">{a.t}</h2>
                <p className="mt-1 text-sm text-[#889988]">{a.d}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] group-hover:gap-2">Read article <ArrowRight className="h-3 w-3" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}