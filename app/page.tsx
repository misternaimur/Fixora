
import Image from "next/image";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans">
      <Navbar />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
