"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/abstract/Button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    CustomerServiceIcon,
    UserMultipleIcon,
    UserGroupIcon,
    NewsIcon,
    ContactIcon,
} from "@hugeicons/core-free-icons";

const navLinks = [
    { label: "Services",  href: "/services",   icon: CustomerServiceIcon },
    { label: "Clientele", href: "/clientele",   icon: UserMultipleIcon    },
    { label: "Team",      href: "/team",        icon: UserGroupIcon       },
    { label: "Articles",  href: "/articles",    icon: NewsIcon            },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-secondary">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

                {/* ── Logo ──────────────────────────────────────────────── */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white hover:text-white/80 transition-colors duration-150"
                >
                    Alvion
                </Link>

                {/* ── Desktop links ─────────────────────────────────────── */}
                <ul className="hidden md:flex items-center gap-7">
                    {navLinks.map(({ label, href, icon }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                            >
                                <HugeiconsIcon icon={icon} size={14} strokeWidth={1.75} />
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* ── Desktop CTA ───────────────────────────────────────── */}
                <div className="hidden md:block">
                    <Button variant="white" size="sm">
                        <HugeiconsIcon icon={ContactIcon} size={14} strokeWidth={1.75} />
                        Get in touch
                    </Button>
                </div>

                {/* ── Mobile hamburger ──────────────────────────────────── */}
                <button
                    className="md:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    <span
                        className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                            open ? "translate-y-1.5 rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block w-5 h-0.5 bg-current my-1 transition-opacity duration-200 ${
                            open ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                            open ? "-translate-y-1.5 -rotate-45" : ""
                        }`}
                    />
                </button>
            </nav>

            {/* ── Mobile drawer ─────────────────────────────────────────── */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-secondary px-6 pb-5 pt-4 space-y-1">
                    {navLinks.map(({ label, href, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-2 py-2 text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200"
                            onClick={() => setOpen(false)}
                        >
                            <HugeiconsIcon icon={icon} size={15} strokeWidth={1.75} />
                            {label}
                        </Link>
                    ))}
                    <div className="pt-3">
                        <Button variant="white" size="sm">
                            <HugeiconsIcon icon={ContactIcon} size={14} strokeWidth={1.75} />
                            Get in touch
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
