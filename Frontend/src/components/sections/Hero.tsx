import Image from "next/image";
import { ArrowRight, Banknote, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { companyInfo, stats } from "@/lib/data/content";
import { Button } from "@/components/ui/Button";

const heroStats = [
  { value: `${stats.experience}+`, label: "Years of Experience" },
  { value: `${stats.projects}+`, label: "Projects Delivered" },
  { value: `${stats.coreApps}+`, label: "Core Applications" },
  { value: `${stats.satisfaction}%`, label: "Client Satisfaction" },
] as const;

export function Hero() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] sm:h-[calc(100svh-5rem)] flex-col overflow-hidden bg-brand-700">

      {/* Brand watermark — decorative, not announced to screen readers */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.04] lg:translate-x-1/3 lg:opacity-[0.06]"
        aria-hidden="true"
      >
        <Image src="/brand_icon.svg" alt="" width={480} height={480} className="h-52 w-52 sm:h-72 sm:w-72 lg:h-[480px] lg:w-[480px]" priority />
      </div>

      {/* Main content — grows to fill space between top and stats strip */}
      <div className="container-x relative flex flex-1 items-center">
        <div className="grid w-full items-center gap-8 py-8 lg:grid-cols-12 lg:gap-12 lg:py-10">
          <div className="lg:col-span-7">

            {/* Mobile-only logo — top of hero, large and centred */}
            <div className="mb-6 flex justify-center lg:hidden">
              <Image
                src="/main_logo_white.svg"
                alt={companyInfo.name}
                width={320}
                height={74}
                className="h-auto w-[260px] sm:w-[300px]"
                priority
              />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90">
              <Sparkles className="h-3.5 w-3.5" /> Insurance Technology Partner
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Empowering the future of insurance with{" "}
              <span className="text-white/90">
                smart, scalable digital solutions
              </span>
              .
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {companyInfo.tagline}
            </p>
            <p className="mt-1.5 max-w-2xl text-sm text-white/60 sm:text-base">
              {companyInfo.subline}
            </p>

            {/* CTA buttons — single row on mobile */}
            <div className="mt-7 flex items-center gap-2 sm:gap-3">
              <Button href="/contact" size="sm" onDark className="flex-1 sm:flex-none">
                Get a Free Consultation
              </Button>
              <Button href="/#services" variant="secondary" size="sm" onDark className="flex-1 sm:flex-none">
                Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-700/10 to-accent-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] p-6 shadow-soft backdrop-blur-md">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Our Promise
                </p>
                <div className="mt-4 space-y-3">
                  {([
                    {
                      word: "Better",
                      icon: ShieldCheck,
                      colorBg: "bg-accent-500",
                      colorText: "text-accent-400",
                      desc: "Superior outcomes through deep domain expertise and modern engineering.",
                    },
                    {
                      word: "Cheaper",
                      icon: Banknote,
                      colorBg: "bg-value-500",
                      colorText: "text-value-400",
                      desc: "Reduced costs via proven methodologies and efficient delivery.",
                    },
                    {
                      word: "Faster",
                      icon: Rocket,
                      colorBg: "bg-danger-500",
                      colorText: "text-danger-400",
                      desc: "Speed to market with agile execution and pre-built insurance accelerators.",
                    },
                  ] as const).map(({ word, icon: Icon, colorBg, colorText, desc }) => (
                    <div
                      key={word}
                      className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-3.5 ring-1 ring-inset ring-white/10"
                    >
                      <span className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl ${colorBg} shadow-sm`}>
                        <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                      </span>
                      <div>
                        <p className={`font-display text-base font-bold ${colorText}`}>{word}</p>
                        <p className="mt-0.5 text-xs leading-snug text-white/60">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip — pinned to bottom */}
      <div className="relative border-t border-white/10">
        <div className="container-x grid grid-cols-2 gap-y-5 py-5 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/10">
          {heroStats.map(({ value, label }) => (
            <div key={label} className="text-center sm:px-6">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
