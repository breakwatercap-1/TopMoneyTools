import { useEffect } from "react";
import { ADSENSE, ADS_ENABLED, SLOT_MAP } from "@/config/adsense.config";

// AdSense ad slot. When ADS_ENABLED is false (or IDs are placeholders), it
// renders a labeled "FINANCIAL SPONSORSHIP" placeholder framed with the same
// mint hairline border as the instrument cards, so the layout is preserved and
// ads feel like a native part of the interface rather than an intrusion.
//
// slot: "top" | "mid" | "sidebar" | "footer"
export default function AdSlot({ slot, className = "", format = "auto", style }) {
  const slotKey = SLOT_MAP[slot];
  const adUnitId = slotKey ? ADSENSE[slotKey] : "";
  const placeholder = !ADS_ENABLED || !adUnitId || adUnitId === "0000000000";

  useEffect(() => {
    if (placeholder) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { /* no-op */ }
  }, [placeholder]);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} style={style}>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]/70">
        Financial Sponsorship
      </span>
      <div className="mt-2 w-full flex-1 hairline-border rounded-sm bg-void/40 p-1">
        {placeholder ? (
          <div className="flex h-full w-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]/30">
            Ad slot • {slot}
          </div>
        ) : (
          <ins
            className="adsbygoogle block"
            style={{ display: "block" }}
            data-ad-client={ADSENSE.PUBLISHER_ID}
            data-ad-slot={adUnitId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        )}
      </div>
    </div>
  );
}