"use client";

import { motion } from "motion/react";
import { ScrollSweepText } from "./SweepText";
import { RefObject } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChartAnalysisIcon, ClipboardIcon, MicroscopeIcon } from "@hugeicons/core-free-icons";

const cards = [
    {
        icon: MicroscopeIcon,
        gradient: "from-emerald-500 via-teal-600 to-cyan-900",
        tag: "Step 1",
        title: "Research",
        excerpt:
            "We map your competitive landscape, benchmark against category leaders, and synthesise everything into a clear picture of the opportunity in front of you.",
    },
    {
        icon: ClipboardIcon,
        gradient: "from-violet-600 via-purple-700 to-indigo-900",
        tag: "Step 2",
        title: "Primary Survey",
        excerpt:
            "We go directly to your customers, prospects, and churned users. Structured interviews and surveys give us the qualitative signal that raw data can't capture.",
    },
    {
        icon: ChartAnalysisIcon,
        gradient: "from-blue-600 via-indigo-700 to-blue-900",
        tag: "Step 3",
        title: "Data Analysis",
        excerpt:
            "We dig into your existing numbers — sales, funnel metrics, cohort data — to surface patterns that explain what's working and what's quietly bleeding growth.",
    },
];

export function ApproachSection({ sectionRef }: { sectionRef?: RefObject<HTMLDivElement | null> }) {
    return (
        <section ref={sectionRef} className="bg-secondary px-6 py-24 md:px-20">

            {/* Header — centred like the reference */}
            <div className="mb-14 text-center">
                <p className="mb-3 text-xs font-medium text-white/40">
                    <ScrollSweepText text="Our Approach" />
                </p>
                <h2 className="text-3xl font-semibold leading-snug text-white md:text-4xl">
                    <ScrollSweepText text="How we think, plan, and deliver." startDelay={0.15} />
                </h2>
            </div>

            {/* Cards */}
            <div className="grid gap-5 md:grid-cols-3 max-w-6xl mx-auto">
                {cards.map(({ icon, gradient, tag, title, excerpt }, i) => (
                    <motion.article
                        key={title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
                        className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/8 transition-colors duration-300 hover:bg-white/8"
                    >
                        {/* Visual panel — coloured gradient with icon */}
                        <div className={`relative flex h-52 items-center justify-center bg-linear-to-br ${gradient}`}>
                            <HugeiconsIcon icon={icon} size={56} strokeWidth={1.25} className="text-white/80" />
                        </div>

                        {/* Text body */}
                        <div className="flex flex-col flex-1 px-6 py-5">
                            <p className="mb-2 text-xs font-medium text-white/40">
                                {tag}
                            </p>
                            <h3 className="mb-3 text-base font-semibold leading-snug text-white">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/50">
                                {excerpt}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>

        </section>
    );
}

