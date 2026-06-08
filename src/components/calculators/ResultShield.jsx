export default function ResultShield({ label, value, subtext, color = '#C9A84C' }) {
  return (
    <div className="relative flex flex-col items-center text-center py-12 px-8">
      {/* Halo glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${color}18 0%, transparent 70%)`,
        }}
      />

      <p className="label-caps mb-4" style={{ color: color }}>{label}</p>

      <div
        className="font-heading font-bold result-glow"
        style={{
          fontSize: 'clamp(3.5rem, 10vw, 6rem)',
          lineHeight: 1,
          color: color,
          textShadow: `0 0 40px ${color}66, 0 0 80px ${color}22`,
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {value}
      </div>

      {subtext && (
        <p className="text-silver mt-6 max-w-xs" style={{ lineHeight: 1.6, fontSize: '1rem' }}>
          {subtext}
        </p>
      )}
    </div>
  );
}