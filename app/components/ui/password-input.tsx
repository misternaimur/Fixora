"use client";

import * as React from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Input, type InputProps } from "@/app/components/ui/input";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
	showLabel?: string;
	hideLabel?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
	(
		{
			className,
			showLabel = "Show password",
			hideLabel = "Hide password",
			...props
		},
		ref
	) => {
		const [visible, setVisible] = React.useState(false);

		return (
			<div className="relative">
				<Lock
					className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
					aria-hidden="true"
				/>
				<Input
					ref={ref}
					type={visible ? "text" : "password"}
					className={cn("pr-11 pl-10", className)}
					{...props}
				/>
				<button
					type="button"
					onClick={() => setVisible((prev) => !prev)}
					aria-label={visible ? hideLabel : showLabel}
					className="absolute top-1/2 right-2.5 inline-flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-[#B45309]/35 focus-visible:outline-none"
				>
					{visible ? (
						<EyeOff className="size-4" />
					) : (
						<Eye className="size-4" />
					)}
				</button>
			</div>
		);
	}
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
