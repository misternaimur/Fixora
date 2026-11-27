import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/shared/header";
import { Footer } from "@/app/components/shared/Footer";

export const metadata: Metadata = {
	title: "Privacy Policy — Fixora",
	description:
		"How Fixora handles workspace, project, and user account information.",
};

export default function PrivacyPage() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-[#efece6] font-sans">
			<Header />
			<main className="flex-1 py-16 sm:py-20">
				<div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
					<p className="text-[11px] font-semibold tracking-[0.2em] text-[#B8470A] uppercase">
						Legal &amp; Governance
					</p>
					<h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-[#141414] uppercase sm:text-4xl">
						Privacy Policy
					</h1>
					<p className="mt-3 text-sm text-[#6e6a63]">
						Last updated: November 2026 · Timezone: Asia/Dhaka
					</p>

					<div className="mt-8 space-y-6 rounded-xl border border-[#e3dfd7] bg-[#f7f5f0] p-6 text-sm leading-relaxed text-[#55524c] sm:p-8">
						<section>
							<h2 className="font-heading text-base font-bold text-[#141414] uppercase">
								1. Workspace Data Ownership
							</h2>
							<p className="mt-2">
								All construction project schedules, budgets, material logs, and
								contractor records entered into Fixora remain the property of
								your organization and are isolated within your company workspace.
							</p>
						</section>

						<section>
							<h2 className="font-heading text-base font-bold text-[#141414] uppercase">
								2. Account Registration &amp; Role Control
							</h2>
							<p className="mt-2">
								Information collected during registration (full name, work
								email, and optional phone number) 
							</p>
						</section>

						<section>
							<h2 className="font-heading text-base font-bold text-[#141414] uppercase">
								3. Security &amp; Access Logs
							</h2>
							<p className="mt-2">
								Fixora enforces role-based access control across Admin, Project
								Manager, Site Contractor, and Client Viewer roles to protect
								sensitive site financials and operational documents.
							</p>
						</section>
					</div>

					<div className="mt-6 flex items-center gap-4 text-xs font-semibold">
						<Link
							href="/register"
							className="text-[#B45309] hover:text-[#92400E] hover:underline"
						>
							Back to Registration
						</Link>
						<span aria-hidden="true" className="text-neutral-400">
							·
						</span>
						<Link
							href="/terms"
							className="text-[#141414] hover:underline"
						>
							Terms &amp; Conditions
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
