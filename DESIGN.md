# Fixora Design System (`DESIGN.md`)

> **Platform:** Fixora — Construction Project Intelligence & Operations Platform  
> **Primary Source of Truth:** Existing Homepage (`app/page.tsx` and `app/components/sections/*`)  
> **Scope:** Marketing site, Authentication flows (`/login`, `/register`), and Internal Operations Dashboard (`/dashboard/*`)

---

## 1. Design Philosophy

Fixora is built for people who manage real construction sites, budgets, materials, and field teams. Its visual identity rejects glossy, over-decorated SaaS tropes in favor of **architectural clarity, industrial discipline, and calm operational authority**.

### Core Principles

1. **Rhythmic Structural Contrast:** The Homepage establishes an alternating light-and-dark cadence — **Charcoal Carbon (`#141414`)** for high-focus product showcases and operational steps, paired with **Warm Architectural Stone (`#EFECE6`)** for editorial clarity and decision-making.
2. **Blueprint Precision over Decoration:** Interfaces rely on crisp `1px` borders, subtle concentric architectural rings, structured numbering (`01`–`06`), and restrained use of color rather than heavy drop shadows, neon gradients, or glassmorphism clutter.
3. **Safety-Orange Signal Discipline:** Orange (`#E86A17` / `#FF6B00` / `#EF682E`) is an active signal color — reserved for brand identity, primary actions, active states, and key metrics. Overusing orange dilutes its urgency.
4. **Human-Crafted Composition:** Content sits in varied, purposeful layouts (asymmetric hero + layered product frame, 4-column feature grid, 3-column numbered toolkit, split workspace showcase, connected 4-step timeline, full-width banner CTA) rather than repeating identical card templates.
5. **Data Clarity First:** In operational views (dashboard previews, tables, budgets, registration notices), legibility, alignment, and scannable hierarchy outweigh visual flourishes.

---

## 2. Brand Identity

### Brand Positioning
- **Name:** `Fixora` (`app/config/site.ts`)
- **Domain:** `app.fixora.com`
- **Taglines (from existing pages):**
  - *Construction Management, Simplified.* (`HeroSection.tsx`, `Footer.tsx`, `layout.tsx`)
  - *Built around your work.* (`CtaSection.tsx`, `Footer.tsx`)
  - *Built for the people who build.* (`HeroSection.tsx`, `login/page.tsx`)
  - *Build on schedule. Spend on budget.* (`login/page.tsx`, `register/page.tsx`)

### Brand Mark & Wordmark
- **Primary Icon Mark:** `public/Fixora.svg` and `LogoIcon` (`app/components/shared/logo.tsx`)
  - Geometry: `100×100` rounded architectural square (`rx=16` equivalent arc corners) in `#FF6B00`, featuring an upper horizontal bar cutout and a lower curved arch cutout forming a structural **F** silhouette.
- **Wordmark Lockup:** `Logo` (`app/components/shared/logo.tsx`)
  - Pairs `LogoIcon` (`size-7` in navigation/footer, `size-8` on auth hero panels, `size-5` inside compact mockup sidebars) with `"Fixora"` in `Space Grotesk` (`font-heading font-bold tracking-[-0.03em] leading-none`).
  - Text adapts to surface contrast: `#141414` on light stone/white surfaces, `#FFFFFF` on dark `#141414` / `#121315` panels.
- **Usage Rules:**
  - Always maintain clear breathing room around the mark (`gap-2.5` standard, `gap-2` compact).
  - Never distort the `1:1` aspect ratio of `LogoIcon` or recolor the mark outside `#FF6B00` / `#E86A17` / monochrome `#141414` / `#FFFFFF`.

---

## 3. Homepage Visual Reference

The Homepage (`app/page.tsx`) is the canonical reference for Fixora's visual language. Every page derives its tone, spacing, contrast rhythm, and component styling from these six sections plus Header and Footer:

| Order | Section | Surface | Layout Pattern | Purpose & Key Visual Signatures |
| :--- | :--- | :--- | :--- | :--- |
| 0 | **Header** (`header.tsx`) | `#F7F5F0/95` → `#FFFFFF/90` on scroll | Sticky top bar → floating `max-w-4xl` pill (`rounded-2xl`) | Brand lockup, 4 anchor links with active orange pill (`#E86A17/12`), `outline` Sign In + `default` Get Started CTAs. |
| 1 | **HeroSection** | `#141414` (Dark Carbon) | 12-col asymmetric split (`5` copy / `7` layered visual) | Concentric `1px` rings, ambient `#E86A17/10` glow, 3-line uppercase black display `h1`, orange/ghost CTAs, construction photo layered behind crisp white browser dashboard preview + floating status & pill badges. |
| 2 | **FeaturesSection** | `#EFECE6` (Warm Stone) | Centered header + 4-col equal grid | Uppercase eyebrow (`#E86A17`), heavy uppercase `h2`, 4 muted `#F7F5F0` cards with `1px` `#E3DFD7` border and soft tinted `36×36` icon boxes (terracotta, sage, slate, sand). |
| 3 | **ToolkitSection** | `#141414` (Dark Carbon) | Asymmetric split header + 3×2 numbered grid | Left title / right summary caption; 6 dark `#1C1C1C` cards (`border-white/[0.08]`) with `#E86A17` icon boxes, `font-mono` indices (`01`–`06`), and uppercase `Learn more →` links. |
| 4 | **WorkspaceSection** | `#EFECE6` (Warm Stone) | 12-col split (`5` copy + checklist / `7` framed mockup) | Mixed-color `h2` (`#111111` + `#E86A17`), circular orange checkmarks (`#F6E3DC`), `#E6E1D7/80` framed browser mockup showing live dashboard density. |
| 5 | **HowItWorksSection** | `#141414` (Dark Carbon) | Centered header + 4-step horizontal timeline | Numbered `40×40` `font-mono` badges (`border-[#E86A17]/60 bg-[#E86A17]/10`) linked by `1px` horizontal connector lines (`bg-white/[0.12]`). |
| 6 | **CtaSection** | `#EFECE6` outer / `#EF682E` inner | Full-width `rounded-lg` orange banner + right emblem | Overlapping dark geometric rings (`border-[#141414]/[0.12]`), high-contrast `#141414` typography on `#EF682E`, dark `#141414` CTA button, translucent hardhat emblem box. |
| 7 | **Footer** (`Footer.tsx`) | `#EFECE6` (Warm Stone) | 3-col top grid (`1` brand + `2` 4-col links) + bottom bar | Subtle top orange hairline glow, `Logo`, concise brand statement, uppercase `font-heading` column labels, gradient divider, centered copyright. |

