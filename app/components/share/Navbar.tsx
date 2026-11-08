"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);

  // Handle sticky navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              BrandName
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link
              href="/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Home
            </Link>
            
            <Link
              href="/explore"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Explore
            </Link>

            {/* Service Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                onMouseEnter={() => setIsServiceOpen(true)}
                className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-2"
              >
                Service
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setIsServiceOpen(false)}
                className={`absolute top-full left-0 w-48 pt-2 transition-all duration-200 ${
                  isServiceOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-2 text-sm">
                  <Link
                    href="/services/web-dev"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-indigo-600 transition-colors"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/design"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-indigo-600 transition-colors"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="/services/marketing"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-indigo-600 transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/become-provider"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Become a Provider
            </Link>

            <Link
              href="/how-it-works"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              How It Works
            </Link>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Login
            </Link>

            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200"
            >
              <span>Get Started</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1 text-base font-medium text-gray-700 dark:text-gray-200">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/explore"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Explore
            </Link>
            
            {/* Mobile Service Accordion */}
            <div>
              <button
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span>Service</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServiceOpen ? "rotate-180" : ""}`} />
              </button>
              {isServiceOpen && (
                <div className="pl-6 space-y-1 mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    href="/services/web-dev"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-indigo-600"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/design"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-indigo-600"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="/services/marketing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-indigo-600"
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/become-provider"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Become a Provider
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              How It Works
            </Link>
          </nav>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              Login
            </Link>
            <Link
              href="/get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-colors"
            >
              <span>Get Started</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}