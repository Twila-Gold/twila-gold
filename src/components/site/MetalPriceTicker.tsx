import { useState } from "react";

const RATES = {
  gold: [
    { label: "22K Gold", per: "1 g", value: "₹6,650" },
    { label: "24K Gold", per: "1 g", value: "₹7,255" },
  ],
  silver: [{ label: "Silver", per: "1 g", value: "₹92" }],
};

export function MetalPriceTicker() {
  const [tab, setTab] = useState<"gold" | "silver">("gold");
  const rows = RATES[tab];

  return (
    <div className="bg-gradient-to-b from-navy to-navy-deep border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-[11px] tracking-[0.3em] uppercase text-white/60">Today's Rate</div>
          <div className="inline-flex rounded-full p-1 bg-white/5 border border-white/10">
            {(["gold", "silver"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-4 py-1.5 text-xs uppercase tracking-[0.2em] rounded-full transition ${
                  tab === k
                    ? "bg-[var(--gold)] text-[var(--navy-deep)] font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {rows.map((r) => (
            <div
              key={r.label}
              className="glass-dark glass-gold-border rounded-lg px-4 py-2 flex items-baseline gap-2"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/60">
                {r.label} / {r.per}
              </span>
              <span className="font-serif text-lg text-gold">{r.value}</span>
            </div>
          ))}
          <span className="text-[11px] text-white/50 tracking-wider">
            Updated · 13 May 2026 · 10:18 am
          </span>
        </div>
      </div>
    </div>
  );
}
