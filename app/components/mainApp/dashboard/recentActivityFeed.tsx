type Tx = {
  trade_date: string;
  trade_type: "buy" | "sell";
  name: string;
  ticker: string;
  quantity: number;
  price: number;
  total: number;
};

const txs: Tx[] = [
  { trade_date: "2026-03-01", trade_type: "buy", name: "Amazon", ticker: "AMZN", quantity: 0.7005, price: 204.36, total: 143.15 },
  { trade_date: "2026-03-02", trade_type: "sell", name: "Bitcoin", ticker: "BTC", quantity: 0.002, price: 61680, total: 123.36 },
  { trade_date: "2026-03-03", trade_type: "buy", name: "S&P 500 ETF", ticker: "SPY", quantity: 1.2, price: 509.2, total: 611.04 },
  { trade_date: "2026-03-04", trade_type: "buy", name: "Gold ETF", ticker: "GLD", quantity: 0.8, price: 191.8, total: 153.44 },
  { trade_date: "2026-03-05", trade_type: "sell", name: "Nasdaq 100 ETF", ticker: "QQQ", quantity: 0.6, price: 445.7, total: 267.42 },
];

const eur = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" });

export default function RecentActivityFeed() {
  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
      <header className="mb-4">
        <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Recent activity</p>
        <h3 className="text-xl font-semibold text-white sm:text-2xl">Latest Transactions</h3>
      </header>

      <ul className="space-y-3">
        {txs.slice(0, 10).map((tx) => {
          const isBuy = tx.trade_type === "buy";
          return (
            <li key={`${tx.trade_date}-${tx.ticker}-${tx.total}`} className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{tx.name} <span className="text-neutral-400">({tx.ticker})</span></p>
                  <p className="text-xs text-neutral-400">{tx.trade_date} · Qty {tx.quantity} · {eur.format(tx.price)}</p>
                </div>
                <div className="text-right">
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${isBuy ? "bg-violet-500/20 text-violet-300" : "bg-orange-500/20 text-orange-300"}`}>
                    {isBuy ? "BUY" : "SELL"}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white">{eur.format(tx.total)}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
