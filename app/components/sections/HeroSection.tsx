import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CheckCircle2 } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";
import { WorkspacePreview } from "@/app/components/shared/workspace-preview";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-14 text-white sm:py-20 lg:py-24">
      {/* Subtle Concentric Rings & Ambient Glow on Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[8%] -z-0 hidden h-[680px] w-[680px] -translate-y-1/2 rounded-full border border-white/[0.04] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[13%] -z-0 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/[0.05] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#e86a17]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col items-start text-left lg:col-span-5">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#e86a17] uppercase">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#e86a17]/15 text-[#e86a17] ring-1 ring-[#e86a17]/30">
              {/* Hardhat Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                <path d="M14 6h0a6 6 0 0 1 6 6v3" />
              </svg>
            </span>
            <span>Construction Management, Simplified</span>
          </div>

          {/* Main 3-Line Display Headline */}
          <h1 className="mt-5 text-4xl leading-[1.03] font-black tracking-tight uppercase sm:text-5xl xl:text-[58px]">
            <span className="block text-white">Build Smarter.</span>
            <span className="block text-white">Manage Better.</span>
            <span className="block text-[#e86a17]">Deliver On Time.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-300 sm:text-[15px]">
            Take complete control of your construction operations with one
            intelligent platform. Manage projects, track budgets and keep every
            site moving forward.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group h-11 rounded-md px-6 text-xs font-bold tracking-wider uppercase shadow-md shadow-[#ef682e]/20"
              )}
            >
              <span>Get Started</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#features"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "group h-11 px-3 text-xs font-semibold tracking-wider text-neutral-200 uppercase hover:bg-white/5 hover:text-white"
              )}
            >
              <span>Explore Features</span>
              <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </Link>
          </div>

          {/* Bottom 3 Checkmark Highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-300">
            <div className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#e86a17]" />
              <span>Project management</span>
            </div>
            <span aria-hidden="true" className="text-neutral-600">
              ·
            </span>
            <div className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#e86a17]" />
              <span>Budget control</span>
            </div>
            <span aria-hidden="true" className="text-neutral-600">
              ·
            </span>
            <div className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#e86a17]" />
              <span>Real-time progress</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Construction Photo + Dashboard Mockup */}
        <div className="relative lg:col-span-7">
          {/* Background Construction Photo Card (Top-Right Offset) */}
          <div className="ml-auto w-[84%] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl sm:w-[78%]">
            <div className="relative h-44 w-full overflow-hidden sm:h-52">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Modern construction site with steel crane and commercial building"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 84vw, 45vw"
                className="object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Foreground Browser Mockup Window */}
          <WorkspacePreview className="relative -mt-28 mr-auto max-w-[610px] shadow-[0_25px_70px_rgba(0,0,0,0.65)] sm:-mt-32" />

          {/* Floating Notification Card (Bottom-Left of Dashboard) */}
          <div
            aria-hidden="true"
            className="relative z-20 -mt-6 ml-2 flex w-fit items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-neutral-900 shadow-xl sm:-mt-8 sm:ml-4"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            <div>
              <p className="text-[11px] font-bold text-neutral-900">
                North Creek Residences
              </p>
              <p className="text-[10px] text-neutral-500">
                Milestone completed
              </p>
            </div>
            <span className="ml-3 text-[9px] font-medium text-neutral-500">
              Today
            </span>
          </div>

          {/* Floating Tag Pill (Bottom-Right Corner) */}
          <div
            aria-hidden="true"
            className="mt-3 ml-auto flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-bold tracking-wider text-neutral-900 uppercase shadow-lg sm:-mt-5 sm:mr-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#e86a17]" />
            <span>Built for the people who build</span>
          </div>
        </div>
      </div>
    </section>
  );
}
