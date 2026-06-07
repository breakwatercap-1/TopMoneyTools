import PageLayout from '@/components/layout/PageLayout';

export default function Privacy() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <span className="label-caps gold-text block mb-4">Privacy Policy</span>
        <h1 className="font-heading text-white mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>Your privacy, protected.</h1>
        <div className="flex flex-col gap-6 text-silver" style={{ lineHeight: 1.8 }}>
          <p>TopMoneyTools is designed from the ground up to respect your privacy. Here's what that means in plain language.</p>

          {[
            { title: 'We collect no personal data', body: 'We do not ask for your name, email, phone number, or any personal information to use our calculators. All tools work without an account.' },
            { title: 'Your calculations stay on your device', body: 'All calculations run in your browser using JavaScript. The numbers you enter are never transmitted to our servers — because we don\'t have any servers processing your inputs.' },
            { title: 'We use basic analytics', body: 'We may use anonymous, aggregate analytics (such as page views) to understand how the site is used and improve it. This does not include any personal identifiers.' },
            { title: 'No cookies for tracking', body: 'We do not use cookies to track you across websites or build a profile of your behavior.' },
            { title: 'Changes to this policy', body: 'If we ever change this policy, we\'ll update this page with the new date. We\'ll never introduce tracking without making it clear.' },
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