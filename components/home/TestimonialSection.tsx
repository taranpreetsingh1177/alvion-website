"use client";

import Image from "next/image";

const testimonial = {
    quote:
        "Alvion didn't just give us a strategy deck — they rolled up their sleeves and helped us execute. The clarity they brought to our go-to-market changed everything.",
    name: "Harsh Vardhan",
    role: "Co-founder at DU Buddy",
    photo: "/Photos/harsh.png",
    logo: "/logos/du-buddy.png",
    logoAlt: "DU Buddy",
};

export function TestimonialSection() {
    return (
        <section className="flex items-center justify-center bg-secondary px-6 py-20">
            <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* ── Left: Quote ────────────────────────────────── */}
                    <div className="flex flex-col justify-between gap-10 p-10 md:p-12">
                        <p className="text-xl font-medium leading-relaxed text-gray-900">
                            &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-primary">
                                    {testimonial.name}
                                </p>
                                <p className="mt-0.5 text-sm text-gray-500">
                                    {testimonial.role}
                                </p>
                            </div>

                            <div className="shrink-0">
                                <Image
                                    src={testimonial.logo}
                                    alt={testimonial.logoAlt}
                                    width={96}
                                    height={32}
                                    className="h-8 w-auto object-contain opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Photo with abstract blob bg ─────────── */}
                    <div className="relative flex items-center justify-center overflow-hidden bg-gray-100 min-h-80">
                        {/* Abstract colour blobs */}
                        <div className="pointer-events-none absolute inset-0" aria-hidden>
                            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-400/60 blur-3xl" />
                            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-teal-300/50 blur-3xl" />
                            <div className="absolute left-1/3 top-1/2 h-32 w-32 rounded-full bg-green-300/40 blur-2xl" />
                        </div>

                        {/* Person photo */}
                        <div className="relative z-10 m-8 overflow-hidden rounded-xl shadow-xl">
                            <Image
                                src={testimonial.photo}
                                alt={testimonial.name}
                                width={260}
                                height={300}
                                className="block h-65 w-55 object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
