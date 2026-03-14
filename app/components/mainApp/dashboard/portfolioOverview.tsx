
export default function PortfolioOverview() {
    const portfolio = {
        total_value: 7648.64,
        total_cost: 7421.95,
        total_gain: 226.69,
        total_gain_percent: 0.0305,
        base_currency: "EUR",
    };

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("en-IE", {
            style: "currency",
            currency: portfolio.base_currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);

    return (
        <section className="w-full rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
            <div className="space-y-5">
                <header className="space-y-2">
                    <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Portfolio overview</p>
                    <h2 className="text-xl font-semibold text-white sm:text-2xl">Current Snapshot</h2>
                    <p className="text-sm text-neutral-300">A compact summary of your invested capital and performance.</p>
                </header>

                <div className="grid gap-3 sm:grid-cols-2">
                    <article className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Total Value</p>
                        <p className="mt-2 text-2xl font-black text-white">{formatCurrency(portfolio.total_value)}</p>
                    </article>

                    <article className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Total Cost</p>
                        <p className="mt-2 text-2xl font-black text-white">{formatCurrency(portfolio.total_cost)}</p>
                    </article>

                    <article className="rounded-2xl border border-[#14b8a6]/25 bg-[#04040a] p-4 sm:col-span-2">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Total Gain</p>
                                <p className="mt-2 text-2xl font-semibold text-[#2dd4bf]">{formatCurrency(portfolio.total_gain)}</p>
                            </div>
                            <span className="rounded-full border border-[#14b8a6]/25 bg-[#14b8a6]/10 px-4 py-2 text-sm font-semibold text-[#2dd4bf]">
                                {(portfolio.total_gain_percent * 100).toFixed(2)}%
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}