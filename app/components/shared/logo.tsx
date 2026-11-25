import type React from "react";
import { cn } from "@/app/lib/utils";

export const LogoIcon = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("size-7 shrink-0", className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 16A16 16 0 0 1 16 0H84A16 16 0 0 1 100 16V84A16 16 0 0 1 84 100H42V95C42 80.641 53.641 69 68 69H78V50H68C43.147 50 23 70.147 23 95V100H16A16 16 0 0 1 0 84V16ZM23 23H78V41H23V23Z"
      fill="#FF6B00"
    />
  </svg>
);

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  showText?: boolean;
  iconClassName?: string;
  textClassName?: string;
}

export const Logo = ({
  className,
  showText = true,
  iconClassName,
  textClassName,
  ...props
}: LogoProps) => (
  <span
    className={cn("inline-flex items-center gap-2.5 select-none", className)}
    {...props}
  >
    <LogoIcon className={iconClassName} />
    {showText && (
      <span
        className={cn(
          "font-heading text-lg font-bold tracking-[-0.03em] text-foreground leading-none",
          textClassName
        )}
      >
        Fixora
      </span>
    )}
  </span>
);
