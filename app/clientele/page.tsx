"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const companies = [
    {
        name: "Infosys",
        logo: "/logos/infosys.svg",
        pointers: [
            "Generative AI solution framework for complaint management",
            "Automation and implementation roadmap",
            "AI business case and cost-benefit analysis",
            "Operational change management considerations"
        ]
    },
    {
        name: "Bajaj",
        logo: "/logos/bajaj.png",
        pointers: [
            "Custom employee learning and training modules",
            "Corporate compliance content",
            "Interactive assessment and Q&A framework"
        ]
    },
    {
        name: "Unstop",
        logo: "/logos/unstop.svg",
        pointers: [
            "Competitive analysis across 10 platforms",
            "Blue Ocean strategic canvas",
            "Differentiated value proposition",
            "GTM roadmap and positioning framework"
        ]
    },
    {
        name: "Masters Union",
        logo: "/logos/masters union.png",
        pointers: [
            "Comprehensive perception audit report",
            "Competitive positioning analysis",
            "Aspirant personas and decision journey maps",
            "Messaging and marketing strategy framework"
        ]
    },
    {
        name: "Puma",
        logo: "/logos/puma.svg",
        pointers: [
            "Consumer personas and segmentation framework",
            "Brand affinity and athleisure adoption insights",
            "Campaign themes and influencer engagement strategy",
            "Community-building and retention playbook"
        ]
    },
    {
        name: "Indian Angel Network (IAN)",
        logo: "/logos/IAN.png",
        pointers: ["News Content Delivery Network", "Real-time Reporting Tools", "Digital Archive System"]
    },
    {
        name: "Alpha Grep",
        logo: "/logos/alpha-grep.png",
        pointers: [
            "BFSI sector website benchmarking report",
            "Website evaluation framework",
            "Competitive traffic and keyword analysis",
            "Best-in-class feature roadmap and emulatable innovations"
        ]
    },
    {
        name: "Cool The Globe",
        logo: "/logos/cool-the-globe.svg",
        pointers: [
            "Strategic growth blueprint",
            "\"Climate Champion\" ambassador program design",
            "Global event outreach and presence strategy",
            "UX/UI and gamification overhaul recommendations"
        ]
    },
    {
        name: "DU Buddy",
        logo: "/logos/du-buddy.png",
        pointers: [
            "Horizontal and vertical expansion strategy",
            "Product assessment and user pain-point identification",
            "Short and long-term implementation roadmap with KPIs",
            "Two-phased primary consumer research survey"
        ]
    },
    {
        name: "HR India Solutions",
        logo: "/logos/hr-solutions.png",
        pointers: [
            "Vetted intern recruitment and talent sourcing",
            "Managed end-to-end recruitment process"
        ]
    },
    {
        name: "Manipal Cigna",
        logo: "/logos/manipalCigna.png",
        pointers: [
            "Competitive digital benchmarking report",
            "UX/UI friction point analysis",
            "Feature gap matrix and opportunity assessment",
            "Prioritised product roadmap recommendations"
        ]
    },
    {
        name: "Ship Turtle",
        logo: "/logos/ship-turtle.png",
        pointers: [
            "Brazil market landscape and competitor mapping",
            "Validated partner and enterprise lead pipeline",
            "Agency-led market acquisition playbook",
            "Localised talent pipeline and recruitment framework"
        ]
    },
    {
        name: "Sunfuel Electric",
        logo: "/logos/sunfuel-electric.svg",
        pointers: [
            "eVTOL ecosystem market landscape and regulatory tracker",
            "Technical options paper on charging/refuelling architectures",
            "Site scoring tool and pilot city heatmap",
            "Unit economics model and station-level demand scenarios",
            "GTM and partnership strategy deck"
        ]
    },
];

export default function ClientelePage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="container max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase mb-3 block">Our Partners</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0a1b2b] mb-6">
                            Trusted by <span className="text-[#FFD700]">Industry Leaders</span>
                        </h1>
                        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
                            We collaborate with forward-thinking organizations to build the future.
                        </p>
                    </div>

                    {/* Clients Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {companies.map((client, index) => (
                            <div
                                key={index}
                                className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 h-64 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#FFD700]/30 hover:-translate-y-1"
                            >
                                {/* Default State: Logo */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-12 group-hover:opacity-20">
                                    {/* Using img tag for SVG support/simplicity as copied from source, or Next Image if preferred. keeping simple consistent with source */}
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className={`transition-transform duration-300 object-contain 
                                            ${(client.name === "Infosys" || client.name === "Puma")
                                                ? "h-14 w-auto" // Constrain tall/blocky logos
                                                : (client.name === "Bajaj" || client.name === "Unstop")
                                                    ? "w-3/5 h-auto max-h-24" // Reduced width for wide logos
                                                    : "max-h-20 w-auto" // Default for others
                                            }
                                        `}
                                    />
                                </div>

                                {/* Hover State: Details */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 bg-white/90 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-[#0a1b2b] mb-4">{client.name}</h3>
                                    <ul className="space-y-2 w-full">
                                        {client.pointers.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-1.5 shrink-0" />
                                                <span className="leading-tight">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
