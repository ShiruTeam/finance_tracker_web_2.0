const portfolios = [
  { id: "portfolio-1", name: "My Investment Portfolio", base_currency: "EUR" },
  { id: "portfolio-2", name: "Retirement Fund", base_currency: "USD" },
];

export default function PortfolioSelector() {
  return (
    <section className="inline-flex w-full items-center gap-2 sm:w-auto">
      <label htmlFor="portfolio" className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
        Portfolio
      </label>
      <div className="rounded-xl border border-[#252545] bg-[#04040a] px-1 py-1">
        <select
          id="portfolio"
          className="h-9 w-full min-w-55 rounded-lg bg-transparent px-3 text-sm font-medium text-white outline-none focus:ring-0 sm:w-auto"
          defaultValue={portfolios[0].id}
        >
          {portfolios.map((portfolio) => (
            <option key={portfolio.id} value={portfolio.id}>
              {portfolio.name} ({portfolio.base_currency})
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
