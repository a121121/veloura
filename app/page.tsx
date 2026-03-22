import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Herosection";
import { UrgencyBanner } from "@/components/Urgencybanner";
import { ProblemSolutionSection } from "@/components/Problemsolutionsection";
import { BenefitsSection } from "@/components/Benefitssection";
import { ProductShowcase } from "@/components/Productshowcase";
import { RitualSection } from "@/components/Ritualsection";
import { BeforeAfterSection } from "@/components/Beforeaftersection";
import { TestimonialsSection } from "@/components/Testimonialsection";
import { FAQSection } from "@/components/Faqsection";
import { FinalCTASection } from "@/components/Finalctasection";
import { Footer } from "@/components/Footer";
import { MobileBottomCTA } from "@/components/Mobilebottomcta";

export default function Home() {
  return (
    <div className="bg-[#faf9f6] text-[#1a1c1a] selection:bg-[#d9e8c5] selection:text-[#3e4b31]">
      <Navbar />
      <main className="pt-0">
        <HeroSection />
        <UrgencyBanner />
        <ProblemSolutionSection />
        <BenefitsSection />
        <ProductShowcase />
        <RitualSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}