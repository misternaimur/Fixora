"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { FacebookIcon } from "@/app/components/icons/facebook-icon";
import { InstagramIcon } from "@/app/components/icons/instagram-icon";
import { LinkedinIcon } from "@/app/components/icons/linkedin-icon";
import { YoutubeIcon } from "@/app/components/icons/youtube-icon";
import { Logo } from "@/app/components/shared/logo";

type FooterLink = {
	title: string;
	href: string;
	icon?: ReactNode;
};

type FooterSection = {
	label: string;
	links: FooterLink[];
};

const footerLinks: FooterSection[] = [
	{
		label: "Product",
		links: [
			{ title: "Features", href: "/#features" },
			{ title: "Toolkit", href: "/#toolkit" },
			{ title: "Workspace", href: "/#workspace" },
			{ title: "How It Works", href: "/#how-it-works" },
		],
	},
	{
		label: "Company",
		links: [
			{ title: "About Fixora", href: "/#features" },
			{ title: "FAQs", href: "/#how-it-works" },
			{ title: "Privacy Policy", href: "/privacy" },
			{ title: "Terms of Service", href: "/terms" },
		],
	},
	{
		label: "Resources",
		links: [
			{ title: "Sign In", href: "/login" },
			{ title: "Create Account", href: "/register" },
			{ title: "Brand Assets", href: "/Fixora.svg" },
			{ title: "Workspace Overview", href: "/#workspace" },
		],
	},
	{
		label: "Social Links",
		links: [
			{
				title: "Facebook",
				href: "#footer",
				icon: <FacebookIcon />,
			},
			{
				title: "Instagram",
				href: "#footer",
				icon: <InstagramIcon />,
			},
			{
				title: "YouTube",
				href: "#footer",
				icon: <YoutubeIcon />,
			},
			{
				title: "LinkedIn",
				href: "#footer",
				icon: <LinkedinIcon />,
			},
		],
	},
];

export function Footer() {
	const [year, setYear] = useState<number>(2026);

	useEffect(() => {
		queueMicrotask(() => {
			setYear(new Date().getFullYear());
		});
	}, []);

	return (
		<footer
			id="footer"
			className={cn(
				"relative w-full border-t border-[#e3dfd7] bg-[#efece6]"
			)}
		>
			<div className="pointer-events-none absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e86a17]/35 blur-[2px]" />

			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="grid w-full gap-8 py-10 md:py-12 lg:grid-cols-3 lg:gap-10">
					<AnimatedContainer className="space-y-4">
						<Logo iconClassName="size-7" textClassName="text-lg text-[#141414]" />
						<p className="max-w-xs text-sm leading-relaxed text-[#6e6a63]">
							Construction management, simplified. Built around your projects,
							budgets, and site teams.
						</p>
					</AnimatedContainer>

					<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
						{footerLinks.map((section, index) => (
							<AnimatedContainer delay={0.1 + index * 0.08} key={section.label}>
								<div className="mb-6 md:mb-0">
									<h3 className="font-heading text-xs font-bold tracking-[0.08em] text-[#141414] uppercase">
										{section.label}
									</h3>
									<ul className="mt-4 space-y-2.5 text-sm text-[#6e6a63]">
										{section.links.map((link) => (
											<li key={link.title}>
												<Link
													className="inline-flex items-center transition-colors duration-200 hover:text-[#141414] [&_svg]:me-1.5 [&_svg]:size-3.5"
													href={link.href}
												>
													{link.icon}
													{link.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				<div className="h-px w-full bg-gradient-to-r from-transparent via-[#dcd6ca] to-transparent" />
				<div className="flex w-full items-center justify-center py-5">
					<p className="text-xs font-medium text-[#6e6a63]">
						&copy; {year} Fixora. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

function AnimatedContainer({
	className,
	delay = 0.1,
	children,
}: {
	delay?: number;
	className?: string;
	children: ReactNode;
}) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			className={className}
			initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
			transition={{ delay, duration: 0.7 }}
			viewport={{ once: true }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
		>
			{children}
		</motion.div>
	);
}