### Reference Priority Hierarchy
1. **Homepage (`app/page.tsx`)** — Primary visual & brand authority.
2. **Login Page (`app/login/page.tsx`)** — Split-screen authentication baseline.
3. **Registration Page (`app/register/page.tsx`)** — Structured form & validation baseline.
4. **Internal Dashboard (`app/dashboard/*`)** — Dense operational adaptation using the browser mockup language from `HeroSection` / `WorkspaceSection`.
5. **Other Modules** — Inherit tokens, typography, and interaction rules defined here.

---

## 4. Color System

### 4.1 Core Brand & Accent Colors

| Token | Hex | Source in Codebase | Role & Purpose |
| :--- | :--- | :--- | :--- |
| `--color-brand-mark` | `#FF6B00` | `public/Fixora.svg`, `logo.tsx` | Official Fixora geometric icon fill. |
| `--color-primary` | `#E86A17` | `HeroSection`, `FeaturesSection`, `ToolkitSection`, `WorkspaceSection`, `HowItWorksSection`, `header.tsx` | Primary brand accent, dark-surface eyebrows, active sidebar/nav state, progress bars, KPI sparklines. |
| `--color-primary-hover` | `#D45E12` | `HeroSection.tsx` | Hover state for `#E86A17` primary CTA buttons. |
| `--color-primary-cta` | `#EF682E` | `button.tsx` (`default`), `CtaSection.tsx` | Primary button surface paired with `#141414` ink and full-bleed CTA banner background. |
| `--color-primary-cta-hover` | `#E05C22` | `button.tsx` (`default:hover`) | Hover state for `#EF682E` CTA buttons. |
| `--color-amber-action` | `#D97706` | `register-form.tsx`, `register/page.tsx` | Warm amber form CTA and link accent on light `#FAFAF9` / `#FFFFFF` surfaces. |
| `--color-amber-action-hover` | `#B45309` | `register-form.tsx` | Hover and high-contrast accessible text link state on white/stone backgrounds. |
| `--color-amber-highlight` | `#F59E0B` | `login/page.tsx`, `register/page.tsx` | Highlight phrase & icon accent on dark photographic auth panels. |

### 4.2 Background & Surface Colors

| Token | Hex / Value | Source in Codebase | Usage |
| :--- | :--- | :--- | :--- |
| `--color-bg-dark` | `#141414` | `HeroSection`, `ToolkitSection`, `HowItWorksSection` | Primary dark section canvas, secondary dark button (`button.tsx`), dark ink on light surfaces. |
| `--color-surface-dark-card` | `#1C1C1C` | `ToolkitSection.tsx` | Elevated card surface on dark sections (`hover:bg-[#202020]`). |
| `--color-bg-stone` | `#EFECE6` | `FeaturesSection`, `WorkspaceSection`, `CtaSection`, `Footer`, `page.tsx` | Primary light section canvas ("Warm Architectural Stone"). |
| `--color-surface-stone-card` | `#F7F5F0` | `FeaturesSection.tsx`, `header.tsx` | Feature cards and unscrolled header surface. |
| `--color-surface-stone-frame` | `rgba(230, 225, 215, 0.8)` (`#E6E1D7/80`) | `WorkspaceSection.tsx` | Outer framing container around workspace browser mockup. |
| `--color-bg-auth-warm` | `#FAFAF9` | `register/page.tsx` | Neutral warm off-white page canvas for multi-field form pages. |
| `--color-surface-white` | `#FFFFFF` | `HeroSection` mockup, `login`, `register` cards | Crisp white operational cards, dashboard panels, inputs, and scrolled header pill (`#FFFFFF/90`). |
| `--color-surface-subtle` | `#FAFAFA` (`neutral-50`) | Dashboard sidebar & browser chrome | Recessed sub-panels, table headers, and input rest areas. |

### 4.3 Text Colors

| Token | Hex / Tailwind | Usage |
| :--- | :--- | :--- |
| `--color-text-primary` | `#141414` / `#111111` | Headings and primary copy on light stone and white surfaces. |
| `--color-text-secondary-stone` | `#55524C` | Checklist items and medium-emphasis copy on `#EFECE6`. |
| `--color-text-muted-stone` | `#6E6A63` | Supporting paragraphs and footer links on `#EFECE6` / `#F7F5F0`. |
| `--color-text-muted-ui` | `#737373` (`neutral-500`) / `#525252` (`neutral-600`) | Form descriptions, captions, and secondary table cells on `#FFFFFF` / `#FAFAF9`. |
| `--color-text-on-dark` | `#FFFFFF` | Display headings and card titles on `#141414`. |
| `--color-text-muted-on-dark` | `#A3A3A3` (`neutral-400`) / `#D4D4D4` (`neutral-300`) | Supporting copy and descriptions on `#141414`. |

### 4.4 Border & Divider Colors

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--color-border-stone` | `#E3DFD7` (`hover: #D5CFC4`) | Feature cards, header, and footer dividers on `#EFECE6` / `#F7F5F0`. |
| `--color-border-auth` | `#E7E5E4` | Form cards, inputs, and requirement boxes on `#FAFAF9` / `#FFFFFF`. |
| `--color-border-ui` | `rgba(229, 229, 229, 0.85)` (`neutral-200/80`) | Dashboard KPI cards, browser frame, and table/list separators. |
| `--color-border-dark` | `rgba(255, 255, 255, 0.08)` (`hover: 0.16`) | Dark toolkit cards (`#1C1C1C`) and horizontal step connectors (`0.12`). |

### 4.5 Feature Icon Tints (Homepage `FeaturesSection.tsx`)

