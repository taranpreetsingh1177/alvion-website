"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollSweepText } from "./SweepText";

const logosRow1 = [
    { src: "/logos/bajaj.png",              alt: "Bajaj",            slug: "bajaj"            },
    { src: "/logos/puma.svg",               alt: "Puma",             slug: "puma"             },
    { src: "/logos/infosys.svg",            alt: "Infosys",          slug: "infosys"          },
    { src: "/logos/unstop.svg",             alt: "Unstop",           slug: "unstop"           },
    { src: "/logos/sunfuel-electric.svg",   alt: "Sunfuel Electric", slug: "sunfuel-electric" },
    { src: "/logos/IAN.png",                alt: "IAN",              slug: "ian"              },
];

const logosRow2 = [
    { src: "/logos/masters union.png",    alt: "Masters Union",  slug: "masters-union"  },
    { src: "/logos/manipalCigna.png",     alt: "Manipal Cigna",  slug: "manipal-cigna"  },
    { src: "/logos/ls-digital.png",       alt: "LS Digital",     slug: "ls-digital"     },
    { src: "/logos/du-buddy.png",         alt: "Du Buddy",       slug: "du-buddy"       },
    { src: "/logos/cool-the-globe.svg",   alt: "Cool the Globe", slug: "cool-the-globe" },
    { src: "/logos/ship-turtle.png",      alt: "Ship Turtle",    slug: "ship-turtle"    },
    { src: "/logos/alpha-grep.png",       alt: "Alpha Grep",     slug: "alpha-grep"     },
];

const maskStyle: React.CSSProperties = {
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
};

function LogoCard({ src, alt, slug }: { src: string; alt: string; slug: string }) {
    return (
        <Link
            href={`/clientele/${slug}`}
            className="group/card relative shrink-0 flex h-20 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:bg-white hover:border-white/0 hover:shadow-lg"
        >
            <div className="relative h-full w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain transition-all duration-300 grayscale invert opacity-50 group-hover/card:grayscale-0 group-hover/card:invert-0 group-hover/card:opacity-100"
                />
            </div>

            {/* Tooltip */}
            <div className="pointer-events-none absolute -top-9 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-xs font-medium text-secondary opacity-0 shadow-md transition-opacity duration-200 group-hover/card:opacity-100">
                Read case study
                {/* Arrow */}
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
            </div>
        </Link>
    );
}

export function ClientSection() {
    return (
        <section className="bg-secondary pt-16 pb-10">

            {/* Label */}
            <p className="mb-10 pl-6 font-serif text-2xl font-semibold text-white/80 md:pl-28 md:text-3xl">
                <ScrollSweepText text="Trusted by leading brands" />
            </p>

            {/* Row 1 — scrolls left */}
            <div
                className="relative mb-4 pl-6 md:pl-28 pt-10"
                style={{ ...maskStyle, overflowX: "clip", overflowY: "visible" }}
            >
                <div className="flex animate-marquee gap-4 pr-4">
                    {[...logosRow1, ...logosRow1].map((logo, i) => (
                        <LogoCard key={i} {...logo} />
                    ))}
                </div>
            </div>

            {/* Row 2 — scrolls left (offset speed via CSS) */}
            <div
                className="relative pl-6 md:pl-28 pt-10"
                style={{ ...maskStyle, overflowX: "clip", overflowY: "visible" }}
            >
                <div className="flex gap-4 pr-4" style={{ animation: "marquee 55s linear infinite" }}>
                    {[...logosRow2, ...logosRow2].map((logo, i) => (
                        <LogoCard key={i} {...logo} />
                    ))}
                </div>
            </div>

        </section>
    );
}
