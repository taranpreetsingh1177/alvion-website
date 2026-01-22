"use client";

import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "Students don't have experience — how will they do this?",
        answer: "Experience ≠ capability. Structure creates capability.",
        details: [
            "Problems are broken into structured workstreams with pre-defined frameworks and templates.",
            "Every project has mentor-led problem definition, weekly reviews, and final validation by professionals.",
            "Juniors in consulting firms succeed the same way — through structure, review, and guidance."
        ]
    },
    {
        question: "Students will leave after 1–2 projects — how do you retain talent?",
        answer: "We don't rely on retention. We design for continuity.",
        details: [
            "Knowledge is captured through SOPs, playbooks, and central documentation.",
            "Teams rotate, systems remain. Project continuity > individual continuity.",
            "Tiered progression and alumni networks create long-term value."
        ]
    },
    {
        question: "How do you maintain quality consistently?",
        answer: "Quality is a system, not a person.",
        details: [
            "Standardized templates, mid-project reviews, and output checklists ensure consistency.",
            "No raw student work goes directly to clients. Every deliverable is reviewed.",
            "Clients don't care who did the work — they care if it's correct, clear, and useful."
        ]
    },
    {
        question: "Why not just use AI for research instead of students?",
        answer: "AI accelerates work. Humans make it usable.",
        details: [
            "AI handles secondary research, summarization, and first-draft hypotheses.",
            "Students + mentors add contextual judgment, feasibility checks, and execution logic.",
            "Alvion is AI-augmented, not AI-replaced. AI gives answers; clients need decisions."
        ]
    },
    {
        question: "How will students commit time consistently?",
        answer: "We design for realistic commitment, not full-time availability.",
        details: [
            "Fixed weekly commitment (6–10 hrs/week) with clear, milestone-based deliverables.",
            "Output-based evaluation with accountability tracking.",
            "High-performing students already manage multiple commitments. Structure enables success."
        ]
    },
    {
        question: "Isn't pricing and engagement messy?",
        answer: "We use modular pricing, not ad-hoc pricing.",
        details: [
            "Fixed-scope projects, monthly retainers, or pilot → scale models.",
            "Pricing based on problem complexity, time horizon, and mentor involvement.",
            "Clear scope = no surprises. Discipline in scope enables flexibility."
        ]
    },
    {
        question: "Isn't this just an internship platform?",
        answer: "No — internships optimize learning. We optimize outcomes.",
        details: [
            "Clients don't 'host' students. Alvion owns delivery.",
            "Students work in teams with mentor-reviewed outputs.",
            "Internships are talent supply. Alvion is problem-solving delivery."
        ]
    },
    {
        question: "What about data security & confidentiality?",
        answer: "We treat confidentiality as non-negotiable.",
        details: [
            "NDAs for all team members. Restricted, need-to-know data access.",
            "No local storage. Centralized document control.",
            "Sensitive work handled by senior members. Security comes from process, not age."
        ]
    },
    {
        question: "Who actually works on our project?",
        answer: "Core leadership oversight + top-tier analyst execution.",
        details: [
            "Each project is led by a core Alvion leadership member.",
            "Executed by a carefully curated team of high-performing analysts from India's top institutions.",
            "Selected based on problem relevance, skill fit, and execution capability."
        ]
    },
    {
        question: "What kind of companies do you typically work with?",
        answer: "Startups, scale-ups, and corporates facing critical challenges.",
        details: [
            "We work with entities facing high-impact strategic, growth, or operational challenges.",
            "Focus on partners where structured thinking and fast execution are critical.",
            "From early-stage startups to established enterprises needing agility."
        ]
    }
];

const descriptionText = "Alvion is a student-led execution & consulting platform that helps companies solve real, clearly-defined business problems by pairing them with high-potential students, while senior mentors ensure quality, structure, and accountability.";
const taglineText = "At its core, Alvion converts learning into execution.";