| Category | Background | Foreground | Meaning |
| :--- | :--- | :--- | :--- |
| Visibility / Projects | `#F6E3DC` | `#D86A42` | Warm Terracotta — Site & project structure |
| Budget / Finance | `#DFE8E0` | `#5E7D63` | Muted Sage — Financial health & control |
| Team / Collaboration | `#DDE4EA` | `#5B7387` | Blueprint Slate — People & coordination |
| Analytics / Data | `#EBE3D3` | `#9C7A44` | Warm Brass — Metrics & reporting |

### 4.6 Semantic & Interactive Colors

| State | Surface / Tint | Border | Text / Icon | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Success** | `bg-emerald-500/10` / `bg-emerald-50` | `border-emerald-500/20` / `border-emerald-200` | `text-emerald-700` / `text-emerald-600` | Always pair with `Check`, `CheckCircle2`, or dot + label. |
| **Warning** | `bg-amber-500/10` / `bg-amber-50` | `border-amber-500/20` / `border-amber-200` | `text-amber-700` / `text-[#B45309]` | Used for `"In review"`, pending admin approval, access notices. |
| **Error / Destructive** | `bg-red-50` (inline) / `bg-red-600` (button) | `border-red-200` / `border-red-400` | `text-red-700` / `text-red-600` | Inline field errors + `AlertCircle` icon (`button.tsx` destructive uses white on `bg-red-600`). |
| **Information** | `bg-sky-500/10` or `bg-amber-50/75` | `border-sky-500/20` or `border-amber-200/90` | `text-sky-700` or `text-amber-950` | System guidance and role badges. |
| **Disabled** | Same base surface at `opacity-50` | Same border at `opacity-50` | `cursor-not-allowed` | Never omit visual opacity reduction. |
| **Hover** | Darken button by ~8–10%; lift border on cards | `#D5CFC4` (stone), `white/16` (dark) | `hover:text-[#141414]` / `hover:text-white` | Subtle `150–200ms` transitions. |
| **Focus** | — | `focus:border-[#D97706]` / `#E86A17` | `focus-visible:ring-2 ring-[#EF682E]` or `ring-[#D97706]/40` | Always visible on keyboard navigation. |
| **Selected / Active** | `bg-[#E86A17]/12` (sidebar/nav) or `bg-[#FF6B00]/6` (demo item) | `border-[#E07009]/45` (list item) | `text-[#E86A17]` (`font-semibold`) | Clear active highlight without heavy fill. |

---

## 5. Color Contrast & Accessibility

Fixora targets **WCAG 2.1 AA** across all interfaces:
- **Normal text (< 18px regular or < 14px bold):** Minimum **4.5:1** contrast ratio.
- **Large text (≥ 24px regular or ≥ 18.67px bold) & UI components:** Minimum **3.0:1** contrast ratio.
- **Non-color redundancy:** Status indicators (`On track`, `In review`, `Pending Admin Approval`, form errors, password rules) MUST include a text label and/or icon — never rely on color alone.

### Verified Contrast Matrix (Measured Against Project Hex Values)

| Foreground | Background | Ratio | WCAG AA Status | Approved Usage |
| :--- | :--- | :--- | :--- | :--- |
| `#141414` | `#FFFFFF` | **18.42:1** | AAA Pass | Primary text, headings, inputs on white cards. |
| `#141414` | `#FAFAF9` | **17.64:1** | AAA Pass | Auth page text and footer links. |
| `#141414` | `#F7F5F0` | **16.91:1** | AAA Pass | Feature card headings and header navigation. |
| `#141414` | `#EFECE6` | **15.62:1** | AAA Pass | Section headings and primary stone copy. |
| `#FFFFFF` | `#141414` | **18.42:1** | AAA Pass | Dark section headlines and card titles. |
| `#D4D4D4` | `#141414` | **12.43:1** | AAA Pass | Dark-surface checklists and captions. |
| `#A3A3A3` | `#141414` | **7.30:1** | AAA Pass | Muted paragraphs on dark sections. |
| `#55524C` | `#EFECE6` | **6.60:1** | AA Pass | Checklist text on stone backgrounds. |
| `#141414` | `#EF682E` | **5.87:1** | AA Pass | **Preferred:** Dark ink on orange (`CtaSection.tsx`, `button.tsx` `default`). |
| `#E86A17` | `#141414` | **5.71:1** | AA Pass | Orange eyebrows, icons, and headline highlights on dark backgrounds. |
| `#FF6B00` | `#141414` | **6.45:1** | AA Pass | Brand mark and orange accents on dark backgrounds. |
| `#B45309` | `#FFFFFF` | **5.02:1** | AA Pass | **Preferred:** Amber text links and small labels on white/light surfaces. |
| `#6E6A63` | `#F7F5F0` | **4.94:1** | AA Pass | Feature card descriptions on `#F7F5F0`. |
| `#6E6A63` | `#EFECE6` | **4.56:1** | AA Pass | Subtitles and footer links on `#EFECE6` (avoid shrinking below `12px`). |

### Contrast Warnings (Avoid or Upgrade)
- **`#FFFFFF` on `#E86A17` (`3.23:1`), `#D97706` (`3.19:1`), `#EF682E` (`3.14:1`):** Fails 4.5:1 for small normal text. For small white-text buttons (`12px`–`14px`), prefer `#B45309` (**5.02:1**) or use `#141414` dark ink on `#EF682E` (**5.87:1**, as `button.tsx` already does).
- **`#E86A17` on `#EFECE6` (`2.74:1`) / `#D97706` on `#FFFFFF` (`3.19:1`):** Too low for `11px` eyebrow text or small links. Upgrade small text links and eyebrows on light stone/white backgrounds to `#B45309` (or `#9A3412` / `#C2410C`) while reserving `#E86A17` / `#FF6B00` for icons, borders, and large/dark-surface accents.

---

## 6. Typography

### Font Stack (`app/layout.tsx` & `app/globals.css`)
- **Heading Font (`--font-heading`):** `Space Grotesk` (`500`, `600`, `700`) — applied automatically to `h1`–`h6` and the `Fixora` wordmark. Architectural, engineered geometry.
- **Primary UI / Body Font (`--font-sans`):** `Plus Jakarta Sans` (`400`, `500`, `600`, `700`, `800`) — applied to `html` and `body`. Clean, high-legibility SaaS body typography.
- **Monospace Font (`--font-mono`):** `JetBrains Mono` (`400`, `500`, `600`, `700`) — applied to numbered badges (`01`–`06`), emails, IDs, currencies, and timezones (`Asia/Dhaka`).

