export const siteConfig = {
  name: "Fixora",
  description:
    "Construction management, simplified. Manage projects, budgets, materials, and field teams in one workspace.",
  navItems: [
    { title: "Features", href: "#features" },
    { title: "Toolkit", href: "#toolkit" },
    { title: "Workspace", href: "#workspace" },
    { title: "How It Works", href: "#how-it-works" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
