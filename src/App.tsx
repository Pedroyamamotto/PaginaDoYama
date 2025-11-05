import { HeroSection } from "./components/HeroSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { VisionSection } from "./components/VisionSection";
import { ChatSection } from "./components/ChatSection";
import { AutomationSection } from "./components/AutomationSection";
import { SecuritySection } from "./components/SecuritySection";
import { ResultsSection } from "./components/ResultsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <ArchitectureSection />
      <VisionSection />
      <ChatSection />
      <AutomationSection />
      <SecuritySection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