### Typographic Hierarchy

| Role | Font Family | Size (Mobile → Desktop) | Weight | Line Height | Tracking | Case | Source Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (`h1`)** | `Space Grotesk` | `36px` (`text-4xl`) → `58px` (`xl:text-[58px]`) | `900` (`font-black` / `700` max native) | `1.03` | `-0.025em` (`tracking-tight`) | `uppercase` | `HeroSection.tsx` |
| **Section Heading (`h2`)** | `Space Grotesk` | `30px` (`text-3xl`) → `46px–48px` | `800–900` (`font-black`) | `1.04–1.08` | `-0.025em` (`tracking-tight`) | `uppercase` | `FeaturesSection`, `ToolkitSection`, `WorkspaceSection`, `HowItWorksSection`, `CtaSection` |
| **Auth Showcase `h2`** | `Space Grotesk` | `36px` → `42px–44px` | `800` (`font-extrabold`) | `1.06–1.08` | `-0.025em` | Sentence | `login/page.tsx`, `register/page.tsx` |
| **Auth Form Heading (`h1`)** | `Space Grotesk` | `24px` (`text-2xl`) → `28px` | `700` (`font-bold`) | `1.2` | `-0.025em` | Sentence | `login-form.tsx`, `register-form.tsx` |
| **Card Title (`h3`)** | `Space Grotesk` | `12px–15px` | `800` (`font-extrabold`) | `1.3` | `0.04em` | `uppercase` | `FeaturesSection`, `ToolkitSection`, `HowItWorksSection` |
| **Section Eyebrow** | `Plus Jakarta Sans` | `11px` (`text-[11px]`) | `600–700` | `1.2` | `0.16em–0.20em` | `uppercase` | All Homepage sections |
| **Body Lead** | `Plus Jakarta Sans` | `14px` → `15px` (`sm:text-[15px]`) | `400` | `1.625` (`leading-relaxed`) | `normal` | Sentence | Hero & Section subtitles |
| **Card Body / UI Text** | `Plus Jakarta Sans` | `12px–14px` (`text-xs` / `text-sm`) | `400–500` | `1.5–1.6` | `normal` | Sentence | Cards, forms, footer |
| **Navigation Link** | `Plus Jakarta Sans` | `12px` (`text-xs`) | `600` (`font-semibold`) | `1.2` | `0.04em` | Title | `header.tsx` |
| **Button (`button.tsx`)** | `Plus Jakarta Sans` | `11px–12px` (marketing) / `14px` (auth) | `600–700` | `1.2` | `0.12em` (marketing) / `normal` (auth) | `uppercase` (marketing) / Title (auth) | `button.tsx`, `login-form.tsx`, `register-form.tsx` |
| **Technical Index / Code** | `JetBrains Mono` | `11px–12px` | `500–700` | `1.2` | `0.05em` | — | `ToolkitSection`, `HowItWorksSection`, `register-form.tsx` |

> **Dashboard Typography Note:** The Homepage browser mockups use `8px`–`10px` labels solely to simulate a scaled-down laptop screen inside a hero visual. In the **real** internal Dashboard (`/dashboard/*`), never render readable UI text smaller than `12px` (`text-xs`), except `11px` uppercase section micro-labels (`tracking-widest`).

---

## 7. Spacing & Layout

### Containers & Breakpoints
- **Max Content Width (Marketing Sections & Header/Footer):** `max-w-7xl` (`1280px`), centered (`mx-auto w-full`).
- **Scrolled Floating Header Width:** `max-w-4xl` (`896px`).
- **Auth Form Max Width:** `max-w-[410px]` (Login) to `max-w-[460px]` (Register).
- **Responsive Breakpoints (Tailwind v4 defaults):**
  - Mobile: `< 768px` (`360px–767px`, base + `sm: 640px`)
  - Tablet: `768px–1023px` (`md: 768px`)
  - Desktop: `≥ 1024px` (`lg: 1024px`, `xl: 1280px`)

### Spacing Scale

| Token / Pattern | Value | Where Used |
| :--- | :--- | :--- |
| **Horizontal Page Gutter** | `px-4 sm:px-6 lg:px-8` (`16px → 24px → 32px`) | All Homepage sections, Header, Footer. |
| **Marketing Section Vertical Padding** | `py-20 sm:py-24 lg:py-28` (`80px → 96px → 112px`) | `Features`, `Toolkit`, `Workspace`, `HowItWorks`. (`Hero`: `py-14 sm:py-20 lg:py-24`, `Cta`: `py-16 sm:py-20 lg:py-24`). |
| **Section Header → Content Gap** | `mt-12` (`48px`) to `mt-16` (`64px`) | `mt-14` Features, `mt-12` Toolkit, `mt-16` HowItWorks. |
| **Card Grid Gaps** | `gap-5` (`20px`) standard; `gap-8 lg:gap-8` process steps | `FeaturesSection`, `ToolkitSection`, `HowItWorksSection`. |
| **Standard Card Padding** | `p-6` (`24px`) marketing; `p-6 sm:p-8` (`24px–32px`) auth form card | `FeaturesSection`, `ToolkitSection`, `RegisterForm`. |
| **Compact Dashboard Mockup Padding** | `p-2.5` (`10px`) KPI cards; `p-3.5 sm:p-4` workspace canvas | `HeroSection`, `WorkspaceSection`. |
| **Form Field Stack Gap** | `space-y-4` to `space-y-4.5` (`16px–18px`); label-to-input `space-y-1.5` (`6px`) | `login-form.tsx`, `register-form.tsx`. |
| **Navigation Bar Height** | `h-14` (`56px`) fixed outer footprint | `header.tsx`, `mobile-nav.tsx`. |
| **Dashboard Sidebar Width (Recommended)** | `240px–256px` (`w-60` / `w-64`) expanded on desktop; collapsible/drawer below `lg` | Derived from `HeroSection` `col-span-3` proportion. |

---

## 8. Border & Radius

Fixora prefers **crisp `1px` structural borders** over heavy shadows.

