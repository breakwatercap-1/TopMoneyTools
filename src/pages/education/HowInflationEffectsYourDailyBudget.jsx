import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Inflation Affects Your Daily Budget — Real Costs, Real Impact",
  "description":
    "A practical guide to understanding how inflation changes everyday expenses, how to adjust your budget, and how to stay ahead.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/how-inflation-effects-your-daily-budget",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do some categories inflate faster than others?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different sectors have different cost pressures. Housing, healthcare, and food often inflate faster due to supply constraints and rising production costs.",
      },
    },
    {
      "@type": "Question",
      "name": "How often should I update my budget for inflation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Review your budget every 3–6 months, or sooner if prices rise quickly. Adjust categories like groceries, fuel, and utilities first.",
      },
    },
  ],
};

const openGraphMeta = {
  title:
    "How Inflation Affects Your Daily Budget — Real Costs, Real Impact — TopMoneyTools",
  description:
    "Learn how inflation affects everyday expenses, how to adjust your budget, and how to stay ahead.",
  url: "https://topmoneytools.com/education/how-inflation-effects-your-daily-budget",
  image: "https://topmoneytools.com/og/how-inflation-effects-your-daily-budget.png",
  type: "article",
};

export default function HowInflationEffectsYourDailyBudget() {
  return (
    <ArticleShell
      title="How Inflation Affects Your Daily Budget — Real Costs, Real Impact"
      description="A practical guide to understanding how inflation changes everyday expenses, how to adjust your budget, and how to stay ahead."
      path="/education/how-inflation-effects-your-daily-budget"
      sidebarTerms={[
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is purchasing power?", slug: "purchasing-power" },
        { q: "What is CPI?", slug: "consumer-price-index" },
        { q: "What is wage growth?", slug: "wage-growth" },
        { q: "What is cost of living?", slug: "cost-of-living" },
      ]}
      relatedTools={[
        { label: "Inflation Calculator", to: "/tools/inflation" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Inflation hits your budget where it feels most personal
      </h2>
      <p className="text-[#889988]">
        Inflation doesn’t just raise prices — it changes how far your money goes.
        When{" "}
        <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
          inflation
        </Link>{" "}
        rises faster than{" "}
        <Link to="/glossary#wage-growth" className="text-[#A3FFD6] hover:underline">
          wage growth
        </Link>
        , your{" "}
        <Link
          to="/glossary#purchasing-power"
          className="text-[#A3FFD6] hover:underline"
        >
          purchasing power
        </Link>{" "}
        shrinks — even if your income stays the same.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Everyday categories that inflate fastest
      </h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Groceries — especially meat, dairy, and produce.</li>
        <li>Fuel — sensitive to global supply and demand.</li>
        <li>Utilities — electricity and heating costs rise with energy prices.</li>
        <li>Housing — rent and mortgage payments often outpace general inflation.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Mini‑calculation: inflation on groceries
      </h2>
      <p className="text-[#889988]">
        If groceries cost $600/month and inflation is 5%, next year’s cost is
        roughly $630/month. Over 5 years at 5%, groceries rise to about $765/month.
        Use the{" "}
        <Link to="/tools/inflation" className="text-[#A3FFD6] hover:underline">
          Inflation Calculator
        </Link>{" "}
        to see your own numbers.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        How to adjust your budget for inflation
      </h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Increase variable categories like groceries and fuel first.</li>
        <li>Review subscriptions and non‑essentials to free up space.</li>
        <li>Build a buffer for unpredictable price spikes.</li>
        <li>Track actual spending monthly to stay aligned.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Glossary Highlights
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — rising prices over time.
          </li>
          <li>
            <Link
              to="/glossary#purchasing-power"
              className="text-[#A3FFD6] hover:underline"
            >
              Purchasing power
            </Link>{" "}
            — what your money can buy.
          </li>
          <li>
            <Link
              to="/glossary#consumer-price-index"
              className="text-[#A3FFD6] hover:underline"
            >
              CPI
            </Link>{" "}
            — a measure of average price changes.
          </li>
          <li>
            <Link to="/glossary#wage-growth" className="text-[#A3FFD6] hover:underline">
              Wage growth
            </Link>{" "}
            — how fast income increases.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // FAQ
        </p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Why do some categories inflate faster than others?
          <br />
          <strong>A:</strong> Different sectors have different cost pressures.
          Housing, healthcare, and food often inflate faster due to supply
          constraints and rising production costs.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How often should I update my budget for inflation?
          <br />
          <strong>A:</strong> Review your budget every 3–6 months, or sooner if
          prices rise quickly.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Key Takeaways
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Inflation reduces purchasing power unless wages keep up.</li>
          <li>Groceries, fuel, utilities, and housing inflate fastest.</li>
          <li>Budgets should be reviewed every 3–6 months.</li>
          <li>Small adjustments prevent inflation from causing financial stress.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Next Steps
        </p>
        <p className="mt-2 text-sm text-[#889988]">
          Use the{" "}
          <Link to="/tools/inflation" className="text-[#A3FFD6] hover:underline">
            Inflation Calculator
          </Link>{" "}
          to estimate future costs. Then adjust your budget using the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>{" "}
          to stay ahead of rising prices.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/how-inflation-works" className="text-[#A3FFD6] hover:underline">
              How Inflation Works
            </Link>
          </li>
          <li>
            <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">
              Budgeting 101
            </Link>
          </li>
          <li>
            <Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">
              Investing 101
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
