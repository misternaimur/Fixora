import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, HardHat, ShieldCheck, TrendingUp } from "lucide-react";
import { Logo } from "@/app/components/shared/logo";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
	title: "Sign In — Fixora",
	description:
		"Sign in to your Fixora workspace to manage construction projects, teams, budgets, and resources.",
};

const highlightCards = [
	{
		icon: Building2,
		title: "10+ active sites",
		subtitle: "Across Chattogram",
	},
	{
		icon: HardHat,
		title: "Project control",
		subtitle: "Teams & milestones",
	},
	{
		icon: TrendingUp,
		title: "Clear visibility",
		subtitle: "Budgets & resources",
	},
] as const;

export default function LoginPage() {
	return (
		<div className="grid min-h-screen w-full bg-white lg:grid-cols-2">
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
					className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,107,0,0.12),transparent_55%)]"
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

				{/* Center Headline & Feature Cards */}
				<div className="relative z-10 my-auto max-w-xl py-10">
					{/* Pill Badge */}
					<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur-md">
						<ShieldCheck className="size-3.5 text-[#f59e0b]" />
						<span>Built for the people who build</span>
					</div>

					{/* Display Headline */}
					<h2 className="mt-6 font-heading text-4xl leading-[1.06] font-extrabold tracking-tight text-white xl:text-[44px]">
						Every Site. Every Taka.
						<span className="mt-1 block text-[#f59e0b]">One System.</span>
					</h2>

					{/* Subtitle */}
					<p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300/90 sm:text-[15px]">
						Manage your construction projects, teams, budgets and resources with
						complete visibility and control.
					</p>

					{/* 3 Glass Stat / Capability Cards */}
					<div className="mt-9 grid grid-cols-3 gap-3.5">
						{highlightCards.map((card) => {
							const Icon = card.icon;
							return (
								<div
									key={card.title}
									className="rounded-xl border border-white/15 bg-black/45 p-4 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-black/55"
								>
									<div className="flex size-7 items-center justify-center rounded-lg bg-[#f59e0b]/15 text-[#f59e0b]">
										<Icon className="size-3.5" strokeWidth={2} />
									</div>
									<p className="mt-3 font-heading text-[13px] font-bold tracking-tight text-white">
										{card.title}
									</p>
									<p className="mt-0.5 text-[11px] text-neutral-400">
										{card.subtitle}
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

			{/* Right Sign-In Form Panel */}
			<main className="flex min-h-screen flex-col justify-between bg-white px-6 py-8 sm:px-10 lg:px-14">
				{/* Mobile Brand Bar */}
				<div className="flex items-center justify-between lg:hidden">
					<Link href="/" className="inline-flex items-center">
						<Logo
							iconClassName="size-7"
							textClassName="text-lg text-[#141414]"
						/>
					</Link>
					<Link
						href="/"
						className="text-xs font-semibold text-neutral-500 hover:text-[#141414]"
					>
						Back to home
					</Link>
				</div>

				{/* Centered Form Container */}
				<div className="my-auto flex w-full items-center justify-center py-10">
					<LoginForm />
				</div>

				{/* Bottom Legal & Copyright Footer */}
				<footer className="mx-auto flex w-full max-w-[410px] items-center justify-between pt-4 text-[11px] text-neutral-400">
					<span>&copy; 2026 Fixora</span>
					<div className="flex items-center gap-4">
						<Link href="#" className="transition-colors hover:text-neutral-700">
							Privacy Policy
						</Link>
						<Link href="#" className="transition-colors hover:text-neutral-700">
							Terms &amp; Conditions
						</Link>
					</div>
				</footer>
			</main>
		</div>
	);
}
