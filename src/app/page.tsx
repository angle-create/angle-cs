import HeroSection from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PartnershipSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}
