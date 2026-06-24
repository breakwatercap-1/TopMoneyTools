import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { LIVE_TOOLS } from "@/config/site.config";

const STEPS = [
  {
    h: "1. Get oriented",
    p: <>Not sure where to begin? Read <Link to="/education/how-inflation-affects-your-daily-budget" className="text-[#A3FFD6] hover:underline">How Inflation Affects Your Daily Budget</Link> to see how money quietly changes over time.</>,
  },
  {
    h: "2. Pick a tool",
    p: <>Try a calculator that fits what's on your mind right now. The eight instruments below are all live:</>,
    list: LIVE_TOOLS,
  },
  {
    h: "3. Learn the basics",
    p: <>Build a foundation with <Link to="/education" className="text-[#A3FFD6] hover:underline">the Education Center</Link> — plain-English articles on budgeting, loan terms, and more.</>,
  },
  {
    h: "4. Keep handy references",
    p: <>Save our <Link to="/glossary" className="text-[#A3FFD6] hover:underline">Glossary</Link> and <Link to="/resources" className="text-[#A3FFD6] hover:underline">Resources</Link> — both cover the terms and links you'll keep returning to.</>,
  },
];

export default function StartHere() {
  return (
    <Layout>
      <SEO title="Start Here — Your First Steps with TopMoneyTools" description="New to TopMoneyTools? This simple, step-by-step guide walks you through the tools and resources — no financial experience needed." path="/start-here" />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Onboarding</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Start Here</h1>
        <p className="mt-2 text-[#889988]">New here? This short guide walks you through everything, step by step — no financial experience needed.</p>

        <ol className="mt-10 space-y-8">
          {STEPS.map((s, i) => (
            <li key={i} className="instrument-surface rounded-sm p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#E0E0E0]">{s.p}</p>
              {s.list && (
                <ul className="mt-3 grid gap-1 text-sm text-[#889988]">
                  {s.list.map((t) => (
                    <li key={t.slug}>
                      <Link to={`/tools/${t.slug}`} className="hover:text-[#A3FFD6]">{t.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}