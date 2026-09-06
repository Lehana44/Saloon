// app/page.tsx

import { Hero } from "@/app/components/hero"
import { FeatureStrip } from "@/app/components/features";
import { AboutSection } from "@/app/components/AboutSection";
import { ServicesSection } from "@/app/components/ServicesSection";
import { BookingSection } from "@/app/components/BookingSection";
import { Footer } from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#202020]">
      <Hero />
      <FeatureStrip />
      <AboutSection />
      <ServicesSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
