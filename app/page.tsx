import { NarrativeSection } from "@/components/home/NarrativeSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <NarrativeSection />
            <TestimonialSection />
        </div>
    );
}

