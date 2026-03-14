const byAssetType = {
  Stocks: { gain_percent: -0.1305 },
  "Index Fund": { gain_percent: 0.0337 },
  Crypto: { gain_percent: -0.052 },
  "Fixed Income": { gain_percent: 0.0112 },
  Gold: { gain_percent: 0.0245 },
  Cash: { gain_percent: 0 },
};

const rows = Object.entries(byAssetType).map(([name, values]) => ({
  name,
  gainPercent: values.gain_percent,
}));

export default function AssetTypePerformanceBars() {
  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#0f0f18] p-5">
      <header className="mb-4">
        <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Asset type performance</p>
        <h3 className="text-xl font-semibold text-white sm:text-2xl">Relative Gain/Loss by Class</h3>
      </header>

      <ul className="space-y-3">
        {rows.map((row) => {
          const positive = row.gainPercent >= 0;
          const width = Math.min(Math.abs(row.gainPercent) * 1000, 100);
          return (
            <li key={row.name} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-white">{row.name}</span>
                <span className={positive ? "text-[#2dd4bf]" : "text-rose-300"}>{`${positive ? "+" : ""}${(row.gainPercent * 100).toFixed(2)}%`}</span>
              </div>
              <div className="h-2 rounded-full bg-[#1e1e35]">
                <div className={`h-2 rounded-full ${positive ? "bg-[#14b8a6]" : "bg-rose-400"}`} style={{ width: `${width}%` }} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
