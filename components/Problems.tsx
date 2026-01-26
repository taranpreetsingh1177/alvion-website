"use client";

import { useRef } from "react";
import { TraditionalFirmIcon } from "@/components/icons/TraditionalFirmIcon";
import { InternshipIcon } from "@/components/icons/InternshipIcon";
import { FreelancerIcon } from "@/components/icons/FreelancerIcon";
import { AlvionIcon } from "@/components/icons/AlvionIcon";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Problems() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Fade in title and text
        gsap.from(".fade-in-text", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        // Stagger in grid items
        gsap.from(".grid-item", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".matrix-grid",
                start: "top 80%",
            }
        });
    }, { scope: container });

    return (
        <section ref={container} className="w-full bg-stone-950 text-white py-24 md:py-32 overflow-hidden relative">

            {/* Background Accents (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[100px]" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="max-w-xl">


                        <h2 className="fade-in-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            The Consulting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Gap We Fill</span>
                        </h2>

                        <p className="fade-in-text text-lg text-slate-400 leading-relaxed max-w-lg mb-8">
                            You shouldn't have to choose between the reliability of big firms and the agility of gig workers.
                        </p>

                        <div className="fade-in-text space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-blue-700" />
                                <span>High Value Strategic Insight</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-blue-700" />
                                <span>Cost-Effective Flexibility</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-blue-700" />
                                <span>Rapid Team Deployment</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Matrix */}
                    <div className="matrix-grid relative">
                        {/* Axis Labels */}
                        {/* Axis Labels */}
                        <div className="absolute -left-12 top-[25%] -translate-y-1/2 -rotate-90 text-[10px] tracking-widest text-blue-500 font-bold uppercase hidden sm:block whitespace-nowrap">
                            High Value
                        </div>
                        <div className="absolute -left-12 top-[75%] -translate-y-1/2 -rotate-90 text-[10px] tracking-widest text-slate-600 font-medium uppercase hidden sm:block whitespace-nowrap">
                            Low Value
                        </div>

                        <div className="absolute bottom-[-2rem] left-[25%] -translate-x-1/2 text-[10px] tracking-widest text-slate-600 font-medium uppercase hidden sm:block whitespace-nowrap">
                            Low Flexibility
                        </div>
                        <div className="absolute bottom-[-2rem] left-[75%] -translate-x-1/2 text-[10px] tracking-widest text-blue-500 font-bold uppercase hidden sm:block whitespace-nowrap">
                            High Flexibility
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Option 1: Traditional Firms */}
                            <div className="grid-item group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/10 hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <TraditionalFirmIcon className="w-14 h-14 transition-transform duration-300 group-hover:scale-105" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-200 mb-1">Traditional Firms</h3>
                                    <p className="text-xs text-slate-500 leading-normal">High cost, rigid structures, slower adaptability.</p>
                                </div>
                            </div>

                            {/* Option 2: ALVION (Hero) */}
                            <div className="grid-item relative cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-[#0a1b2b] to-[#162a3f] border border-blue-700/30 hover:border-blue-500/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:scale-[1.03] transition-all duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <div className="absolute inset-0 bg-blue-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-500">
                                    <AlvionIcon className="w-14 h-14" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-1 tracking-wide">ALVION</h3>
                                    <p className="text-xs text-slate-300 leading-normal">Premium expertise with the agility your business needs.</p>
                                </div>
                            </div>

                            {/* Option 3: Internships */}
                            <div className="grid-item group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-900/10 hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <InternshipIcon className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-200 mb-1">Internships</h3>
                                    <p className="text-xs text-slate-500 leading-normal">Low cost, requires heavy management, temporary.</p>
                                </div>
                            </div>

                            {/* Option 4: Freelancers */}
                            <div className="grid-item group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/10 hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <FreelancerIcon className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-200 mb-1">Freelancers</h3>
                                    <p className="text-xs text-slate-500 leading-normal">Flexible but inconsistent quality and reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
