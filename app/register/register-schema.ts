import { z } from "zod";

export const passwordChecks = [
	{
		id: "length",
		label: "At least 8 characters",
		test: (value: string) => value.length >= 8,
	},
	{
		id: "uppercase",
		label: "One uppercase letter",
		test: (value: string) => /[A-Z]/.test(value),
	},
	{
		id: "lowercase",
		label: "One lowercase letter",
		test: (value: string) => /[a-z]/.test(value),
	},
	{
		id: "number",
		label: "At least one number",
		test: (value: string) => /\d/.test(value),
	},
] as const;

export function getPasswordStrength(password: string) {
	const passedCount = passwordChecks.filter((rule) =>
		rule.test(password)
	).length;

	if (!password) {
		return { score: 0, label: "", barClass: "bg-neutral-200", textClass: "" };
	}
	if (passedCount <= 1) {
		return {
			score: 1,
			label: "Weak",
			barClass: "bg-red-500",
			textClass: "text-red-600",
		};
	}
	if (passedCount === 2) {
		return {
			score: 2,
			label: "Fair",
			barClass: "bg-amber-500",
			textClass: "text-amber-600",
		};
	}
	if (passedCount === 3) {
		return {
			score: 3,
			label: "Good",
			barClass: "bg-[#D97706]",
			textClass: "text-[#D97706]",
		};
	}
	return {
		score: 4,
		label: "Strong",
		barClass: "bg-emerald-600",
		textClass: "text-emerald-600",
	};
}

export const registerSchema = z
	.object({
		fullName: z
			.string()
			.trim()
			.min(2, "Please enter your full name (at least 2 characters).")
			.max(80, "Full name cannot exceed 80 characters."),
		email: z
			.string()
			.trim()
			.min(1, "Work email is required.")
			.email("Please enter a valid work email address."),
		phone: z
			.string()
			.trim()
			.refine(
				(val) =>
					val === "" ||
					(/^[+\d\s()-]{7,20}$/.test(val) && val.replace(/\D/g, "").length >= 7),
				"Please enter a valid phone number."
			),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters.")
			.regex(/[A-Z]/, "Password must include at least one uppercase letter.")
			.regex(/[a-z]/, "Password must include at least one lowercase letter.")
			.regex(/\d/, "Password must include at least one number."),
		confirmPassword: z.string().min(1, "Please confirm your password."),
		acceptTerms: z.boolean().refine((val) => val === true, {
			message: "You must agree to the Terms & Conditions and Privacy Policy.",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match.",
		path: ["confirmPassword"],
	});

export type RegisterFormValues = z.infer<typeof registerSchema>;
