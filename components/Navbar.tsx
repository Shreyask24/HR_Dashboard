'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/hooks/useTheme';

const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/bookmarks', label: 'Bookmarks' },
    { href: '/analytics', label: 'Analytics' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-[#F7F1E1] dark:bg-[#1f1f1f] px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-[#A67B5B]">HR Dashboard</h1>
                </Link>

                <div className="flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-all duration-200 ${pathname === link.href
                                ? 'text-[#A67B5B] border-b-2 border-[#A67B5B]'
                                : 'text-[#d5cac7] hover:text-[#A67B5B]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="ml-4 px-3 py-1 text-sm rounded-full cursor-pointer bg-[#F7F1E1]"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
}
