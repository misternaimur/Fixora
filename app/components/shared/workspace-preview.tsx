import {
	ArrowRight,
	BarChart3,
	Box,
	ClipboardCheck,
	FolderKanban,
	LayoutGrid,
	Lock,
	Package,
	Plus,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Logo } from "@/app/components/shared/logo";
import { Badge, type BadgeVariant } from "@/app/components/ui/badge";

const sidebarItems = [
	{ label: "Overview", icon: LayoutGrid, active: true },
	{ label: "Projects", icon: FolderKanban, active: false },
	{ label: "Tasks", icon: ClipboardCheck, active: false },
	{ label: "Materials", icon: Package, active: false },
	{ label: "Reports", icon: BarChart3, active: false },
] as const;

const activeProjects: {
	code: string;
	name: string;
	location: string;
	progress: string;
	barWidth: string;
	status: string;
	badgeVariant: BadgeVariant;
}[] = [
	{
		code: "NC",
		name: "North Creek Residences",
		location: "Seattle, WA · Due Mar 2027",
		progress: "72%",
		barWidth: "w-[72%]",
		status: "On track",
		badgeVariant: "success",
	},
	{
		code: "WH",
		name: "West Harbor Offices",
		location: "Portland, OR · Due Jun 2027",
		progress: "48%",
		barWidth: "w-[48%]",
		status: "In review",
		badgeVariant: "warning",
	},
	{
		code: "MS",
		name: "Maple Street Project",
		location: "Denver, CO · Due Jan 2027",
		progress: "91%",
		barWidth: "w-[91%]",
		status: "On track",
		badgeVariant: "success",
	},
];

const barHeights = [35, 52, 40, 68, 85, 58, 74, 48, 62, 78, 54, 88];

export function WorkspacePreview({ className }: { className?: string }) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"w-full rounded-xl border border-neutral-200/90 bg-white text-neutral-900",
				className
			)}
		>
			{/* Browser Top Chrome */}
			<div className="flex items-center justify-between rounded-t-xl border-b border-neutral-200/80 bg-neutral-50/90 px-4 py-2.5">
				<div className="flex items-center gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
				</div>

				<div className="flex items-center gap-1.5 rounded-md border border-neutral-200/90 bg-white px-3 py-1 font-mono text-[10px] font-medium text-neutral-500 shadow-2xs">
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
					<div className="px-1.5">
						<Logo
							className="gap-2"
							iconClassName="size-5"
							textClassName="text-xs font-bold tracking-tight text-neutral-900"
						/>
					</div>

					<p className="mt-4 px-2 text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">
						Workspace
					</p>

					<div className="mt-1.5 space-y-1">
						{sidebarItems.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.label}
									className={cn(
										"flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium",
										item.active
											? "bg-[#e86a17]/12 font-semibold text-[#B8470A]"
											: "text-neutral-600"
									)}
								>
									<Icon className="h-3.5 w-3.5 shrink-0" />
									<span className="truncate">{item.label}</span>
								</div>
							);
						})}
					</div>

					{/* User Profile Footer */}
					<div className="mt-8 flex items-center gap-2 border-t border-neutral-200/70 px-1 pt-3">
						<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-bold text-neutral-700">
							JD
						</div>
						<div className="min-w-0">
							<p className="truncate text-[10px] font-semibold text-neutral-800">
								Jordan Davis
							</p>
							<p className="truncate text-[9px] text-neutral-500">
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
							<p className="mt-0.5 font-heading text-sm font-bold text-neutral-900 sm:text-base">
								Good morning, Jordan{" "}
								<span className="text-[#e86a17]">·</span>
							</p>
							<p className="text-[10px] text-neutral-500">
								Here&apos;s what&apos;s happening across your projects.
							</p>
						</div>

						<span className="inline-flex items-center gap-1 rounded-md bg-[#ef682e] px-2.5 py-1.5 text-[10px] font-bold text-[#141414] shadow-2xs">
							<Plus className="h-3 w-3" />
							<span>New project</span>
						</span>
					</div>

					{/* Top 3 KPI Cards */}
					<div className="mt-3.5 grid grid-cols-3 gap-2.5">
						<div className="rounded-lg border border-neutral-200/80 bg-white p-2.5">
							<p className="text-[10px] font-medium text-neutral-500">
								Active projects
							</p>
							<div className="mt-1 flex items-end justify-between gap-1">
								<span className="font-heading text-base font-bold text-neutral-900 sm:text-lg">
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
												idx >= 8 ? "bg-[#e86a17]" : "bg-[#e86a17]/35"
											)}
										/>
									))}
								</div>
							</div>
							<p className="mt-1 text-[9px] font-medium text-emerald-700">
								↗ 2 this month
							</p>
						</div>

						<div className="rounded-lg border border-neutral-200/80 bg-white p-2.5">
							<p className="text-[10px] font-medium text-neutral-500">
								Total budget
							</p>
							<div className="mt-1 flex items-end justify-between gap-1">
								<span className="font-heading text-base font-bold text-neutral-900 sm:text-lg">
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
							<p className="mt-1 truncate text-[9px] text-neutral-500">
								Across all projects
							</p>
						</div>

						<div className="rounded-lg border border-neutral-200/80 bg-white p-2.5">
							<p className="text-[10px] font-medium text-neutral-500">
								Tasks completed
							</p>
							<p className="mt-1 font-heading text-base font-bold text-neutral-900 sm:text-lg">
								86%
							</p>
							<div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
								<div className="h-full w-[86%] rounded-full bg-[#e86a17]" />
							</div>
						</div>
					</div>

					{/* Bottom 2-Column Section: Active Projects + Budget Utilization */}
					<div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-12">
						<div className="rounded-lg border border-neutral-200/80 bg-white p-2.5 sm:col-span-7">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-[11px] font-bold text-neutral-900">
										Active projects
									</p>
									<p className="text-[9px] text-neutral-500">
										Project progress overview
									</p>
								</div>
								<span className="text-[10px] font-semibold text-[#B8470A]">
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
												<p className="truncate text-[8px] text-neutral-500">
													{project.location}
												</p>
											</div>
										</div>

										<div className="flex shrink-0 items-center gap-1.5">
											<div className="hidden w-10 sm:block">
												<p className="text-right font-mono text-[9px] font-semibold text-neutral-700">
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
											<Badge
												variant={project.badgeVariant}
												className="px-1.5 py-0.5 text-[8px]"
											>
												{project.status}
											</Badge>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="flex flex-col justify-between rounded-lg border border-neutral-200/80 bg-white p-2.5 sm:col-span-5">
							<div>
								<p className="text-[11px] font-bold text-neutral-900">
									Budget utilization
								</p>
								<p className="text-[9px] text-neutral-500">
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
										<span className="font-heading text-xs font-extrabold text-neutral-900">
											68%
										</span>
										<span className="text-[8px] text-neutral-500">
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
									<span className="font-mono font-bold text-neutral-800">
										$3.28M
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="flex items-center gap-1 text-neutral-500">
										<span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
										Remaining
									</span>
									<span className="font-mono font-semibold text-neutral-600">
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
								<p className="text-[8px] text-neutral-500">
									Most recent inventory update · 2 hours ago
								</p>
							</div>
						</div>
						<div className="flex items-center gap-1.5 text-[9px] font-medium text-emerald-700">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							<span className="hidden sm:inline">Stock levels normal</span>
							<ArrowRight className="h-3 w-3 text-neutral-400" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
