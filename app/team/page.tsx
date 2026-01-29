"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

// Reusing data from MentorBoard
const founders = [
    {
        name: "Krish Mittal",
        institution: "SRCC",
        role: "Chief Executive Officer",
        image: "/Photos/krish.png",
        linkedin: "https://www.linkedin.com/in/krish-mittal-61555222a/",
        description: "Krish sets Alvion's strategic direction and drives client relationships, with experience delivering consulting projects across different companies.",
        experience: [
            "Strategy Consulting Experience",
            "Business Development Expert",
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
        description: "Harsh oversees Alvion's operations, quality control, and team management. He ensures every project is delivered on time, on budget, and to the highest standards of rigour.",
        experience: [
            "Operations & Process Optimization",
            "Team Leadership & Management",
            "Client Relationship Management"
        ],
        education: "Shri Ram College of Commerce",
        achievements: "Led 15+ strategic projects for PUMA, Bajaj, Unstop & Master's Union"
    }
];

const teamMembers = [
    {
        name: "Kayana Agarwal",
        role: "Strategic Consultant",
        institution: "JMC",
        desc: "Experienced researcher and strategist with a diverse portfolio across finance, consulting, and social impact.",
        image: "/Photos/kayana.png",
        experience: ["Senior Consultant, 180DC JMC", "Research Analyst, AlphaGrep", "Strategy Intern, Shipturtle"],
        education: "Jesus and Mary College, Delhi University",
        linkedin: "https://www.linkedin.com/in/kayanaagarwal/",
        achievements: "Led strategic projects for Takachar & Robin Hood Army"
    },
    {
        name: "Suhani Jain",
        role: "Consulting Director",
        institution: "JMC",
        desc: "Consulting Director at 180 Degrees Consulting JMC and Project Sugam Head at Enactus JMC.",
        image: "/Photos/suhani.png",
        experience: ["Consulting Director, 180DC JMC", "Project Sugam Head, Enactus JMC", "Senior House Captain, DPS Greater Faridabad"],
        education: "Jesus and Mary College",
        linkedin: "https://www.linkedin.com/in/suhani-jain-511b98325/",
        achievements: "Team Lead Project Department & House Captain"
    }
];

export default function TeamPage() {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="container max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase mb-3 block">Our People</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0a1b2b] mb-6">
                            Meet the <span className="text-[#FFD700]">Dream Team</span>
                        </h1>
                        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
                            A collective of visionaries, strategists, and creators dedicated to your success.
                        </p>
                    </div>

                    {/* Founders Section */}
                    <div className="mb-24">
                        <h2 className="text-2xl font-bold text-[#0a1b2b] mb-12 border-l-4 border-[#FFD700] pl-4">Founding Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {founders.map((member, index) => (
                                <TeamMemberCard key={index} member={member} isFounder={true} />
                            ))}
                        </div>
                    </div>

                    {/* Extended Team Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0a1b2b] mb-12 border-l-4 border-[#FFD700] pl-4">Directors</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard key={index} member={member} isFounder={false} />
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

function TeamMemberCard({ member, isFounder }: { member: any, isFounder: boolean }) {
    return (
        <div className="flip-card h-[380px]">
            <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2b] via-transparent to-transparent opacity-90" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-2">{member.role}</p>
                        <p className="text-white/70 text-xs">{member.institution}</p>
                    </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back rounded-2xl border-2 border-[#FFD700] p-5 flex flex-col shadow-xl bg-[#0a1b2b] relative">
                    {/* LinkedIn Icon - Top Right */}
                    {member.linkedin && member.linkedin !== "#" && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 w-9 h-9 bg-[#0077B5] rounded-lg flex items-center justify-center hover:bg-[#005885] transition-colors z-10"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    )}

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto flex-1 pr-1 scrollbar-thin">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] font-bold text-base flex-shrink-0">
                                {member.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base">{member.name}</h4>
                                <p className="text-xs text-white/50">{member.role}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-white/80 mb-3 leading-relaxed italic border-l-2 border-[#FFD700] pl-3">
                            {member.description || member.desc}
                        </p>

                        {/* Education */}
                        {member.education && (
                            <div className="mb-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                    Education
                                </div>
                                <p className="text-xs text-white/80">{member.education}</p>
                            </div>
                        )}

                        {/* Experience */}
                        {member.experience && (
                            <div className="mb-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-1">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Expertise
                                </div>
                                <ul className="space-y-0.5">
                                    {member.experience.map((exp: string, i: number) => (
                                        <li key={i} className="text-xs text-white/80 flex items-start gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#FFD700] mt-1.5 flex-shrink-0" />
                                            {exp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Achievement */}
                        {member.achievements && (
                            <div className="p-2 bg-white/10 rounded-lg">
                                <p className="text-xs text-white font-medium">
                                    🏆 {member.achievements}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
