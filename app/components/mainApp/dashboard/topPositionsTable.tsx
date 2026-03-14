type Position = {
  name: string;
  ticker: string;
  shares: number;
  current_price: number;
  total_value: number;
  gain: number;
  gain_percent: number;
};

const positions: Position[] = [
  { name: "Amazon", ticker: "AMZN", shares: 0.7005, current_price: 177.7, total_value: 124.48, gain: -18.67, gain_percent: -0.1305 },
  { name: "S&P 500 ETF", ticker: "SPY", shares: 9.5, current_price: 512.9, total_value: 4872.55, gain: 145.12, gain_percent: 0.0307 },
  { name: "Nasdaq 100 ETF", ticker: "QQQ", shares: 4.8, current_price: 447.4, total_value: 2147.52, gain: 98.21, gain_percent: 0.0479 },
  { name: "Bitcoin", ticker: "BTC", shares: 0.022, current_price: 62100, total_value: 1366.2, gain: -43.4, gain_percent: -0.0308 },
  { name: "Gold ETF", ticker: "GLD", shares: 2.1, current_price: 192.4, total_value: 404.04, gain: 15.08, gain_percent: 0.0388 },
];

const eur = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 2 });

export default function TopPositionsTable() {
  const sorted = [...positions].sort((a, b) => b.total_value - a.total_value).slice(0, 10);

  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
      <header className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Top positions</p>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Holdings by Value</h3>
        </div>
        <p className="text-xs text-neutral-400">Sorted by total value</p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-[#252545]">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#04040a] text-xs uppercase tracking-[0.12em] text-neutral-400">
            <tr>
              <th className="px-4 py-3">Ticker / Name</th>
              <th className="px-4 py-3">Shares</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Value</th>
              <th className="px-4 py-3">Gain / Loss</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => {
              const positive = row.gain >= 0;
              return (
                <tr key={row.ticker} className="border-t border-[#1e1e35] text-neutral-200">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-white">{row.ticker}</p>
                    <p className="text-xs text-neutral-400">{row.name}</p>
                  </td>
                  <td className="px-4 py-3">{row.shares.toFixed(4)}</td>
                  <td className="px-4 py-3">{eur.format(row.current_price)}</td>
                  <td className="px-4 py-3 font-semibold text-white">{eur.format(row.total_value)}</td>
                  <td className={`px-4 py-3 font-semibold ${positive ? "text-[#2dd4bf]" : "text-rose-400"}`}>
                    {`${positive ? "+" : ""}${eur.format(row.gain)} (${(row.gain_percent * 100).toFixed(2)}%)`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
