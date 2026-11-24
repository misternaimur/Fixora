import { Header } from "./components/shared/header";
import { Footer } from "./components/shared/Footer";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans">
      <Header />
      <main className="flex-1" />
      <HeroSection></HeroSection>
      <Footer />
    </div>
  );
};