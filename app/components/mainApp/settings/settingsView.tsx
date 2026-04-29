
import PortfolioSettings from "@/components/mainApp/settings/portfolioSettings";
import TwoFactorSettings from "@/components/mainApp/settings/twoFactorSettings";
import { usePortfolio } from "@/components/mainApp/portfolioContext";
import { usePortfolios } from "@/hooks/api/usePortfolios";
import { useAuth } from "@/hooks/api/useAuth";

export default function SettingsView() {
  const { selectedPortfolioId, portfolios } = usePortfolio();
  const { update } = usePortfolios();
  const { token } = useAuth();

  const selectedPortfolio = portfolios.find((p) => p.id === selectedPortfolioId) ?? null;

  async function handleSavePortfolio(name: string, currency: string) {
    if (!selectedPortfolioId) throw new Error("No portfolio selected.");
    await update(selectedPortfolioId, { name, base_currency: currency });
  }

  return (
    <div className="w-full flex-1 overflow-y-auto bg-mainapp p-2 sm:p-3">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <header className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.08em] text-neutral-400">Settings</p>
            <h1 className="text-xl font-semibold text-white sm:text-2xl">Settings</h1>
          </div>
        </header>

        {!selectedPortfolio ? (
          <p className="rounded-md border border-surface p-4 text-sm text-neutral-500">Select a portfolio to configure settings.</p>
        ) : (
          <PortfolioSettings
            name={selectedPortfolio.name}
            currency={selectedPortfolio.base_currency}
            onSave={handleSavePortfolio}
          />
        )}

        <TwoFactorSettings token={token} />
      </div>
    </div>
  );
}
