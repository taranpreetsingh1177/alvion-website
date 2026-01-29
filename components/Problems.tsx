"use client";

import { useRef } from "react";
import { TraditionalFirmIcon } from "@/components/icons/TraditionalFirmIcon";
import { InternshipIcon } from "@/components/icons/InternshipIcon";
import { FreelancerIcon } from "@/components/icons/FreelancerIcon";
import { AlvionIcon } from "@/components/icons/AlvionIcon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Laptop } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Problems() {
    const container = useRef<HTMLDivElement>(null);

    

    return (
        <section ref={container} className="w-full bg-[#F4EEE5] text-stone-900 min-h-[calc(100vh-80px)] mt-[80px] flex flex-col items-center justify-center relative overflow-hidden">
            
            <div className="container max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center h-full">
                
                {/* Left Side: Content */}
                <div className="lg:col-span-4 flex flex-col items-start text-left">
                    <h2 className="fade-in-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-stone-900">
                        The Consulting <br />
                        <span className="text-stone-500">Gap We Fill</span>
                    </h2>
                    <p className="fade-in-title text-lg text-stone-600 max-w-md leading-relaxed mb-8">
                        Traditional firms are too rigid. Freelancers are too risky. We sit perfectly in the quadrant of high value and high flexibility.
                    </p>
                </div>

                {/* Right Side: Matrix */}
                <div className="lg:col-span-8 relative w-full lg:mr-0 lg:ml-auto">
                    {/* Y-Axis Labels */}
                    <div className="absolute -left-6 top-[25%] -translate-y-1/2 -rotate-90 text-[9px] tracking-[0.2em] text-stone-400 font-bold uppercase hidden md:block whitespace-nowrap">
                        High Value
                    </div>
                     <div className="absolute -left-6 top-[75%] -translate-y-1/2 -rotate-90 text-[9px] tracking-[0.2em] text-stone-400 font-bold uppercase hidden md:block whitespace-nowrap">
                        Low Value
                    </div>
                    
                    {/* X-Axis Labels */}
                    <div className="absolute bottom-[-2.1rem] left-[25%] -translate-x-1/2 text-[9px] tracking-[0.2em] text-stone-400 font-bold uppercase hidden md:block whitespace-nowrap">
                        Low Flexibility
                    </div>
                    <div className="absolute bottom-[-4rem] left-[75%] -translate-x-1/2 text-[9px] tracking-[0.2em] text-stone-400 font-bold uppercase hidden md:block whitespace-nowrap">
                        High Flexibility
                    </div>

                    {/* Matrix Grid */}
                    <div className="matrix-grid grid grid-cols-2 gap-3 md:gap-4 w-full h-full">
                        
                        {/* 1. Traditional Firms (High Value, Low Flexibility) */}
                        <div className="group matrix-card rounded-xl bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Placeholder Image */}
                            <div className="w-full aspect-[21/9] bg-stone-200 rounded-lg mb-3 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium text-xs">
                                    [Office]
                                </div>
                            </div>

                            <div className="px-1 pb-1">
                                <h3 className="text-sm md:text-base font-bold text-stone-900 mb-1">Traditional Firms</h3>
                                <p className="text-xs text-stone-500 leading-relaxed">Rigid structures, high cost, generic strategies.</p>
                            </div>
                        </div>

                        {/* 2. ALVION (High Value, High Flexibility) */}
                        <div className="group matrix-card rounded-xl bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden ring-1 ring-blue-100">
                            {/* Placeholder Image */}
                             <div className="w-full aspect-[21/9] bg-blue-50/50 rounded-lg mb-3 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                  <div className="absolute inset-0 flex items-center justify-center text-blue-400 font-medium text-xs">
                                    [Alvion]
                                </div>
                            </div>

                            <div className="px-1 pb-1 relative z-10">
                                <h3 className="text-sm md:text-base font-bold text-stone-900 mb-1 flex items-center gap-2">
                                    ALVION 
                                </h3>
                                <p className="text-xs text-stone-500 leading-relaxed mb-2">Team working seamlessly as mountainstop.</p>
                                {/* Mini badge for distinction */}
                                <div className="inline-flex items-center gap-1 text-[8px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                    Best Choice
                                </div>
                            </div>
                        </div>

                         {/* 3. Internships (Low Value, Low Flexibility) */}
                         <div className="group matrix-card rounded-xl bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Placeholder Image */}
                            <div className="w-full aspect-[21/9] bg-stone-200 rounded-lg mb-3 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium text-xs">
                                    [Students]
                                </div>
                            </div>
                            
                            <div className="px-1 pb-1">
                                <h3 className="text-sm md:text-base font-bold text-stone-900 mb-1">Internships</h3>
                                <p className="text-xs text-stone-500 leading-relaxed">High management oversight, inexperienced execution.</p>
                            </div>
                        </div>

                        {/* 4. Freelancers (Low Value, High Flexibility) */}
                        <div className="group matrix-card rounded-xl bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Placeholder Image */}
                            <div className="w-full aspect-[21/9] bg-stone-200 rounded-lg mb-3 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium text-xs">
                                    [Freelancer]
                                </div>
                            </div>

                            <div className="px-1 pb-1">
                                <h3 className="text-sm md:text-base font-bold text-stone-900 mb-1">Freelancers</h3>
                                <p className="text-xs text-stone-500 leading-relaxed">Inconsistent quality, unreliable availability.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
                
}
