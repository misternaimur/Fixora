import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full bg-[#efece6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Orange CTA Banner Container */}
        <div className="relative overflow-hidden rounded-lg bg-[#ef682e] px-6 py-12 text-[#141414] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative Overlapping Geometric Rings on Right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-[14%] h-[340px] w-[340px] rounded-full border border-[#141414]/[0.12]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-44 right-[2%] h-[440px] w-[440px] rounded-full border border-[#141414]/[0.10]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 right-[16%] h-[340px] w-[340px] rounded-full border border-[#141414]/[0.12]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-44 -right-12 h-[380px] w-[380px] rounded-full border border-[#141414]/[0.10]"
          />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#141414]/80 uppercase sm:text-[11px]">
                A better way to build starts here
              </p>

              <h2 className="mt-4 text-3xl leading-[1.04] font-black tracking-tight text-[#141414] uppercase sm:text-4xl lg:text-[46px]">
                Take control of every
                <span className="block">construction project.</span>
              </h2>

              <p className="mt-4 max-w-lg text-xs leading-relaxed font-medium text-[#141414]/80 sm:text-sm">
                Bring your projects, people and resources together. Build with
                better planning, visibility and control.
              </p>

              {/* CTA Button & Sign-in Link */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "group h-12 rounded-md bg-[#141414] px-7 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#222222]"
                  )}
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/login"
                  className="group inline-flex items-center gap-1 text-xs font-semibold text-[#141414]/90 transition-colors hover:text-[#141414] sm:text-[13px]"
                >
                  <span>Already have an account? Sign in</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Framed Hardhat Emblem Box */}
            <div className="flex shrink-0 items-center justify-start lg:justify-end lg:pr-8">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-md border border-[#141414]/20 bg-[#ef682e]/40 px-4 text-center backdrop-blur-[1px] sm:h-40 sm:w-40">
                {/* Hardhat Outline Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-[#141414]"
                  aria-hidden="true"
                >
                  <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                  <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                  <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                  <path d="M14 6h0a6 6 0 0 1 6 6v3" />
                </svg>

                <p className="mt-3 text-[9px] leading-[1.45] font-bold tracking-[0.18em] text-[#141414]/85 uppercase">
                  Built around
                  <span className="block">your work</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}