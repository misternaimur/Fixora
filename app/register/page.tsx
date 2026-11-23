'use client';

import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from 'lucide-react';

interface RegisterValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
  general?: string;
}

type AuthProvider = 'google' | 'github';

const GoogleIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const GitHubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function RegisterPage() {
  const [values, setValues] = useState<RegisterValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof RegisterValues, boolean>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [socialLoading, setSocialLoading] = useState<AuthProvider | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (formValues: RegisterValues): RegisterErrors => {
    const nextErrors: RegisterErrors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = 'Full name is required.';
    } else if (formValues.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.password) {
      nextErrors.password = 'Password is required.';
    } else if (formValues.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    if (!formValues.confirmPassword) {
      nextErrors.confirmPassword = 'Please confirm your password.';
    } else if (formValues.confirmPassword !== formValues.password) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formValues.terms) {
      nextErrors.terms = 'You must accept the terms to continue.';
    }

    return nextErrors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;
    const updatedValues = { ...values, [name]: nextValue } as RegisterValues;

    setValues(updatedValues);
    setStatusMessage('');

    if (touched[name as keyof RegisterValues]) {
      const validationErrors = validate(updatedValues);
      setErrors((previous) => ({
        ...previous,
        [name]: validationErrors[name as keyof RegisterErrors],
      }));
    }
  };

  const handleBlur = (field: keyof RegisterValues) => {
    setTouched((previous) => ({ ...previous, [field]: true }));
    const validationErrors = validate(values);
    setErrors((previous) => ({
      ...previous,
      [field]: validationErrors[field as keyof RegisterErrors],
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage('');

    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
      terms: true,
    });

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatusMessage(`Welcome, ${values.name.trim()}! Your account is ready.`);
    setIsSubmitting(false);
  };

  const handleSocialSignUp = async (provider: AuthProvider) => {
    if (isSubmitting || socialLoading) return;
    setErrors({});
    setStatusMessage('');
    setSocialLoading(provider);
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatusMessage(`Account setup via ${provider === 'google' ? 'Google' : 'GitHub'} is ready.`);
    setSocialLoading(null);
  };

  const isBusy = isSubmitting || socialLoading !== null;

  const inputClass = (hasError?: string) =>
    `block w-full rounded-xl border bg-white dark:bg-slate-950 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${
      hasError
        ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
        : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
    }`;

  return (
    <main className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/25 mb-4">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Start using Fixora in just a few steps.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-slate-900 py-8 px-5 sm:px-10 shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200/80 dark:border-slate-800 rounded-2xl">
          {errors.general && (
            <div role="alert" className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 p-3.5 text-sm text-red-700 dark:text-red-300">
              <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <span>{errors.general}</span>
            </div>
          )}

          {statusMessage && (
            <div role="status" className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/50 p-3.5 text-sm text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-emerald-500" />
              <span>{statusMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full name</label>
              <div className="relative">
                <User className={`pointer-events-none absolute left-3.5 inset-y-0 my-auto h-4 w-4 ${errors.name ? 'text-red-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <input id="name" name="name" type="text" autoComplete="name" disabled={isBusy} value={values.name} onChange={handleChange} onBlur={() => handleBlur('name')} placeholder="Alex Morgan" aria-invalid={Boolean(errors.name)} className={inputClass(errors.name)} />
              </div>
              {errors.name && <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5" />{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email address</label>
              <div className="relative">
                <Mail className={`pointer-events-none absolute left-3.5 inset-y-0 my-auto h-4 w-4 ${errors.email ? 'text-red-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <input id="email" name="email" type="email" autoComplete="email" disabled={isBusy} value={values.email} onChange={handleChange} onBlur={() => handleBlur('email')} placeholder="name@company.com" aria-invalid={Boolean(errors.email)} className={inputClass(errors.email)} />
              </div>
              {errors.email && <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5" />{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className={`pointer-events-none absolute left-3.5 inset-y-0 my-auto h-4 w-4 ${errors.password ? 'text-red-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" disabled={isBusy} value={values.password} onChange={handleChange} onBlur={() => handleBlur('password')} placeholder="At least 8 characters" aria-invalid={Boolean(errors.password)} className={`${inputClass(errors.password)} pr-11`} />
                <button type="button" onClick={() => setShowPassword((previous) => !previous)} disabled={isBusy} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5" />{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Confirm password</label>
              <div className="relative">
                <Lock className={`pointer-events-none absolute left-3.5 inset-y-0 my-auto h-4 w-4 ${errors.confirmPassword ? 'text-red-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} autoComplete="new-password" disabled={isBusy} value={values.confirmPassword} onChange={handleChange} onBlur={() => handleBlur('confirmPassword')} placeholder="Repeat your password" aria-invalid={Boolean(errors.confirmPassword)} className={`${inputClass(errors.confirmPassword)} pr-11`} />
                <button type="button" onClick={() => setShowConfirmPassword((previous) => !previous)} disabled={isBusy} aria-label={showConfirmPassword ? 'Hide password confirmation' : 'Show password confirmation'} className="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none">
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5" />{errors.confirmPassword}</p>}
            </div>

            <div className="pt-0.5">
              <label htmlFor="terms" className="inline-flex items-start gap-2 cursor-pointer select-none">
                <input id="terms" name="terms" type="checkbox" disabled={isBusy} checked={values.terms} onChange={handleChange} onBlur={() => handleBlur('terms')} className="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500/30 bg-white dark:bg-slate-950" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  I agree to the <Link href="/terms" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link href="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>.
                </span>
              </label>
              {errors.terms && <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5" />{errors.terms}</p>}
            </div>

            <button type="submit" disabled={isBusy} className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-65 disabled:cursor-not-allowed cursor-pointer">
              {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /><span>Creating account...</span></> : <><span>Create account</span><ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-slate-200 dark:border-slate-800" /></div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider">
              <span className="bg-white dark:bg-slate-900 px-3 text-slate-400 dark:text-slate-500 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button type="button" onClick={() => handleSocialSignUp('google')} disabled={isBusy} className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
              {socialLoading === 'google' ? <Loader2 className="h-4 w-4 animate-spin text-slate-500" /> : <GoogleIcon className="h-4 w-4" />}
              <span>Google</span>
            </button>
            <button type="button" onClick={() => handleSocialSignUp('github')} disabled={isBusy} className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
              {socialLoading === 'github' ? <Loader2 className="h-4 w-4 animate-spin text-slate-500" /> : <GitHubIcon className="h-4 w-4 text-slate-900 dark:text-white" />}
              <span>GitHub</span>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
