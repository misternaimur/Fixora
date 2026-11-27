"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	ChevronDown,
	Loader2,
	Lock,
	Mail,
	ShieldCheck,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { roleMeta, type UserRole } from "@/app/config/dashboard";
import { Badge, type BadgeVariant } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { PasswordInput } from "@/app/components/ui/password-input";

const demoAccounts: {
	role: UserRole;
	email: string;
	badgeVariant: BadgeVariant;
}[] = [
	{
		role: "admin",
		email: "admin@fixora.com",
		badgeVariant: "brand",
	},
	{
		role: "manager",
		email: "manager@fixora.com",
		badgeVariant: "success",
	},
	{
		role: "contractor",
		email: "contractor@fixora.com",
		badgeVariant: "info",
	},
	{
		role: "client",
		email: "client@fixora.com",
		badgeVariant: "neutral",
	},
];

export function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(true);
	const [demoOpen, setDemoOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedDemoRole, setSelectedDemoRole] = useState<UserRole | null>(
		null
	);
	const [statusMessage, setStatusMessage] = useState<{
		type: "success" | "error" | "info";
		text: string;
	} | null>(null);

	const handleSelectDemo = (account: (typeof demoAccounts)[number]) => {
		setEmail(account.email);
		setPassword("FixoraDemo@2026");
		setSelectedDemoRole(account.role);
		setStatusMessage(null);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email.trim() || !password.trim()) {
			setStatusMessage({
				type: "error",
				text: "Please enter both your work email address and password.",
			});
			return;
		}

		setIsSubmitting(true);
		setStatusMessage(null);
		await new Promise((resolve) => setTimeout(resolve, 450));
		setIsSubmitting(false);

		setStatusMessage({
			type: "success",
			text: `Credentials ready for ${email}. Connect your authentication handler to complete sign-in.`,
		});
	};

	return (
		<div className="w-full max-w-[410px]">
			{/* Top Lock Icon Badge */}
			<div className="inline-flex size-10 items-center justify-center rounded-xl border border-[#D97706]/20 bg-[#D97706]/10 text-[#B45309]">
				<Lock className="size-4.5" strokeWidth={2} />
			</div>

			{/* Header */}
			<div className="mt-5">
				<h1 className="font-heading text-2xl font-bold tracking-tight text-[#141414] sm:text-[28px]">
					Welcome back!
				</h1>
				<p className="mt-1.5 text-sm text-neutral-500">
					Sign in to access your Fixora workspace.
				</p>
			</div>

			{/* Sign In Form */}
			<form className="mt-7 space-y-4.5" onSubmit={handleSubmit} noValidate>
				{/* Email Field */}
				<div className="space-y-1.5">
					<Label htmlFor="login-email">Email Address</Label>
					<div className="relative">
						<Mail
							className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
							aria-hidden="true"
						/>
						<Input
							id="login-email"
							name="email"
							type="email"
							autoComplete="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setSelectedDemoRole(null);
								if (statusMessage) setStatusMessage(null);
							}}
							placeholder="Enter your work email..."
							className="pl-10"
						/>
					</div>
				</div>

				{/* Password Field */}
				<div className="space-y-1.5">
					<Label htmlFor="login-password">Password</Label>
					<PasswordInput
						id="login-password"
						name="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							if (statusMessage) setStatusMessage(null);
						}}
						placeholder="Enter your password..."
					/>
				</div>

				{/* Remember Me & Forgot Password */}
				<div className="flex items-center justify-between pt-0.5">
					<div className="inline-flex items-center gap-2">
						<Checkbox
							id="login-remember"
							checked={rememberMe}
							onCheckedChange={setRememberMe}
						/>
						<label
							htmlFor="login-remember"
							className="cursor-pointer text-xs font-medium text-neutral-600 select-none"
						>
							Remember me
						</label>
					</div>

					<button
						type="button"
						onClick={() =>
							setStatusMessage({
								type: "info",
								text: "Contact your company workspace Admin or check your work email to reset your password.",
							})
						}
						className="cursor-pointer text-xs font-semibold text-[#B45309] transition-colors hover:text-[#92400E] hover:underline focus-visible:ring-2 focus-visible:ring-[#B45309]/35 focus-visible:outline-none"
					>
						Forgot password?
					</button>
				</div>

				{/* Status Feedback */}
				{statusMessage && (
					<div
						role="status"
						className={cn(
							"rounded-lg border px-3.5 py-2.5 text-xs font-medium",
							statusMessage.type === "error" &&
								"border-red-200 bg-red-50 text-red-700",
							statusMessage.type === "success" &&
								"border-emerald-200 bg-emerald-50 text-emerald-700",
							statusMessage.type === "info" &&
								"border-amber-200 bg-amber-50/80 text-amber-950"
						)}
					>
						{statusMessage.text}
					</div>
				)}

				{/* Submit Button */}
				<Button
					type="submit"
					variant="amber"
					disabled={isSubmitting}
					className="group h-11 w-full rounded-lg text-sm tracking-normal normal-case"
				>
					{isSubmitting ? (
						<>
							<Loader2 className="size-4 animate-spin" />
							<span>Signing In...</span>
						</>
					) : (
						<>
							<span>Sign In</span>
							<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
						</>
					)}
				</Button>
			</form>

			{/* Divider */}
			<div className="relative my-6 flex items-center">
				<div className="h-px flex-1 bg-neutral-200" />
				<span className="px-3 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
					OR
				</span>
				<div className="h-px flex-1 bg-neutral-200" />
			</div>

			{/* Register Link */}
			<p className="text-center text-xs font-medium text-neutral-500">
				Don&apos;t have an account?{" "}
				<Link
					href="/register"
					className="font-semibold text-[#B45309] transition-colors hover:text-[#92400E] hover:underline"
				>
					Create an account
				</Link>
			</p>

			{/* Try Demo Accounts Expandable Card */}
			<div className="mt-5 overflow-hidden rounded-xl border border-[#E7E5E4] bg-white transition-colors">
				<button
					type="button"
					onClick={() => setDemoOpen((prev) => !prev)}
					aria-expanded={demoOpen}
					className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left transition-colors hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-[#B45309]/35 focus-visible:outline-none"
				>
					<span className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#141414]">
						<ShieldCheck className="size-4 text-[#B45309]" />
						<span>Try Demo Accounts</span>
					</span>
					<ChevronDown
						className={cn(
							"size-4 text-neutral-400 transition-transform duration-200",
							demoOpen && "rotate-180"
						)}
					/>
				</button>

				{demoOpen && (
					<div className="space-y-1.5 border-t border-neutral-100 bg-[#FAFAF9] p-2.5">
						{demoAccounts.map((account) => {
							const meta = roleMeta[account.role];
							const isSelected = selectedDemoRole === account.role;
							return (
								<button
									key={account.role}
									type="button"
									onClick={() => handleSelectDemo(account)}
									className={cn(
										"flex w-full cursor-pointer items-center justify-between rounded-lg border px-3 py-2 text-left transition-all",
										isSelected
											? "border-[#B45309]/45 bg-[#FF6B00]/6"
											: "border-transparent bg-white hover:border-neutral-200"
									)}
								>
									<div className="min-w-0">
										<p className="text-xs font-semibold text-[#141414]">
											{meta.label}
										</p>
										<p className="truncate font-mono text-[11px] text-neutral-500">
											{account.email}
										</p>
									</div>
									<Badge
										variant={account.badgeVariant}
										className="ml-2 shrink-0 rounded-md px-2 text-[10px]"
									>
										{meta.shortLabel}
									</Badge>
								</button>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
