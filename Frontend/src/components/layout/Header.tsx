"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks, companyInfo } from "@/lib/data/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-800 bg-brand-700 shadow-sm">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="group flex h-full items-center"
          aria-label={`${companyInfo.name} home`}
        >
          {/* Mobile: icon only */}
          <Image
            src="/brand_icon.svg"
            alt={companyInfo.name}
            width={40}
            height={40}
            priority
            className="block sm:hidden"
          />
          {/* Desktop: full horizontal logo — fills header height */}
          <Image
            src="/main_logo_white.svg"
            alt={companyInfo.name}
            width={348}
            height={80}
            priority
            className="hidden sm:block h-full w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md" onDark>
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-brand-800 bg-brand-700 transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-3 w-full" onDark>
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
