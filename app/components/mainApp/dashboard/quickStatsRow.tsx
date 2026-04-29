import type { PortfolioSummary, PositionWithMetrics } from "@/lib/api/types";
import { eurSmart } from "@/components/mainApp/mock/format";

type Props = {
  summary: PortfolioSummary | null;
  positions: PositionWithMetrics[];
};

export default function QuickStatsRow({ summary, positions }: Props) {
  const assetTypes = new Set(positions.map((p) => p.asset_type)).size;
  const unrealizedGains = summary ? summary.total_gain : null;

  const stats = [
    { label: "Total Positions", value: positions.length > 0 ? String(positions.length) : "--" },
    { label: "Diversification", value: assetTypes > 0 ? `${assetTypes} Asset Types` : "--" },
    { label: "Unrealized Gains", value: unrealizedGains !== null ? eurSmart(unrealizedGains) : "--" },
    { label: "Base Currency", value: summary?.base_currency ?? "--" },
  ];

  return (
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.label} className="rounded-md bg-transparent border border-surface p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">{stat.label}</p>
          <p className="mt-2 font-numeric text-xl font-semibold text-white">{stat.value}</p>
        </article>
      ))}
    </section>
  );
}
