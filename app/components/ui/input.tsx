import * as React from "react";
import { cn } from "@/app/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = "text", hasError, ...props }, ref) => {
		return (
			<input
				type={type}
				ref={ref}
				aria-invalid={hasError || undefined}
				className={cn(
					"flex h-11 w-full rounded-lg border border-[#E7E5E4] bg-white px-3.5 text-sm text-[#141414] placeholder:text-neutral-400 transition-colors focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/15 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
					hasError &&
						"border-red-400 focus:border-red-500 focus:ring-red-500/15",
					className
				)}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