### Border Styles
- **Stone Card Border:** `1px solid #E3DFD7` (hover `#D5CFC4`).
- **Auth Card & Input Border:** `1px solid #E7E5E4`.
- **Dark Card Border:** `1px solid rgba(255, 255, 255, 0.08)` (hover `0.16`).
- **Decorative Architectural Lines:** `1px` circles (`border-white/[0.04]`, `border-[#141414]/[0.12]`) and `h-px` step connectors (`bg-white/[0.12]`).

### Border Radius Scale

| Element | Class | Value | Reference |
| :--- | :--- | :--- | :--- |
| **Brand Mark Outer Corner** | `rx=16` in `100×100` SVG | `16%` | `Fixora.svg`, `logo.tsx` |
| **Inputs & Standard Buttons** | `rounded-md` / `rounded-lg` | `6px` / `8px` | `button.tsx` (`rounded-md`), `input.tsx` (`rounded-lg`) |
| **Icon Boxes & Step Badges** | `rounded-md` / `rounded-lg` | `6px` / `8px` | `FeaturesSection` (`rounded-lg`), `HowItWorks` (`rounded-md`) |
| **Feature, Toolkit & Form Cards** | `rounded-xl` | `12px` | `FeaturesSection`, `ToolkitSection`, `RegisterForm`, Browser Mockups |
| **Mockup Outer Frame & Scrolled Header** | `rounded-2xl` | `16px` | `WorkspaceSection`, `header.tsx` |
| **Pills, Avatars & Check Badges** | `rounded-full` | `9999px` | Status badges, progress bars, `login/page.tsx` pill |

---

## 9. Iconography

- **Library:** `lucide-react` (`^1.70.0`) exclusively for UI icons (`strokeWidth` between `1.9` and `2.2` — `1.9` on feature/toolkit tiles, `2.0` on standard UI, `2.5–3.0` on small `10px–12px` checkmarks).
- **Social Brand Icons:** Custom minimal SVGs in `app/components/icons/` (`facebook-icon.tsx`, `instagram-icon.tsx`, `linkedin-icon.tsx`, `youtube-icon.tsx`).
- **Standard Icon Sizes:**
  - Inline buttons & inputs: `size-3.5` to `size-4` (`14px`–`16px`)
  - Feature / Toolkit card icon badge: `size-9` (`36px`) or `size-10` (`40px`) container with `size-4` (`16px`) icon
  - Auth header badge: `size-10` (`40px`) container with `size-4.5` (`18px`) icon
  - Mobile menu / standalone triggers: `size-4.5` (`18px`)
- **Restraint Rule:** Never place decorative icons beside every section heading or list item. Use icons only inside dedicated icon containers, form input prefixes, buttons, and status indicators.

---

## 10. Buttons

Base styles live in `app/components/ui/button.tsx`.

### Variants

| Variant | Background | Text | Border | Hover State | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary (Brand Marketing)** | `#EF682E` (`button.tsx`) or `#E86A17` (`HeroSection`) | `#141414` (`font-bold`) or `#FFFFFF` | None | `#E05C22` / `#D45E12` | Primary CTAs (`Get Started`). Prefer `#141414` text on `#EF682E` for 5.87:1 contrast. |
| **Primary (Form / Auth CTA)** | `#D97706` (`Register`) / `#E07009` (`Login`) | `#FFFFFF` (`font-semibold`) | None | `#B45309` / `#C86106` | `Sign In`, `Create Account`, `Back to Sign In`. |
| **Secondary** | `#141414` | `#FFFFFF` | None | `#222222` | High-contrast CTA inside `#EF682E` banner (`CtaSection.tsx`). |
| **Outline** | `transparent` | `#141414` | `1px solid #141414/20` | `bg-[#141414]/5` | Header `Sign In`, secondary table/toolbar actions. |
| **Ghost** | `transparent` | `#141414/80` (light) / `neutral-200` (dark) | None | `bg-[#141414]/5` / `bg-white/5` | Mobile drawer nav links, `Explore Features` on dark hero. |
| **Destructive** | `#DC2626` (`bg-red-600`) | `#FFFFFF` | None | `bg-red-700` | Delete / revoke access / irreversible actions (always confirm first). |
| **Icon Button** | Inherits `outline` or `ghost` | `#141414` | `1px solid #141414/20` (`outline`) | Subtle `5%` tint | `size="icon"` (`36×36`), password visibility toggle (`size-7`). |

### Dimensions & Typography
- Sizes from `button.tsx`: `sm` (`h-9 px-3.5 text-[11px]`), `default` (`h-10 px-4 text-xs`), `lg` (`h-11 px-6 text-xs`), `icon` (`h-9 w-9`).
- Form submit buttons: Full width, `h-11` (`44px`), `rounded-lg`, `text-sm font-semibold` (sentence case).
- Focus state: `focus-visible:ring-2 focus-visible:ring-[#EF682E]` (or `#D97706/45` with `ring-offset-2` on forms).
- Disabled state: `disabled:pointer-events-none disabled:opacity-50` (with `cursor-not-allowed` on native `<button>`).

---

## 11. Cards & Surfaces

1. **Standard Stone Card (`FeaturesSection.tsx`):**
   - `rounded-xl border border-[#E3DFD7] bg-[#F7F5F0] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#D5CFC4]`
2. **Dark Toolkit Card (`ToolkitSection.tsx`):**
   - `rounded-xl border border-white/[0.08] bg-[#1C1C1C] p-6 hover:border-white/[0.16] hover:bg-[#202020]`
3. **White Auth / Operational Card (`register-form.tsx`, Dashboard panels):**
   - `rounded-xl border border-[#E7E5E4] bg-white p-6 sm:p-8 shadow-[0_2px_10px_rgba(20,20,20,0.03)]`
4. **KPI / Stat Card (Dashboard mockup):**
   - `rounded-lg border border-neutral-200/80 bg-white p-4` (real dashboard; `p-2.5` in scaled mockup) — Label at top, primary metric (`font-bold` / `font-heading`) + inline sparkline or micro-bars, bottom trend caption.
5. **Information / Notice Callout (`register-form.tsx`):**
   - `rounded-xl border border-amber-200/90 bg-amber-50/75 p-3.5` with `Info` icon (`#D97706`) and concise plain-English guidance.
