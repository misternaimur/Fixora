import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  LayoutGrid,
  FolderKanban,
  ClipboardCheck,
  Package,
  BarChart3,
  Plus,
  Lock,
  CheckCircle2,
  Box,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

const sidebarItems = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Projects", icon: FolderKanban, active: false },
  { label: "Tasks", icon: ClipboardCheck, active: false },
  { label: "Materials", icon: Package, active: false },
  { label: "Reports", icon: BarChart3, active: false },
];

const activeProjects = [
  {
    code: "NC",
    name: "North Creek Residences",
    location: "Seattle, WA · Due Mar 2027",
    progress: "72%",
    barWidth: "w-[72%]",
    status: "On track",
    badgeClass:
      "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
  {
    code: "WH",
    name: "West Harbor Offices",
    location: "Portland, OR · Due Jun 2027",
    progress: "48%",
    barWidth: "w-[48%]",
    status: "In review",
    badgeClass: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  },
  {
    code: "MS",
    name: "Maple Street Project",
    location: "Denver, CO · Due Jan 2027",
    progress: "91%",
    barWidth: "w-[91%]",
    status: "On track",
    badgeClass:
      "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
];

const barHeights = [35, 52, 40, 68, 85, 58, 74, 48, 62, 78, 54, 88];

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
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-[15px]">
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
                "group h-11 rounded-md bg-[#e86a17] px-6 text-xs font-semibold tracking-wider text-white uppercase shadow-md shadow-[#e86a17]/20 transition-all hover:bg-[#d45e12]"
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
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
            <div className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#e86a17]" />
              <span>Project management</span>
            </div>
            <span className="text-neutral-600">·</span>
            <div className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#e86a17]" />
              <span>Budget control</span>
            </div>
            <span className="text-neutral-600">·</span>
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
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Modern construction site with steel crane and commercial building"
                className="h-full w-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Foreground Browser Mockup Window */}
          <div className="relative -mt-28 mr-auto w-full max-w-[610px] rounded-xl border border-neutral-200/90 bg-white text-neutral-900 shadow-[0_25px_70px_rgba(0,0,0,0.65)] sm:-mt-32">
            {/* Browser Top Chrome */}
            <div className="flex items-center justify-between border-b border-neutral-200/80 bg-neutral-50/90 px-4 py-2.5 rounded-t-xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <div className="flex items-center gap-1.5 rounded-md border border-neutral-200/90 bg-white px-3 py-1 text-[11px] font-medium text-neutral-500 shadow-2xs">
                <Lock className="h-3 w-3 text-neutral-400" />
                <span>app.fixora.com</span>
              </div>

              <div className="flex items-center gap-1 text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="grid grid-cols-12">
              {/* Left Sidebar */}
              <aside className="col-span-4 border-r border-neutral-200/70 bg-neutral-50/60 p-3 sm:col-span-3 sm:p-3.5">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#e86a17] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
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
                  </div>
                  <span className="text-xs font-bold tracking-tight text-neutral-900">
                    fixora
                  </span>
                </div>

                <p className="mt-4 px-2 text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">
                  Workspace
                </p>

                <nav aria-label="Dashboard sidebar" className="mt-1.5 space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium",
                          item.active
                            ? "bg-[#e86a17]/12 text-[#e86a17] font-semibold"
                            : "text-neutral-600"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </div>
                    );
                  })}
                </nav>

                {/* User Profile Footer */}
                <div className="mt-8 flex items-center gap-2 border-t border-neutral-200/70 pt-3 px-1">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-bold text-neutral-700">
                    JD
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold text-neutral-800">
                      Jordan Davis
                    </p>
                    <p className="truncate text-[9px] text-neutral-400">
                      Project manager
                    </p>
                  </div>
                </div>
              </aside>

              {/* Main Workspace Area */}
              <div className="col-span-8 p-3.5 sm:col-span-9 sm:p-4">
                {/* Date & Greeting Row */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-[9px] font-semibold tracking-wider text-neutral-400 uppercase">
                      Monday, October 19, 2026
                    </p>
                    <h2 className="mt-0.5 text-sm font-bold text-neutral-900 sm:text-base">
                      Good morning, Jordan{" "}
                      <span className="text-[#e86a17]">·</span>
                    </h2>
                    <p className="text-[10px] text-neutral-500">
                      Here&apos;s what&apos;s happening across your projects.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-md bg-[#e86a17] px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-2xs"
                  >
                    <Plus className="h-3 w-3" />
                    <span>New project</span>
                  </button>
                </div>

                {/* Top 3 KPI Cards */}
                <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                  {/* Active Projects */}
                  <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5">
                    <p className="text-[10px] font-medium text-neutral-500">
                      Active projects
                    </p>
                    <div className="mt-1 flex items-end justify-between gap-1">
                      <span className="text-base font-bold text-neutral-900 sm:text-lg">
                        12
                      </span>
                      <div className="flex h-6 items-end gap-[2px]">
                        {barHeights.map((h, idx) => (
                          <span
                            key={idx}
                            style={{ height: `${Math.max(20, Math.round(h * 0.24))}px` }}
                            className={cn(
                              "w-[3px] rounded-t-xs",
                              idx >= 8 ? "bg-[#e86a17]" : "bg-[#e86a17]/35"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-1 text-[9px] text-emerald-600 font-medium">
                      ↗ 2 this month
                    </p>
                  </div>

                  {/* Total Budget */}
                  <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5">
                    <p className="text-[10px] font-medium text-neutral-500">
                      Total budget
                    </p>
                    <div className="mt-1 flex items-end justify-between gap-1">
                      <span className="text-base font-bold text-neutral-900 sm:text-lg">
                        $4.82M
                      </span>
                      <svg
                        viewBox="0 0 56 22"
                        className="h-5 w-12 overflow-visible text-[#e86a17]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="2,18 14,14 26,16 38,8 54,3" />
                      </svg>
                    </div>
                    <p className="mt-1 truncate text-[9px] text-neutral-400">
                      Across all projects
                    </p>
                  </div>

                  {/* Tasks Completed */}
                  <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5">
                    <p className="text-[10px] font-medium text-neutral-500">
                      Tasks completed
                    </p>
                    <p className="mt-1 text-base font-bold text-neutral-900 sm:text-lg">
                      86%
                    </p>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                      <div className="h-full w-[86%] rounded-full bg-[#e86a17]" />
                    </div>
                  </div>
                </div>

                {/* Bottom 2-Column Section: Active Projects + Budget Utilization */}
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-12">
                  {/* Active Projects List */}
                  <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5 sm:col-span-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[11px] font-bold text-neutral-900">
                          Active projects
                        </h3>
                        <p className="text-[9px] text-neutral-400">
                          Project progress overview
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-[#e86a17]">
                        View all &rsaquo;
                      </span>
                    </div>

                    <div className="mt-2.5 space-y-2">
                      {activeProjects.map((project) => (
                        <div
                          key={project.code}
                          className="flex items-center justify-between gap-2 rounded-md border border-neutral-100 bg-neutral-50/50 px-2 py-1.5"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-100 text-[9px] font-bold text-amber-800">
                              {project.code}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-[10px] font-semibold text-neutral-800">
                                {project.name}
                              </p>
                              <p className="truncate text-[8px] text-neutral-400">
                                {project.location}
                              </p>
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-1.5">
                            <div className="hidden w-10 sm:block">
                              <p className="text-right text-[9px] font-semibold text-neutral-700">
                                {project.progress}
                              </p>
                              <div className="mt-0.5 h-1 w-full overflow-hidden rounded-full bg-neutral-200">
                                <div
                                  className={cn(
                                    "h-full rounded-full bg-[#e86a17]",
                                    project.barWidth
                                  )}
                                />
                              </div>
                            </div>
                            <span
                              className={cn(
                                "rounded-full border px-1.5 py-0.5 text-[8px] font-semibold",
                                project.badgeClass
                              )}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget Utilization Donut */}
                  <div className="flex flex-col justify-between rounded-lg border border-neutral-200/80 bg-white p-2.5 sm:col-span-5">
                    <div>
                      <h3 className="text-[11px] font-bold text-neutral-900">
                        Budget utilization
                      </h3>
                      <p className="text-[9px] text-neutral-400">
                        Across active projects
                      </p>
                    </div>

                    <div className="my-2 flex flex-col items-center justify-center">
                      <div
                        className="relative flex h-20 w-20 items-center justify-center rounded-full"
                        style={{
                          background:
                            "conic-gradient(#e86a17 0% 68%, #e5e7eb 68% 100%)",
                        }}
                      >
                        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white">
                          <span className="text-xs font-extrabold text-neutral-900">
                            68%
                          </span>
                          <span className="text-[8px] text-neutral-400">
                            utilized
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 border-t border-neutral-100 pt-1.5 text-[9px]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-neutral-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e86a17]" />
                          Spent
                        </span>
                        <span className="font-bold text-neutral-800">$3.28M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-neutral-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                          Remaining
                        </span>
                        <span className="font-semibold text-neutral-600">
                          $1.54M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Materials Status Strip */}
                <div className="mt-2.5 flex items-center justify-between rounded-lg border border-neutral-200/80 bg-neutral-50/70 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Box className="h-4 w-4 text-neutral-600" />
                    <div>
                      <p className="text-[10px] font-bold text-neutral-800">
                        Materials are in good shape
                      </p>
                      <p className="text-[8px] text-neutral-400">
                        Most recent inventory update · 2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="hidden sm:inline">Stock levels normal</span>
                    <ArrowRight className="h-3 w-3 text-neutral-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Notification Card (Bottom-Left of Dashboard) */}
          <div className="relative z-20 -mt-6 ml-2 flex w-fit items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-neutral-900 shadow-xl sm:-mt-8 sm:ml-4">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            <div>
              <p className="text-[11px] font-bold text-neutral-900">
                North Creek Residences
              </p>
              <p className="text-[10px] text-neutral-500">
                Milestone completed
              </p>
            </div>
            <span className="ml-3 text-[9px] font-medium text-neutral-400">
              Today
            </span>
          </div>

          {/* Floating Tag Pill (Bottom-Right Corner) */}
          <div className="mt-3 ml-auto flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-bold tracking-wider text-neutral-900 uppercase shadow-lg sm:-mt-5 sm:mr-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e86a17]" />
            <span>Built for the people who build</span>
          </div>
        </div>
      </div>
    </section>
  );
}