"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Leadership Team Data
const founders = [
    {
        name: "Krish Mittal",
        institution: "SRCC",
        role: "Chief Executive Officer",
        image: "/Photos/krish.png",
        linkedin: "https://www.linkedin.com/in/krish-mittal-61555222a/",
        description: "Krish sets Alvion’s strategic direction and drives client relationships, with experience delivering consulting projects across different companies .",
        experience: [
            "Strategy Consulting Experience",
            "Business Development Experts",
            "Financial Analysis & Planning"
        ],
        education: "Shri Ram College of Commerce",
        achievements: "Led 20+ successful client engagements"
    },
    {
        name: "Sushant",
        institution: "IIT Bombay",
        role: "Chief Growth Officer",
        image: "/Photos/Sushant.png",
        linkedin: "https://www.linkedin.com/in/sushant-kashyap-5b0490334/",
        description: "Sushant drives Alvion's business development, partnership strategy, and market positioning. He's responsible for identifying new opportunities and expanding Alvion's client base.",
        experience: [
            "Growth Strategy & Execution",
            "Data-Driven Decision Making",
            "Technical Product Development"
        ],
        education: "Indian Institute of Technology, Bombay",
        achievements: "Expertise in growth strategy and market expansion"
    },
    {
        name: "Harsh Chaurasiya",
        institution: "SRCC",
        role: "Chief Operating Officer",
        image: "/Photos/harsh.png",
        linkedin: "https://www.linkedin.com/in/harsh0917/",
        description: "Harsh oversees Alvion's operations, quality control, and team management. He ensures every project is delivered on time, on budget, and to the highest standards of rigour. He's personally led 15+ strategic projects for companies like PUMA, Bajaj, Unstop and Master's Union—specialising in market research and GTM strategy.",
        experience: [
            "Operations & Process Optimization",
            "Team Leadership & Management",
            "Client Relationship Management"
        ],
        education: "Shri Ram College of Commerce",
        achievements: "Focused on Creating Impact and Difference in the market"
    }
];

const mentors = [
    { name: "Pranav Yadav", role: "Strategy Director", desc: "Ex-McKinsey, 12+ years in scaling startups.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
    { name: "Sanya Gupta", role: "Tech Lead", desc: "Former Google Engineer, AI specialist.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
    { name: "Arjun Mehta", role: "Product Head", desc: "Led product at 2 Unicorns.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    { name: "Zara Khan", role: "Marketing Lead", desc: "Brand strategist for global FMCGs.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
    { name: "Vikram Malhotra", role: "Data Scientist", desc: "PhD in ML, scaled data teams at Uber.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    { name: "Anjali Singh", role: "Design Lead", desc: "Award-winning UX researcher.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" }
];

export function MentorBoard() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <section id="mentors" ref={container} className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-32" />

            <div className="container max-w-7xl mx-auto px-6">

                {/* ========== LEADERSHIP TEAM - FLIP CARDS ========== */}
                <div className="mb-24">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase mb-3 block">Leadership</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1b2b] mb-4">
                            Meet Our <span className="text-[#FFD700]">Founders</span>
                        </h2>
                        <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                            Visionary leaders from India&apos;s premier institutions, driving innovation and excellence.
                        </p>
                    </div>

                    {/* Flip Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {founders.map((founder, index) => (
                            <div key={index} className="flip-card h-[420px]">
                                <div className="flip-card-inner">
                                    {/* Front Side */}
                                    <div className="flip-card-front">
                                        {/* Full height image */}
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            className="object-cover object-center"
                                        />

                                        {/* Gradient overlay for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2b] via-[#0a1b2b]/40 to-transparent" />

                                        {/* Info overlay at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {founder.name} <span className="text-[#FFD700]">| {founder.institution}</span>
                                            </h3>
                                            <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">
                                                {founder.role}
                                            </p>

                                            {/* LinkedIn Icon */}
                                            <div className="flex justify-center mb-3">
                                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0077B5] shadow-lg">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                    {/* Back Side */}
                                    <div className="flip-card-back border-2 border-[#FFD700] p-5 flex flex-col shadow-xl bg-[#0a1b2b] relative">
                                        {/* LinkedIn Icon - Top Right */}
                                        <a
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-4 right-4 w-9 h-9 bg-[#0077B5] rounded-lg flex items-center justify-center hover:bg-[#005885] transition-colors z-10"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>

                                        {/* Scrollable Content */}
                                        <div className="overflow-y-auto flex-1 pr-1 scrollbar-thin">
                                            {/* Header */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-white/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] font-bold text-base flex-shrink-0">
                                                    {founder.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white text-base">{founder.name}</h4>
                                                    <p className="text-xs text-white/50">{founder.role}</p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs text-white/80 mb-3 leading-relaxed italic border-l-2 border-[#FFD700] pl-3">
                                                {founder.description}
                                            </p>

                                            {/* Education */}
                                            <div className="mb-2">
                                                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    </svg>
                                                    Education
                                                </div>
                                                <p className="text-xs text-white/80">{founder.education}</p>
                                            </div>

                                            {/* Experience */}
                                            <div className="mb-2">
                                                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    Expertise
                                                </div>
                                                <ul className="space-y-0.5">
                                                    {founder.experience.map((exp, i) => (
                                                        <li key={i} className="text-xs text-white/80 flex items-start gap-2">
                                                            <span className="w-1 h-1 rounded-full bg-[#FFD700] mt-1.5 flex-shrink-0" />
                                                            {exp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Achievement */}
                                            <div className="p-2 bg-white/10 rounded-lg">
                                                <p className="text-xs text-white font-medium">
                                                    🏆 {founder.achievements}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Note about other team */}
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/team"
                            className="px-8 py-3 bg-[#0a1b2b] text-white text-sm font-bold rounded-xl hover:bg-[#FFD700] hover:text-[#0a1b2b] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Meet Our Whole Team
                        </Link>
                    </div>
                </div>

                
            </div>
        </section >
    );
}
