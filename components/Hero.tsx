"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Briefcase, Clock, GraduationCap, LayoutGrid, Database, FileText, rocket, Rocket } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-title", { y: 30, opacity: 0, duration: 0.8 })
          .from(".strategy-card", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4")
          .from(".why-choose-label", { opacity: 0, duration: 0.5 }, "-=0.2")
          .from(".stat-pill", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.2")
          .fromTo(".cta-main", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.2")
          .from(".clients-footer", { opacity: 0, y: 10, duration: 0.8 }, "-=0.2");

    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-[calc(100vh-80px)] bg-[#F9F6F2] flex flex-col items-center justify-center pt-24 pb-8 px-6 overflow-hidden">
            
            {/* Main Headline */}
            <div className="text-center mb-6 max-w-4xl mx-auto">
                <h1 className="hero-title text-3xl md:text-5xl lg:text-[3rem] font-medium text-[#0a1b2b] tracking-tight leading-[1.1] font-[family-name:var(--font-bricolage)]">
                    Helping businesses lead in the industry by
                </h1>
            </div>

            {/* Strategy Cards */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 w-full max-w-5xl">
                
                {/* GTM Strategies - Blue */}
                <div className="strategy-card relative group">
                    <div className="px-5 py-2 md:px-8 md:py-3 rounded-xl border border-[#4DA8FF] bg-[#E0F0FF] text-[#0099FF] transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer flex items-center gap-3">
                         <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                         <span className="text-lg md:text-2xl font-bold tracking-tight font-[family-name:var(--font-bricolage)]">GTM Strategies</span>
                    </div>
                    {/* Floating Arrow Badge */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0099FF] text-white flex items-center justify-center shadow-md z-10">
                         <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                </div>

                 {/* Primary Survey - Red */}
                <div className="strategy-card relative group">
                    <div className="px-5 py-2 md:px-8 md:py-3 rounded-xl border border-[#FF6B6B] bg-[#FFE5E5] text-[#FF4D4D] transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer flex items-center gap-3">
                        <FileText className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-lg md:text-2xl font-bold tracking-tight font-[family-name:var(--font-bricolage)]">Primary Survey</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center shadow-md z-10">
                         <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                </div>

                 {/* Data Analysis - Orange */}
                <div className="strategy-card relative group">
                    <div className="px-5 py-2 md:px-8 md:py-3 rounded-xl border border-[#FFB84D] bg-[#FFF4E0] text-[#FF9F1C] transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer flex items-center gap-3">
                        <Database className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-lg md:text-2xl font-bold tracking-tight font-[family-name:var(--font-bricolage)]">Data Analysis</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#FF9F1C] text-white flex items-center justify-center shadow-md z-10">
                         <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                </div>

            </div>

            {/* Stats Selection */}
            <div className="w-full max-w-5xl mx-auto mb-8 flex flex-col items-center">
                <p className="why-choose-label text-stone-400 text-xs font-medium mb-4 uppercase tracking-wide">why choose us?</p>
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                     {/* Clients */}
                    <div className="stat-pill flex items-center gap-2 min-w-[150px] px-5 py-2.5">
                        <Briefcase className="w-4 h-4 text-stone-600" />
                        <span className="text-lg font-bold text-stone-800">15+ <span className="text-stone-400 font-normal text-sm">Clients</span></span>
                    </div>
                    
                    {/* Mentors */}
                    <div className="stat-pill flex items-center gap-2 min-w-[150px] px-5 py-2.5">
                        <GraduationCap className="w-4 h-4 text-stone-600" />
                        <span className="text-lg font-bold text-stone-800">25+ <span className="text-stone-400 font-normal text-sm">Mentors</span></span>
                    </div>

                    {/* Hours */}
                    <div className="stat-pill flex items-center gap-2 min-w-[150px] px-5 py-2.5">
                        <Clock className="w-4 h-4 text-stone-600" />
                        <span className="text-lg font-bold text-stone-800">1500+ <span className="text-stone-400 font-normal text-sm">Hours</span></span>
                    </div>

                     {/* Sectors */}
                    <div className="stat-pill flex items-center gap-2 min-w-[150px] px-5 py-2.5">
                        <LayoutGrid className="w-4 h-4 text-stone-600" />
                        <span className="text-lg font-bold text-stone-800">8+ <span className="text-stone-400 font-normal text-sm">Sectors</span></span>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mb-10 text-center">
                 <Link href="#contact" className="cta-main inline-flex items-center gap-2 px-8 py-3 bg-[#1F4068] text-white text-base font-medium rounded-lg hover:bg-[#162e4d] transition-all hover:scale-105 shadow-lg relative z-20">
                    Let's Talk <ArrowRight className="w-4 h-4" />
                 </Link>
            </div>

            {/* Clients Footer */}
            <div className="clients-footer text-center w-full max-w-7xl mx-auto">
                 <p className="text-stone-400 mb-4 text-xs font-medium uppercase tracking-wide">Not convinced enough? Meet our previous clients:</p>
                 <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 ">
                     <Image src="/logos/alpha-grep.png" alt="AlphaGrep" width={120} height={40} className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                     <Image src="/logos/bajaj.png" alt="Bajaj" width={120} height={40} className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                     {/* "A Group" substitute */}
                     <div className="h-6 md:h-8 flex items-center text-red-600 font-bold text-lg grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 italic cursor-default select-none">
                         <span className="text-2xl">A</span>Group
                     </div>
                     <Image src="/logos/masters union.png" alt="Masters Union" width={120} height={40} className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                     <Image src="/logos/puma.svg" alt="Puma" width={120} height={40} className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                     <Image src="/logos/sunfuel-electric.svg" alt="Sunfuel" width={120} height={40} className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                 </div>
            </div>
            
        </section>
    );
}
