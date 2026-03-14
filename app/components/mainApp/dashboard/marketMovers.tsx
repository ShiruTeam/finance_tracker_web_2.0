type Position = {
  ticker: string;
  current_price: number;
  previous_close: number;
};

const positions: Position[] = [
  { ticker: "AMZN", current_price: 177.7, previous_close: 179.4 },
  { ticker: "SPY", current_price: 512.9, previous_close: 507.2 },
  { ticker: "QQQ", current_price: 447.4, previous_close: 443.1 },
  { ticker: "BTC", current_price: 62100, previous_close: 63520 },
  { ticker: "GLD", current_price: 192.4, previous_close: 191.2 },
  { ticker: "AAPL", current_price: 194.3, previous_close: 189.5 },
];

function dailyChange(current: number, previous: number) {
  if (!previous) return 0;
  return (current - previous) / previous;
}

export default function MarketMovers() {
  const rows = positions.map((p) => ({
    ...p,
    change: dailyChange(p.current_price, p.previous_close),
  }));

  const gainers = [...rows].sort((a, b) => b.change - a.change).slice(0, 3);
  const losers = [...rows].sort((a, b) => a.change - b.change).slice(0, 3);

  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
      <header className="mb-4">
        <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Market movers</p>
        <h3 className="text-xl font-semibold text-white sm:text-2xl">Top Gainers and Losers</h3>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
          <p className="mb-3 text-sm font-semibold text-[#2dd4bf]">Top Gainers</p>
          <ul className="space-y-2">
            {gainers.map((row) => (
              <li key={row.ticker} className="flex items-center justify-between text-sm text-white">
                <span>{row.ticker}</span>
                <span className="font-semibold text-[#2dd4bf]">+{(row.change * 100).toFixed(2)}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
          <p className="mb-3 text-sm font-semibold text-rose-300">Top Losers</p>
          <ul className="space-y-2">
            {losers.map((row) => (
              <li key={row.ticker} className="flex items-center justify-between text-sm text-white">
                <span>{row.ticker}</span>
                <span className="font-semibold text-rose-300">{(row.change * 100).toFixed(2)}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
