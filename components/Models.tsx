"use client";

import { useRef } from "react";
import { Briefcase, Bot, RefreshCw, ClipboardCheck } from "lucide-react";

const engagementModels = [
    {
        icon: Briefcase,
        title: "Live Project-Based Model",
        points: [
            "Clients come with a clearly defined problem and desired outcome.",
            "Alvion scopes the problem, builds a plan of action, and delivers end-to-end execution.",
            "Projects are fixed-scope, fixed-timeline, and paid; pilots are optional, not mandatory.",
            "Best for well-bounded problems where the client wants fast, accountable delivery."
        ]
    },
    {
        icon: Bot,
        title: "AI Automation & Efficiency Model",
        points: [
            "Clients approach Alvion with a specific inefficiency or repetitive workflow.",
            "Alvion diagnoses the process and researches where AI or automation can realistically improve efficiency.",
            "Focus is on feasible implementation, not experimental or vague AI ideas.",
            "Deliverables include a clear AI-enabled solution design, tool stack, and execution roadmap."
        ]
    },
    {
        icon: RefreshCw,
        title: "Retainer & Plug-in-Play Model",
        points: [
            "Clients need ongoing execution support within a clearly defined scope.",
            "Alvion works on pre-agreed workstreams (e.g., analytics, ops tracking, process execution).",
            "Work follows a weekly sprint structure with fixed deliverables and review cycles.",
            "Avoids open-ended work and ensures predictable output and accountability."
        ]
    },
    {
        icon: ClipboardCheck,
        title: "Internal Audit & Management Efficiency Model",
        points: [
            "Alvion conducts a structured diagnostic of the client's business or function.",
            "We identify specific inefficiencies, gaps, or broken processes within operations, sales, or management.",
            "Based on findings, Alvion proposes clearly scoped improvement projects to the client.",
        ]
    }
];

export function Models() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <section ref={container} className="py-24 bg-stone-950">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase mb-4 block">How We Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        Our Engagement <span className="italic text-[#FFD700]">Models</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium">
                        Four clear models — projects, AI efficiency, structured retainers, and internal audits — ensuring every engagement is scoped, executable, and outcome-driven.
                    </p>
                </div>

                {/* Flip Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {engagementModels.map((model, index) => {
                        const Icon = model.icon;
                        return (
                            <div
                                key={index}
                                className="group perspective-1000 h-[400px]"
                            >
                                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

                                    {/* Front Face */}
                                    <div className="absolute inset-0 backface-hidden">
                                        <div className="w-full h-full bg-[#1c1917] rounded-3xl shadow-lg border border-white/10 flex flex-col items-center justify-center p-8 text-center">
                                            <div className="w-20 h-20 mb-6 rounded-2xl bg-[#0a1b2b] flex items-center justify-center shadow-lg border border-white/10">
                                                <Icon className="w-10 h-10 text-[#FFD700]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white leading-tight">
                                                {model.title}
                                            </h3>
                                            <div className="mt-6 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                                                Hover to learn more
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Face */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                                        <div className="w-full h-full bg-[#0a1b2b] rounded-3xl shadow-2xl flex flex-col justify-center p-6 text-left overflow-hidden">
                                            <h4 className="text-lg font-bold text-[#FFD700] mb-4 leading-tight">
                                                {model.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {model.points.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-white/80 leading-relaxed">
                                                        <span className="text-[#FFD700] mt-1 flex-shrink-0">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CSS for 3D Flip Effect */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .group:hover .group-hover\\:rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
}