6. **Glass Showcase Card (`login/page.tsx`, `register/page.tsx`):**
   - Used **only** over dark photographic panels: `rounded-xl border border-white/15 bg-black/45 p-4 backdrop-blur-md`. Do not use glassmorphism on regular white/stone dashboard pages.

---

## 12. Forms & Inputs

Derived from `app/components/ui/input.tsx`, `label.tsx`, `login-form.tsx`, and `register-form.tsx`:

- **Input (`input.tsx`):** `h-11` (`44px`), `rounded-lg`, `border border-[#E7E5E4]`, `bg-white`, `text-sm text-[#141414]`, `placeholder:text-neutral-400`. Left icon padding `pl-10` with `size-4 text-neutral-400` prefix icon; right adornment padding `pr-11`.
- **Label (`label.tsx`):** `text-xs font-semibold text-[#141414]`, `space-y-1.5` above input. Optional fields display a right-aligned `text-[11px] font-medium text-neutral-400` `"Optional"` tag.
- **Focus & Error States:**
  - Focus: `border-[#D97706] ring-2 ring-[#D97706]/15`
  - Error: `border-red-400 focus:border-red-500 focus:ring-red-500/15`, accompanied by `AlertCircle` (`size-3.5`) + `text-xs font-medium text-red-600` directly beneath the control.
- **Textarea / Select / Date Picker (Dashboard Standard):** Inherit the exact `border-[#E7E5E4] bg-white rounded-lg text-sm focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/15` token set (`min-h-[96px] py-2.5 px-3.5` for textarea; `h-10` or `h-11` for toolbar selects & date pickers).
- **Checkbox / Radio / Switch (Dashboard Standard):** `16×16` (`size-4`) rounded checkbox (`rounded` for checkbox, `rounded-full` for radio), checked fill `#D97706` / `#E07009` with white `#FFFFFF` indicator, unchecked `border-neutral-300 bg-white`. Switches use `bg-neutral-200` off / `bg-[#E86A17]` on with crisp white thumb.
- **Validation Architecture:** Use `react-hook-form` + `zod` (`@hookform/resolvers/zod`) for multi-field and operational forms with inline validation.

---

## 13. Navigation

- **Marketing Header (`header.tsx`):**
  - Outer shell: `pointer-events-none sticky top-0 z-50 w-full` (prevents page jump).
  - Inner bar: Full-width `bg-[#F7F5F0]/95 border-b-[#E3DFD7]/80` at `y=0`, smoothly transitioning (`500ms cubic-bezier(0.22,1,0.36,1)`) into a centered floating pill (`md:max-w-4xl md:translate-y-3 md:rounded-2xl md:border-[#E3DFD7]/90 md:bg-white/90 md:shadow-[0_12px_32px_-12px_rgba(20,20,20,0.16)]`) once `scrollY > 24`.
  - Mobile (`< md`): Single-row `h-14` bar with `Logo` + `MenuIcon`/`XIcon` outline toggle opening `Portal` overlay (`mobile-nav.tsx`).
- **Dashboard Sidebar (derived from `HeroSection.tsx`, `WorkspaceSection.tsx`, `dashboard.ts`):**
  - Left column (`bg-neutral-50/60` / `#FAFAFA`, `border-r border-neutral-200/70`).
  - Top `Logo`, uppercase `"Workspace"` group label (`text-[11px] tracking-widest text-neutral-400`), nav items (`rounded-md px-2.5 py-2 text-sm font-medium`), active item `bg-[#E86A17]/12 text-[#E86A17] font-semibold`, bottom user avatar + role footer.
  - Navigation visibility is strictly filtered by `UserRole` (`getNavForRole(role)` in `app/config/dashboard.ts`).
- **Breadcrumbs & Tabs (Dashboard Standard):**
  - Breadcrumbs: `text-xs text-neutral-500` with `ChevronRight` (`size-3.5`) separators, final segment `font-semibold text-[#141414]`.
  - Tabs: Clean bottom-border underline (`border-b border-[#E7E5E4]`, active `border-b-2 border-[#E86A17] text-[#141414] font-semibold`) or subtle stone pill track (`bg-[#F7F5F0] p-1 rounded-lg`).

---

## 14. Tables & Data Visualization

Derived from the Homepage's Active Projects list, KPI Sparklines, Progress Bars, and Budget Donut (`HeroSection.tsx`, `WorkspaceSection.tsx`):

- **Tables & Project Lists:**
  - Wrap inside `rounded-xl border border-[#E7E5E4] bg-white overflow-hidden`.
  - Header row: `bg-neutral-50/80 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 border-b border-neutral-200/80`.
  - Row height: `min-h-[52px]` with `px-4 py-3`, subtle `hover:bg-[#FAFAF9]` row state, `1px` `border-neutral-100` dividers.
  - Project/entity initials badge: `size-8 rounded-md bg-amber-100 text-amber-800 font-bold text-xs` (from `HeroSection.tsx`).
  - Numeric columns (budgets, quantities, percentages) use `font-mono tabular-nums` for vertical alignment.
- **Data Visualization Rules:**
  - **Primary Series:** `#E86A17` (spent/active/primary) paired with `#E5E7EB` / `neutral-200` (remaining/baseline) and `#E86A17/35` (historical bars).
  - **Progress Bars:** `h-1.5 w-full rounded-full bg-neutral-100` with `#E86A17` fill (`rounded-full`).
  - **Donut / Gauge:** Clean two-tone ring (`#E86A17` utilized vs `#E5E7EB` remaining) with centered `font-heading` percentage readout.
  - Avoid rainbow 6-color pie charts or 3D chart effects.

---

## 15. Status & Feedback

- **Status Badges (`HeroSection.tsx`, `register-form.tsx`):**
  - `rounded-full border px-2.5 py-0.5 text-[11px] font-semibold` (e.g., `On track` emerald, `In review` amber, `Pending Admin Approval` amber with `size-1.5` dot).
- **Dialogs & Dropdowns:**
  - `rounded-xl border border-[#E7E5E4] bg-white shadow-[0_18px_45px_rgba(20,20,20,0.10)]`; backdrop `bg-[#141414]/40 backdrop-blur-[2px]`.
