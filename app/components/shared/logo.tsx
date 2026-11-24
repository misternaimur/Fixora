"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-7 w-7 rounded-md", icon: "h-4 w-4", text: "text-base" },
  md: { box: "h-8 w-8 rounded-lg", icon: "h-5 w-5", text: "text-lg" },
  lg: { box: "h-10 w-10 rounded-xl", icon: "h-6 w-6", text: "text-xl" },
};

export function Logo({
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const currentSize = sizeMap[size];
  const brandName = "YourBrand";

  return (
    <Link
      href="/"
      aria-label={`${brandName} Home`}
      className={`group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      <div
        className={`flex items-center justify-center bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105 ${currentSize.box}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={currentSize.icon}
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>

      {showText && (
        <span className={`font-bold tracking-tight text-foreground ${currentSize.text}`}>
          {brandName}
        </span>
      )}
    </Link>
  );
}