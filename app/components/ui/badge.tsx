import type * as React from "react";
import { cn } from "@/app/lib/utils";

const badgeVariants = {
	success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700",
	warning: "border-amber-500/25 bg-amber-500/10 text-[#B45309]",
	info: "border-sky-500/20 bg-sky-500/10 text-sky-700",
	brand: "border-[#FF6B00]/25 bg-[#FF6B00]/12 text-[#B8470A]",
	neutral: "border-neutral-300 bg-neutral-500/10 text-neutral-700",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant;
}

export function Badge({
	className,
	variant = "neutral",
	...props
}: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
				badgeVariants[variant],
				className
			)}
			{...props}
		/>
	);
}
