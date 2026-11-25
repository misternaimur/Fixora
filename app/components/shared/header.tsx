"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Logo } from "@/app/components/shared/logo";
import { useScroll } from "@/app/components/hooks/use-scroll";
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
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 mx-auto w-full border-b border-[#e3dfd7]/80 bg-[#f7f5f0]/95 backdrop-blur-md transition-all duration-200 ease-out",
				{
					"md:top-3 md:max-w-4xl md:rounded-xl md:border md:border-[#e3dfd7] md:bg-white/95 md:shadow-md":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
					{
						"md:h-13 md:px-4 lg:px-5": scrolled,
					}
				)}
			>
				<Link
					className="inline-flex items-center rounded-md px-1.5 py-1 transition-opacity hover:opacity-90"
					href="/"
				>
					<Logo iconClassName="size-7" textClassName="text-[18px] text-[#141414]" />
				</Link>

				<div className="hidden items-center gap-6 md:flex">
					<div className="flex items-center gap-1">
						{navLinks.map((link) => (
							<a
								key={link.label}
								className="inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-semibold tracking-[0.04em] text-[#141414]/75 transition-colors hover:bg-[#141414]/5 hover:text-[#141414]"
								href={link.href}
							>
								{link.label}
							</a>
						))}
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

				<MobileNav />
			</nav>
		</header>
	);
}
