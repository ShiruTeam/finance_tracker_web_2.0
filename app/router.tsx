import { Routes, Route } from "react-router-dom";
import Home from "@/page";
import LoginPage from "@/(pages)/auth/login/page";
import RegisterPage from "@/(pages)/auth/register/page";
import ForgotPasswordPage from "@/(pages)/auth/forgot-password/page";
import ResetPasswordPage from "@/(pages)/auth/reset-password/page";
import OnboardingPage from "@/(pages)/onboarding/page";
import PrivacyPage from "@/(pages)/legal/privacy/page";
import TermsPage from "@/(pages)/legal/terms/page";
import SecurityPage from "@/(pages)/legal/security/page";
import DashboardLayout from "@/(pages)/dashboard/layout";
import DashboardPage from "@/(pages)/dashboard/page";
import MainAppLayout from "@/(pages)/mainApp/layout";
import MainAppPage from "@/(pages)/mainApp/page";
import PositionsPage from "@/(pages)/mainApp/positions/page";
import TransactionsPage from "@/(pages)/mainApp/transactions/page";
import AnalyticsPerformancePage from "@/(pages)/mainApp/analytics/performance/page";
import AnalyticsBenchmarksPage from "@/(pages)/mainApp/analytics/benchmarks/page";
import PortfolioPage from "@/(pages)/mainApp/portfolio/page";
import PortfoliosPage from "@/(pages)/mainApp/portfolios/page";
import NewPortfolioPage from "@/(pages)/mainApp/portfolios/new/page";
import ProfilePage from "@/(pages)/mainApp/profile/page";
import ReturnsPage from "@/(pages)/mainApp/returns/page";
import SettingsPage from "@/(pages)/mainApp/settings/page";
import TaxPage from "@/(pages)/mainApp/tax/page";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/legal/privacy" element={<PrivacyPage />} />
      <Route path="/legal/terms" element={<TermsPage />} />
      <Route path="/legal/security" element={<SecurityPage />} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />
      <Route element={<MainAppLayout />}>
        <Route path="/mainApp" element={<MainAppPage />} />
        <Route path="/mainApp/positions" element={<PositionsPage />} />
        <Route path="/mainApp/transactions" element={<TransactionsPage />} />
        <Route path="/mainApp/analytics/performance" element={<AnalyticsPerformancePage />} />
        <Route path="/mainApp/analytics/benchmarks" element={<AnalyticsBenchmarksPage />} />
        <Route path="/mainApp/portfolio" element={<PortfolioPage />} />
        <Route path="/mainApp/portfolios" element={<PortfoliosPage />} />
        <Route path="/mainApp/portfolios/new" element={<NewPortfolioPage />} />
        <Route path="/mainApp/profile" element={<ProfilePage />} />
        <Route path="/mainApp/returns" element={<ReturnsPage />} />
        <Route path="/mainApp/settings" element={<SettingsPage />} />
        <Route path="/mainApp/tax" element={<TaxPage />} />
      </Route>
    </Routes>
  );
}
