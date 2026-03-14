const benchmark = {
  portfolio_return: 0.25,
  benchmark_return: 0.2,
  alpha: 0.05,
  beta: 1.2,
};

export default function BenchmarkComparisonCard() {
  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
      <header className="mb-4">
        <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Benchmark comparison</p>
        <h3 className="text-xl font-semibold text-white sm:text-2xl">Portfolio vs S&P 500</h3>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        <article className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">Portfolio Return</p>
          <p className="mt-2 text-2xl font-semibold text-[#2dd4bf]">+{(benchmark.portfolio_return * 100).toFixed(1)}%</p>
        </article>
        <article className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">S&P 500 Return</p>
          <p className="mt-2 text-2xl font-semibold text-white">+{(benchmark.benchmark_return * 100).toFixed(1)}%</p>
        </article>
        <article className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">Alpha</p>
          <p className="mt-2 text-2xl font-semibold text-[#2dd4bf]">+{benchmark.alpha.toFixed(2)}</p>
        </article>
        <article className="rounded-2xl border border-[#252545] bg-[#04040a] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">Beta</p>
          <p className="mt-2 text-2xl font-semibold text-white">{benchmark.beta.toFixed(2)}</p>
        </article>
      </div>
    </section>
  );
}
