"use client";

import Link from "next/link";
import LandingHeroClient from "@/app/components/landing/landingHeroClient";
import LandingSecondSection from "./components/landing/secondSection";
import Connections from "./components/landing/connections";
import Footer from "./components/landing/footer";
import AppShowcase from "./components/landing/appShowcase";
import LandingHeader from "./components/landing/landingHeader";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-black font-sans overflow-y-auto hide-scrollbar">
      <main className="relative flex w-screen flex-col items-center bg-black">
        <LandingHeader />
        <LandingHeroClient sectionId="landing-hero" />
        <AppShowcase />
        <Connections />
        <LandingSecondSection />
        <Footer />
      </main>
    </div>
  );
}
