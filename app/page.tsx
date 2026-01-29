import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { MentorBoard } from "@/components/MentorBoard";
import { Models } from "@/components/Models";
import { Problems } from "@/components/Problems";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Models />
        <MentorBoard />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
