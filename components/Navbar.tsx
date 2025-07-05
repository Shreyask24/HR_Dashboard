'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/bookmarks', label: 'Bookmarks' },
    { href: '/analytics', label: 'Analytics' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#F7F1E1] dark:bg-[#1f1f1f] px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-[#A67B5B]">HR Dashboard</h1>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-all duration-200 ${pathname === link.href
                                ? 'text-[#A67B5B] border-b-2 border-[#A67B5B]'
                                : 'text-[#4B3832] dark:text-[#d5cac7] hover:text-[#A67B5B]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="ml-4 px-3 py-1 text-sm rounded-full cursor-pointer border border-[#A67B5B] text-[#A67B5B]"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>

                <button
                    className="md:hidden text-[#A67B5B]"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-3 px-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium px-3 py-2 rounded-md ${pathname === link.href
                                ? 'bg-[#A67B5B] text-white'
                                : 'text-[#4B3832] dark:text-[#d5cac7] hover:bg-[#e7dac6]'
                                }`}
                            onClick={() => setMenuOpen(false)} // close after selection
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={() => {
                            toggleTheme();
                            setMenuOpen(false);
                        }}
                        className="mt-2 px-3 py-2 text-sm rounded-md border border-[#A67B5B] text-[#A67B5B] w-fit self-start"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            )}
        </nav>
    );
}
