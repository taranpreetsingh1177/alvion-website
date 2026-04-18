"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const stats = [
    { value: 60,  suffix: "+", label: "Projects Delivered" },
    { value: 14,  suffix: "",  label: "Industries Covered"  },
    { value: 92,  suffix: "%", label: "Client Satisfaction" },
];

function useCountUp(target: number, duration: number, inView: boolean) {
    const [count, setCount] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;
        const start = performance.now();

        function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }, [inView, target, duration]);

    return count;
}

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
    const count = useCountUp(value, 1800, inView);
    return (
        <div className="flex flex-col items-center gap-2 px-8 text-center">
            <span className="font-serif text-6xl font-semibold text-white md:text-7xl">
                {count}<span className="text-white/50">{suffix}</span>
            </span>
            <span className="text-sm font-medium uppercase tracking-widest text-white/40">{label}</span>
        </div>
    );
}

export function StatsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-secondary px-6 pb-20 pt-10 md:px-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
                {stats.map((s, i) => (
                    <div key={i} className="w-full py-10 md:py-0">
                        <StatItem {...s} inView={inView} />
                    </div>
                ))}
            </div>
        </section>
    );
}
