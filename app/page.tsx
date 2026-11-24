import { Header } from "./components/shared/header";
import { Footer } from "./components/shared/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ToolkitSection from "./components/sections/ToolkitSection";
import WorkspaceSection from "./components/sections/WorkspaceSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans">
      <Header />
      <main className="flex-1" />
      <HeroSection></HeroSection>
      <FeaturesSection/>
      <ToolkitSection/>
      <WorkspaceSection/>
      <HowItWorksSection/>
      <Footer />
    </div>
  );
};