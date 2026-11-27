"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { Portal, PortalBackdrop } from "@/app/components/ui/portal";
import { scrollToHash } from "@/app/components/hooks/use-scroll";
import { XIcon, MenuIcon } from "lucide-react";

export interface MobileNavLink {
	label: string;
	href: string;
}

export function MobileNav({ links }: { links: readonly MobileNavLink[] }) {
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen((prev) => !prev)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open && (
				<Portal
					className="top-14"
					id="mobile-menu"
					role="dialog"
					aria-modal="true"
					aria-label="Mobile navigation"
				>
					<PortalBackdrop onClick={() => setOpen(false)} />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<div className="grid gap-y-2">
							{links.map((link) => (
								<a
									className={cn(
										buttonVariants({ variant: "ghost" }),
										"w-full justify-start"
									)}
									href={link.href}
									key={link.label}
									onClick={(e) => {
										setOpen(false);
										scrollToHash(e, link.href);
									}}
								>
									{link.label}
								</a>
							))}
						</div>
						<div className="mt-10 flex flex-col gap-2.5">
							<Link
								href="/login"
								onClick={() => setOpen(false)}
								className={cn(buttonVariants({ variant: "outline" }), "w-full")}
							>
								Sign In
							</Link>
							<Link
								href="/register"
								onClick={() => setOpen(false)}
								className={cn(buttonVariants(), "w-full")}
							>
								Get Started
							</Link>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}
