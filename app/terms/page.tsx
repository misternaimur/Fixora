import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/shared/header";
import { Footer } from "@/app/components/shared/Footer";

export const metadata: Metadata = {
	title: "Terms & Conditions — Fixora",
	description: "Terms of use and workspace governance for Fixora.",
};

export default function TermsPage() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-[#efece6] font-sans">
			<Header />
			<main className="flex-1 py-16 sm:py-20">
				<div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
					<p className="text-[11px] font-semibold tracking-[0.2em] text-[#B8470A] uppercase">
						Legal &amp; Governance
					</p>
					<h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-[#141414] uppercase sm:text-4xl">
						Terms &amp; Conditions
					</h1>
					<p className="mt-3 text-sm text-[#6e6a63]">
						Last updated: November 2026 · Timezone: Asia/Dhaka
					</p>

					<div className="mt-8 space-y-6 rounded-xl border border-[#e3dfd7] bg-[#f7f5f0] p-6 text-sm leading-relaxed text-[#55524c] sm:p-8">
						<section>
							<h2 className="font-heading text-base font-bold text-[#141414] uppercase">
								1. Authorized Workspace Access
							</h2>
							<p className="mt-2">
								Access to Fixora company workspaces requires explicit review and
								role assignment by an authorized Workspace Admin. Public
								registration requests do not grant operational permissions
								automatically.
							</p>
						</section>

						<section>
							<h2 className="font-heading text-base font-bold text-[#141414] uppercase">
								2. Acceptable Platform Use
							</h2>
							<p className="mt-2">
								Users agree to maintain accurate site logs, protect their login
								credentials, and access only projects, budgets, and materials
								authorized for their assigned organizational role.
							</p>
						</section>

						<section>
							<h2 className="font-heading text-base font-bold text-[#141414] uppercase">
								3. Service Availability
							</h2>
							<p className="mt-2">
								Fixora provides continuous workspace availability and scheduled
								maintenance windows aligned with regional operational hours
								(Asia/Dhaka).
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
							href="/privacy"
							className="text-[#141414] hover:underline"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
