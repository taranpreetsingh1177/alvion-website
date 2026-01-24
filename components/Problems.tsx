"use client";

import { useRef } from "react";
import { Briefcase, GraduationCap, Laptop, CheckCircle2 } from "lucide-react";
import { TraditionalFirmIcon } from "@/components/icons/TraditionalFirmIcon";
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
        <section ref={container} className="w-full bg-[#111111] text-white py-24 md:py-32 overflow-hidden relative">

            {/* Background Accents (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="max-w-xl">
                        <div className="fade-in-text inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <span className="text-xs font-medium tracking-[0.2em] text-[#FFD700] uppercase">The Landscape</span>
                        </div>

                        <h2 className="fade-in-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            The Consulting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Gap We Fill</span>
                        </h2>

                        <p className="fade-in-text text-lg text-slate-400 leading-relaxed max-w-lg mb-8">
                            You shouldn't have to choose between the reliability of big firms and the agility of gig workers.
                        </p>

                        <div className="fade-in-text space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                                <span>High Value Strategic Insight</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                                <span>Cost-Effective Flexibility</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                                <span>Rapid Team Deployment</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Matrix */}
                    <div className="matrix-grid relative">
                        {/* Axis Labels */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-widest text-slate-500 font-medium uppercase hidden sm:block">
                            Value
                        </div>
                        <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-slate-500 font-medium uppercase hidden sm:block">
                            Flexibility
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Option 1: Traditional Firms */}
                            <div className="grid-item group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <TraditionalFirmIcon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-200 mb-1">Traditional Firms</h3>
                                    <p className="text-xs text-slate-500 leading-normal">High cost, rigid structures, slower adaptability.</p>
                                </div>
                            </div>

                            {/* Option 2: ALVION (Hero) */}
                            <div className="grid-item relative p-6 rounded-2xl bg-gradient-to-br from-[#0a1b2b] to-[#162a3f] border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.05)] flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <div className="absolute inset-0 bg-[#FFD700]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD700]">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-1 tracking-wide">ALVION</h3>
                                    <p className="text-xs text-slate-300 leading-normal">Premium expertise with the agility your business needs.</p>
                                </div>
                            </div>

                            {/* Option 3: Internships */}
                            <div className="grid-item group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <GraduationCap className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-200 mb-1">Internships</h3>
                                    <p className="text-xs text-slate-500 leading-normal">Low cost, requires heavy management, temporary.</p>
                                </div>
                            </div>

                            {/* Option 4: Freelancers */}
                            <div className="grid-item group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-4 h-full min-h-[180px]">
                                <Laptop className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
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
