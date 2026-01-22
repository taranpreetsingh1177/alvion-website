"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-16 px-6">
            <div className="container max-w-6xl mx-auto">
                <div className="bg-[#1A1A1A] rounded-[3rem] px-12 py-16 md:py-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Ready to transform
                        <br />
                        your <span className="text-white/40 italic">business</span> motion?
                    </h2>

                    <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto">
                        Join 500+ teams scaling their revenue with data-driven workflows and strategic consulting excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group relative px-8 py-4 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] active:scale-95">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                            <span className="relative z-10">Get started for free</span>
                        </button>

                        <button className="group flex items-center gap-2 px-8 py-4 text-white/60 text-sm font-semibold hover:text-white transition-colors">
                            <span>Talk to our specialists</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