export default function WhyAlvionPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
    const startIndex = Math.floor(descriptionText.length / 2);
    const [displayedText, setDisplayedText] = useState(descriptionText.slice(0, startIndex));
    const [showTagline, setShowTagline] = useState(false);

    useEffect(() => {
        // Typewriter effect - starts from half the text
        let currentIndex = startIndex;
        const typewriterInterval = setInterval(() => {
            if (currentIndex <= descriptionText.length) {
                setDisplayedText(descriptionText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typewriterInterval);
                setTimeout(() => setShowTagline(true), 300);
            }
        }, 25);

        return () => clearInterval(typewriterInterval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from(heroRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });

            // FAQ items stagger animation
            faqRefs.current.forEach((ref, index) => {
                if (ref) {
                    gsap.from(ref, {
                        scrollTrigger: {
                            trigger: ref,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        },
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        delay: index * 0.05,
                        ease: "power3.out"
                    });
                }
            });

            // Highlight boxes animation
            gsap.utils.toArray<HTMLElement>(".highlight-box").forEach((box) => {
                gsap.from(box, {
                    scrollTrigger: {
                        trigger: box,
                        start: "top 90%",
                    },
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-white">
            <Navbar />

            {/* What is Alvion Section */}
            <section ref={heroRef} className="pt-32 pb-20 px-6">
                <div className="container max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0a1b2b] mb-8 font-sans">
                        What is <span className="text-[#FFD700]">Alvion</span>?
                    </h1>

                    <div className="min-h-[120px] md:min-h-[100px] flex justify-center">
                        <div className="flex items-stretch gap-4 max-w-3xl text-left">
                            {/* Yellow Bar */}
                            <div className="w-1 bg-[#FFD700] rounded-full flex-shrink-0"></div>
                            {/* Text */}
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium font-sans">
                                {displayedText}
                                <span className="inline-block w-0.5 h-6 bg-[#FFD700] ml-1 animate-pulse"></span>
                            </p>
                        </div>
                    </div>

                    <div className={`mt-8 transition-all duration-700 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="inline-block bg-[#0a1b2b] text-white px-6 py-3 rounded-full">
                            <span className="text-lg font-bold">
                                {taglineText.split("Alvion converts").map((part, i) =>
                                    i === 0 ? part : (
                                        <span key={i}>
                                            <span className="text-[#FFD700]">Alvion converts</span>
                                            {part}
                                        </span>
                                    )
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alvion's Position */}
            <section className="pb-16 px-6">
                <div className="container max-w-5xl mx-auto text-center">
                    <h3 className="text-sm font-bold text-[#0a1b2b] uppercase tracking-widest mb-6">
                        Alvion's Position
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-2 text-lg md:text-xl font-medium text-[#0a1b2b]">
                        <span className="border border-[#0a1b2b] bg-white hover:bg-[#FFD700] px-4 py-1.5 rounded-full transition-colors duration-200 cursor-pointer">Structured Execution</span>
                        <span className="text-slate-400">+</span>
                        <span className="border border-[#0a1b2b] bg-white hover:bg-[#FFD700] px-4 py-1.5 rounded-full transition-colors duration-200 cursor-pointer">Real Accountability</span>
                        <span className="text-slate-400">+</span>
                        <span className="border border-[#0a1b2b] bg-white hover:bg-[#FFD700] px-4 py-1.5 rounded-full transition-colors duration-200 cursor-pointer">Student Talent</span>
                        <span className="text-slate-400">+</span>
                        <span className="border border-[#0a1b2b] bg-white hover:bg-[#FFD700] px-4 py-1.5 rounded-full transition-colors duration-200 cursor-pointer">Mentor Oversight</span>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="container max-w-5xl mx-auto px-6">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 px-6">
                <div className="container max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase mb-4 block">Addressing The Skeptics</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b2b]">
                            Common Questions, <span className="italic text-slate-400">Clear Answers</span>
                        </h2>
                    </div>

                    {/* FAQ Grid */}
                    <div className="space-y-12">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={(el) => { faqRefs.current[index] = el; }}
                                className="group"
                            >
                                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Question Side */}
                                    <div className="md:w-1/2">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl font-bold text-[#FFD700]/30">{String(index + 1).padStart(2, '0')}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#0a1b2b] mb-3 leading-tight group-hover:text-[#0a1b2b]/80 transition-colors">
                                                    "{faq.question}"
                                                </h3>
                                                <div className="inline-block bg-[#0a1b2b] text-white px-3 py-1.5 text-sm font-bold highlight-box">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Answer Side - Styled Card */}
                                    <div className="md:w-1/2">
                                        <div className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg">
                                            {/* Gradient Border */}
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    background: 'linear-gradient(135deg, #0a1b2b 0%, #FFD700 100%)'
                                                }}
                                            />
                                            {/* Inner Content */}
                                            <div className="relative bg-white rounded-[14px] p-6">
                                                <ul className="space-y-3">
                                                    {faq.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 flex-shrink-0"></span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Separator */}
                                {index < faqs.length - 1 && (
                                    <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-20 px-6 bg-[#0a1b2b]">
                <div className="container max-w-4xl mx-auto text-center">
                    <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium mb-8">
                        Alvion operates through <span className="text-[#FFD700]">four clear models</span> — projects, AI efficiency, structured retainers, and internal audits.
                    </p>
                    <p className="text-lg text-white/60">
                        Every engagement is scoped, executable, and outcome-driven.
                    </p>
                    <div className="mt-12">
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0a1b2b] text-sm font-bold rounded-full hover:bg-white transition-colors duration-300"
                        >
                            <span className="uppercase tracking-wide">Start a Conversation</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
