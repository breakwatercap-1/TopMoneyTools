/**
 * ResultExplainer — contextual educational card shown below calculator results.
 * Each item is a plain-English lesson directly relevant to what the user just calculated.
 */
export default function ResultExplainer({ items }) {
  return (
    <div className="mt-10 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(212,175,55,0.12)' }}>
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ background: 'rgba(212,175,55,0.06)', borderBottom: '1px solid rgba(212,175,55,0.1)' }}
      >
        <span className="text-lg" aria-hidden="true">💡</span>
        <p className="label-caps gold-text">Why does this happen?</p>
      </div>

      {/* Lessons */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
        style={{ divideColor: 'rgba(212,175,55,0.1)', background: 'rgba(10,10,10,0.8)' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6"
            style={{ borderColor: 'rgba(212,175,55,0.1)' }}
          >
            <p
              className="font-heading font-bold mb-2"
              style={{ fontSize: '2.5rem', lineHeight: 1, color: 'rgba(212,175,55,0.18)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="font-heading text-white text-base mb-2">{item.title}</h3>
            <p className="text-silver text-sm" style={{ lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}