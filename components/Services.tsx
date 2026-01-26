"use client";

import { useRef } from "react";
import Image from "next/image";

const services = [
    {
        icon: "/logos/features/market-research.png",
        title: "MARKET & CONSUMER RESEARCH",
        description: "In-depth market analysis and consumer insights to understand your target audience, identify opportunities, and validate product-market fit."
    },
    {
        icon: "/logos/features/strategy.png",
        title: "GTM & GROWTH STRATEGY",
        description: "Comprehensive go-to-market strategies and growth playbooks to accelerate your market entry and scale revenue sustainably."
    },
    {
        icon: "/logos/features/performance.png",
        title: "PRICING & COMPETITIVE ANALYSIS",
        description: "Data-driven pricing strategies and competitive benchmarking to maximize margins while staying ahead of market dynamics."
    },
    {
        icon: "/logos/features/consulting.png",
        title: "AI ENABLEMENT & AUTOMATION",
        description: "Strategic AI integration to automate processes, enhance decision-making, and unlock operational efficiency—from CRM automation to intelligent customer support systems."
    },
    {
        icon: "/logos/features/risk.png",
        title: "MARKET ENTRY & EXPANSION",
        description: "End-to-end market entry playbooks for companies expanding into new geographies or segments—including partnership validation and localized GTM strategies."
    },
    {
        icon: "/logos/features/team.png",
        title: "PRODUCT & SERVICES REVIEW",
        description: "Thorough evaluation of your offerings to identify gaps, improvement areas, and opportunities for innovation and differentiation."
    }
];

export function Services() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <section id="services" ref={container} className="py-24 bg-[#F5F5F0]">
            <div className="container max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0a1b2b] leading-tight mb-4">
                        Our <span className="italic text-[#FFD700]">Services</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        Enterprise-grade consulting tailored for high-growth organizations.
                    </p>
                </div>

                {/* Services Grid - Minimal Border Layout */}
                <div className="grid md:grid-cols-3 border-t border-l border-slate-900/10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer p-10 border-r border-b border-slate-900/10 hover:bg-white/40 transition-colors duration-300 flex flex-col items-start"
                        >
                            {/* Icon - Clean, no box */}
                            <div className="w-12 h-12 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-[#0a1b2b] mb-3 group-hover:text-blue-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-700">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

