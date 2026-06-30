import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

export default function StartHere() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://topmoneytools.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Start Here",
        "item": "https://topmoneytools.com/start-here",
      },
    ],
  };

  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-10 text-[#E0E0E0]">
        <SEO
          title="Start Here — Your First Steps with TopMoneyTools"
          description="New here? This page gives you the exact steps to get started — no financial experience needed, no account, no tracking, and every calculation runs entirely in your browser."
          seoMeta={{
            title: "Start Here — Your First Steps with TopMoneyTools",
            description:
              "Learn the basics, use simple tools, and build a financial plan you can stick to — all private, free, and beginner‑friendly.",
            url: "https://topmoneytools.com/start-here",
            image: "https://topmoneytools.com/og/start-here.png",
            type: "article",
          }}
          structuredData={[breadcrumbSchema]}
        />

        {/* Page Title */}
        <h1 className="mb-6 text-3xl font-bold text-[#E0E0E0]">
          Start Here
        </h1>

        <p className="mb-10 text-[#889988]">
          New here? This page gives you the exact steps to get started — no
          financial experience needed, no account, no tracking, and every
          calculation runs entirely in your browser.
        </p>

        {/* Step 01 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#E0E0E0]">
            Step 01 — Learn the basics
          </h2>
          <p className="mt-2 text-[#889988]">
            Start with the guide that matches where you are. Each article takes
            about 3–4 minutes to read.
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              <Link
                to="/education/how-inflation-affects-your-daily-budget"
                className="text-[#A3FFD6] hover:underline"
              >
                How Inflation Affects Your Daily Budget
              </Link>
              <p className="text-sm text-[#889988]">
                See how rising prices change your everyday costs — groceries,
                fuel, utilities, rent.
              </p>
            </li>

            <li>
              <Link
                to="/education/budgeting-for-beginners-50-30-20-rule-explained"
                className="text-[#A3FFD6] hover:underline"
              >
                Budgeting for Beginners (50/30/20 Rule)
              </Link>
              <p className="text-sm text-[#889988]">
                Build a simple, flexible budget you can actually stick to.
              </p>
            </li>

            <li>
              <Link
                to="/education/how-to-compare-loans"
                className="text-[#A3FFD6] hover:underline"
              >
                How to Compare Loans
              </Link>
              <p className="text-sm text-[#889988]">
                Learn how APR, interest rates, fees, and loan terms really affect
                total cost.
              </p>
            </li>

            <li>
              <Link
                to="/education/budgeting-101"
                className="text-[#A3FFD6] hover:underline"
              >
                Budgeting 101
              </Link>
              <p className="text-sm text-[#889988]">
                Understand needs vs wants, fixed vs variable expenses, and how to
                plan ahead.
              </p>
            </li>

            <li>
              <Link
                to="/education/investing-101"
                className="text-[#A3FFD6] hover:underline"
              >
                Investing 101
              </Link>
              <p className="text-sm text-[#889988]">
                A beginner‑friendly introduction to risk, returns, diversification,
                and long‑term growth.
              </p>
            </li>

            <li>
              <Link
                to="/education/retirement-planning-basics"
                className="text-[#A3FFD6] hover:underline"
              >
                Retirement Planning Basics
              </Link>
              <p className="text-sm text-[#889988]">
                How much to save, where to save, and how compounding works over
                decades.
              </p>
            </li>

            <li>
              <Link
                to="/education/understanding-interest-rates"
                className="text-[#A3FFD6] hover:underline"
              >
                Understanding Interest Rates
              </Link>
              <p className="text-sm text-[#889988]">
                Why rates rise and fall — and how they affect loans, savings, and
                inflation.
              </p>
            </li>

            <li>
              <Link
                to="/education/how-inflation-works"
                className="text-[#A3FFD6] hover:underline"
              >
                How Inflation Works
              </Link>
              <p className="text-sm text-[#889988]">
                A clear explanation of CPI, purchasing power, and why prices
                change.
              </p>
            </li>

            <li>
              <Link
                to="/education/credit-scores-and-borrowing"
                className="text-[#A3FFD6] hover:underline"
              >
                Credit Scores & Borrowing
              </Link>
              <p className="text-sm text-[#889988]">
                What affects your score, how lenders evaluate you, and how to
                improve it.
              </p>
            </li>

            <li>
              <Link
                to="/education/emergency-funds-and-safety-nets"
                className="text-[#A3FFD6] hover:underline"
              >
                Emergency Funds & Financial Safety Nets
              </Link>
              <p className="text-sm text-[#889988]">
                How much to save, where to keep it, and how to build resilience.
              </p>
            </li>
          </ul>
        </section>

        {/* Step 02 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#E0E0E0]">
            Step 02 — Use a tool
          </h2>
          <p className="mt-2 text-[#889988]">
            Pick the calculator that fits your question. All tools run entirely in
            your browser — private, free, and no account needed.
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              <Link
                to="/tools/food-inflation"
                className="text-[#A3FFD6] hover:underline"
              >
                Food Inflation Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                See how rising prices affect your grocery budget.
              </p>
            </li>

            <li>
              <Link
                to="/tools/debt-cost"
                className="text-[#A3FFD6] hover:underline"
              >
                Debt Cost Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                Understand how much interest you’ll pay over time.
              </p>
            </li>

            <li>
              <Link
                to="/tools/mortgage-payment"
                className="text-[#A3FFD6] hover:underline"
              >
                Mortgage Payment Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                Estimate monthly payments and long‑term costs.
              </p>
            </li>

            <li>
              <Link
                to="/tools/investment-growth"
                className="text-[#A3FFD6] hover:underline"
              >
                Investment Growth Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                See how your money grows with compounding.
              </p>
            </li>

            <li>
              <Link
                to="/tools/retirement"
                className="text-[#A3FFD6] hover:underline"
              >
                Retirement Savings Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                Estimate how much you’ll need — and how close you are.
              </p>
            </li>

            <li>
              <Link
                to="/tools/budget-planner"
                className="text-[#A3FFD6] hover:underline"
              >
                Budget Planner
              </Link>
              <p className="text-sm text-[#889988]">
                Build a simple, flexible budget in minutes.
              </p>
            </li>

            <li>
              <Link
                to="/tools/net-worth"
                className="text-[#A3FFD6] hover:underline"
              >
                Net Worth Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                Track your financial baseline over time.
              </p>
            </li>

            <li>
              <Link
                to="/tools/savings-goal"
                className="text-[#A3FFD6] hover:underline"
              >
                Savings Goal Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                See how long it takes to reach a target.
              </p>
            </li>

            <li>
              <Link
                to="/tools/emergency-fund"
                className="text-[#A3FFD6] hover:underline"
              >
                Emergency Fund Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                Build a safety net that fits your life.
              </p>
            </li>

            <li>
              <Link
                to="/tools/savings-rate"
                className="text-[#A3FFD6] hover:underline"
              >
                Savings Rate Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                Measure how much of your income you’re saving.
              </p>
            </li>
          </ul>

          <p className="mt-6 text-sm text-[#889988]">
            Your numbers never leave your device. Every calculation runs locally in
            your browser.
          </p>
        </section>

        {/* Step 03 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#E0E0E0]">
            Step 03 — Build your plan
          </h2>
          <p className="mt-2 text-[#889988]">
            Connect the dots across your whole financial picture.
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              <Link
                to="/glossary"
                className="text-[#A3FFD6] hover:underline"
              >
                Glossary — 35 key terms defined plainly
              </Link>
              <p className="text-sm text-[#889988]">
                Clear definitions for interest, APR, inflation, amortization, and
                more.
              </p>
            </li>

            <li>
              <Link
                to="/resources"
                className="text-[#A3FFD6] hover:underline"
              >
                Resources — government references and guides
              </Link>
              <p className="text-sm text-[#889988]">
                Trusted links for taxes, benefits, retirement, and financial
                literacy.
              </p>
            </li>

            <li>
              <Link
                to="/tools/budget-planner"
                className="text-[#A3FFD6] hover:underline"
              >
                Run the Budget Planner
              </Link>
              <p className="text-sm text-[#889988]">
                Build a simple plan you can adjust as life changes.
              </p>
            </li>

            <li>
              <Link
                to="/tools/net-worth"
                className="text-[#A3FFD6] hover:underline"
              >
                Track your baseline with the Net Worth Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                See your progress month by month.
              </p>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <section className="mt-16 border-t border-[#A3FFD6]/20 pt-8">
          <p className="text-sm text-[#889988]">
            All calculations run in your browser. No data stored. No account
            required.
          </p>
          <p className="mt-2 text-sm text-[#889988]">
            © 2026 TopMoneyTools — Making money simple for everyone.
          </p>
          <p className="mt-2 text-sm text-[#889988]">
            Last updated: June 2026
          </p>
        </section>
      </div>
    </Layout>
  );
}
