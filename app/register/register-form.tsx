"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	AlertCircle,
	ArrowLeft,
	ArrowRight,
	Check,
	CheckCircle2,
	Info,
	Loader2,
	Mail,
	Phone,
	User,
	UserPlus,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Badge } from "@/app/components/ui/badge";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { PasswordInput } from "@/app/components/ui/password-input";
import {
	getPasswordStrength,
	passwordChecks,
	registerSchema,
	type RegisterFormValues,
} from "./register-schema";

export function RegisterForm() {
	const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors, isValid, isSubmitting, touchedFields },
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		mode: "onChange",
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			password: "",
			confirmPassword: "",
			acceptTerms: false,
		},
	});

	const passwordValue = useWatch({ control, name: "password" }) ?? "";
	const acceptTermsValue = useWatch({ control, name: "acceptTerms" }) ?? false;
	const strength = getPasswordStrength(passwordValue);

	const onSubmit = async (values: RegisterFormValues) => {
		setSubmitError(null);
		try {
			await new Promise((resolve) => setTimeout(resolve, 650));
			setSubmittedEmail(values.email);
		} catch {
			setSubmitError(
				"We could not submit your registration right now. Please try again."
			);
		}
	};

	if (submittedEmail) {
		return (
			<div className="w-full max-w-[460px] rounded-xl border border-[#E7E5E4] bg-white p-6 shadow-[0_2px_10px_rgba(20,20,20,0.03)] sm:p-8">
				<div className="inline-flex size-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600">
					<CheckCircle2 className="size-5" strokeWidth={2} />
				</div>

				<h1 className="mt-5 font-heading text-2xl font-bold tracking-tight text-[#141414]">
					Registration Received!
				</h1>

				<p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
					Your account registration has been submitted successfully. A company
					Admin will review your account and assign the appropriate role.
				</p>

				<div className="mt-5 rounded-xl border border-[#E7E5E4] bg-[#FAFAF9] p-4">
					<div className="flex items-center justify-between gap-3">
						<span className="text-xs font-medium text-neutral-500">
							Registered Email
						</span>
						<span className="truncate font-mono text-xs font-semibold text-[#141414]">
							{submittedEmail}
						</span>
					</div>
					<div className="mt-2.5 flex items-center justify-between gap-3">
						<span className="text-xs font-medium text-neutral-500">
							Access Status
						</span>
						<Badge variant="warning">
							<span className="size-1.5 rounded-full bg-[#D97706]" />
							Pending Admin Approval
						</Badge>
					</div>
				</div>

				<Link
					href="/login"
					className={cn(
						buttonVariants({ variant: "amber" }),
						"mt-6 h-11 w-full rounded-lg text-sm tracking-normal normal-case"
					)}
				>
					<ArrowLeft className="size-4" />
					<span>Back to Sign In</span>
				</Link>
			</div>
		);
	}

	return (
		<div className="w-full max-w-[460px]">
			<div className="rounded-xl border border-[#E7E5E4] bg-white p-6 shadow-[0_2px_10px_rgba(20,20,20,0.03)] sm:p-8">
				{/* Top Icon Badge */}
				<div className="inline-flex size-10 items-center justify-center rounded-xl border border-[#D97706]/20 bg-[#D97706]/10 text-[#B45309]">
					<UserPlus className="size-4.5" strokeWidth={2} />
				</div>

				{/* Header */}
				<div className="mt-4">
					<h1 className="font-heading text-2xl font-bold tracking-tight text-[#141414] sm:text-[26px]">
						Create Your Account
					</h1>
					<p className="mt-1.5 text-sm text-neutral-500">
						Register to request access to your company&apos;s Fixora workspace.
					</p>
				</div>

				{/* Registration Form */}
				<form
					className="mt-6 space-y-4"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					{/* Full Name */}
					<div className="space-y-1.5">
						<Label htmlFor="register-full-name">Full Name</Label>
						<div className="relative">
							<User
								className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
								aria-hidden="true"
							/>
							<Input
								id="register-full-name"
								type="text"
								autoComplete="name"
								placeholder="Enter your full name"
								hasError={!!errors.fullName}
								className="pl-10"
								{...register("fullName")}
							/>
						</div>
						{errors.fullName && (
							<p className="flex items-center gap-1.5 text-xs font-medium text-red-600">
								<AlertCircle className="size-3.5 shrink-0" />
								<span>{errors.fullName.message}</span>
							</p>
						)}
					</div>

					{/* Work Email */}
					<div className="space-y-1.5">
						<Label htmlFor="register-email">Work Email</Label>
						<div className="relative">
							<Mail
								className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
								aria-hidden="true"
							/>
							<Input
								id="register-email"
								type="email"
								autoComplete="email"
								placeholder="Enter your work email"
								hasError={!!errors.email}
								className="pl-10"
								{...register("email")}
							/>
						</div>
						{errors.email && (
							<p className="flex items-center gap-1.5 text-xs font-medium text-red-600">
								<AlertCircle className="size-3.5 shrink-0" />
								<span>{errors.email.message}</span>
							</p>
						)}
					</div>

					{/* Phone Number (Optional) */}
					<div className="space-y-1.5">
						<div className="flex items-center justify-between">
							<Label htmlFor="register-phone">Phone Number</Label>
							<span className="text-[11px] font-medium text-neutral-400">
								Optional
							</span>
						</div>
						<div className="relative">
							<Phone
								className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400"
								aria-hidden="true"
							/>
							<Input
								id="register-phone"
								type="tel"
								autoComplete="tel"
								placeholder="Enter your phone number"
								hasError={!!errors.phone}
								className="pl-10"
								{...register("phone")}
							/>
						</div>
						{errors.phone && (
							<p className="flex items-center gap-1.5 text-xs font-medium text-red-600">
								<AlertCircle className="size-3.5 shrink-0" />
								<span>{errors.phone.message}</span>
							</p>
						)}
					</div>

					{/* Password */}
					<div className="space-y-1.5">
						<Label htmlFor="register-password">Password</Label>
						<PasswordInput
							id="register-password"
							autoComplete="new-password"
							placeholder="Create a password"
							hasError={!!errors.password && !!touchedFields.password}
							{...register("password")}
						/>

						{/* Password Strength Indicator & Checklist */}
						<div className="rounded-xl border border-[#E7E5E4] bg-[#FAFAF9] p-3">
							<div className="flex items-center justify-between gap-2">
								<span className="text-[11px] font-semibold text-neutral-600">
									Password requirements
								</span>
								{strength.label && (
									<span
										className={cn(
											"text-[11px] font-semibold",
											strength.textClass
										)}
									>
										{strength.label}
									</span>
								)}
							</div>

							{/* 4-Step Strength Bar */}
							<div className="mt-2 grid grid-cols-4 gap-1.5">
								{[1, 2, 3, 4].map((step) => (
									<span
										key={step}
										className={cn(
											"h-1 rounded-full transition-colors duration-200",
											strength.score >= step
												? strength.barClass
												: "bg-[#E7E5E4]"
										)}
									/>
								))}
							</div>

							<ul className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
								{passwordChecks.map((rule) => {
									const satisfied = rule.test(passwordValue);
									return (
										<li
											key={rule.id}
											className={cn(
												"flex items-center gap-1.5 text-[11px] transition-colors",
												satisfied
													? "font-medium text-emerald-700"
													: "text-neutral-500"
											)}
										>
											<span
												className={cn(
													"flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors",
													satisfied
														? "border-emerald-600 bg-emerald-600 text-white"
														: "border-neutral-300 bg-white text-transparent"
												)}
											>
												<Check className="size-2.5" strokeWidth={3} />
											</span>
											<span>{rule.label}</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					{/* Confirm Password */}
					<div className="space-y-1.5">
						<Label htmlFor="register-confirm-password">Confirm Password</Label>
						<PasswordInput
							id="register-confirm-password"
							autoComplete="new-password"
							placeholder="Confirm your password"
							showLabel="Show confirm password"
							hideLabel="Hide confirm password"
							hasError={!!errors.confirmPassword}
							{...register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<p className="flex items-center gap-1.5 text-xs font-medium text-red-600">
								<AlertCircle className="size-3.5 shrink-0" />
								<span>{errors.confirmPassword.message}</span>
							</p>
						)}
					</div>

					{/* Account Access Information Notice */}
					<div className="flex items-start gap-2.5 rounded-xl border border-amber-200/90 bg-amber-50/75 p-3.5 text-xs leading-relaxed text-amber-950">
						<Info
							className="mt-0.5 size-4 shrink-0 text-[#B45309]"
							aria-hidden="true"
						/>
						<p>
							New accounts do not receive operational permissions automatically.
							After registration, a company Admin must assign your role and
							workspace access.
						</p>
					</div>

					{/* Terms & Conditions Checkbox */}
					<div className="space-y-1.5 pt-0.5">
						<div className="flex items-start gap-2.5">
							<Checkbox
								id="register-terms"
								checked={acceptTermsValue}
								onCheckedChange={(checked) =>
									setValue("acceptTerms", checked, {
										shouldValidate: true,
										shouldTouch: true,
									})
								}
								className="mt-0.5"
							/>
							<label
								htmlFor="register-terms"
								className="cursor-pointer text-xs leading-relaxed text-neutral-600 select-none"
							>
								I agree to the{" "}
								<Link
									href="/terms"
									className="font-semibold text-[#B45309] transition-colors hover:text-[#92400E] hover:underline"
								>
									Terms &amp; Conditions
								</Link>{" "}
								and{" "}
								<Link
									href="/privacy"
									className="font-semibold text-[#B45309] transition-colors hover:text-[#92400E] hover:underline"
								>
									Privacy Policy
								</Link>
								.
							</label>
						</div>
						{errors.acceptTerms && (
							<p className="flex items-center gap-1.5 text-xs font-medium text-red-600">
								<AlertCircle className="size-3.5 shrink-0" />
								<span>{errors.acceptTerms.message}</span>
							</p>
						)}
					</div>

					{/* Submission Error */}
					{submitError && (
						<div
							role="alert"
							className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700"
						>
							<AlertCircle className="size-4 shrink-0" />
							<span>{submitError}</span>
						</div>
					)}

					{/* Primary CTA */}
					<Button
						type="submit"
						variant="amber"
						disabled={!isValid || isSubmitting}
						className="group h-11 w-full rounded-lg text-sm tracking-normal normal-case"
					>
						{isSubmitting ? (
							<>
								<Loader2 className="size-4 animate-spin" />
								<span>Creating Account...</span>
							</>
						) : (
							<>
								<span>Create Account</span>
								<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
							</>
						)}
					</Button>
				</form>
			</div>

			{/* Existing Account Link */}
			<p className="mt-5 text-center text-xs font-medium text-neutral-500">
				Already have an account?{" "}
				<Link
					href="/login"
					className="font-semibold text-[#B45309] transition-colors hover:text-[#92400E] hover:underline"
				>
					Sign In
				</Link>
			</p>
		</div>
	);
}
