// app/about/page.tsx

import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#202020] pt-20">
      <AboutSection />
      <Footer />
    </main>
  );
}
