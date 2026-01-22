"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        // Animate text content
        tl.from(".hero-content > *", { y: 30, opacity: 0, stagger: 0.1, duration: 1 }, 0.3);
    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen flex items-center px-6 overflow-hidden pt-28 pb-16">
            {/* Cityscape Background with Navy Overlay */}
            <div className="absolute inset-0 w-full h-full -z-10">
                {/* Cityscape Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop")'
                    }}
                />

                {/* Dark Navy Gradient Overlay to ensure text readability */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.8) 50%, rgba(10, 22, 40, 0.4) 100%)'
                    }}
                />

                {/* Additional bottom fade for integration with next section */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a1b2b] to-transparent" />
            </div>

            <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
                {/* Centered Content */}
                <div className="hero-content max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight text-white drop-shadow-lg">
                        <span className="block">Your Vision.</span>
                        <span className="block font-serif italic font-medium mt-2 text-[#FFD700] drop-shadow-md">Our Strategy.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                        We help companies enter new markets, design GTM strategies, and unlock revenue growth through deep research and strategic execution at <span className="font-bold text-[#FFD700]">1/10th the cost</span> and <span className="font-bold text-[#FFD700]">5x the speed</span> of traditional consulting.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {/* Primary Gold Button */}
                        <button className="cursor-pointer group relative flex items-center gap-3 px-8 py-4 bg-[#FFD700] text-[#0a1b2b] text-sm font-bold rounded-full transition-all duration-300 active:scale-95 overflow-hidden hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 uppercase tracking-wider">Talk to us</span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        {/* Secondary Ghost Button */}
                        <button className="cursor-pointer flex items-center gap-2 px-8 py-4 border border-white/30 bg-transparent text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all duration-300">
                            <span className="uppercase tracking-wider">Our Services</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Trust Indicators (New) */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-4">
                        {["Strategy", "Research", "Growth", "Analytics", "Execution"].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 font-medium backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
