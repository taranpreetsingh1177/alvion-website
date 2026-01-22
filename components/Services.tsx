"use client";

import { useRef } from "react";
import Image from "next/image";

const services = [
    {
        icon: "/logos/features/market-research.png",
        title: "Market & Customer Research",
        description: "In-depth market analysis & customer insights to understand your target audience, identify opportunities, and validate product-market fit."
    },
    {
        icon: "/logos/features/strategy.png",
        title: "GTM & Growth Strategy",
        description: "Comprehensive go-to-market strategies and growth playbooks to accelerate your market entry and scale revenue sustainably."
    },
    {
        icon: "/logos/features/performance.png",
        title: "Pricing & Competitive Analysis",
        description: "Data-driven pricing strategies and competitive benchmarking to maximize margins while staying ahead of market dynamics."
    },
    {
        icon: "/logos/features/consulting.png",
        title: "Ops & Process Improvement",
        description: "Streamline operations and optimize workflows to boost efficiency, reduce costs, and improve organizational performance."
    },
    {
        icon: "/logos/features/risk.png",
        title: "AI & Analytics-Led Decision Support",
        description: "Leverage artificial intelligence and advanced analytics to make smarter, faster decisions backed by actionable insights."
    },
    {
        icon: "/logos/features/team.png",
        title: "Product/Services Review & Analysis",
        description: "Thorough evaluation of your offerings to identify gaps, improvement areas, and opportunities for innovation and differentiation."
    }
];

export function Services() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <section id="services" ref={container} className="py-24 bg-slate-50">
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

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer relative"
                        >
                            {/* Card Container */}
                            <div className="relative p-[1px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white group-hover:-translate-y-1">

                                {/* Hover Border Gradient (Gold/Blue) */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, #0a1b2b 0%, #FFD700 100%)'
                                    }}
                                />

                                {/* Inner Content */}
                                <div className="relative h-full bg-white rounded-[15px] p-8 m-[1px] group-hover:bg-slate-50 transition-colors duration-300">
                                    {/* Icon Box */}
                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-[#0a1b2b]/5 group-hover:bg-[#FFD700]/10 flex items-center justify-center p-3 transition-colors duration-300 border border-[#0a1b2b]/5 group-hover:border-[#FFD700]/30">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={36}
                                            height={36}
                                            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-[#0a1b2b] mb-3 group-hover:text-black transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-600">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

