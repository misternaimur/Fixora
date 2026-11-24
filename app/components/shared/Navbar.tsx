"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Logo } from "@/app/components/shared/logo";
import { buttonVariants } from "@/app/components/ui/button";

const navItems = [
  { title: "Features", href: "#features" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Pricing", href: "#pricing" },
  { title: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/70 bg-background/85 shadow-xs backdrop-blur-md"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Logo size="md" showText={true} />
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{item.title}</span>
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-muted-foreground hover:text-foreground"
            )}
          >
            Log in
          </Link>
          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "group gap-1.5"
            )}
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground transition-colors hover:bg-accent md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col space-y-1 px-4 py-4 sm:px-6">
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-2 border-t border-border/70 pt-4">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "w-full justify-center"
                )}
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "w-full justify-center gap-1.5"
                )}
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}