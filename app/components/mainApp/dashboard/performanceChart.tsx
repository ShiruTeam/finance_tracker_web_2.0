type Snapshot = {
  date: string;
  total_value: number;
  benchmark_value?: number;
};

const snapshotsByRange: Record<"30D" | "90D" | "365D", Snapshot[]> = {
  "30D": [
    { date: "2026-03-01", total_value: 7400, benchmark_value: 7300 },
    { date: "2026-03-02", total_value: 7450, benchmark_value: 7340 },
    { date: "2026-03-03", total_value: 7500, benchmark_value: 7390 },
    { date: "2026-03-04", total_value: 7480, benchmark_value: 7385 },
    { date: "2026-03-05", total_value: 7550, benchmark_value: 7420 },
    { date: "2026-03-06", total_value: 7590, benchmark_value: 7440 },
    { date: "2026-03-07", total_value: 7648.64, benchmark_value: 7470 },
  ],
  "90D": [
    { date: "2026-01-10", total_value: 6890, benchmark_value: 6900 },
    { date: "2026-01-25", total_value: 7010, benchmark_value: 6980 },
    { date: "2026-02-09", total_value: 7190, benchmark_value: 7110 },
    { date: "2026-02-24", total_value: 7360, benchmark_value: 7250 },
    { date: "2026-03-07", total_value: 7648.64, benchmark_value: 7470 },
  ],
  "365D": [
    { date: "2025-03-11", total_value: 5980, benchmark_value: 6100 },
    { date: "2025-06-11", total_value: 6350, benchmark_value: 6400 },
    { date: "2025-09-11", total_value: 6800, benchmark_value: 6760 },
    { date: "2025-12-11", total_value: 7150, benchmark_value: 7060 },
    { date: "2026-03-07", total_value: 7648.64, benchmark_value: 7470 },
  ],
};

const currency = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function toPath(values: number[], width: number, height: number, min: number, max: number) {
  if (values.length === 0) return "";
  const range = Math.max(max - min, 1);
  return values
    .map((value, index) => {
      const x = (index / Math.max(values.length - 1, 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export default function PerformanceChart() {
  const activeRange: "30D" | "90D" | "365D" = "30D";
  const data = snapshotsByRange[activeRange];

  const portfolioValues = data.map((item) => item.total_value);
  const benchmarkValues = data.map((item) => item.benchmark_value ?? item.total_value);
  const all = [...portfolioValues, ...benchmarkValues];
  const min = Math.min(...all) * 0.98;
  const max = Math.max(...all) * 1.02;

  const width = 600;
  const height = 240;
  const portfolioPath = toPath(portfolioValues, width, height, min, max);
  const benchmarkPath = toPath(benchmarkValues, width, height, min, max);

  return (
    <section className="rounded-2xl border border-[#1e1e35] bg-[#07070e] p-5">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Performance</p>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Portfolio Value Trend</h3>
        </div>
        <div className="inline-flex rounded-xl border border-[#252545] bg-[#04040a] p-1 text-xs font-medium text-neutral-300">
          <span className="rounded-lg bg-[#1e1e35] px-3 py-1 text-white">30D</span>
          <span className="px-3 py-1">90D</span>
          <span className="px-3 py-1">365D</span>
        </div>
      </header>

      <div className="space-y-4">
        <div className="overflow-x-auto rounded-2xl border border-[#252545] bg-[#04040a] p-2">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-60 w-full min-w-140" role="img" aria-label="Portfolio line chart">
            {[0.25, 0.5, 0.75].map((ratio) => (
              <line
                key={ratio}
                x1="0"
                x2={width}
                y1={(height * ratio).toFixed(2)}
                y2={(height * ratio).toFixed(2)}
                stroke="#1e1e35"
                strokeWidth="1"
              />
            ))}
            <path d={benchmarkPath} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
            <path d={portfolioPath} fill="none" stroke="#14b8a6" strokeWidth="3" />
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-6 rounded-full bg-[#2dd4bf]" />Portfolio</span>
          <span className="inline-flex items-center gap-2"><span className="h-2 w-6 rounded-full bg-slate-400" />S&P 500 (benchmark)</span>
          <span className="ml-auto text-neutral-400">Latest: {currency.format(portfolioValues[portfolioValues.length - 1])}</span>
        </div>

        <div className="flex justify-between text-xs text-neutral-500">
          <span>{data[0].date}</span>
          <span>{data[data.length - 1].date}</span>
        </div>
      </div>
    </section>
  );
}
