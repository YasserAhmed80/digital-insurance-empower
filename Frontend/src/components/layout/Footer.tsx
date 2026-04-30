import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { companyInfo, navLinks } from "@/lib/data/content";

export function Footer() {
  return (
    <footer className="relative bg-brand-700">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <Image
              src="/main_logo_white.svg"
              alt={companyInfo.name}
              width={348}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-200">
            Empowering insurance organizations with innovative insurance
            technology solutions that drive growth, operational excellence, and
            digital transformation.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-200">
            <MapPin className="h-4 w-4 text-brand-300" aria-hidden="true" />
            {companyInfo.address}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link className="text-brand-200 hover:text-white transition-colors" href="/">
                Home
              </Link>
            </li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link className="text-brand-200 hover:text-white transition-colors" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-brand-200 hover:text-white transition-colors" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            CR / Tax ID
          </h3>
          <dl className="mt-5 space-y-3 text-sm text-brand-200">
            <div className="flex justify-between gap-4">
              <dt>CR</dt>
              <dd className="text-white">{companyInfo.cr}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Tax ID</dt>
              <dd className="text-white">{companyInfo.taxId}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p>Built for insurers. Engineered for scale.</p>
        </div>
      </div>
    </footer>
  );
}