- **Tooltips & Notifications (Toasts):**
  - Tooltips: Compact dark `#141414` surface, `text-white text-xs rounded-md px-2.5 py-1.5 shadow-md`.
  - Notifications / Floating Status Cards (from `HeroSection.tsx` line 486): `rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 shadow-lg` with semantic left icon (`CheckCircle2`, `AlertCircle`, `Info`) and concise timestamp.
- **Empty, Loading & Error States:**
  - **Loading:** Inline `Loader2` (`animate-spin`) inside buttons; calm `bg-[#EFECE6]/60 animate-pulse rounded-lg` skeleton blocks matching card geometry.
  - **Empty State:** Centered `rounded-xl border border-dashed border-[#E3DFD7] bg-[#F7F5F0]/60 p-10` with single muted icon, concise title, 1-line explanation, and 1 primary action button.
  - **Error State:** Clear red inline alert (`border-red-200 bg-red-50 text-red-700`) with `AlertCircle` and actionable retry/next step.

---

## 16. Responsive Design

| Viewport | Navigation | Layout & Grids | Typography | Tables & Forms |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`360px–767px`)** | `h-14` sticky bar + `Portal` mobile drawer (`mobile-nav.tsx`). | Single-column (`grid-cols-1`); Auth hides dark photo panel (`hidden lg:flex`) and shows compact top bar. | Display `h1`: `36px` (`text-4xl`); `h2`: `30px` (`text-3xl`); comfortable `14px` inputs. | Horizontal scroll wrapper (`overflow-x-auto`) or stacked summary rows for dense tables; full-width stacked buttons. |
| **Tablet (`768px–1023px`)** | Desktop nav links visible (`md:flex`); header transitions to floating `max-w-4xl` pill on scroll. | 2-column grids (`sm:grid-cols-2` Features, `md:grid-cols-2` Toolkit, `sm:grid-cols-2` Steps). | `h1`: `48px` (`sm:text-5xl`); `h2`: `36px` (`sm:text-4xl`). | Multi-column form rows (`sm:grid-cols-2` for password rules); 2-col footer links (`md:grid-cols-4`). |
| **Desktop (`≥ 1024px`)** | Floating header pill (`max-w-4xl`), full dashboard sidebar (`240px–256px`). | Asymmetric 12-col splits (`Hero`, `Workspace`), 4-col Features/Steps, 3-col Toolkit, 50/50 Split Auth. | `h1`: `58px` (`xl:text-[58px]`); `h2`: `46–48px`. | Full multi-column data tables with inline progress bars and action menus. |

---

## 17. Interaction & Motion

- **Scroll Navigation (`use-scroll.tsx`, `header.tsx`):** `requestAnimationFrame`-throttled passive scroll listener with hysteresis (`downThreshold = 24`, `upThreshold = 8`). Smooth header morph uses `duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]` on GPU-friendly transforms (`translate-y-3`) and `max-width` without shifting document flow.
- **Anchor Scrolling:** `html { scroll-behavior: smooth }` + `section[id] { scroll-margin-top: 5.5rem }`.
- **Micro-Interactions:**
  - Diagonal arrow lift on primary CTAs: `group-hover:translate-x-0.5 group-hover:-translate-y-0.5` (`duration-200`).
  - Horizontal arrow nudge on text links: `group-hover:translate-x-1` (`duration-200`).
  - Tactile button press: `active:scale-[0.99]`.
  - Footer reveal (`Footer.tsx`): Subtle `motion/react` `whileInView` fade (`duration: 0.7`, `viewport: { once: true }`), **respecting `useReducedMotion()`**.
- **Rule:** Keep UI transitions fast (`150ms–250ms` for controls, `500ms` max for layout morphs). Never block data entry with slow entrance animations on internal dashboard pages.

---

## 18. Dashboard Design Principles

The internal Dashboard (`app/dashboard/*`) translates the Homepage's visual identity into a **data-dense, high-efficiency workspace** (guided by `app/config/dashboard.ts` and the browser previews in `HeroSection.tsx` / `WorkspaceSection.tsx`):

1. **Calm Operational Surfaces:** Use `#FAFAF9` or `#F7F5F0` as the main dashboard canvas with crisp `#FFFFFF` cards (`border-[#E7E5E4]` / `border-neutral-200/80`) — reserve `#141414` dark blocks only if a dedicated dark sidebar or dark theme is intentionally toggled; do not alternate dark/light bands inside the app shell.
2. **Role-Aware Clarity (`dashboard.ts`):** Tailor navigation, KPI cards, and available actions strictly by `UserRole` (`admin`, `manager`, `contractor`, `client`) via `getNavForRole()` and `dashboardPermissions`.
3. **Dense but Breathable:** Use compact `16px–20px` card padding (`p-4` to `p-5`) and `gap-4` / `gap-5` grids rather than `py-28` marketing whitespace.
4. **Action Hierarchy:** One primary `#E86A17` / `#EF682E` CTA per page header (e.g., `+ New project`), paired with `outline` secondary filters and `ghost` row actions.
5. **Realistic Construction Data:** Express real project locations, milestones, material stock levels, budgets (localized consistently, e.g., `৳` / BDT or configurable currency), and contractor logs.

---

## 19. Authentication Design Principles

Derived from `app/login/page.tsx` and `app/register/page.tsx`:

1. **50/50 Split-Screen Architecture:**
   - **Left (`hidden lg:flex`):** Moody construction site photograph (`/image/login-image.jfif`) with dark gradient vignette (`#0C0D0F/90` → `#121315/78` → `#1F1308/88`), `Logo` + `CONSTRUCTION INTELLIGENCE`, pill badge, concise headline with amber accent, and 3 glass capability cards.
   - **Right:** Clean white (`#FFFFFF`) or warm off-white (`#FAFAF9`) centered form container (`max-w-[410px]–460px`), mobile compact header (`lg:hidden`), and minimal legal/copyright footer (`© 2026 Fixora`, `Privacy Policy`, `Terms & Conditions`, `Asia/Dhaka` where relevant).
2. **Security & Governance by Design:**
   - Public registration **never** exposes role selection (`Admin`, `Manager`, `Contractor`, `Client`).
   - Always show the Admin-approval information notice before account creation and a clear `"Registration Received!"` pending-approval confirmation state afterward.
   - Support password visibility toggles, live password strength feedback, and accessible inline validation.

