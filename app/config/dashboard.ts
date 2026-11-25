export type UserRole = "admin" | "manager" | "contractor" | "client";

export type DashboardNavIconKey =
  | "overview"
  | "projects"
  | "tasks"
  | "materials"
  | "budgets"
  | "team"
  | "reports";

export interface DashboardNavItem {
  id: DashboardNavIconKey;
  label: string;
  href: string;
  roles: UserRole[];
}

export interface RoleMetaItem {
  label: string;
  shortLabel: string;
  headline: string;
  subtitle: string;
  focusNote: string;
}

export const DEFAULT_ROLE: UserRole = "manager";

export const roleMeta: Record<UserRole, RoleMetaItem> = {
  admin: {
    label: "Workspace Admin",
    shortLabel: "Admin",
    headline: "Company-Wide Control",
    subtitle: "Oversee construction sites, budgets, team access, and reports.",
    focusNote:
      "Review user role assignments, audit budget approvals, and monitor performance across all active sites.",
  },
  manager: {
    label: "Project Manager",
    shortLabel: "Manager",
    headline: "Active Site Operations",
    subtitle: "Manage timelines, milestones, budgets, tasks, and materials.",
    focusNote:
      "Track milestone deadlines, review budget utilization, and coordinate site contractors and material stock.",
  },
  contractor: {
    label: "Site Contractor",
    shortLabel: "Contractor",
    headline: "Field Execution & Logs",
    subtitle: "Update assigned tasks, daily site progress, and material requests.",
    focusNote:
      "Log daily task updates on assigned construction sites and check material availability before work starts.",
  },
  client: {
    label: "Client Viewer",
    shortLabel: "Client",
    headline: "Project Progress & Milestones",
    subtitle: "View live site progress, completed milestones, and shared reports.",
    focusNote:
      "Follow key construction milestones, overall completion status, and reports shared by your project team.",
  },
};

export const dashboardNavItems: DashboardNavItem[] = [
  {
    id: "overview",
    label: "Overview",
    href: "/dashboard",
    roles: ["admin", "manager", "contractor", "client"],
  },
  {
    id: "projects",
    label: "Projects",
    href: "/dashboard/projects",
    roles: ["admin", "manager", "contractor", "client"],
  },
  {
    id: "tasks",
    label: "Tasks & Logs",
    href: "/dashboard/tasks",
    roles: ["admin", "manager", "contractor"],
  },
  {
    id: "materials",
    label: "Materials",
    href: "/dashboard/materials",
    roles: ["admin", "manager", "contractor"],
  },
  {
    id: "budgets",
    label: "Budgets",
    href: "/dashboard/budgets",
    roles: ["admin", "manager"],
  },
  {
    id: "team",
    label: "Team & Roles",
    href: "/dashboard/team",
    roles: ["admin"],
  },
  {
    id: "reports",
    label: "Reports",
    href: "/dashboard/reports",
    roles: ["admin", "manager", "client"],
  },
];

export function getNavForRole(role: UserRole): DashboardNavItem[] {
  return dashboardNavItems.filter((item) => item.roles.includes(role));
}

export function isRouteAllowedForRole(role: UserRole, pathname: string): boolean {
  const matched = dashboardNavItems.find(
    (item) =>
      pathname === item.href ||
      (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`))
  );

  if (!matched) {
    return true;
  }

  return matched.roles.includes(role);
}

export const dashboardPermissions = {
  canCreateProject: (role: UserRole): boolean =>
    role === "admin" || role === "manager",
  canViewBudgets: (role: UserRole): boolean =>
    role === "admin" || role === "manager",
  canManageTeam: (role: UserRole): boolean => role === "admin",
  canUpdateTasks: (role: UserRole): boolean =>
    role === "admin" || role === "manager" || role === "contractor",
  canViewReports: (role: UserRole): boolean =>
    role === "admin" || role === "manager" || role === "client",
} as const;