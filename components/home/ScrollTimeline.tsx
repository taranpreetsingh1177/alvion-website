"use client";

import { RefObject } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function ScrollTimeline({ approachRef }: { approachRef?: RefObject<HTMLDivElement | null> }) {
    const { scrollY } = useScroll();

    // Map scrollY from 0 → approachRef.offsetTop to progress 0 → 1
    // Ball completes its travel exactly when Our Approach section enters the viewport
    const rawProgress = useTransform(scrollY, (y) => {
        if (!approachRef?.current) return 0;
        const target = approachRef.current.offsetTop;
        return target > 0 ? Math.min(y / target, 1) : 0;
    });

    // Spring-smooth the ball movement
    const smoothProgress = useSpring(rawProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    // Ball travels the height of the track
    const TRACK_H = "72vh";
    const ballY = useTransform(smoothProgress, [0, 1], ["0vh", TRACK_H]);
    const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <div
            className="pointer-events-none fixed left-10 top-0 z-20 hidden h-full md:block"
            aria-hidden
        >
            {/* Track line */}
            <div className={`absolute left-1/2 top-20 h-[72vh] w-px -translate-x-1/2 bg-white/10`} />

            {/* Filled line (grows with scroll) */}
            <motion.div
                className="absolute left-1/2 top-20 w-px -translate-x-1/2 origin-top bg-white/30"
                style={{
                    height: TRACK_H,
                    scaleY: lineScaleY,
                }}
            />

            {/* Glowing ball */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: "5rem", y: ballY }}
            >
                <div className="absolute inset-0 -m-2 rounded-full bg-white/10 blur-sm" />
                <div className="relative h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
            </motion.div>
        </div>
    );
}

