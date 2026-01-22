"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Briefcase, Users, TrendingUp, Heart } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-4">
                            Join Our Team
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                            Build Your Career at <span className="text-blue-600">Alvion</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Join a team of passionate professionals dedicated to transforming businesses through innovative solutions and strategic consulting.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6">
                <div className="container max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                        Why Work With Us
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Briefcase className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Growth Opportunities</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Continuous learning and development programs to help you reach your full potential.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Culture</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Work with talented professionals in a supportive and inclusive environment.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Impactful Work</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Make a real difference by working on projects that transform businesses.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Work-Life Balance</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Flexible work arrangements and a culture that values your well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Join Us?
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                        We're always looking for talented individuals to join our growing team.
                    </p>
                    {/* TODO: Replace the href below with your actual Google Forms application URL */}
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        Contact Us to Apply
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="mt-8 text-blue-100 text-sm">
                        Currently, please use our contact form to express your interest. We'll get back to you shortly!
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Have Questions?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Reach out to our HR team for any career-related inquiries.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
