import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FolderKanban, ShieldCheck, Users, Wallet } from "lucide-react";
import { Logo } from "@/app/components/shared/logo";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
	title: "Create Account — Fixora",
	description:
		"Register to request access to your company's Fixora construction intelligence workspace.",
};

const featureHighlights = [
	{
		icon: FolderKanban,
		title: "Centralized Project Management",
		subtitle: "Sites, tasks & schedules",
	},
	{
		icon: Wallet,
		title: "Better Budget Control",
		subtitle: "Track costs & spending",
	},
	{
		icon: Users,
		title: "Organized Team Collaboration",
		subtitle: "Aligned field operations",
	},
] as const;

export default function RegisterPage() {
	return (
		<div className="grid min-h-screen w-full bg-[#FAFAF9] lg:grid-cols-2">
			{/* Left Brand & Atmospheric Showcase Panel */}
			<aside className="relative hidden flex-col justify-between overflow-hidden bg-[#121315] p-10 text-white lg:flex xl:p-12">
				{/* Background Construction Image */}
				<Image
					src="/image/login-image.jfif"
					alt="Construction site tower cranes and structure"
					fill
					priority
					unoptimized
					sizes="50vw"
					className="object-cover object-center"
				/>

				{/* Moody Dark Atmospheric Gradient Overlay */}
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-gradient-to-br from-[#0c0d0f]/90 via-[#121315]/78 to-[#1f1308]/88"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(217,119,6,0.14),transparent_55%)]"
				/>

				{/* Top Brand Lockup */}
				<div className="relative z-10">
					<Link
						href="/"
						className="inline-flex flex-col items-start gap-1.5 transition-opacity hover:opacity-90"
					>
						<Logo
							iconClassName="size-8"
							textClassName="text-xl text-white"
						/>
						<span className="pl-[42px] text-[10px] font-semibold tracking-[0.22em] text-neutral-300/80 uppercase">
							Construction Intelligence
						</span>
					</Link>
				</div>

				{/* Center Headline & Feature Highlights */}
				<div className="relative z-10 my-auto max-w-xl py-10">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur-md">
						<ShieldCheck className="size-3.5 text-[#f59e0b]" />
						<span>Enterprise Construction Platform</span>
					</div>

					<h2 className="mt-6 font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-white xl:text-[42px]">
						Start Building Smarter{" "}
						<span className="block text-[#f59e0b]">with Fixora.</span>
					</h2>

					<p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300/90 sm:text-[15px]">
						Bring your construction projects, people and resources together in
						one organized workspace.
					</p>

					{/* 3 Feature Highlight Cards */}
					<div className="mt-9 grid grid-cols-3 gap-3.5">
						{featureHighlights.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.title}
									className="rounded-xl border border-white/15 bg-black/45 p-4 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-black/55"
								>
									<div className="flex size-7 items-center justify-center rounded-lg bg-[#f59e0b]/15 text-[#f59e0b]">
										<Icon className="size-3.5" strokeWidth={2} />
									</div>
									<p className="mt-3 font-heading text-[13px] leading-snug font-bold tracking-tight text-white">
										{item.title}
									</p>
									<p className="mt-1 text-[11px] text-neutral-400">
										{item.subtitle}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Bottom Tagline */}
				<div className="relative z-10">
					<p className="text-xs font-medium text-neutral-400">
						Build on schedule. Spend on budget.
					</p>
				</div>
			</aside>

			{/* Right Registration Panel */}
			<main className="flex min-h-screen flex-col justify-between bg-[#FAFAF9] px-5 py-7 sm:px-10 lg:px-14">
				{/* Compact Mobile Brand Bar */}
				<div className="flex items-center justify-between lg:hidden">
					<Link href="/" className="inline-flex items-center gap-2">
						<Logo
							iconClassName="size-7"
							textClassName="text-lg text-[#141414]"
						/>
					</Link>
					<Link
						href="/login"
						className="text-xs font-semibold text-[#D97706] hover:text-[#B45309]"
					>
						Sign In
					</Link>
				</div>

				{/* Centered Form Card */}
				<div className="my-auto flex w-full items-center justify-center py-8">
					<RegisterForm />
				</div>

				{/* Bottom Legal & Timezone Footer */}
				<footer className="mx-auto flex w-full max-w-[460px] flex-wrap items-center justify-between gap-2 pt-3 text-[11px] text-neutral-500">
					<span>&copy; 2026 Fixora.</span>
					<div className="flex flex-wrap items-center gap-3.5">
						<Link
							href="/privacy"
							className="transition-colors hover:text-[#141414]"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="transition-colors hover:text-[#141414]"
						>
							Terms &amp; Conditions
						</Link>
						<span className="font-mono text-[10px] text-neutral-400">
							Asia/Dhaka
						</span>
					</div>
				</footer>
			</main>
		</div>
	);
}
