"use client";

import { motion, useReducedMotion } from "motion/react";

// ── Char-by-char shiver component ────────────────────────────────────────────
function ShiverText({
    text,
    className,
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const reduced = useReducedMotion();

    if (reduced) {
        return <span className={className}>{text}</span>;
    }

    return (
        <span className={className} aria-label={text}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    aria-hidden
                    // Initial: invisible + slightly offset (the "shiver" state)
                    initial={{ opacity: 0, y: 6, x: char === " " ? 0 : (i % 2 === 0 ? -1 : 1) }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: delay + i * 0.018,
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}

// ── Main hero ─────────────────────────────────────────────────────────────────
export function ArticleHero() {
    const TITLE = "The Architecture of Trust: How Elite B2B Firms Win in a Sceptical Market";

    return (
        <section className="bg-background px-4 sm:px-8 pt-10 pb-6">
            {/* Container — fades + rises in on mount */}
            <motion.div
                className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-4xl bg-accent border border-border"
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Gradient overlay */}
                <div
                    aria-hidden
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: `
                            radial-gradient(ellipse 95% 75% at 10% 20%,  hsl(220 65% 70% / 0.18) 0%, transparent 65%),
                            radial-gradient(ellipse 65% 100% at 85% 80%, hsl(210 60% 65% / 0.14) 0%, transparent 60%),
                            radial-gradient(ellipse 120% 55% at 50% 115%,hsl(230 55% 55% / 0.12) 0%, transparent 55%),
                            radial-gradient(ellipse 55% 55% at 92% 5%,   hsl(200 70% 75% / 0.10) 0%, transparent 50%)
                        `,
                    }}
                />

                {/* Content */}
                <div className="relative z-10 px-8 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">

                    {/* Category tag — fades in after container */}
                    <motion.span
                        className="inline-block mb-6 text-xs font-semibold tracking-widest text-primary/70 border border-primary/20 rounded-full px-4 py-1.5 uppercase"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                    >
                        Strategy &amp; Growth
                    </motion.span>

                    {/* Title — character-by-character shiver */}
                    <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight mb-6 max-w-3xl">
                        <ShiverText text={TITLE} delay={0.5} />
                    </h1>

                    {/* Deck — fades up after title finishes (~0.5 + 74 chars * 0.018 ≈ 1.8s) */}
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.9, duration: 0.5, ease: "easeOut" }}
                    >
                        In an era of vendor fatigue and procurement complexity, the firms
                        that grow aren&apos;t those with the slickest decks — they&apos;re
                        the ones that have systematically earned the right to be trusted.
                    </motion.p>

                    {/* Meta row */}
                    <motion.div
                        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.1, duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                AS
                            </div>
                            <span>Arjun Sharma</span>
                        </div>
                        <span aria-hidden className="hidden sm:inline">·</span>
                        <span>18 April 2026</span>
                        <span aria-hidden className="hidden sm:inline">·</span>
                        <span>9 min read</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
