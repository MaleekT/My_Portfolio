"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  ariaLabel,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2",
    "px-8 py-4 font-body text-[15px] font-medium",
    "rounded-[4px] cursor-pointer whitespace-nowrap no-underline",
    "transition-all duration-300 ease-out",
    !disabled && "hover:-translate-y-0.5",
    disabled && "cursor-not-allowed opacity-70",
    fullWidth && "w-full",
    variant === "primary" && [
      "bg-accent text-[#0A0A0A] border-[1.5px] border-accent",
      !disabled && "hover:bg-accent-hover hover:border-accent-hover",
    ],
    variant === "secondary" && [
      "bg-transparent text-text-primary border-[1.5px] border-border",
      !disabled && "hover:border-accent hover:text-accent",
    ],
    className
  );

  if (href) {
    return (
      <a href={href} className={base} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={base}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
