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
    { title: "Careers", href: "/careers" },
    { title: "Contact Us", href: "/#contact" },
    { title: "Team", href: "/team" },
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
                ? "bg-[#F9F6F2] border-b border-stone-200/50 shadow-sm"
                : "bg-transparent border-b border-transparent"
                }`}>
                <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center" aria-label="Alvion Home">
                        <Image
                            src="/logos/official alvion logo.png"
                            alt="Alvion Logo"
                            width={140}
                            height={45}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Nav Items - Desktop */}
                    <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-bold text-stone-600 hover:text-blue-700 transition-colors duration-300"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Let's Talk Button */}
                        <Link
                            href="#contact"
                            className="text-white bg-black hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 dark:bg-black dark:hover:bg-stone-800 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300 shadow-md flex items-center gap-2 group"
                        >
                            Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isSolidNav
                                ? "text-slate-600 hover:bg-slate-100"
                                : "text-black hover:bg-black/5"
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
                         <Link
                            href="#contact"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-stone-800 transition-colors w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Let's Talk <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
