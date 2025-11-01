import { Routes, Route } from 'react-router-dom';
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
import { ThankYou } from "./pages/ThankYou";

function HomePage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}