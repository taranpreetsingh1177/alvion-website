"use client";

import { useRef } from "react";
import { Zap, Clock, Briefcase, GraduationCap, LayoutGrid, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { label: "Clients Served", value: 15, suffix: "+", icon: Briefcase },
    { label: "Consulting Hours", value: 1500, suffix: "+", icon: Clock },
    { label: "Faster Delivery", value: 5, suffix: "x", icon: Zap },
    { label: "Senior Mentors", value: 25, suffix: "+", icon: GraduationCap },
    { label: "Sectors Covered", value: 8, suffix: "+", icon: LayoutGrid },
    { label: "Client ROI", value: 10, suffix: "x", icon: TrendingUp },
];

export function Stats() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate numbers
        stats.forEach((stat, i) => {
            const el = document.getElementById(`stat-num-${i}`);
            if (!el) return;

            gsap.to(
                { value: 0 },
                {
                    value: stat.value,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 85%",
                    },
                    snap: { value: 1 }, // Snap to integer
                    onUpdate: function () {
                        el.innerText = Math.ceil(this.targets()[0].value) + stat.suffix;
                    }
                }
            );
        });

        // Fade in cards
        gsap.from(".stat-card", {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-24 bg-white text-[#0a1b2b]">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Alvion's Success <span className="text-[#0a1b2b]">Captured in Numbers</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card w-full max-w-[280px] mx-auto flex items-center gap-5 group cursor-pointer p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                            {/* Shield Icon Container */}
                            <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                                {/* Shield SVG Background */}
                                <svg
                                    className="absolute inset-0 w-full h-full text-[#0a1b2b] group-hover:text-[#FFD700] transition-colors duration-300 drop-shadow-md"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                                {/* Icon */}
                                <stat.icon className="relative z-10 w-7 h-7 text-white group-hover:text-[#0a1b2b] transition-colors duration-300" />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center">
                                <div
                                    className="text-3xl md:text-4xl font-bold text-[#0a1b2b] leading-none mb-2"
                                    id={`stat-num-${index}`}
                                >
                                    0{stat.suffix}
                                </div>
                                <div className="text-sm text-slate-600 font-medium leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
