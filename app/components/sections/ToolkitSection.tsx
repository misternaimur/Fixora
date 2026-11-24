import Link from "next/link";
import {
  Briefcase,
  GitBranch,
  Wallet,
  Boxes,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const toolkitItems = [
  {
    number: "01",
    title: "Project management",
    description:
      "Plan, organize and monitor every project from one clear, shared view.",
    href: "#project-management",
    icon: Briefcase,
  },
  {
    number: "02",
    title: "Tasks & workflows",
    description:
      "Assign ownership, keep deadlines visible and move work forward.",
    href: "#tasks-workflows",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Budgets & expenses",
    description:
      "See committed costs, logged expenses and remaining budget at a glance.",
    href: "#budgets-expenses",
    icon: Wallet,
  },
  {
    number: "04",
    title: "Materials & inventory",
    description:
      "Keep stock levels, requests and material usage organized across sites.",
    href: "#materials-inventory",
    icon: Boxes,
  },
  {
    number: "05",
    title: "Contractor management",
    description:
      "Coordinate contractor assignments, responsibilities and site work.",
    href: "#contractor-management",
    icon: Users,
  },
  {
    number: "06",
    title: "Progress & analytics",
    description:
      "Track milestones, daily progress and project performance as it happens.",
    href: "#progress-analytics",
    icon: BarChart3,
  },
];

export default function ToolkitSection() {
  return (
    <section
      id="toolkit"
      className="w-full bg-[#141414] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e86a17] uppercase">
              The Fixora Toolkit
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl leading-[1.06] font-black tracking-tight text-white uppercase sm:text-4xl lg:text-[46px]">
              Powerful tools for every
              <span className="block">stage of construction.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-relaxed text-neutral-400 sm:text-sm">
            From project planning to final delivery, manage the essential work
            in one connected place.
          </p>
        </div>

        {/* 6-Card Grid (3 Columns on Desktop) */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolkitItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group flex min-h-[235px] flex-col justify-between rounded-xl border border-white/[0.08] bg-[#1c1c1c] p-6 transition-all duration-200 hover:border-white/[0.16] hover:bg-[#202020]"
              >
                <div>
                  {/* Top Row: Icon Box + Number */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e86a17]/25 bg-[#e86a17]/12 text-[#e86a17]">
                      <Icon className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                    <span className="font-mono text-xs font-medium tracking-wider text-neutral-500">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-7 text-sm font-extrabold tracking-[0.04em] text-white uppercase sm:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-neutral-400 sm:text-[13px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-7">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] text-neutral-200 uppercase transition-colors hover:text-[#e86a17]"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}