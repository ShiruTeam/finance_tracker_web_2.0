const stats = [
  { label: "Total Positions", value: "12" },
  { label: "Diversification", value: "6 Asset Types" },
  { label: "Unrealized Gains", value: "EUR 226.69" },
  { label: "Dividend Income", value: "EUR 84.20" },
];

export default function QuickStatsRow() {
  return (
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.label} className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">{stat.label}</p>
          <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
        </article>
      ))}
    </section>
  );
}
