// Shared instrument-style form primitives for every tool. These enforce the
// design spec: monospaced data fonts, mint hairline borders, label+helper pairs,
// and the "haptic visual" blur-to-clear transition on changing values.

export function FieldLabel({ label, helper }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{label}</label>
      {helper && <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]/60">{helper}</p>}
    </div>
  );
}

export function NumberField({ label, helper, value, onChange, prefix = "$", suffix, min = 0, step = 1, ariaLabel }) {
  return (
    <div>
      <FieldLabel label={label} helper={helper} />
      <div className="mt-2 flex items-center rounded-sm border border-[#A3FFD6]/25 bg-void/70 px-3 transition focus-within:border-[#A3FFD6]/60 focus-within:instrument-glow">
        {prefix && <span className="font-mono text-sm text-[#889988]">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Math.max(min, +e.target.value))}
          aria-label={ariaLabel || label}
          className="w-full bg-transparent px-2 py-3 font-data text-lg text-[#A3FFD6] outline-none"
        />
        {suffix && <span className="font-mono text-sm text-[#889988]">{suffix}</span>}
      </div>
    </div>
  );
}

export function RangeField({ label, helper, value, onChange, min = 0, max = 100, step = 1, unit = "", ariaLabel }) {
  return (
    <div>
      <FieldLabel label={label} helper={helper} />
      <div className="mt-3">
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(+e.target.value)}
          aria-label={ariaLabel || label}
          className="w-full accent-[#A3FFD6]"
        />
        <p className="mt-1 font-data text-sm text-[#A3FFD6]">{value}{unit}</p>
      </div>
    </div>
  );
}

export function SelectField({ label, helper, value, onChange, options, ariaLabel }) {
  return (
    <div>
      <FieldLabel label={label} helper={helper} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel || label}
        className="mt-2 w-full rounded-sm border border-[#A3FFD6]/25 bg-void/70 px-3 py-3 font-data text-base text-[#A3FFD6] outline-none focus:border-[#A3FFD6]/60"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-void text-[#E0E0E0]">{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export function CalculateButton({ children = "Calculate", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-sm bg-[#A3FFD6] py-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#081008] transition hover:bg-[#88E6B8] hover:instrument-glow"
    >
      {children}
    </button>
  );
}

// Formatter — Intl currency helper shared by all tools.
export function usd(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}