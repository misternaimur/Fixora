import * as React from "react";
import { cn } from "@/app/lib/utils";

const variantStyles = {
  default:
    "bg-[#ef682e] text-[#141414] font-bold shadow-xs hover:bg-[#e05c22]",
  amber:
    "bg-[#B45309] text-white font-semibold shadow-xs hover:bg-[#92400E]",
  destructive:
    "bg-red-600 text-white shadow-xs hover:bg-red-700",
  outline:
    "border border-[#141414]/20 bg-transparent text-[#141414] hover:bg-[#141414]/5",
  secondary:
    "bg-[#141414] text-white hover:bg-[#222222]",
  ghost:
    "bg-transparent text-[#141414]/80 hover:text-[#141414] hover:bg-[#141414]/5",
  link:
    "text-[#141414] underline-offset-4 hover:underline",
} as const;

const sizeStyles = {
  default: "h-10 px-4 py-2 text-xs",
  sm: "h-9 rounded-md px-3.5 text-[11px]",
  lg: "h-11 rounded-md px-6 text-xs",
  icon: "h-9 w-9",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-semibold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef682e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
    variantStyles[variant],
    sizeStyles[size],
    className
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
