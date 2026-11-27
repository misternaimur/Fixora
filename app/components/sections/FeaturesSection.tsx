import { Layers, Wallet, Users, BarChart3 } from "lucide-react";
import { cn } from "@/app/lib/utils";

const features = [
  {
    title: "Complete project visibility",
    description:
      "See every site, milestone and moving part in one place.",
    icon: Layers,
    iconBoxClass: "bg-[#f6e3dc] text-[#d86a42]",
  },
  {
    title: "Smarter budget management",
    description:
      "Know where costs stand before they become surprises.",
    icon: Wallet,
    iconBoxClass: "bg-[#dfe8e0] text-[#5e7d63]",
  },
  {
    title: "Organized team collaboration",
    description:
      "Keep teams, contractors and responsibilities aligned.",
    icon: Users,
    iconBoxClass: "bg-[#dde4ea] text-[#5b7387]",
  },
  {
    title: "Data-driven decisions",
    description:
      "Turn daily project activity into a clearer next step.",
    icon: BarChart3,
    iconBoxClass: "bg-[#ebe3d3] text-[#9c7a44]",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full bg-[#efece6] py-20 text-[#141414] sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B8470A] uppercase">
            Clarity at every level
          </p>

          <h2 className="mt-3 text-3xl leading-[1.08] font-black tracking-tight text-[#111111] uppercase sm:text-4xl lg:text-[46px]">
            Everything your construction
            <span className="block">business needs.</span>
          </h2>

          <p className="mt-4 text-sm text-[#6e6a63] sm:text-[15px]">
            One platform. Complete visibility. Better construction management.
          </p>
        </div>

        {/* 4-Column Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex min-h-[210px] flex-col justify-start rounded-xl border border-[#e3dfd7] bg-[#f7f5f0] p-6 text-left shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#d5cfc4]"
              >
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg",
                    feature.iconBoxClass
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.9} />
                </div>

                <h3 className="mt-6 text-xs font-extrabold tracking-[0.04em] text-[#141414] uppercase sm:text-[13px]">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-[#6e6a63] sm:text-[13px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}