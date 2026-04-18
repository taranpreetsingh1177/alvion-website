import { notFound } from "next/navigation";
import { Button } from "@/components/abstract/Button";

// This page is only accessible in development mode.
// In production it returns a 404.
export default function DesignSystemPage() {
    if (process.env.NODE_ENV !== "development") notFound();

    return (
        <main className="min-h-screen bg-background px-8 py-12 space-y-16">
            <header>
                <h1 className="text-3xl font-bold text-foreground">
                    Design System
                </h1>
                <p className="mt-1 text-muted-foreground">
                    Dev-only — not rendered in production.
                </p>
            </header>

            {/* ── COLOUR PALETTE ───────────────────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                    Colour Tokens
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {colours.map(({ name, bg, text, label }) => (
                        <div
                            key={name}
                            className="rounded-(--radius) overflow-hidden border border-border"
                        >
                            <div
                                className="h-16"
                                style={{ background: bg }}
                            />
                            <div className="px-3 py-2 bg-surface">
                                <p className="text-xs font-mono font-semibold text-foreground">
                                    {name}
                                </p>
                                {label && (
                                    <p className="text-xs text-muted-foreground">
                                        {label}
                                    </p>
                                )}
                                <p className="text-xs text-muted-foreground font-mono">
                                    {bg}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── COLOUR COMBINATION SWATCHES ──────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                    Colour Combinations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {combinations.map(({ label, bg, text, border }) => (
                        <div
                            key={label}
                            className="rounded-(--radius) p-5 flex items-center justify-between"
                            style={{
                                background: bg,
                                color: text,
                                border: border ? `1px solid ${border}` : undefined,
                            }}
                        >
                            <span className="font-semibold text-sm">{label}</span>
                            <span className="text-xs opacity-70 font-mono">Aa</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── BUTTONS ──────────────────────────────────────────────── */}
            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground">
                    Buttons — Variants × Sizes
                </h2>

                {/* On white / default background */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Default Background
                    </h3>
                    <div className="p-6 rounded-(--radius) border border-border bg-background space-y-4">
                        {buttonRows}
                    </div>
                </div>

                {/* On surface background */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Surface Background
                    </h3>
                    <div className="p-6 rounded-(--radius) bg-surface space-y-4">
                        {buttonRows}
                    </div>
                </div>

                {/* On primary (navy) background */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Navy Background
                    </h3>
                    <div className="p-6 rounded-(--radius) bg-primary space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <Button variant="primary" size="md" className="bg-white text-primary hover:bg-accent">Navy inverse</Button>
                            <Button variant="outline" size="md" className="border-white text-white hover:bg-white/10">Outline</Button>
                            <Button variant="ghost" size="md" className="text-white hover:bg-white/10">Ghost</Button>
                            <Button variant="secondary" size="md">Black</Button>
                        </div>
                    </div>
                </div>

                {/* On black background */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Black Background
                    </h3>
                    <div className="p-6 rounded-(--radius) bg-secondary space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <Button variant="primary" size="md">Navy</Button>
                            <Button variant="secondary" size="md" className="bg-white text-secondary hover:bg-accent">White inverse</Button>
                            <Button variant="outline" size="md" className="border-white text-white hover:bg-white/10">Outline</Button>
                            <Button variant="ghost" size="md" className="text-white hover:bg-white/10">Ghost</Button>
                        </div>
                    </div>
                </div>

                {/* Disabled state */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Disabled State
                    </h3>
                    <div className="p-6 rounded-(--radius) border border-border bg-background flex flex-wrap gap-3">
                        <Button variant="primary" disabled>Primary</Button>
                        <Button variant="outline" disabled>Outline</Button>
                        <Button variant="ghost" disabled>Ghost</Button>
                    </div>
                </div>
            </section>

            {/* ── TYPOGRAPHY SCALE ─────────────────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                    Typography
                </h2>
                <div className="space-y-2">
                    {[
                        { cls: "text-4xl font-bold",    label: "text-4xl bold — Heading 1" },
                        { cls: "text-3xl font-bold",    label: "text-3xl bold — Heading 2" },
                        { cls: "text-2xl font-semibold",label: "text-2xl semibold — Heading 3" },
                        { cls: "text-xl font-semibold", label: "text-xl semibold — Heading 4" },
                        { cls: "text-base",             label: "text-base — Body" },
                        { cls: "text-sm",               label: "text-sm — Small body" },
                        { cls: "text-xs text-muted-foreground", label: "text-xs muted — Caption" },
                    ].map(({ cls, label }) => (
                        <p key={label} className={cls}>
                            {label}
                        </p>
                    ))}
                </div>
            </section>

            {/* ── RADIUS ───────────────────────────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                    Radius
                </h2>
                <div className="flex flex-wrap gap-4">
                    {[
                        { label: "--radius (custom)", cls: "rounded-(--radius)" },
                        { label: "rounded-sm",        cls: "rounded-sm" },
                        { label: "rounded-md",        cls: "rounded-md" },
                        { label: "rounded-lg",        cls: "rounded-lg" },
                        { label: "rounded-xl",        cls: "rounded-xl" },
                        { label: "rounded-full",      cls: "rounded-full" },
                    ].map(({ label, cls }) => (
                        <div
                            key={label}
                            className={`w-20 h-20 bg-primary flex items-center justify-center ${cls}`}
                        >
                            <span className="text-[10px] text-white text-center font-mono leading-tight px-1">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const colours = [
    { name: "--background",           bg: "hsl(38 40% 92%)",     text: "#121212", label: "Cream — page background" },
    { name: "--foreground",           bg: "hsl(0 0% 7%)",         text: "#fff",    label: "#121212 — body text" },
    { name: "--surface",              bg: "hsl(38 35% 87%)",      text: "#121212", label: "Card / surface" },
    { name: "--surface-hover",        bg: "hsl(38 30% 82%)",      text: "#121212", label: "Surface hover" },
    { name: "--primary",              bg: "hsl(220 65% 27%)",     text: "#fff",    label: "Navy — primary brand" },
    { name: "--primary-hover",        bg: "hsl(220 65% 33%)",     text: "#fff",    label: "Navy hover" },
    { name: "--primary-foreground",   bg: "hsl(0 0% 100%)",       text: "#121212", label: "White on navy" },
    { name: "--secondary",            bg: "hsl(0 0% 7%)",         text: "#fff",    label: "Black — secondary brand" },
    { name: "--secondary-hover",      bg: "hsl(0 0% 13%)",        text: "#fff",    label: "Black hover" },
    { name: "--secondary-foreground", bg: "hsl(0 0% 100%)",       text: "#121212", label: "White on black" },
    { name: "--accent",               bg: "hsl(220 55% 95%)",     text: "#121212", label: "Light navy tint" },
    { name: "--accent-hover",         bg: "hsl(220 55% 89%)",     text: "#121212", label: "Accent hover" },
    { name: "--accent-foreground",    bg: "hsl(220 65% 27%)",     text: "#fff",    label: "Navy on accent bg" },
    { name: "--muted",                bg: "hsl(220 20% 96%)",     text: "#121212", label: "Muted bg" },
    { name: "--muted-foreground",     bg: "hsl(220 10% 46%)",     text: "#fff",    label: "Muted text" },
    { name: "--destructive",          bg: "hsl(0 72% 51%)",       text: "#fff",    label: "Error / danger" },
    { name: "--success",              bg: "hsl(142 71% 45%)",     text: "#fff",    label: "Success" },
    { name: "--border",               bg: "hsl(220 20% 88%)",     text: "#121212", label: "Borders" },
];

const combinations = [
    // Cream background
    { label: "Black text on Cream",           bg: "hsl(38 40% 92%)",     text: "hsl(0 0% 7%)",        border: "hsl(220 20% 88%)" },
    { label: "Navy text on Cream",            bg: "hsl(38 40% 92%)",     text: "hsl(220 65% 27%)",    border: "hsl(220 20% 88%)" },
    { label: "Muted text on Cream",           bg: "hsl(38 40% 92%)",     text: "hsl(220 10% 46%)",    border: "hsl(220 20% 88%)" },
    // Surface (warm cream card) background
    { label: "Black text on Surface",         bg: "hsl(38 35% 87%)",     text: "hsl(0 0% 7%)",        border: undefined },
    { label: "Navy text on Surface",          bg: "hsl(38 35% 87%)",     text: "hsl(220 65% 27%)",    border: undefined },
    { label: "Muted text on Surface",         bg: "hsl(38 35% 87%)",     text: "hsl(220 10% 46%)",    border: undefined },
    // Navy background
    { label: "White text on Navy",            bg: "hsl(220 65% 27%)",    text: "hsl(0 0% 100%)",      border: undefined },
    { label: "Light accent on Navy",          bg: "hsl(220 65% 27%)",    text: "hsl(220 55% 95%)",    border: undefined },
    // Black background
    { label: "White text on Black",           bg: "hsl(0 0% 7%)",        text: "hsl(0 0% 100%)",      border: undefined },
    { label: "Navy text on Black",            bg: "hsl(0 0% 7%)",        text: "hsl(220 65% 33%)",    border: undefined },
    // Accent (light blue)
    { label: "Navy text on Accent",           bg: "hsl(220 55% 95%)",    text: "hsl(220 65% 27%)",    border: undefined },
    { label: "Black text on Accent",          bg: "hsl(220 55% 95%)",    text: "hsl(0 0% 7%)",        border: undefined },
];

const buttonRows = (
    <>
        <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm">Navy sm</Button>
            <Button variant="primary" size="md">Navy md</Button>
            <Button variant="primary" size="lg">Navy lg</Button>
            <Button variant="primary" size="xl">Navy xl</Button>
        </div>
        <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="sm">Black sm</Button>
            <Button variant="secondary" size="md">Black md</Button>
            <Button variant="secondary" size="lg">Black lg</Button>
            <Button variant="secondary" size="xl">Black xl</Button>
        </div>
        <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">Outline sm</Button>
            <Button variant="outline" size="md">Outline md</Button>
            <Button variant="outline" size="lg">Outline lg</Button>
            <Button variant="outline" size="xl">Outline xl</Button>
        </div>
        <div className="flex flex-wrap gap-3">
            <Button variant="ghost" size="sm">Ghost sm</Button>
            <Button variant="ghost" size="md">Ghost md</Button>
            <Button variant="ghost" size="lg">Ghost lg</Button>
            <Button variant="ghost" size="xl">Ghost xl</Button>
        </div>
    </>
);
