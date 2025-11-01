import { Hero } from "./components/Hero";
import { ToolsSection } from "./components/ToolsSection";
import { EligibilityChecklist } from "./components/EligibilityChecklist";
import { Testimonials } from "./components/Testimonials";
import { WhyJoin } from "./components/WhyJoin";
import { SDIModel } from "./components/SDIModel";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { MeetMentor } from "./components/MeetMentor";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyBottomBar } from "./components/StickyBottomBar";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ToolsSection />
      <EligibilityChecklist />
      <Testimonials />
      <WhyJoin />
      <SDIModel />
      <WhoThisIsFor />
      <MeetMentor />
      <FAQ />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}