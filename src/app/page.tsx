import HeroSection from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
