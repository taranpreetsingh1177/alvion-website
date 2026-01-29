"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
    { title: "Our Services", href: "/#services" },
    { title: "Our Clientele", href: "/clientele" },
    { title: "Why Alvion?", href: "/why-alvion" },
    { title: "Contact Us", href: "/#contact" },
    // { title: "Team", href: "/team" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Determine if the navbar should have a solid background
    // This happens if the user scrolls down OR if we are NOT on the home page
    const isSolidNav = isScrolled || pathname !== "/";

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past hero section (approx 100vh)
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolidNav
                ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm"
                : "bg-transparent border-b border-transparent"
                }`}>
                <div className="container max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center" aria-label="Alvion Home">
                        <Image
                            src="/logos/official alvion logo.png"
                            alt="Alvion Logo"
                            width={150}
                            height={50}
                            className={`transition-all duration-300 h-10 w-auto ${isSolidNav ? "mix-blend-multiply" : "invert mix-blend-screen"}`}
                        />
                    </Link>

                    {/* Nav Items - Desktop */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isSolidNav
                                    ? "text-slate-600 hover:text-[#0a1b2b] hover:bg-slate-100"
                                    : "text-white/80 hover:text-[#FFD700] hover:bg-white/10"
                                    }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        {/* LinkedIn CTA */}
                        <a
                            href="https://www.linkedin.com/company/alvioncompany/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on LinkedIn"
                            className={`cursor-pointer group relative flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg overflow-hidden hidden sm:flex ${isSolidNav
                                ? "bg-[#0077B5] text-white hover:bg-white hover:text-[#0077B5] hover:shadow-xl"
                                : "bg-[#0077B5] text-white hover:bg-white hover:text-[#0077B5] hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
                                }`}
                        >
                            <svg className="relative z-10 w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="relative z-10 uppercase tracking-wide text-xs">LinkedIn</span>
                        </a>

                        {/* WhatsApp CTA Button */}
                        <a
                            href="https://whatsapp.com/channel/0029VbC9yZCC6Zvn1PXatU2B"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Join our WhatsApp channel"
                            className={`cursor-pointer group relative flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg overflow-hidden ${isSolidNav
                                ? "bg-[#25D366] text-white hover:bg-white hover:text-[#25D366] hover:shadow-xl"
                                : "bg-[#25D366] text-white hover:bg-white hover:text-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                                }`}
                        >
                            {/* WhatsApp Icon */}
                            <svg
                                className="relative z-10 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="relative z-10 uppercase tracking-wide text-xs">Join Us</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isSolidNav
                                ? "text-slate-600 hover:bg-slate-100"
                                : "text-white hover:bg-white/10"
                                }`}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-[72px] right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Mobile navigation"
            >
                <nav className="flex flex-col p-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                    
                    {/* Mobile CTA Buttons */}
                    <div className="pt-6 space-y-3 border-t border-slate-200">
                        <a
                            href="https://www.linkedin.com/company/alvioncompany/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on LinkedIn"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-bold rounded-full hover:bg-[#006396] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="uppercase tracking-wide text-xs">LinkedIn</span>
                        </a>
                        <a
                            href="https://whatsapp.com/channel/0029VbC9yZCC6Zvn1PXatU2B"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Join our WhatsApp channel"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1fb854] transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="uppercase tracking-wide text-xs">Join Us</span>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}
