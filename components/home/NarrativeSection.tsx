"use client";

import { useRef } from "react";
import { Navbar } from "@/components/abstract/Navbar";
import { HeroSection } from "./HeroSection";
import { ClientSection } from "./ClientSection";
import { ApproachSection } from "./ApproachSection";
import { ScrollTimeline } from "./ScrollTimeline";
import { StatsSection } from "./StatsSection";

export function NarrativeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative">
            <ScrollTimeline approachRef={approachRef} />
            <Navbar />
            <HeroSection />
            <ClientSection />
            <StatsSection />
            <ApproachSection sectionRef={approachRef} />
        </div>
    );
}
