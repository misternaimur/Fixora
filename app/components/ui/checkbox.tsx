"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/app/lib/utils";

export interface CheckboxProps
	extends Omit<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		"onChange" | "type"
	> {
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
	({ checked, onCheckedChange, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				type="button"
				role="checkbox"
				aria-checked={checked}
				onClick={() => onCheckedChange(!checked)}
				className={cn(
					"flex size-4 shrink-0 cursor-pointer items-center justify-center rounded border transition-colors focus-visible:ring-2 focus-visible:ring-[#B45309]/40 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
					checked
						? "border-[#B45309] bg-[#B45309] text-white"
						: "border-neutral-300 bg-white text-transparent hover:border-neutral-400",
					className
				)}
				{...props}
			>
				<Check className="size-3" strokeWidth={3} />
			</button>
		);
	}
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
