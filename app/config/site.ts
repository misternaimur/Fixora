export const siteConfig = {
  name: "Fixora ", 
  description: "Modern web application platform",
  navItems: [
    { title: "Features", href: "#features" },
    { title: "How it Works", href: "#how-it-works" },
    { title: "Pricing", href: "#pricing" },
    { title: "FAQ", href: "#faq" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;