---

## 20. Do's and Don'ts

### Do
- **Do** use the Homepage's `#141414` / `#EFECE6` / `#E86A17` architectural palette and `Space Grotesk` + `Plus Jakarta Sans` + `JetBrains Mono` stack.
- **Do** vary layout structures based on content (split panels, numbered grids, timeline steps, dense tables).
- **Do** verify foreground/background contrast (`≥ 4.5:1` for normal text; use `#141414` on `#EF682E` or `#B45309` on white for small text).
- **Do** keep borders `1px` crisp (`#E3DFD7`, `#E7E5E4`, `white/10`) and shadows minimal.
- **Do** respect `useReducedMotion()` on scroll/entrance animations.

### Don't
- **Don't** invent unrelated purple/blue SaaS gradients, neon glows, or generic AI-template hero blobs.
- **Don't** wrap every heading, paragraph, or small label inside rounded cards or excessive pill badges.
- **Don't** put decorative icons beside every heading or subheading.
- **Don't** use `#E86A17` or `#D97706` for tiny `11px` body links on light backgrounds (contrast < 3.5:1).
- **Don't** allow self-assigned roles on public auth forms or copy marketing `py-28` spacing into internal dashboard tables.

---

## 21. Design Token Reference

> **Note:** Tokens below capture the established Fixora palette and layout primitives from `app/globals.css`, `app/layout.tsx`, the Homepage, and Auth pages.

```css
:root {
  /* Brand & Accent */
  --fixora-mark: #ff6b00;
  --fixora-primary: #e86a17;
  --fixora-primary-hover: #d45e12;
  --fixora-cta: #ef682e;
  --fixora-cta-hover: #e05c22;
  --fixora-amber: #d97706;
  --fixora-amber-hover: #b45309;
  --fixora-amber-highlight: #f59e0b;

  /* Surfaces & Backgrounds */
  --fixora-bg-dark: #141414;
  --fixora-surface-dark: #1c1c1c;
  --fixora-surface-dark-hover: #202020;
  --fixora-bg-stone: #efece6;
  --fixora-surface-stone: #f7f5f0;
  --fixora-bg-warm: #fafaf9;
  --fixora-surface-white: #ffffff;

  /* Text */
  --fixora-ink-primary: #141414;
  --fixora-ink-strong: #111111;
  --fixora-ink-secondary: #55524c;
  --fixora-ink-muted: #6e6a63;
  --fixora-ink-on-dark: #ffffff;
  --fixora-ink-muted-dark: #a3a3a3;

  /* Borders */
  --fixora-border-stone: #e3dfd7;
  --fixora-border-stone-hover: #d5cfc4;
  --fixora-border-auth: #e7e5e4;
  --fixora-border-dark: rgba(255, 255, 255, 0.08);

  /* Typography */
  --font-sans: var(--font-jakarta), ui-sans-serif, system-ui, sans-serif;
  --font-heading: var(--font-space-grotesk), var(--font-jakarta), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, monospace;

  /* Radius & Layout */
  --radius-control: 0.375rem; /* 6px — rounded-md */
  --radius-input: 0.5rem;     /* 8px — rounded-lg */
  --radius-card: 0.75rem;     /* 12px — rounded-xl */
  --radius-frame: 1rem;       /* 16px — rounded-2xl */
  --container-marketing: 80rem; /* 1280px — max-w-7xl */
  --container-pill-nav: 56rem;  /* 896px — max-w-4xl */
  --header-height: 3.5rem;      /* 56px — h-14 */
}
```

---

## Appendix: Observed Codebase Inconsistencies & Consolidation Roadmap

During inspection of the existing codebase, the following discrepancies were identified. Future UI work should resolve these incrementally rather than introducing new variations:

1. **Orange Hex Drift (`#FF6B00`, `#E86A17`, `#EF682E`, `#E07009`, `#D97706`):** Five slightly different oranges currently appear across SVG, Homepage, Button, Login, and Register. *Recommendation:* Define canonical semantic CSS tokens (`--fixora-primary`, `--fixora-cta`, `--fixora-amber-text`) in `app/globals.css` and migrate hardcoded hex classes over time.
2. **Primary Button Text Ink (`#141414` vs `#FFFFFF`):** `button.tsx` (`default`) uses `#141414` on `#EF682E` (**5.87:1**), whereas `HeroSection`, `LoginForm`, and `RegisterForm` override to `#FFFFFF` on orange/amber (**3.19–3.24:1**). *Recommendation:* Standardize light-text primary buttons onto `#B45309` (**5.02:1**) or keep `#141414` ink on `#EF682E` (**5.87:1**).
3. **Light Surface & Border Drift (`#EFECE6`/`#E3DFD7` vs `#FAFAF9`/`#E7E5E4`):** Homepage uses warm architectural stone (`#EFECE6` / `#E3DFD7`) while Register uses `#FAFAF9` / `#E7E5E4`. *Recommendation:* Treat `#EFECE6` / `#F7F5F0` as marketing stone and `#FAFAF9` / `#FFFFFF` as application/form canvas, mapped cleanly to semantic tokens.
4. **Currency & Localization Split:** Hero/Workspace mockups show USD (`$4.82M`), while Login uses `"Every Taka"` (`Across Chattogram`) and Register shows `Asia/Dhaka`. *Recommendation:* Use `৳` (BDT) or a unified currency formatter in real dashboard views to match the Bangladesh construction market context.
5. **Broken/Unbuilt Routes Linked in UI:** `/privacy`, `/terms`, `/dashboard/*`, and forgot-password routes are referenced in links (`Footer.tsx`, `login-form.tsx`, `register-form.tsx`, `dashboard.ts`) but do not yet have page implementations. *Recommendation:* Follow this `DESIGN.md` when scaffolding `/dashboard/*`, `/privacy`, and `/terms`.
6. **Pre-existing ESLint Image Warning (`HeroSection.tsx:168`):** Uses a raw `<img>` tag for an external Unsplash URL instead of `next/image`. *Recommendation:* Migrate to local asset or configured `next/image` during future Homepage maintenance.
