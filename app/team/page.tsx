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
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        linkedin: "https://linkedin.com/in/krish-mittal",
        description: "Visionary leader with a passion for transforming businesses through strategic consulting and innovative solutions.",
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
        institution: "IIT-B",
        role: "Chief Growth Officer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
        linkedin: "https://linkedin.com/in/sushant",
        description: "Tech-driven growth strategist combining engineering excellence with business acumen to scale companies rapidly.",
        experience: [
            "Growth Strategy & Execution",
            "Data-Driven Decision Making",
            "Technical Product Development"
        ],
        education: "Indian Institute of Technology, Bombay",
        achievements: "Scaled startups from 0 to 1M users"
    },
    {
        name: "Harsh Chaurasiya",
        institution: "SRCC",
        role: "Chief Operating Officer",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
        linkedin: "https://linkedin.com/in/harsh-chaurasiya",
        description: "Operations expert focused on building efficient systems and fostering high-performance teams for sustainable growth.",
        experience: [
            "Operations & Process Optimization",
            "Team Leadership & Management",
            "Client Relationship Management"
        ],
        education: "Shri Ram College of Commerce",
        achievements: "Optimized operations for 30+ projects"
    }
];

const teamMembers = [
    {
        name: "Pranav Yadav",
        role: "Strategy Director",
        institution: "Ex-McKinsey",
        desc: "Ex-McKinsey, 12+ years in scaling startups.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        experience: ["Strategic Planning", "Market Analysis"],
        education: "IIM Ahmedabad",
        linkedin: "#",
        achievements: "Scaled 3 startups"
    },
    {
        name: "Sanya Gupta",
        role: "Tech Lead",
        institution: "Ex-Google",
        desc: "Former Google Engineer, AI specialist.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        experience: ["AI/ML Development", "Cloud Architecture"],
        education: "IIT Delhi",
        linkedin: "#",
        achievements: "Patented AI algorithm"
    }
];

const mentors = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Strategy Mentor",
        institution: "Ex-BCG Partner",
        desc: "20+ years in management consulting, specializing in corporate strategy.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        experience: ["Corporate Strategy", "M&A Advisory"],
        linkedin: "#",
        achievements: "Advised Fortune 500 companies"
    },
    {
        name: "Anita Sharma",
        role: "Finance Mentor",
        institution: "Ex-Goldman Sachs",
        desc: "Investment banking veteran with expertise in capital markets.",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop",
        experience: ["Investment Banking", "Financial Modeling"],
        linkedin: "#",
        achievements: "Led $5B+ deals"
    },
    {
        name: "Vikram Patel",
        role: "Tech Mentor",
        institution: "Ex-Microsoft",
        desc: "Engineering leader with 15+ years in product development.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
        experience: ["Product Engineering", "Cloud Solutions"],
        linkedin: "#",
        achievements: "Built products used by millions"
    },
    {
        name: "Priya Menon",
        role: "Marketing Mentor",
        institution: "Ex-Unilever",
        desc: "Brand strategist with global FMCG experience.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        experience: ["Brand Strategy", "Consumer Insights"],
        linkedin: "#",
        achievements: "Launched 10+ global brands"
    },
    {
        name: "Arjun Nair",
        role: "Operations Mentor",
        institution: "Ex-Amazon",
        desc: "Supply chain expert who scaled operations across APAC.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
        experience: ["Supply Chain", "Process Optimization"],
        linkedin: "#",
        achievements: "Reduced costs by 40%"
    },
    {
        name: "Neha Kapoor",
        role: "HR Mentor",
        institution: "Ex-Deloitte",
        desc: "People & culture expert with focus on organizational design.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        experience: ["Talent Strategy", "Org Design"],
        linkedin: "#",
        achievements: "Transformed 50+ organizations"
    },
    {
        name: "Rahul Joshi",
        role: "Sales Mentor",
        institution: "Ex-Salesforce",
        desc: "Enterprise sales leader who built high-performing teams.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
        experience: ["Enterprise Sales", "GTM Strategy"],
        linkedin: "#",
        achievements: "Grew revenue 10x"
    },
    {
        name: "Kavita Reddy",
        role: "Data Science Mentor",
        institution: "Ex-Meta",
        desc: "AI/ML expert with research publications in top conferences.",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=600&auto=format&fit=crop",
        experience: ["Machine Learning", "Data Analytics"],
        linkedin: "#",
        achievements: "15+ research papers"
    },
    {
        name: "Amit Saxena",
        role: "Legal Mentor",
        institution: "Ex-Cyril Amarchand",
        desc: "Corporate lawyer specializing in startup regulations.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
        experience: ["Corporate Law", "Compliance"],
        linkedin: "#",
        achievements: "Advised 100+ startups"
    },
    {
        name: "Sneha Iyer",
        role: "Design Mentor",
        institution: "Ex-Airbnb",
        desc: "Product designer focused on user-centric experiences.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        experience: ["UX Design", "Design Systems"],
        linkedin: "#",
        achievements: "Red Dot Award winner"
    },
    {
        name: "Karthik Raman",
        role: "Startup Mentor",
        institution: "2x Founder",
        desc: "Serial entrepreneur with successful exits in SaaS space.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
        experience: ["Entrepreneurship", "Fundraising"],
        linkedin: "#",
        achievements: "Raised $50M+ funding"
    },
    {
        name: "Divya Krishnan",
        role: "Sustainability Mentor",
        institution: "Ex-World Bank",
        desc: "ESG expert helping companies build sustainable practices.",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
        experience: ["ESG Strategy", "Impact Assessment"],
        linkedin: "#",
        achievements: "Advised governments globally"
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
                    <div className="mb-24">
                        <h2 className="text-2xl font-bold text-[#0a1b2b] mb-12 border-l-4 border-[#FFD700] pl-4">Directors</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard key={index} member={member} isFounder={false} />
                            ))}
                        </div>
                    </div>

                    {/* Mentors Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0a1b2b] mb-12 border-l-4 border-[#FFD700] pl-4">Our Mentors</h2>
                        <p className="text-slate-600 mb-8 -mt-8 ml-5">Industry veterans guiding our teams and ensuring world-class delivery.</p>
                        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {mentors.map((mentor, index) => (
                                <TeamMemberCard key={index} member={mentor} isFounder={false} />
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
                <div className="flip-card-back rounded-2xl border-2 border-[#FFD700] bg-white p-6 flex flex-col shadow-xl overflow-y-auto !rotate-y-180">
                    <div className="mb-4">
                        <h4 className="text-lg font-bold text-[#0a1b2b]">{member.name}</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{member.role}</p>
                    </div>

                    <p className="text-sm text-slate-600 mb-4 italic leading-relaxed">
                        {member.description || member.desc}
                    </p>

                    <div className="mt-auto space-y-3">
                        {member.experience && (
                            <div>
                                <h5 className="text-xs font-bold text-[#0a1b2b] uppercase mb-1">Expertise</h5>
                                <ul className="text-xs text-slate-600 space-y-1">
                                    {member.experience.map((exp: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#FFD700]" />
                                            {exp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {member.achievements && (
                            <div className="pt-2 border-t border-slate-100">
                                <p className="text-xs font-medium text-[#0a1b2b]">🏆 {member.achievements}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
