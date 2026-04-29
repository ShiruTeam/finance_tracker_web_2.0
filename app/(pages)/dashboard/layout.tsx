
import { Suspense } from "react";
import { PortfolioProvider } from "@/components/mainApp/portfolioContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<main className="mainapp-shell-black flex h-screen w-full items-center justify-center bg-black p-4 text-neutral-300">Loading dashboard...</main>}>
      <PortfolioProvider>{children}</PortfolioProvider>
    </Suspense>
  );
}
