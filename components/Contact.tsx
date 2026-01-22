"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Factory } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container max-w-6xl mx-auto px-6">

                <div className="bg-[#1A1A1A] rounded-[3rem] px-8 md:px-12 py-16 md:py-20 text-white">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white inline-block relative mb-4 pb-2">
                            Get in Touch
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-full w-16 mx-auto"></span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            Ready to transform your business? Let's start the conversation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Left Column: Contact Form */}
                        <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-slate-800 text-slate-800">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-bold text-[#0a1b2b] mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 transition-all font-medium"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-[#0a1b2b] mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 transition-all font-medium"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-[#0a1b2b] mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Enter your company name"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 transition-all font-medium"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-[#0a1b2b] mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 transition-all font-medium resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#0a1b2b] hover:shadow-lg transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Contact Information */}
                        <div className="pt-4 space-y-10">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-8">Contact Information</h3>

                                <div className="space-y-8">
                                    {/* Email */}
                                    <div className="flex items-start gap-4 group">
                                        <Mail className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1">Email Us</h4>
                                            <a href="mailto:office@alvion.in" className="block text-white/60 hover:text-white transition-colors text-sm font-medium">office@alvion.in</a>
                                            <a href="mailto:alvion.office@gmail.com" className="block text-white/60 hover:text-white transition-colors text-sm font-medium">alvion.office@gmail.com</a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 group">
                                        <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1">Call Us</h4>
                                            <a href="tel:+918949921676" className="text-white/60 hover:text-white transition-colors text-sm font-medium">+91 89499 21676</a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4 group">
                                        <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1">Visit Us</h4>
                                            <p className="text-white/60 text-sm font-medium">North Campus, Delhi, India, 110007</p>
                                        </div>
                                    </div>

                                    {/* Industry */}
                                    <div className="flex items-start gap-4 group">
                                        <Factory className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1">Industry</h4>
                                            <p className="text-white/60 text-sm font-medium">Business Consulting and Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
