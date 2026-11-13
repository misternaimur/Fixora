'use client';

import React, { useState, FormEvent } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';


interface LoginFormValues {
  identifier: string; // Supports either email or username
  password: string;
  rememberMe: boolean;
}

interface LoginFormErrors {
  identifier?: string;
  password?: string;
  general?: string;
}

type AuthProvider = 'google' | 'github';

// ============================================================================
// Custom SVG Icons for Social Providers
// ============================================================================

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

// ============================================================================
// Main Login Component
// ============================================================================

export default function App() {
  // Form values state
  const [values, setValues] = useState<LoginFormValues>({
    identifier: '',
    password: '',
    rememberMe: false,
  });

  // Validation and feedback states
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [touched, setTouched] = useState<{ identifier?: boolean; password?: boolean }>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  // Submission & status states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [socialLoading, setSocialLoading] = useState<AuthProvider | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'info';
    text: string;
  } | null>(null);

  /**
   * Validates form inputs and returns an object containing any error messages.
   */
  const validateForm = (formValues: LoginFormValues): LoginFormErrors => {
    const newErrors: LoginFormErrors = {};
    const trimmedIdentifier = formValues.identifier.trim();

    if (!trimmedIdentifier) {
      newErrors.identifier = 'Email or username is required.';
    } else if (trimmedIdentifier.includes('@')) {
      // Validate email format if '@' is present
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedIdentifier)) {
        newErrors.identifier = 'Please enter a valid email address.';
      }
    } else if (trimmedIdentifier.length < 3) {
      newErrors.identifier = 'Username must be at least 3 characters long.';
    }

    if (!formValues.password) {
      newErrors.password = 'Password is required.';
    } else if (formValues.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    return newErrors;
  };

  /**
   * Handles input changes and updates real-time validation if the field was already touched.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === 'checkbox' ? checked : value;

    const updatedValues = {
      ...values,
      [name]: nextValue,
    };

    setValues(updatedValues);
    setStatusMessage(null);

    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: undefined }));
    }

    // Re-validate touched fields dynamically for immediate feedback
    if (name === 'identifier' || name === 'password') {
      if (touched[name]) {
        const validationErrors = validateForm(updatedValues);
        setErrors((prev) => ({
          ...prev,
          [name]: validationErrors[name],
        }));
      }
    }
  };

  /**
   * Marks a field as touched on blur and runs validation for that field.
   */
  const handleBlur = (field: 'identifier' | 'password') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateForm(values);
    setErrors((prev) => ({
      ...prev,
      [field]: validationErrors[field],
    }));
  };

  /**
   * Handles primary form submission with simulated API authentication.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);

    // Mark all fields as touched
    setTouched({ identifier: true, password: true });

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate network request latency
      await new Promise((resolve) => setTimeout(resolve, 1400));

      // Demo simulation: trigger an auth error if user types "error@example.com"
      if (values.identifier.toLowerCase() === 'error@example.com') {
        setErrors({
          general: 'Invalid credentials. Please check your email/username and password.',
        });
      } else {
        setStatusMessage({
          type: 'success',
          text: `Welcome back, ${values.identifier.trim()}! Redirecting to your workspace...`,
        });
      }
    } catch {
      setErrors({
        general: 'An unexpected network error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles OAuth social sign-in button clicks.
   */
  const handleSocialLogin = async (provider: AuthProvider) => {
    if (isSubmitting || socialLoading) return;

    setErrors({});
    setStatusMessage(null);
    setSocialLoading(provider);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      const providerName = provider === 'google' ? 'Google' : 'GitHub';
      setStatusMessage({
        type: 'success',
        text: `Authenticated via ${providerName}. Redirecting...`,
      });
    } finally {
      setSocialLoading(null);
    }
  };

  /**
   * Handles forgot password action cleanly without disruptive browser alerts.
   */
  const handleForgotPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrors({});
    setStatusMessage({
      type: 'info',
      text: values.identifier.includes('@')
        ? `Password reset instructions have been dispatched to ${values.identifier}.`
        : 'Enter your email address above and click "Forgot password?" to receive a reset link.',
    });
  };

  const isBusy = isSubmitting || socialLoading !== null;

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      {/* Subtle decorative background accent */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/25 mb-4">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Welcome back! Please enter your details to continue.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-8 bg-white dark:bg-slate-900 py-8 px-5 sm:px-10 shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200/80 dark:border-slate-800 rounded-2xl">
          
          {/* Global Error Alert */}
          {errors.general && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 p-3.5 text-sm text-red-700 dark:text-red-300"
            >
              <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <span>{errors.general}</span>
            </div>
          )}

          {/* Status / Success Banner */}
          {statusMessage && (
            <div
              role="status"
              className={`mb-6 flex items-start gap-3 rounded-xl border p-3.5 text-sm ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                  : 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/60 text-blue-800 dark:text-blue-300'
              }`}
            >
              <CheckCircle2
                className={`h-5 w-5 shrink-0 mt-0.5 ${
                  statusMessage.type === 'success' ? 'text-emerald-500' : 'text-blue-500'
                }`}
              />
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email or Username Field */}
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email or username
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Mail
                    className={`h-4 w-4 transition-colors ${
                      errors.identifier
                        ? 'text-red-400'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />
                </div>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  autoComplete="username"
                  disabled={isBusy}
                  value={values.identifier}
                  onChange={handleChange}
                  onBlur={() => handleBlur('identifier')}
                  placeholder="name@company.com or username"
                  aria-invalid={Boolean(errors.identifier)}
                  aria-describedby={errors.identifier ? 'identifier-error' : undefined}
                  className={`block w-full rounded-xl border bg-white dark:bg-slate-950 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                    errors.identifier
                      ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.identifier && (
                <p
                  id="identifier-error"
                  className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.identifier}</span>
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Lock
                    className={`h-4 w-4 transition-colors ${
                      errors.password
                        ? 'text-red-400'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  disabled={isBusy}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={() => handleBlur('password')}
                  placeholder="••••••••"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  className={`block w-full rounded-xl border bg-white dark:bg-slate-950 pl-10 pr-11 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                    errors.password
                      ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={isBusy}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none focus:text-indigo-600 disabled:opacity-50"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p
                  id="password-error"
                  className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.password}</span>
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
              <label
                htmlFor="rememberMe"
                className="inline-flex items-center gap-2 cursor-pointer select-none group"
              >
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  disabled={isBusy}
                  checked={values.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500/30 bg-white dark:bg-slate-950 transition cursor-pointer"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={isBusy}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 focus:outline-none focus:underline disabled:opacity-50 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isBusy}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-65 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider">
              <span className="bg-white dark:bg-slate-900 px-3 text-slate-400 dark:text-slate-500 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              disabled={isBusy}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {socialLoading === 'google' ? (
                <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
              ) : (
                <GoogleIcon className="h-4 w-4" />
              )}
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('github')}
              disabled={isBusy}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {socialLoading === 'github' ? (
                <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
              ) : (
                <GitHubIcon className="h-4 w-4 text-slate-900 dark:text-white" />
              )}
              <span>GitHub</span>
            </button>
          </div>
        </div>

        {/* Footer Sign-up Prompt */}
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?{' '}
          <a
            href="#signup"
            onClick={(e) => {
              e.preventDefault();
              setStatusMessage({
                type: 'info',
                text: 'Registration flow triggered. Connect this link to your sign-up route.',
              });
            }}
            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}