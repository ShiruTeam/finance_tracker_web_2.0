import PortfolioOverview from "@/app/components/mainApp/dashboard/portfolioOverview";
import AssetAllocationChart from "@/app/components/mainApp/dashboard/assetAllocationChart";
import PerformanceChart from "@/app/components/mainApp/dashboard/performanceChart";
import TopPositionsTable from "@/app/components/mainApp/dashboard/topPositionsTable";
import PerformanceMetricsGrid from "@/app/components/mainApp/dashboard/performanceMetricsGrid";
import RecentActivityFeed from "@/app/components/mainApp/dashboard/recentActivityFeed";
import MarketMovers from "@/app/components/mainApp/dashboard/marketMovers";
import AssetTypePerformanceBars from "@/app/components/mainApp/dashboard/assetTypePerformanceBars";
import QuickStatsRow from "@/app/components/mainApp/dashboard/quickStatsRow";
import PortfolioSelector from "@/app/components/mainApp/dashboard/portfolioSelector";
import BenchmarkComparisonCard from "@/app/components/mainApp/dashboard/benchmarkComparisonCard";

export default function Dashboard() {
    return (
        <div className="w-full flex-1 overflow-y-auto rounded-3xl border border-[#16162a] bg-[#04040a] p-3 sm:p-5">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
                <header className="flex flex-col gap-3 rounded-2xl border border-[#1e1e35] bg-[#07070e] p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Overview</p>
                        <h1 className="text-xl font-semibold text-white sm:text-2xl">Portfolio Intelligence</h1>
                    </div>
                    <PortfolioSelector />
                </header>

                <section className="grid gap-4 xl:grid-cols-2">
                    <PortfolioOverview />
                    <AssetAllocationChart />
                </section>

                <QuickStatsRow />

                <PerformanceChart />

                <PerformanceMetricsGrid />

                <section className="grid gap-4 xl:grid-cols-2">
                    <TopPositionsTable />
                    <RecentActivityFeed />
                </section>

                <section className="grid gap-4 xl:grid-cols-2">
                    <MarketMovers />
                    <AssetTypePerformanceBars />
                </section>

                <BenchmarkComparisonCard />
            </div>
        </div>
    );
}