"use client";

import { useRef } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Laptop } from "lucide-react";

export function Problems() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <section ref={container} className="py-16 px-6 bg-white">
            <div className="container max-w-7xl mx-auto">

                {/* Outer Navy Box */}
                <div className="bg-[#0a1b2b] rounded-[3rem] px-8 md:px-16 py-16 md:py-20 relative overflow-hidden shadow-2xl">

                    {/* Background Texture - kept subtle */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[150px] opacity-5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                        {/* Left Side: Text Content */}
                        <div>
                            <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase mb-4 block">The Landscape</span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                THE CONSULTING <span className="text-[#FFD700]">GAP WE FILL</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed max-w-md">
                                You shouldn't have to choose between the reliability of big firms and the agility of gig workers. We combine the best of both worlds—high value and high flexibility.
                            </p>
                        </div>

                        {/* Right Side: Matrix Graph */}
                        <div className="relative w-full max-w-[550px] mx-auto">

                            {/* Y-Axis (Vertical Line + Labels) */}
                            <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col items-center">
                                {/* Y-Axis Line */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#0a1b2b] -translate-x-1/2">
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-[#0a1b2b]"></div>
                                </div>

                                {/* High Value Label */}
                                <div className="absolute top-[20%] -translate-y-1/2 -left-2 [writing-mode:vertical-rl] rotate-180">
                                    <span className="text-[11px] font-bold uppercase tracking-wider">
                                        <span className="text-[#FFD700]">High</span>
                                        <span className="text-slate-400 ml-2">value</span>
                                    </span>
                                </div>

                                {/* Low Value Label */}
                                <div className="absolute top-[70%] -translate-y-1/2 -left-2 [writing-mode:vertical-rl] rotate-180">
                                    <span className="text-[11px] font-bold uppercase tracking-wider">
                                        <span className="text-[#FFD700]">Low</span>
                                        <span className="text-slate-400 ml-2">value</span>
                                    </span>
                                </div>
                            </div>

                            {/* X-Axis (Horizontal Line + Labels) */}
                            <div className="absolute left-8 right-0 bottom-0 h-8 flex items-center">
                                {/* X-Axis Line */}
                                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#0a1b2b] -translate-y-1/2">
                                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#0a1b2b]"></div>
                                </div>

                                {/* Low Flexibility Label */}
                                <div className="absolute left-[22%] -translate-x-1/2 top-4">
                                    <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                                        <span className="text-[#FFD700]">Low</span>
                                        <span className="text-slate-400 ml-1">flexibility</span>
                                    </span>
                                </div>

                                {/* High Flexibility Label */}
                                <div className="absolute left-[72%] -translate-x-1/2 top-4">
                                    <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                                        <span className="text-[#FFD700]">High</span>
                                        <span className="text-slate-400 ml-1">flexibility</span>
                                    </span>
                                </div>
                            </div>

                            {/* White Content Box */}
                            <div className="bg-white rounded-[2rem] p-6 md:p-8 ml-8 mb-8 shadow-xl">

                                {/* 2x2 Grid */}
                                <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-square">

                                    {/* Top Left: Traditional */}
                                    <div className="rounded-2xl border-2 border-[#FFD700] bg-white flex flex-col items-center justify-center text-center p-4 shadow-sm">
                                        <Briefcase className="w-10 h-10 text-[#0a1b2b] mb-3" />
                                        <h3 className="font-bold text-[#0a1b2b] text-xs sm:text-sm uppercase tracking-wide leading-tight">Traditional<br />Consulting<br />Firms</h3>
                                    </div>

                                    {/* Top Right: ALVION */}
                                    <div className="relative rounded-2xl bg-[#0a1b2b] border-2 border-[#FFD700] flex flex-col items-center justify-center text-center p-4 shadow-2xl transform scale-105 origin-center z-10">
                                        <div className="w-12 h-12 mb-2 rounded-lg flex items-center justify-center overflow-hidden relative">
                                            <Image
                                                src="/logos/alvion.jpeg"
                                                alt="Alvion Logo"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="font-bold text-white text-lg tracking-wide">ALVION</h3>
                                        <p className="text-[8px] text-white/50 uppercase tracking-widest font-bold mt-1">Your Vision<br />Our Strategy</p>
                                    </div>

                                    {/* Bottom Left: Internships */}
                                    <div className="rounded-2xl border-2 border-[#FFD700] bg-white flex flex-col items-center justify-center text-center p-4 shadow-sm">
                                        <GraduationCap className="w-10 h-10 text-[#0a1b2b] mb-3" />
                                        <h3 className="font-bold text-[#0a1b2b] text-xs sm:text-sm uppercase tracking-wide leading-tight">Internships</h3>
                                    </div>

                                    {/* Bottom Right: Freelancers */}
                                    <div className="rounded-2xl border-2 border-[#FFD700] bg-white flex flex-col items-center justify-center text-center p-4 shadow-sm">
                                        <Laptop className="w-10 h-10 text-[#0a1b2b] mb-3" />
                                        <h3 className="font-bold text-[#0a1b2b] text-xs sm:text-sm uppercase tracking-wide leading-tight">Freelancers</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
