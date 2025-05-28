import HeroSection from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </>
  );
}
