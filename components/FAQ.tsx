"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "How do I start working with Alvion?",
        answer: "It's simple—book a 30-minute discovery call where we'll understand your challenge, goals, and constraints. If there's a fit, we'll send a detailed proposal within 48 hours with scope, timeline, and pricing. Once you approve, we kick off immediately.\n\nNo pitch, no pressure—just an honest conversation about whether we can help."
    },
    {
        question: "What's your typical project timeline?",
        answer: "Most projects are completed in 4-8 weeks, depending on scope. Here are some benchmarks:\n\n- Market research projects: 4-6 weeks\n- GTM strategy: 4-6 weeks\n- Market entry playbooks: 6-8 weeks\n- AI enablement projects: 4-10 weeks\n\nWe're 3x faster than traditional consulting firms without compromising quality."
    },
    {
        question: "How do you ensure quality and consistency?",
        answer: "Quality is built into our process, not dependent on individuals:\n\n✓ Structured consulting frameworks and templates for every project type\n✓ Senior mentor oversight—every deliverable is reviewed by domain experts with 10-15 years of experience\n✓ Weekly milestone reviews and quality checkpoints\n✓ No raw work goes to clients—everything is validated and polished\n\nResult: Consistent, high-quality output regardless of team composition."
    },
    {
        question: "Is our business data secure when working with your team?",
        answer: "Absolutely. We treat confidentiality as non-negotiable:\n\n✓ NDAs signed for all engagements (standard practice)\n✓ Restricted data access—only assigned team members see your information\n✓ No local storage—centralized, secure document control\n✓ Sensitive work handled by senior members with proven track records\n\nYour data is used solely for project execution and never shared externally."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We focus on three core sectors where we have proven expertise:\n\n1. Consumer Tech & Brands (PUMA, Unstop)\n2. EdTech & Education (Master's Union, UpGrad)\n3. SaaS & B2B Tech (ShipTurtle, ManipalCigna)\n\nThat said, our methodologies work across industries. If your challenge involves market research, GTM strategy, or market entry, we can likely help—regardless of sector."
    },
    {
        question: "Why not just use AI for research instead of hiring you?",
        answer: "AI is a powerful tool, but it can't:\n\n✓ Define the right problem or align stakeholders\n✓ Conduct primary research (surveys, FGDs, stakeholder interviews)\n✓ Provide contextual judgment and strategic recommendations\n✓ Drive execution and implementation\n\nWe use AI to accelerate analysis and data processing—but combine it with human strategic thinking, primary research, and execution expertise. AI gives answers; we help you make decisions."
    },
    {
        question: "Can you help with AI implementation for our business?",
        answer: "Yes. Through our AI Enablement & Automation service, we help companies:\n\n✓ Identify high-impact automation opportunities\n✓ Select and deploy AI tools tailored to your workflows\n✓ Integrate AI with existing systems (CRM, support, operations)\n✓ Train teams and manage change\n\nWe recently helped a Fortune 500 client deploy AI-powered CRM automation, reducing manual workload by 60% and improving response times significantly."
    },
    {
        question: "What makes Alvion different from other consulting firms?",
        answer: "Three things set us apart:\n\n1. Consulting-grade quality at growth-stage pricing\n\n2. Speed without compromise\n(4-8 weeks vs 6-12 months for traditional consulting)\n\n3. Execution focus, not just slides\n(Primary research, validated partnerships, implementation-ready strategies)"
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 bg-white">
            <div className="container max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-black mb-12 tracking-tight">
                    Questions & Answers
                </h2>

                <div className="border-t border-black/10">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-black/10">
                            <button
                                className="cursor-pointer w-full py-6 flex items-center justify-between text-left group"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-medium text-black group-hover:text-black/70 transition-colors">
                                    {item.question}
                                </span>
                                <div className="ml-4 flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-black" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-black" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-black/60 leading-relaxed max-w-3xl whitespace-pre-line">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
