"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

// Reusing data from MentorBoard component
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

const mentors = [
    {
        name: "Shekhar Gera",
        role: "General Manager - PSM & Consumer Strategy",
        institution: "Masters' Union",
        desc: "Consumer Strategy and Market Research Specialist with a focus on segmenting audiences, building insights-driven positioning, and driving targeted marketing approaches.",
        image: "/Photos/mentors/shekhar gera.png",
        experience: ["General Manager - PSM & Consumer Strategy, Masters' Union", "Senior Manager - CSM, NielsenIQ", "Senior Data Analyst, BCG"],
        education: "Master's degree, Statistics, Delhi University",
        linkedin: "https://www.linkedin.com/in/shekhar-gera-60a5a359/",
        achievements: "Spearheaded Psychology & Marketing Programme at Masters' Union"
    },
    {
        name: "Shubham Verma",
        role: "Director - Product & Growth",
        institution: "upGrad",
        desc: "Leading partnerships, alternate marketing channels, and industry-led programs at upGrad. Started career in Finmechanics and served as Chief of Staff at the MD's office.",
        image: "/Photos/mentors/shubham verma.png",
        experience: ["Director - Product & Growth, upGrad", "Chief Of Staff - MD's office, upGrad", "Consultant, FINMECHANICS"],
        education: "B.Tech in Production and Industrial Engineering, IIT Delhi",
        linkedin: "https://www.linkedin.com/in/shubham-verma1/",
        achievements: "Leading Industry-led programs with more than 1.5L paid enrollments"
    },
    {
        name: "Utsav Bansal",
        role: "Management Consultant",
        institution: "Accenture Strategy",
        desc: "Management Consultant at Accenture Strategy with close to 7 years of experience. Top Mentor on Unstop, helping students and young professionals achieve clarity in their careers.",
        image: "/Photos/mentors/utsav bansal.png",
        experience: ["Management Consultant, Accenture", "Associate, PwC India", "System Engineer, Infosys"],
        education: "PGDIM, Indian Institute of Management Mumbai",
        linkedin: "https://www.linkedin.com/in/utsav-bansal-ub24/",
        achievements: "Top Mentor at Unstop, Mentored 100+ students on careers & interviews"
    },
    {
        name: "Reetik Agarwal",
        role: "Investment & Portfolio Head",
        institution: "Antler",
        desc: "Passionate about creating an impact, leading investments and portfolio in Fintech, Mobility/EV, Logistics and B2B Commerce companies.",
        image: "/Photos/mentors/reetik.png",
        experience: ["Fintech, Mobility and B2B Commerce Investment & Portfolio Head, Antler", "Senior Analyst - TMT, Bain & Company", "Transaction Banking Intern, Standard Chartered Bank"],
        education: "BA Honors Economics, Shri Ram College of Commerce",
        linkedin: "https://www.linkedin.com/in/reetik-agarwal-26b7b7146/",
        achievements: "Invested in ~40 startups from an evaluated pool of 50,000 founders"
    },
    {
        name: "Ankush Gupta",
        role: "Vice President - Human Resources",
        institution: "EY",
        desc: "Experienced HR leader currently working at EY and previously serving at Infosys and KPMG.",
        image: "/Photos/mentors/ankush gupta.png",
        experience: ["EY", "Infosys", "KPMG"],
        education: "NIT WARANGAL",
        linkedin: "https://www.linkedin.com/in/ankush-gupta-bb240543/",
        achievements: "Tech Recruitment Certified Professional"
    },
    {
        name: "Shatam",
        role: "Principal Consultant",
        institution: "Infosys Consulting",
        desc: "Seasoned business consultant with 13+ years of experience in process transformation by leveraging AI across multiple industries.",
        image: "/Photos/mentors/shatam.png",
        experience: ["Principal Consultant, Infosys Consulting", "Technology Consultant, HomeOne Technologies", "Senior Engineering Project Manager, Tata Steel"],
        education: "MBA, Indian Institute of Management Bangalore",
        linkedin: "https://www.linkedin.com/in/shataminfiiimbtsl/",
        achievements: "Managed AIXCelerate program with UK Government"
    },
    {
        name: "Sandeep Agarwal",
        role: "Program Manager",
        institution: "Capgemini",
        desc: "A highly committed professional with over 12 years of experience in the Full Life Cycle of ERP projects, specializing in Microsoft Dynamics 365.",
        image: "/Photos/mentors/sandeep kumar.png",
        experience: ["Program Manager, Capgemini", "Senior Architect, Hexaware Technologies", "Principal Consultant, Birlasoft"],
        education: "Senior Management Programme, Indian Institute of Management, Calcutta",
        linkedin: "https://www.linkedin.com/in/sandeepagarwal1981/",
        achievements: "Microsoft Certified: Dynamics 365 Finance Functional Consultant Associate"
    },
    {
        name: "Mahavir Kumar",
        role: "Founder",
        institution: "Beyond Career",
        desc: "Dynamic professional with a passion for strategy, innovation, and entrepreneurship. Driven to create solutions and impactful networks.",
        image: "/Photos/mentors/mahavir kumar.png",
        experience: ["Founder, Beyond Career", "Student Mentor, Unstop", "Founder's Office, Growth Grid Global", "Strategy Intern, Bureau of Indian Standards"],
        education: "B.Tech + M.Tech, IIT Kharagpur",
        linkedin: "https://www.linkedin.com/in/mahavir-kumar-beyond-career/",
        achievements: "Founded Beyond Career to democratize access to internships and placements"
    },
    {
        name: "Anil Das",
        role: "Founder & Managing Director",
        institution: "HR India Solutions",
        desc: "First-generation entrepreneur with a background in Human Resources, skilled in talent management, HR consulting, payroll, executive search, and employee engagement.",
        image: "/Photos/mentors/anil das.png",
        experience: ["Country Head - HR, RPG Cellucom", "Chief Manager - HR, DLF Limited", "Dy. General Manager - HR, Pizza Hut"],
        education: "Xavier Institute of Social Service (XISS), Ranchi",
        linkedin: "https://www.linkedin.com/in/anilkdas/",
        achievements: "Founded HR India Solutions in 2009"
    },
    {
        name: "Sanskriti Pandey",
        role: "Vice President - Business & Partnerships",
        institution: "26MilesCapital",
        desc: "Chartered Accountant and SRCC gold medalist, acting as a strategic partner to leadership. Official LinkedIn Creator focusing on prudence and professional skills.",
        image: "/Photos/mentors/sanskriti.png",
        experience: ["Vice President- Business & Partnerships, 26MilesCapital", "Team Lead, CLOUDIT", "Private Equity Investment Associate, Terra-Invest"],
        education: "B.Com (Hons.), Shri Ram College of Commerce",
        linkedin: "https://www.linkedin.com/in/sanskriti~pandey/",
        achievements: "SRCC '20 Gold Medalist and Top 100 Women Creators of India"
    },
    {
        name: "Tarini Nema",
        role: "Policy Research Associate",
        institution: "Office of Member of Parliament, Rajya Sabha",
        desc: "Specializes in parliamentary and legislative research, focusing on technology policy, digital inclusion, innovation, and emerging technologies.",
        image: "/Photos/mentors/tarini.png",
        experience: ["Research Associate & Consultant, Office of Member of Parliament, Rajya Sabha", "Policy Research Intern - International Relations", "Research Associate, Office of Member of Parliament, Lok Sabha"],
        education: "MA, Political Science, Indira Gandhi National Open University",
        linkedin: "https://www.linkedin.com/in/tarini-nema/",
        achievements: "Qualified NTA UGC NET (Political Science) for Asstt Professor and PhD"
    },
    {
        name: "Chandra Kumar",
        role: "Founder",
        institution: "HomeONE & Unfiltered Lessons",
        desc: "24-year journey across Management, Business Development, Sales, Training & Development, and HR. Catalyst for transformation and mentor empowers individuals and businesses.",
        image: "/Photos/mentors/chandra kumar.png",
        experience: ["Founder, HomeONE", "Founder, Unfiltered Lessons", "Head of Corporate Finance, GRAVITY LONDON", "Head Of Human Resources, GRAVITY LONDON"],
        education: "Diploma in Business Management, NMIMS",
        linkedin: "https://www.linkedin.com/in/thechandrakumar/",
        achievements: "Built HomeONE into a fast-emerging Real Estate Advisory firm in 2 years"
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
                        <div className="grid md:grid-cols-4 gap-6">
                            {mentors.map((member, index) => (
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
                <div className="flip-card-back rounded-2xl border-2 border-[#FFD700] p-5 flex flex-col shadow-xl bg-white relative">
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
                    <div className="overflow-y-auto flex-1 pr-1 scrollbar-thin-dark">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#0a1b2b] border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] font-bold text-base flex-shrink-0">
                                {member.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0a1b2b] text-base">{member.name}</h4>
                                <p className="text-xs text-slate-500">{member.role}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-600 mb-3 leading-relaxed italic border-l-2 border-[#FFD700] pl-3">
                            {member.description || member.desc}
                        </p>

                        {/* Education */}
                        {member.education && (
                            <div className="mb-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0a1b2b] uppercase tracking-wider mb-1">
                                    <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                    Education
                                </div>
                                <p className="text-xs text-slate-600">{member.education}</p>
                            </div>
                        )}

                        {/* Experience */}
                        {member.experience && (
                            <div className="mb-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0a1b2b] uppercase tracking-wider mb-1">
                                    <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Expertise
                                </div>
                                <ul className="space-y-0.5">
                                    {member.experience.map((exp: string, i: number) => (
                                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#FFD700] mt-1.5 flex-shrink-0" />
                                            {exp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Achievement */}
                        {member.achievements && (
                            <div className="p-2 bg-[#0a1b2b]/5 rounded-lg">
                                <p className="text-xs text-[#0a1b2b] font-medium">
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
