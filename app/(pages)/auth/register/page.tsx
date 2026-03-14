import Link from "next/link";

export default function RegisterView() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black px-4 py-12 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#9ef01a]/20 blur-3xl" />
                <div className="absolute -right-12 bottom-0 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
            </div>

            <section className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl lg:grid-cols-2">
                <aside className="hidden h-full flex-col justify-between bg-linear-to-br from-black to-neutral-900 p-10 text-white lg:flex">
                    <div className="space-y-4">
                        <p className="w-fit rounded-full border border-[#9ef01a]/70 bg-[#9ef01a]/15 px-4 py-1 text-sm font-semibold tracking-wide text-[#9ef01a]">
                            FINANCE TRACKER
                        </p>
                        <h1 className="text-4xl font-bold leading-tight">
                            Start fresh.
                            <br />
                            Build better money habits.
                        </h1>
                    </div>
                    <p className="max-w-sm text-sm font-medium text-white/80">
                        Create your account to track spending, set smart budgets, and understand your financial flow in one place.
                    </p>
                </aside>

                <div className="bg-white p-8 sm:p-10">
                    <div className="mx-auto w-full max-w-md">
                        <div className="mb-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600">Sign Up</p>
                            <h2 className="mt-3 text-3xl font-bold text-black">Create Account</h2>
                            <p className="mt-2 text-sm text-neutral-700">Set up your profile to begin managing your finances.</p>
                        </div>

                        <form action="" className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-semibold text-black">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-black placeholder-black outline-none ring-0 transition focus:border-[#9ef01a] focus:shadow-[0_0_0_4px_rgba(158,240,26,0.25)]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-black">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-black placeholder-black outline-none ring-0 transition focus:border-[#9ef01a] focus:shadow-[0_0_0_4px_rgba(158,240,26,0.25)]"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-semibold text-black">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="Create password"
                                        className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-black placeholder-black outline-none ring-0 transition focus:border-[#9ef01a] focus:shadow-[0_0_0_4px_rgba(158,240,26,0.25)]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="confirmPassword" className="text-sm font-semibold text-black">
                                        Confirm
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="Confirm password"
                                        className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-black placeholder-black outline-none ring-0 transition focus:border-[#9ef01a] focus:shadow-[0_0_0_4px_rgba(158,240,26,0.25)]"
                                    />
                                </div>
                            </div>

                            <label className="inline-flex items-center gap-2 pt-1 text-sm text-neutral-800">
                                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-[#9ef01a] focus:ring-[#9ef01a]" />
                                I agree to the terms and privacy policy.
                            </label>

                            <button
                                type="submit"
                                className="mt-2 h-12 w-full rounded-xl bg-black text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9ef01a] hover:text-black focus:outline-none focus:shadow-[0_0_0_4px_rgba(158,240,26,0.35)]"
                            >
                                Create Account
                            </button>

                            <p className="pt-2 text-center text-sm text-neutral-700">
                                Already have an account?{" "}
                                <Link href="/auth/login" className="font-semibold text-black transition hover:text-[#9ef01a]">
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
