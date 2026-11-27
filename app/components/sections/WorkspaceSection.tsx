import { Check } from "lucide-react";
import { WorkspacePreview } from "@/app/components/shared/workspace-preview";

const checklistItems = [
  "Project clarity from day one",
  "Clearer control over site budgets",
  "Material tracking across locations",
  "Updates your whole team can act on",
] as const;

export default function WorkspaceSection() {
  return (
    <section
      id="workspace"
      className="w-full bg-[#efece6] py-20 text-[#141414] sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left Column: Copy & Checkmarks */}
        <div className="flex flex-col items-start text-left lg:col-span-5">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B8470A] uppercase">
            One source of truth
          </p>

          <h2 className="mt-4 text-3xl leading-[1.04] font-black tracking-tight uppercase sm:text-4xl xl:text-[48px]">
            <span className="block text-[#111111]">Your entire</span>
            <span className="block text-[#111111]">construction</span>
            <span className="block">
              <span className="text-[#111111]">operation. </span>
              <span className="text-[#B8470A]">One</span>
            </span>
            <span className="block text-[#B8470A]">workspace.</span>
          </h2>

          <p className="mt-5 max-w-md text-xs leading-relaxed text-[#6e6a63] sm:text-sm">
            Get a clear picture of what&apos;s happening across your construction
            sites without switching between multiple tools.
          </p>

          <ul className="mt-7 space-y-3">
            {checklistItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-xs font-medium text-[#55524c] sm:text-[13px]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#B8470A]/30 bg-[#f6e3dc] text-[#B8470A]">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Framed Browser Dashboard Mockup */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[#e2ddd3] bg-[#e6e1d7]/80 p-3.5 sm:p-6">
            <WorkspacePreview className="shadow-[0_18px_45px_rgba(20,20,20,0.08)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
