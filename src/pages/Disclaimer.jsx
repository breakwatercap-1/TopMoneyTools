import PageLayout from '@/components/layout/PageLayout';

export default function Disclaimer() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <span className="label-caps gold-text block mb-4">Disclaimer</span>
        <h1 className="font-heading text-white mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>Disclaimer</h1>
        <div className="flex flex-col gap-6 text-silver" style={{ lineHeight: 1.8 }}>
          <p>
            TopMoneyTools provides free financial calculators for educational and informational purposes only. Nothing on this
            website constitutes financial, investment, legal, or tax advice.
          </p>
          <p>
            The results shown by our calculators are estimates based on the inputs you provide and standard financial formulas.
            Actual outcomes will vary based on your specific circumstances, fees, taxes, and market conditions that we cannot account for.
          </p>
          <p>
            We strongly recommend consulting a qualified financial advisor before making any significant financial decisions — including
            taking on debt, changing your budget, or making investment choices.
          </p>
          <p>
            TopMoneyTools is not affiliated with any bank, lender, or financial institution, and we do not receive commissions or
            referral fees of any kind. We have no financial interest in the choices you make.
          </p>
          <p className="text-muted-foreground text-sm mt-4">Last updated: June 2026</p>
        </div>
      </div>
    </PageLayout>
  );
}