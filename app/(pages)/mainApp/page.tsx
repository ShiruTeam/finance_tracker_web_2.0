"use client";

import NavBar from "@/app/components/navBar";
import { useSearchParams } from "next/navigation";
import Dashboard from "../dashboard/page";

function renderView(view: string) {
  
  
  switch (view) {
    case "dashboard":
      return ( 
        <Dashboard />
      );
  }
}

export default function MainAppPage() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") ?? "dashboard";

  return (
    <main className="flex h-screen w-full gap-4 bg-black  ">
      {renderView(view)}
    </main>
  );
}