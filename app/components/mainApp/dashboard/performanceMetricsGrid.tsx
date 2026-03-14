const metrics = {
  daily_return: 0.002,
  monthly_return: 0.05,
  year_to_date_return: 0.12,
  volatility: 0.18,
  sharpe_ratio: 2.67,
  max_drawdown_percent: 0.04,
};

type Card = {
  label: string;
  value: string;
  tone?: "neutral" | "good" | "warn";
};

const cards: Card[] = [
  { label: "Daily Return", value: `+${(metrics.daily_return * 100).toFixed(1)}%`, tone: "good" },
  { label: "Monthly Return", value: `+${(metrics.monthly_return * 100).toFixed(1)}%`, tone: "good" },
  { label: "YTD Return", value: `+${(metrics.year_to_date_return * 100).toFixed(1)}%`, tone: "good" },
  { label: "Volatility", value: `${(metrics.volatility * 100).toFixed(0)}%`, tone: "neutral" },
  { label: "Sharpe Ratio", value: metrics.sharpe_ratio.toFixed(2), tone: "neutral" },
  { label: "Max Drawdown", value: `-${(metrics.max_drawdown_percent * 100).toFixed(1)}%`, tone: "warn" },
];

function toneClasses(tone: Card["tone"]) {
  if (tone === "good") return "border-[#14b8a6]/30 text-[#2dd4bf]";
  if (tone === "warn") return "border-rose-500/30 text-rose-300";
  return "border-[#252545] text-white";
}

export default function PerformanceMetricsGrid() {
  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
      <header className="mb-4">
        <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Performance metrics</p>
        <h3 className="text-xl font-semibold text-white sm:text-2xl">Risk and Return Snapshot</h3>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article key={card.label} className={`rounded-2xl border bg-[#04040a] p-4 ${toneClasses(card.tone)}`}>
            <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold">{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
