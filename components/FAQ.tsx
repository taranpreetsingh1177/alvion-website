"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, Mail } from "lucide-react";

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
        <section id="faq" className="py-24 bg-[#F4EEE5]">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: FAQ List */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl font-bold text-slate-800 mb-12 tracking-tight font-serif">
                            FAQs
                        </h2>

                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <div key={index} className="border-b border-black/10 last:border-0">
                                    <button
                                        className="cursor-pointer w-full py-6 flex items-center justify-between text-left group"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-lg font-medium text-slate-800 group-hover:text-slate-600 transition-colors pr-8">
                                            {item.question}
                                        </span>
                                        <div className="flex-shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors">
                                            {openIndex === index ? (
                                                <Minus className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5" />
                                            )}
                                        </div>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            openIndex === index ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-slate-600 leading-relaxed max-w-2xl">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact / Connect */}
                    <div className="lg:col-span-5 pt-8 lg:pt-0">
                        <div className="sticky top-24">
                            {/* Illustration area */}
                            <div className="mb-8 relative w-48 h-48 mx-auto lg:mx-0">
                                {/* Abstract graphics using CSS/SVG since we don't have the image */}
                                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transform -rotate-6">
                                        <MessageCircle className="w-12 h-12 text-blue-500" />
                                    </div>
                                    <div className="absolute -right-4 -bottom-2 w-24 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transform rotate-12 z-0">
                                        <Mail className="w-8 h-8 text-red-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 mb-6 text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-slate-800 font-serif">
                                    Want to learn more?
                                </h3>
                                <h3 className="text-2xl font-bold text-slate-800 font-serif">
                                    Connect with us now!
                                </h3>
                            </div>

                            <p className="text-slate-500 mb-8 text-sm text-center lg:text-left">
                                Responses within 45 minutes. 7 days a week <br className="hidden lg:block"/>(10 am to 7 pm)
                            </p>

                            <div className="flex gap-4">
                                <a 
                                    href="https://wa.me/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-lg py-3 px-4 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all text-slate-700 font-medium text-sm group shadow-sm cursor-pointer"
                                >
                                    <span>WhatsApp Us</span>
                                    <MessageCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                                </a>
                                <a 
                                    href="mailto:contact@alvion.com"
                                    className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-lg py-3 px-4 hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all text-slate-700 font-medium text-sm group shadow-sm cursor-pointer"
                                >
                                    <span>Email us</span>
                                    <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
