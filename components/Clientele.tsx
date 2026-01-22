"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const companies = [
    // Clients before center
    { name: "ANI", logo: "/logos/ANI.png" },
    { name: "Alpha Grep", logo: "/logos/alpha-grep.png" },
    { name: "Cool The Globe", logo: "/logos/cool-the-globe.svg" },
    { name: "DU Buddy", logo: "/logos/du-buddy.png" },
    { name: "HR Solutions", logo: "/logos/hr-solutions.png" },
    // Center position - Major brands
    { name: "Infosys", logo: "/logos/infosys.svg" },
    { name: "Bajaj", logo: "/logos/bajaj.png" },
    { name: "Puma", logo: "/logos/puma.svg" },
    // Clients after center
    { name: "Unstop", logo: "/logos/unstop.svg" },
    { name: "Masters Union", logo: "/logos/masters union.png" },
    { name: "Manipal Cigna", logo: "/logos/manipalCigna.png" },
    { name: "Ship Turtle", logo: "/logos/ship-turtle.svg" },
    { name: "Sunfuel Electric", logo: "/logos/sunfuel-electric.svg" },
];

const industries = ["Consumer Tech", "Enterprise SaaS", "FinTech", "EdTech", "Healthcare"];

export function Clientele() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <section id="clients" ref={container} className="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <p className="text-sm font-bold text-[#0a1b2b] uppercase tracking-widest">
                        Trusted by industry leaders
                    </p>

                    {/* Industry Pills */}
                    <div className="flex flex-wrap gap-2">
                        {industries.map((industry, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee Logo Slider */}
            <div className="relative w-full">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling container */}
                <div className="flex animate-marquee">
                    {/* First set of logos */}
                    <div className="flex items-center gap-16 px-8 shrink-0">
                        {companies.map((company, index) => {
                            const isFocus = ["Infosys", "Bajaj", "Puma"].includes(company.name);
                            return (
                                <div
                                    key={`first-${index}`}
                                    className={`flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer hover:scale-110 ${isFocus ? 'h-24 w-auto drop-shadow-lg scale-110' : 'h-14 w-auto'}`}
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-full w-auto object-contain max-w-[160px]"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-16 px-8 shrink-0">
                        {companies.map((company, index) => {
                            const isFocus = ["Infosys", "Bajaj", "Puma"].includes(company.name);
                            return (
                                <div
                                    key={`second-${index}`}
                                    className={`flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer hover:scale-110 ${isFocus ? 'h-24 w-auto drop-shadow-lg scale-110' : 'h-14 w-auto'}`}
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-full w-auto object-contain max-w-[160px]"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="container max-w-6xl mx-auto px-6 mt-12 text-center">
                <Link href="/clientele">
                    <button className="cursor-pointer group relative inline-flex items-center gap-2 px-8 py-3 bg-[#0a1b2b] text-white text-sm font-bold rounded-full transition-all duration-300 active:scale-95 overflow-hidden hover:shadow-lg">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        <span className="relative z-10 uppercase tracking-wider">Know More</span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </Link>
            </div>
        </section>
    );
}
