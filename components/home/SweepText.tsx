"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/**
 * Scroll-triggered sweep: chars ghost in with blur, then sharpen — same effect as HeroSection.
 * Fires when the element enters the viewport.
 */
export function ScrollSweepText({
    text,
    className,
    startDelay = 0,
}: {
    text: string;
    className?: string;
    startDelay?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <span ref={ref} className={className} aria-label={text}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={
                        isInView
                            ? {
                                  opacity: [0, 0.15, 1, 1],
                                  filter: [
                                      "blur(3px)",
                                      "blur(2px)",
                                      "blur(0px)",
                                      "blur(0px)",
                                  ],
                              }
                            : { opacity: 0, filter: "blur(3px)" }
                    }
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
