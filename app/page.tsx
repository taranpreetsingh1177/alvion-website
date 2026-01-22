import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Clientele } from "@/components/Clientele";
import { MentorBoard } from "@/components/MentorBoard";
import { Contact } from "@/components/Contact";
import { Insights } from "@/components/Insights";
import { Problems } from "@/components/Problems";
import { FAQ } from "@/components/FAQ";

import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clientele />
        <Stats />
        <Problems />
        <Services />
        <Insights />
        <MentorBoard />

        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
