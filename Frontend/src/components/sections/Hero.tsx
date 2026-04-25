import { Banknote, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { companyInfo } from "@/lib/data/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-brand-700">
      <div className="container-x relative my-auto grid items-center gap-16 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90">
            <Sparkles className="h-3.5 w-3.5" /> Insurance Technology Partner
          </span>
          <h1 className="heading-xl mt-5 text-white">
            Empowering the future of insurance with{" "}
            <span className="text-white/90">
              smart, scalable digital solutions
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {companyInfo.tagline}
          </p>
          <p className="mt-2 max-w-2xl text-base text-white/60">
            {companyInfo.subline}
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-700/10 to-accent-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] p-8 shadow-soft backdrop-blur-md">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Our Promise
              </p>
              <div className="mt-6 space-y-4">
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
                    className="flex items-start gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10"
                  >
                    <span className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl ${colorBg} shadow-sm`}>
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <p className={`font-display text-lg font-bold ${colorText}`}>{word}</p>
                      <p className="mt-0.5 text-sm leading-snug text-white/60">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
