import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type IconColor = "brand" | "accent" | "danger" | "value";

type Props = {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: IconColor;
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-14 w-14",
} as const;

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-7 w-7",
} as const;

const colorStyles: Record<IconColor, string> = {
  brand:  "bg-brand-50 text-brand-600",
  accent: "bg-accent-50 text-accent-600",
  danger: "bg-danger-50 text-danger-500",
  value:  "bg-value-50 text-value-600",
};

/**
 * Soft-tinted tile that frames a Lucide icon in the brand color scheme.
 */
export function IconTile({ icon: Icon, className, size = "md", color = "brand" }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl shadow-sm",
        colorStyles[color],
        sizes[size],
        className,
      )}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
    </div>
  );
}
