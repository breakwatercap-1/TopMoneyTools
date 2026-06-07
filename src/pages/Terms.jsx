import PageLayout from '@/components/layout/PageLayout';

export default function Terms() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <span className="label-caps gold-text block mb-4">Terms of Use</span>
        <h1 className="font-heading text-white mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>Terms of Use</h1>
        <div className="flex flex-col gap-6 text-silver" style={{ lineHeight: 1.8 }}>
          <p>By using TopMoneyTools, you agree to the following terms. They're written in plain language — the same way we write everything.</p>

          {[
            { title: 'Free to use', body: 'All tools on this site are free to use for personal, non-commercial purposes. You do not need an account, and you are not entering into any contract by using the calculators.' },
            { title: 'For educational purposes only', body: 'The results produced by our calculators are estimates intended for informational and educational purposes. They are not financial, legal, or tax advice. Do not make major financial decisions based solely on these results.' },
            { title: 'No guarantees', body: 'We make every effort to ensure our formulas are accurate, but we cannot guarantee that results reflect your exact real-world outcome. Consult a qualified financial professional for personalized advice.' },
            { title: 'Intellectual property', body: 'The content, design, and code of this website belong to TopMoneyTools. You may not reproduce or distribute our tools or content without permission.' },
            { title: 'Changes to these terms', body: 'We may update these terms at any time. Continued use of the site after changes means you accept the updated terms.' },
          ].map(s => (
            <div key={s.title}>
              <h2 className="font-heading text-white text-xl mb-2">{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}

          <p className="text-muted-foreground text-sm mt-4">Last updated: June 2026</p>
        </div>
      </div>
    </PageLayout>
  );
}