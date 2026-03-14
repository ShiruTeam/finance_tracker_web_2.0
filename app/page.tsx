import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  // Change this one path to choose the page loaded at '/'.
  redirect("/mainApp?view=dashboard");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between py-7 px-16 bg-white dark:bg-black sm:items-start">
        <header className="flex flex-row w-full items-center justify-between sm:items-start">
          <h1 className="font-bold text-xl">
            WSPort
          </h1>
          <div>
            <ul className="flex flex-row gap-6 text-lg ">
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <li className="flex flex-row gap-6">
              <Link href="/auth/login" className="hover:underline">
                Log In
              </Link>
              <Link href="/auth/register" className="hover:underline">
                Sign Up
              </Link>
            </li>
          </div>
          
        </header>
      </main>
    </div>
  );
}

