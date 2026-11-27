"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Logo } from "@/app/components/shared/logo";
import {
	scrollToHash,
	useActiveSection,
	useScroll,
} from "@/app/components/hooks/use-scroll";
import { buttonVariants } from "@/app/components/ui/button";
import { MobileNav } from "@/app/components/shared/mobile-nav";

export const navLinks = [
	{
		label: "Features",
		href: "#features",
	},
	{
		label: "Toolkit",
		href: "#toolkit",
	},
	{
		label: "Workspace",
		href: "#workspace",
	},
	{
		label: "How It Works",
		href: "#how-it-works",
	},
] as const;

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Header() {
	const scrolled = useScroll(24, 8);
	const activeSection = useActiveSection(sectionIds);

	return (
		<header className="pointer-events-none sticky top-0 z-50 w-full">
			<div
				className={cn(
					"pointer-events-auto mx-auto w-full max-w-full border border-transparent border-b-[#e3dfd7]/80 bg-[#f7f5f0]/95 backdrop-blur-md will-change-transform transition-[max-width,transform,border-radius,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
					scrolled &&
						"md:max-w-4xl md:translate-y-3 md:rounded-2xl md:border-[#e3dfd7]/90 md:bg-white/90 md:shadow-[0_12px_32px_-12px_rgba(20,20,20,0.16)]"
				)}
			>
				<nav
					className={cn(
						"mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:px-8",
						scrolled && "md:px-5 lg:px-5"
					)}
				>
					<Link
						className="inline-flex items-center rounded-md px-1.5 py-1 transition-opacity hover:opacity-90"
						href="/"
					>
						<Logo
							iconClassName="size-7"
							textClassName="text-[18px] text-[#141414]"
						/>
					</Link>

					<div className="hidden items-center gap-6 md:flex">
						<div className="flex items-center gap-1">
							{navLinks.map((link) => {
								const isActive = activeSection === link.href.slice(1);
								return (
									<a
										key={link.label}
										href={link.href}
										onClick={(e) => scrollToHash(e, link.href)}
										className={cn(
											"inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-semibold tracking-[0.04em] transition-colors duration-200",
											isActive
												? "bg-[#e86a17]/12 text-[#B8470A]"
												: "text-[#141414]/75 hover:bg-[#141414]/5 hover:text-[#141414]"
										)}
									>
										{link.label}
									</a>
								);
							})}
						</div>

						<div className="flex items-center gap-2">
							<Link
								href="/login"
								className={buttonVariants({ size: "sm", variant: "outline" })}
							>
								Sign In
							</Link>
							<Link
								href="/register"
								className={buttonVariants({ size: "sm" })}
							>
								Get Started
							</Link>
						</div>
					</div>

					<MobileNav links={navLinks} />
				</nav>
			</div>
		</header>
	);
}
