import * as React from "react";
import { cn } from "@/app/lib/utils";

const Label = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
	<label
		ref={ref}
		className={cn(
			"block text-xs font-semibold text-[#141414] select-none",
			className
		)}
		{...props}
	/>
));
Label.displayName = "Label";

export { Label };
