import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Compare Loans Without Getting Confused",
  "description":
    "A clear, beginner‑friendly guide to comparing loans using interest rates, APR, loan terms, fees, and total cost — with examples and common mistakes.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/how-to-compare-loans-without-getting-confused",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is APR more important than interest rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. APR includes fees and gives a more accurate picture of the total cost of borrowing.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I know which loan is cheaper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compare total cost, not just monthly payments. A lower payment can still mean a more expensive loan if the term is longer.",
      },
    },
  ],
};

const openGraphMeta = {
  title:
    "How to Compare Loans Without Getting Confused — TopMoneyTools",
  description:
    "Learn how to compare loans using interest rates, APR, loan terms, fees, and total cost — with examples and common mistakes.",
  url: "https://topmoneytools.com/education/how-to-compare-loans-without-getting-confused",
  image:
    "https://topmoneytools.com/og/how-to-compare-loans-without-getting-confused.png",
  type: "article",
};

export default function HowToCompareLoans() {
  return (
    <ArticleShell
      title="How to Compare Loans Without Getting Confused"
      description="A clear, beginner‑friendly guide to comparing loans using interest rates, APR, loan terms, fees, and total cost."
      path="/education/how-to-compare-loans-without-getting-confused"
      sidebarTerms={[
        { q: "What is APR?", slug: "annual-percentage-rate" },
        { q: "What is principal?", slug: "principal" },
        { q: "What is interest?", slug: "interest" },
        { q: "What is amortization?", slug: "amortization" },
        { q: "What is loan term?", slug: "loan-term" },
      ]}
      relatedTools={[
        { label: "Loan Comparison Tool", to: "/tools/loan-comparison" },
        { label: "Mortgage Calculator", to: "/tools/mortgage" },
        { label: "Debt Cost Calculator", to: "/tools/debt-cost" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Comparing loans is easier when you know what actually matters
      </h2>
      <p className="text-[#889988]">
        Most people compare loans by looking at the{" "}
        <Link
          to="/glossary#interest"
          className="text-[#A3FFD6] hover:underline"
        >
          interest rate
        </Link>
        — but that’s only part of the story. To truly compare loans, you need to
        look at{" "}
        <Link
          to="/glossary#annual-percentage-rate"
          className="text-[#A3FFD6] hover:underline"
        >
          APR
        </Link>
        ,{" "}
        <Link
          to="/glossary#loan-term"
          className="text-[#A3FFD6] hover:underline"
        >
          loan term
        </Link>
        , fees, and total cost over time.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        The 5 factors that determine which loan is cheaper
      </h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Interest rate</li>
        <li>APR (includes fees)</li>
        <li>Loan term (length)</li>
        <li>Upfront fees (origination, admin, closing)</li>
        <li>Total cost over the full term</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        APR vs interest rate — what’s the difference?
      </h2>
      <p className="text-[#889988]">
        The{" "}
        <Link
          to="/glossary#annual-percentage-rate"
          className="text-[#A3FFD6] hover:underline"
        >
          APR
        </Link>{" "}
        includes fees, while the interest rate does not. APR is the better
        comparison tool because it reflects the true cost of borrowing.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Mini‑calculation: comparing two loans
      </h2>
      <p className="text-[#889988]">
        Suppose you’re comparing two $10,000 loans:
      </p>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Loan A: 6% interest, 3‑year term</li>
        <li>Loan B: 4% interest, 5‑year term</li>
      </ul>
      <p className="text-[#889988]">
        Loan B has a lower interest rate — but because it lasts longer, you may
        pay more total interest. Use the{" "}
        <Link
          to="/tools/loan-comparison"
          className="text-[#A3FFD6] hover:underline"
        >
          Loan Comparison Tool
        </Link>{" "}
        to see the exact difference.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes when comparing loans
      </h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Choosing the loan with the lowest monthly payment</li>
        <li>Ignoring fees included in APR</li>
        <li>Not considering total cost over the full term</li>
        <li>Comparing loans with different term lengths incorrectly</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Glossary Highlights
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link
              to="/glossary#annual-percentage-rate"
              className="text-[#A3FFD6] hover:underline"
            >
              APR
            </Link>{" "}
            — the true cost of borrowing including fees.
          </li>
          <li>
            <Link
              to="/glossary#principal"
              className="text-[#A3FFD6] hover:underline"
            >
              Principal
            </Link>{" "}
            — the amount you borrow.
          </li>
          <li>
            <Link
              to="/glossary#interest"
              className="text-[#A3FFD6] hover:underline"
            >
              Interest
            </Link>{" "}
            — the cost of borrowing money.
          </li>
          <li>
            <Link
              to="/glossary#amortization"
              className="text-[#A3FFD6] hover:underline"
            >
              Amortization
            </Link>{" "}
            — how payments are spread over time.
          </li>
          <li>
            <Link
              to="/glossary#loan-term"
              className="text-[#A3FFD6] hover:underline"
            >
              Loan term
            </Link>{" "}
            — how long you have to repay the loan.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // FAQ
        </p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Is APR more important than interest rate?
          <br />
          <strong>A:</strong> Yes. APR includes fees and gives a more accurate
          picture of the total cost.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How do I know which loan is cheaper?
          <br />
          <strong>A:</strong> Compare total cost, not just monthly payments.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Key Takeaways
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>APR is the best way to compare loans.</li>
          <li>Longer terms reduce payments but increase total cost.</li>
          <li>Fees matter — they change the true cost of borrowing.</li>
          <li>Use tools to compare total cost, not just monthly payments.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Next Steps
        </p>
        <p className="mt-2 text-sm text-[#889988]">
          Use the{" "}
          <Link
            to="/tools/loan-comparison"
            className="text-[#A3FFD6] hover:underline"
          >
            Loan Comparison Tool
          </Link>{" "}
          to compare APR, monthly payments, and total cost. Then explore the{" "}
          <Link
            to="/tools/debt-cost"
            className="text-[#A3FFD6] hover:underline"
          >
            Debt Cost Calculator
          </Link>{" "}
          to understand how interest adds up over time.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link
              to="/education/understanding-interest-rates"
              className="text-[#A3FFD6] hover:underline"
            >
              Understanding Interest Rates
            </Link>
          </li>
          <li>
            <Link
              to="/education/credit-scores-and-borrowing"
              className="text-[#A3FFD6] hover:underline"
            >
              Credit Scores & Borrowing
            </Link>
          </li>
          <li>
            <Link
              to="/education/budgeting-101"
              className="text-[#A3FFD6] hover:underline"
            >
              Budgeting 101
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
