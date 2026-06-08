export default function CalcInput({ label, id, value, onChange, type = 'number', min, max, step, prefix, suffix, hint }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-caps">{label}</label>
      {hint && <p className="text-muted-foreground text-sm mb-1">{hint}</p>}
      <div className="relative flex items-center">
        {prefix && (
          <span
            className="absolute left-4 gold-text font-semibold text-lg pointer-events-none"
          >
            {prefix}
          </span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          className="w-full rounded-xl px-4 py-4 text-white font-semibold text-lg bg-transparent transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            paddingLeft: prefix ? '2.25rem' : '1rem',
            paddingRight: suffix ? '3rem' : '1rem',
            outline: 'none',
          }}
          onFocus={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
          onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; e.target.style.boxShadow = 'none'; }}
        />
        {suffix && (
          <span className="absolute right-4 text-muted-foreground font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}