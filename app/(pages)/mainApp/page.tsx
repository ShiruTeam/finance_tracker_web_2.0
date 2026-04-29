
import { useSearchParams } from "react-router-dom";
import DashboardPage from "../dashboard/page";
import PositionsView from "@/components/mainApp/positions/positionsView";
import TransactionsView from "@/components/mainApp/transactions/transactionsView";
import AnalyticsView from "@/components/mainApp/analytics/analyticsView";
import BenchmarksView from "@/components/mainApp/benchmarks/benchmarksView";
import TaxView from "@/components/mainApp/tax/taxView";
import HistoricReturnsView from "@/components/mainApp/returns/historicReturnsView";
import SettingsView from "@/components/mainApp/settings/settingsView";

function renderView(view: string) {
  switch (view) {
    case "dashboard":
      return <DashboardPage />;
    case "positions":
      return <PositionsView />;
    case "transactions":
      return <TransactionsView />;
    case "analytics-performance":
      return <AnalyticsView />;
    case "analytics-benchmarks":
      return <BenchmarksView />;
    case "tax-report":
      return <TaxView />;
    case "returns-history":
      return <HistoricReturnsView />;
    case "settings":
      return <SettingsView />;
    default:
      return <DashboardPage />;
  }
}

export default function MainAppPage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") ?? "dashboard";

  return (
    <main className="flex h-screen w-full gap-4 bg-mainapp">
      {renderView(view)}
    </main>
  );
}
