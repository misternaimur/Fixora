import {
  Check,
  LayoutGrid,
  FolderKanban,
  ClipboardCheck,
  Package,
  BarChart3,
  Plus,
  Lock,
  Box,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/app/lib/utils";

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

const checklistItems = [
  "A live view of project status and milestones",
  "Budget utilization alongside project progress",
  "Updates your whole team can act on",
];

export default function WorkspaceSection() {
  return (
    <section
      id="workspace"
      className="w-full bg-[#efece6] py-20 text-[#141414] sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left Column: Copy & Checkmarks */}
        <div className="flex flex-col items-start text-left lg:col-span-5">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e86a17] uppercase">
            One source of truth
          </p>

          <h2 className="mt-4 text-3xl leading-[1.04] font-black tracking-tight uppercase sm:text-4xl xl:text-[48px]">
            <span className="block text-[#111111]">Your entire</span>
            <span className="block text-[#111111]">construction</span>
            <span className="block">
              <span className="text-[#111111]">operation. </span>
              <span className="text-[#e86a17]">One</span>
            </span>
            <span className="block text-[#e86a17]">workspace.</span>
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
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e86a17]/30 bg-[#f6e3dc] text-[#e86a17]">
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
            <div className="w-full rounded-xl border border-neutral-200/90 bg-white text-neutral-900 shadow-[0_18px_45px_rgba(20,20,20,0.08)]">
              {/* Browser Top Chrome */}
              <div className="flex items-center justify-between rounded-t-xl border-b border-neutral-200/80 bg-neutral-50/90 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex items-center gap-1.5 rounded-md border border-neutral-200/90 bg-white px-3 py-1 text-[11px] font-medium text-neutral-500 shadow-2xs">
                  <Lock className="h-3 w-3 text-neutral-400" />
                  <span>app.fixora.com</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="grid grid-cols-12">
                {/* Left Sidebar */}
                <aside className="col-span-4 border-r border-neutral-200/70 bg-neutral-50/60 p-3 sm:col-span-3 sm:p-3.5">
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

                  <nav
                    aria-label="Workspace sidebar"
                    className="mt-1.5 space-y-1"
                  >
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium",
                            item.active
                              ? "bg-[#e86a17]/12 font-semibold text-[#e86a17]"
                              : "text-neutral-600"
                          )}
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </div>
                      );
                    })}
                  </nav>

                  <div className="mt-8 flex items-center gap-2 border-t border-neutral-200/70 px-1 pt-3">
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
                      <h3 className="mt-0.5 text-sm font-bold text-neutral-900 sm:text-base">
                        Good morning, Jordan{" "}
                        <span className="text-[#e86a17]">·</span>
                      </h3>
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
                              style={{
                                height: `${Math.max(20, Math.round(h * 0.24))}px`,
                              }}
                              className={cn(
                                "w-[3px] rounded-t-xs",
                                idx >= 8
                                  ? "bg-[#e86a17]"
                                  : "bg-[#e86a17]/35"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-1 text-[9px] font-medium text-emerald-600">
                        ↗ 2 this month
                      </p>
                    </div>

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

                  {/* Bottom 2-Column Section */}
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-12">
                    <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5 sm:col-span-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-[11px] font-bold text-neutral-900">
                            Active projects
                          </h4>
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

                    <div className="flex flex-col justify-between rounded-lg border border-neutral-200/80 bg-white p-2.5 sm:col-span-5">
                      <div>
                        <h4 className="text-[11px] font-bold text-neutral-900">
                          Budget utilization
                        </h4>
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
                          <span className="font-bold text-neutral-800">
                            $3.28M
                          </span>
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
                      <span className="hidden sm:inline">
                        Stock levels normal
                      </span>
                      <ArrowRight className="h-3 w-3 text-neutral-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}