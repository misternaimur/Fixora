"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	Check,
	ChevronDown,
	Eye,
	EyeOff,
	Lock,
	Mail,
	ShieldCheck,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { roleMeta, type UserRole } from "@/app/config/dashboard";

const demoAccounts: {
	role: UserRole;
	email: string;
	password: string;
	badgeClass: string;
}[] = [
	{
		role: "admin",
		email: "admin@fixora.com",
		password: "••••••••••••",
		badgeClass: "bg-[#FF6B00]/12 text-[#c85600] border-[#FF6B00]/25",
	},
	{
		role: "manager",
		email: "manager@fixora.com",
		password: "••••••••••••",
		badgeClass: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
	},
	{
		role: "contractor",
		email: "contractor@fixora.com",
		password: "••••••••••••",
		badgeClass: "bg-sky-500/10 text-sky-700 border-sky-500/20",
	},
	{
		role: "client",
		email: "client@fixora.com",
		password: "••••••••••••",
		badgeClass: "bg-neutral-500/10 text-neutral-700 border-neutral-300",
	},
];

export function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(true);
	const [demoOpen, setDemoOpen] = useState(false);
	const [selectedDemoRole, setSelectedDemoRole] = useState<UserRole | null>(
		null
	);
	const [statusMessage, setStatusMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);

	const handleSelectDemo = (account: (typeof demoAccounts)[number]) => {
		setEmail(account.email);
		setPassword("FixoraDemo@2026");
		setSelectedDemoRole(account.role);
		setStatusMessage(null);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email.trim() || !password.trim()) {
			setStatusMessage({
				type: "error",
				text: "Please enter both your work email address and password.",
			});
			return;
		}

		setStatusMessage({
			type: "success",
			text: `Credentials ready for ${email}. Connect your authentication handler to complete sign-in.`,
		});
	};

	return (
		<div className="w-full max-w-[410px]">
			{/* Top Lock Icon Badge */}
			<div className="inline-flex size-10 items-center justify-center rounded-xl border border-[#FF6B00]/15 bg-[#FF6B00]/10 text-[#e07009]">
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
					<label
						htmlFor="login-email"
						className="block text-xs font-semibold text-[#141414]"
					>
						Email Address
					</label>
					<div className="relative">
						<Mail
							className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
							aria-hidden="true"
						/>
						<input
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
							className="h-11 w-full rounded-lg border border-neutral-200 bg-white pr-3.5 pl-10 text-sm text-[#141414] placeholder:text-neutral-400 transition-colors focus:border-[#e07009] focus:ring-2 focus:ring-[#e07009]/15 focus:outline-none"
						/>
					</div>
				</div>

				{/* Password Field */}
				<div className="space-y-1.5">
					<label
						htmlFor="login-password"
						className="block text-xs font-semibold text-[#141414]"
					>
						Password
					</label>
					<div className="relative">
						<Lock
							className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
							aria-hidden="true"
						/>
						<input
							id="login-password"
							name="password"
							type={showPassword ? "text" : "password"}
							autoComplete="current-password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								if (statusMessage) setStatusMessage(null);
							}}
							placeholder="Enter your password..."
							className="h-11 w-full rounded-lg border border-neutral-200 bg-white pr-11 pl-10 text-sm text-[#141414] placeholder:text-neutral-400 transition-colors focus:border-[#e07009] focus:ring-2 focus:ring-[#e07009]/15 focus:outline-none"
						/>
						<button
							type="button"
							onClick={() => setShowPassword((prev) => !prev)}
							aria-label={showPassword ? "Hide password" : "Show password"}
							className="absolute top-1/2 right-2.5 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
						>
							{showPassword ? (
								<EyeOff className="size-4" />
							) : (
								<Eye className="size-4" />
							)}
						</button>
					</div>
				</div>

				{/* Remember Me & Forgot Password */}
				<div className="flex items-center justify-between pt-0.5">
					<label className="inline-flex cursor-pointer items-center gap-2 select-none">
						<button
							type="button"
							role="checkbox"
							aria-checked={rememberMe}
							onClick={() => setRememberMe((prev) => !prev)}
							className={cn(
								"flex size-4 items-center justify-center rounded border transition-colors focus-visible:ring-2 focus-visible:ring-[#e07009]/30 focus-visible:outline-none",
								rememberMe
									? "border-[#e07009] bg-[#e07009] text-white"
									: "border-neutral-300 bg-white text-transparent hover:border-neutral-400"
							)}
						>
							<Check className="size-3" strokeWidth={3} />
						</button>
						<span className="text-xs font-medium text-neutral-600">
							Remember me
						</span>
					</label>

					<Link
						href="#"
						className="text-xs font-semibold text-[#d96b08] transition-colors hover:text-[#b85604] hover:underline"
					>
						Forgot password?
					</Link>
				</div>

				{/* Status Feedback */}
				{statusMessage && (
					<div
						role="status"
						className={cn(
							"rounded-lg border px-3.5 py-2.5 text-xs font-medium",
							statusMessage.type === "error"
								? "border-red-200 bg-red-50 text-red-700"
								: "border-emerald-200 bg-emerald-50 text-emerald-700"
						)}
					>
						{statusMessage.text}
					</div>
				)}

				{/* Submit Button */}
				<button
					type="submit"
					className="group inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#e07009] px-5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#c86106] focus-visible:ring-2 focus-visible:ring-[#e07009]/40 focus-visible:outline-none active:scale-[0.99]"
				>
					<span>Sign In</span>
					<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
				</button>
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
					className="font-semibold text-[#d96b08] transition-colors hover:text-[#b85604] hover:underline"
				>
					Create an account
				</Link>
			</p>

			{/* Try Demo Accounts Expandable Card */}
			<div className="mt-5 overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors">
				<button
					type="button"
					onClick={() => setDemoOpen((prev) => !prev)}
					aria-expanded={demoOpen}
					className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left transition-colors hover:bg-neutral-50"
				>
					<span className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#141414]">
						<ShieldCheck className="size-4 text-[#d96b08]" />
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
					<div className="space-y-1.5 border-t border-neutral-100 bg-neutral-50/60 p-2.5">
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
											? "border-[#e07009]/45 bg-[#FF6B00]/6"
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
									<span
										className={cn(
											"ml-2 shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-semibold",
											account.badgeClass
										)}
									>
										{meta.shortLabel}
									</span>
								</button>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
