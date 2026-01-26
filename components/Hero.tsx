"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        
        // Animate text content
        tl.from(".hero-content > *", { y: 30, opacity: 0, stagger: 0.1, duration: 1 });
        
        // Animate collage items
        tl.from(".collage-item", {
             y: 50, 
             opacity: 0, 
             stagger: 0.15, 
             duration: 1.2,
             ease: "power2.out"
        }, "-=0.5");
    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen bg-[#F5F5F0] flex items-center pt-32 pb-20 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="hero-content order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-stone-950 mb-8">
                            Your <span className="text-blue-700">Vision.</span> <br />
                            Our <span className="text-blue-700">Strategy.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg mb-10">
                            We help organizations enter new markets, automate operations, and scale revenue through deep research and precise execution—faster and more cost-effectively than traditional firms.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            {/* Primary Button */}
                            <button className="cursor-pointer group flex items-center gap-2 px-8 py-4 bg-blue-700 text-white text-sm font-bold rounded-full transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95">
                                <span className="uppercase tracking-wide">Let's Talk</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Secondary Button */}
                            <button className="cursor-pointer flex items-center gap-2 px-8 py-4 border border-stone-300 bg-white text-stone-900 text-sm font-bold rounded-full hover:bg-stone-50 hover:border-stone-400 transition-all duration-300">
                                <span className="uppercase tracking-wide">What We Can Do</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Collage */}
                    <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
                         <div className="relative w-full h-full max-w-[600px]">
                            
                            {/* Top Left Circle - Solid Blue */}
                            <div className="collage-item absolute top-0 left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-700 z-10" />

                            {/* Top Right - Wide Pill (Team meeting / strategy) */}
                            <div className="collage-item absolute top-[5%] right-0 w-[65%] h-32 md:h-40 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
                                <Image 
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1974" 
                                    alt="Strategy Meeting" 
                                    width={400} 
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Middle Left - Vertical Pill (Consultant working) */}
                            <div className="collage-item absolute top-[25%] left-0 w-[40%] h-48 md:h-64 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl z-20">
                                <Image 
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1974" 
                                    alt="Consultant" 
                                    width={300} 
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Middle Right - Square-ish (Data/Analytics) */}
                            <div className="collage-item absolute top-[40%] right-[10%] w-[45%] h-48 md:h-56 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl z-20">
                                <Image 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
                                    alt="Analytics" 
                                    width={300} 
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom Center - Wide Pill (Handshake/Deal) */}
                            <div className="collage-item absolute bottom-0 left-[20%] w-[60%] h-32 md:h-40 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl z-30">
                                 <Image 
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974" 
                                    alt="Collaboration" 
                                    width={400} 
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom Right Circle - Solid Stone/Gray */}
                            <div className="collage-item absolute bottom-[10%] right-[-5%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#FFD700] z-10" />
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
