import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyInfo } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with InsurTech-Egypt. We'd love to hear from you — fill out the form and we'll get back to you as soon as possible.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden -mt-16 sm:-mt-20 bg-white">
      <div className="container-x relative py-20 sm:py-28 pt-32 sm:pt-36">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">Contact</span>
            <h1 className="heading-lg mt-4">Contact Us</h1>
            <p className="mt-5 text-ink-500">
              We&apos;d love to hear from you. Fill out the form and we&apos;ll
              get back to you as soon as possible.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <ContactInfo icon={MapPin} label="Address" value={companyInfo.address} />
              <ContactInfo
                icon={Mail}
                label="Email"
                value={companyInfo.email}
                href={`mailto:${companyInfo.email}`}
              />
              <ContactInfo
                icon={Phone}
                label="Phone"
                value={companyInfo.phone}
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
              />
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-200">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-ink-400">
          {label}
        </p>
        <p className="mt-1 text-base text-ink-800">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block transition-opacity hover:opacity-90">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
