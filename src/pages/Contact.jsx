import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to a backend
    setSent(true);
  };

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-6 py-24">
        <span className="label-caps gold-text block mb-4">Get in Touch</span>
        <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Questions or ideas?<br />
          <span className="gold-text">We'd love to hear from you.</span>
        </h1>
        <p className="text-silver mb-12" style={{ lineHeight: 1.7 }}>
          Have a question about how a calculator works? Want to suggest a new tool? Or just want to say hi?
          Send us a message — we read every one.
        </p>

        {sent ? (
          <div className="flex flex-col items-center text-center gap-4 py-16 rounded-2xl" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <CheckCircle className="w-12 h-12" style={{ color: '#10B981' }} />
            <h2 className="font-heading text-white text-2xl">Message received!</h2>
            <p className="text-silver">Thank you for reaching out. We'll get back to you as soon as we can.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith', required: true },
              { id: 'email', label: 'Your Email', type: 'email', placeholder: 'jane@example.com', required: true },
            ].map(f => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="label-caps">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  required={f.required}
                  value={form[f.id]}
                  onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                  className="w-full rounded-xl px-4 py-4 text-white"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#D4AF37'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(212,175,55,0.2)'; }}
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="label-caps">Your Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Ask a question, suggest a tool, or just say hello..."
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full rounded-xl px-4 py-4 text-white resize-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  outline: 'none',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
                onFocus={e => { e.target.style.borderColor = '#D4AF37'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(212,175,55,0.2)'; }}
              />
            </div>

            <button type="submit" className="btn-gold px-8 py-4 rounded-xl text-base font-semibold w-full mt-2">
              Send Message
            </button>
          </form>
        )}
      </div>
    </PageLayout>
  );
}