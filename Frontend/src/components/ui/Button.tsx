import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const lightVariants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-600 shadow-soft focus-visible:ring-brand-300",
  secondary:
    "bg-white text-ink-800 border border-ink-200 hover:bg-ink-50 focus-visible:ring-ink-300",
  ghost:
    "text-ink-700 hover:bg-ink-100 focus-visible:ring-ink-300",
};

const darkVariants: Record<Variant, string> = {
  primary:
    "bg-white text-brand-700 hover:bg-ink-100 shadow-soft focus-visible:ring-white/40",
  secondary:
    "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus-visible:ring-white/40",
  ghost:
    "text-white hover:bg-white/10 focus-visible:ring-white/40",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  onDark?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

/**
 * Polymorphic button: renders an `<a>`/`<Link>` when `href` is provided,
 * otherwise a `<button>`. Supports light and dark backgrounds via `onDark`.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  onDark = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantMap = onDark ? darkVariants : lightVariants;
  const classes = cn(base, variantMap[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a className={classes} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
