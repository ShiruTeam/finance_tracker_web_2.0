
import { Outlet } from "react-router-dom";
import NavBar from "@/components/navBar";
import { PortfolioProvider } from "@/components/mainApp/portfolioContext";
import { useAuth } from "@/hooks/api/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainAppLayout() {
    const { isHydrated, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (isHydrated && !isAuthenticated) {
        navigate("/");
      }
    }, [isHydrated, isAuthenticated, navigate]);

    if (!isHydrated || !isAuthenticated) {
      return (
        <main className="flex h-screen w-full items-center justify-center bg-mainapp text-neutral-300">
          Loading secure workspace...
        </main>
      );
    }

    return (
        <PortfolioProvider>
          <main className="flex h-screen w-full bg-mainapp">
            <NavBar />
            <Outlet />
          </main>
        </PortfolioProvider>
    );
  }
