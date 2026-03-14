import Link from "next/link";

type LinkItem = {
    label: string;
    href: string;
};

type DropdownItem = {
    label: string;
    children: LinkItem[];
    defaultOpen?: boolean;
};

type NavItem = LinkItem | DropdownItem;

function isDropdownItem(item: NavItem): item is DropdownItem {
    return "children" in item;
}

const navItems: NavItem[] = [
    { label: "Dashboard", href: "/mainApp?view=dashboard" },
    {
        label: "Investments",
        defaultOpen: false,
        children: [
            { label: "All", href: "/mainApp?view=all-portfolios" },
            { label: "Create +", href: "/mainApp?view=create-portfolio" },
            
        ],
    },
    { label: "Analytics", defaultOpen: false, 
        children: [
            { label: "Performance", href: "/mainApp?view=analytics-performance" },
            { label: "Benchmarks", href: "/mainApp?view=analytics-benchmarks" },
        ]
    },
    {
        label: "Taxes",
        children: [
            { label: "Report", href: "/mainApp?view=tax-report" },
            { label: "Gains", href: "/mainApp?view=tax-gains" },
            { label: "Harvest", href: "/mainApp?view=tax-harvest" },
        ],
    }
];

export default function NavBar() {
    return (
        <div className="flex-1  h-full max-w-[18rem] rounded-4xl bg-[#07070e] justify-between flex-col hidden sm:flex backdrop-blur-sm border border-[#16162a]">
            <nav className="m-10 flex flex-col">
                <h1 className="text-3xl font-black">Overview</h1>
                <ul className="mt-4 flex flex-col gap-2">
                    {navItems.map((item) => {
                        if (isDropdownItem(item)) {
                            return (
                                <li key={item.label}>
                                      <details className="group" open={item.defaultOpen}>
                                        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-200 hover:text-gray-100">
                                            {item.label}
                                            <span className="text-sm text-gray-400 transition-transform group-open:rotate-180">
                                                ▾
                                            </span>
                                        </summary>
                                        <ul className="mt-2 ml-3 flex flex-col gap-2 border-l border-neutral-800 pl-3">
                                            {item.children.map((child) => (
                                                <li key={child.label}>
                                                    <Link
                                                        href={child.href}
                                                        className="text-base font-medium text-gray-300 hover:text-gray-100"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            );
                        }

                        return (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="text-lg font-medium text-gray-200 hover:text-gray-100"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <nav>
                <ul className="m-10 mt-auto flex flex-col gap-2">
                    <li>
                        <Link
                            href="/mainApp?view=settings"
                            className="text-lg font-medium text-gray-300 hover:text-gray-100"
                        >
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mainApp?view=profile"
                            className="text-lg font-medium text-gray-300 hover:text-gray-100"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/mainApp?view=logout"
                            className="text-lg font-medium text-gray-300 hover:text-gray-100"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>


            </nav>
        </div>
    );
}