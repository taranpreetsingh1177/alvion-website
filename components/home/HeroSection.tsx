"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const taglines = [
    { line1: "We build",          line2: "businesses that last."      },
    { line1: "Strategy meets",    line2: "real execution."            },
    { line1: "Turning ideas into",line2: "market-ready ventures."     },
    { line1: "Your growth,",      line2: "our obsession."             },
];

const carouselImages = [
    {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
        alt: "Corporate meeting room",
    },
    {
        src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80",
        alt: "Business strategy session",
    },
    {
        src: "https://images.unsplash.com/photo-1521737604082-1d3f2ab5a8b2?auto=format&fit=crop&w=900&q=80",
        alt: "Team collaboration",
    },
    {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
        alt: "Modern corporate office",
    },
    {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        alt: "Executive at work",
    },
];

/** Light-sweep shimmer: invisible → sharp peak glow → settles clean */
function SweepText({
    text,
    className,
    startDelay = 0,
}: {
    text: string;
    className?: string;
    startDelay?: number;
}) {
    return (
        <span className={className} aria-label={text}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{
                        opacity: [0, 0.15, 1, 1],
                        filter: ["blur(3px)", "blur(2px)", "blur(0px)", "blur(0px)"],
                    }}
                    transition={{
                        delay: startDelay + i * 0.033,
                        duration: 0.5,
                        ease: "easeOut",
                        times: [0, 0.08, 0.25, 1],
                    }}
                    style={{ display: "inline-block" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}

function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setCurrent((c) => (c + 1) % carouselImages.length), 4000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative h-full w-full overflow-hidden">
            {/* Images — cross-fade */}
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={carouselImages[current].src}
                        alt={carouselImages[current].alt}
                        fill
                        className="object-cover"
                        priority={current === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Bottom dots */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                {carouselImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                            i === current ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export function HeroSection() {
    const [index, setIndex] = useState(0);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % taglines.length), 4200);
        return () => clearInterval(id);
    }, []);

    const line1 = taglines[index].line1;
    const line2 = taglines[index].line2;
    const line2Delay = line1.length * 0.033 + 0.65 * 0.15 + 0.05;

    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] overflow-hidden bg-secondary">

            {/* Left — content */}
            <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 md:pl-28">
                <div className="flex max-w-xl flex-col items-start">

                    {/* Animated headline */}
                    <div className="relative h-36 w-full flex items-center md:h-28">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                                className="absolute flex flex-col items-start gap-1"
                            >
                                <SweepText
                                    text={line1}
                                    className="text-4xl font-semibold leading-tight text-white md:text-5xl block"
                                    startDelay={0}
                                />
                                <SweepText
                                    text={line2}
                                    className="text-4xl font-semibold leading-tight text-white md:text-5xl block"
                                    startDelay={line2Delay}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Sub-copy */}
                    <p className="mt-8 max-w-lg text-base leading-relaxed text-white/50">
                        Alvion partners with founders and leadership teams to accelerate
                        growth — from sharpening strategy to hands-on execution.
                    </p>

                    {/* Email CTA */}
                    <form
                        className="mt-10 w-full max-w-md"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex h-13 items-center overflow-hidden rounded-lg border border-white/10 bg-[#2a2a2a] pl-4 pr-1.5 focus-within:ring-1 focus-within:ring-white/30 transition-shadow">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
                            />
                            <button
                                type="submit"
                                className="shrink-0 cursor-pointer rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-white/90"
                            >
                                Get proposal deck
                            </button>
                        </div>
                    </form>
                    <p className="mt-3 text-xs text-white/30">
                        No spam — we'll send a PDF within 24 hours.
                    </p>

                </div>
            </div>

            {/* Right — carousel (desktop only) */}
            <div className="hidden md:flex w-[45%] shrink-0 items-center justify-center py-12 pr-12">
                <div className="relative w-full h-[88vh] overflow-hidden rounded-2xl">
                    <HeroCarousel />
                </div>
            </div>

        </section>
    );
}

