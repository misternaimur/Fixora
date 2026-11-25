"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { Portal, PortalBackdrop } from "@/app/components/ui/portal";
import { navLinks } from "@/app/components/shared/header";
import { XIcon, MenuIcon } from "lucide-react";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
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
				<Portal className="top-14" id="mobile-menu">
					<PortalBackdrop />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<div className="grid gap-y-2">
							{navLinks.map((link) => (
								<a
									className={cn(
										buttonVariants({ variant: "ghost" }),
										"w-full justify-start"
									)}
									href={link.href}
									key={link.label}
									onClick={() => setOpen(false)}
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
