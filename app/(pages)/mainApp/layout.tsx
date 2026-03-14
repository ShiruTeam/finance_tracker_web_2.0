import NavBar from "@/app/components/navBar";

export default function MainAppLayout({
    children}
  : {
    children: React.ReactNode;
  }) {

    return (
        <main className="flex h-screen w-full gap-4 bg-[#07070f] p-4 sm:p-6">
          <NavBar />
          {children}
        </main>
    )
  }