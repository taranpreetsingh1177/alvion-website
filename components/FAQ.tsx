"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "How do I start working with your consulting firm?",
        answer: "Getting started is easy. Simply click on 'Talk to us' or 'Get started for free' to schedule an initial consultation where we'll discuss your specific goals and how our strategies can help you scale."
    },
    {
        question: "Does your strategy work for small startups as well as large enterprises?",
        answer: "Absolutely. Our core philosophy is 'Start from small' - we build strong foundations that are designed to scale. We have tailored frameworks for early-stage startups as well as Fortune 500 companies."
    },
    {
        question: "Can you help with team expansion and talent recruitment?",
        answer: "Yes, our Team & Talent Optimization service focuses on building high-performing teams. This includes everything from defining roles and recruiting to training and organizational development."
    },
    {
        question: "How fast can we expect to see results from the consulting?",
        answer: "While long-term growth takes time, our data-driven approach often identifies 'quick wins' within the first 30-60 days. We focus on measurable outcomes at every stage of the process."
    },
    {
        question: "Is our business data secure when working with your team?",
        answer: "We take data security and confidentiality extremely seriously. We sign NDAs with all our clients and use enterprise-grade tools to ensure your business intelligence and strategy remain your competitive advantage."
    },
    {
        question: "Why choose your consulting over other traditional firms?",
        answer: "We combine deep industry expertise with a modern, agile approach. Unlike traditional firms that provide thick reports, we focus on actionable insights and implementation-driven strategies."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We have broad experience across SaaS, fintech, e-commerce, and digital services. Our strategic frameworks are cross-functional and can be adapted to most modern, tech-enabled industries."
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
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-black/60 leading-relaxed max-w-3xl">
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
