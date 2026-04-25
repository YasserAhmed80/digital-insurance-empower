import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconTile, type IconColor } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { aiCapabilities, aiProcess, stats } from "@/lib/data/content";

const capColors: IconColor[] = ["brand", "accent", "value", "danger"];

const benefitColors = ["accent", "value", "danger"] as const;
const benefitTextColors: Record<string, string> = {
  accent: "text-accent-500",
  value: "text-value-500",
  danger: "text-danger-500",
};

export function AISolutions() {
  return (
    <section id="ai" className="section section-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="AI in Insurance"
            title="Smarter decisions. Better outcomes."
            description="Leverage AI and machine learning to enhance your insurance operations, drive process optimization, and deliver exceptional customer experience."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {aiCapabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <article className="card-surface h-full">
                <div className="flex items-center gap-4">
                  <IconTile icon={c.icon} size="lg" color={capColors[i % capColors.length]} />
                  <h3 className="font-display text-xl font-semibold text-ink-800">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  {c.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 grid gap-10 rounded-3xl border border-brand-200 bg-brand-50 p-8 lg:grid-cols-3 lg:p-12">
            <div className="lg:col-span-1">
              <h3 className="heading-md">AI implementation process.</h3>
              <p className="mt-4 text-ink-500">
                Our proven methodology ensures successful AI integration with
                your existing core insurance system.
              </p>
              <ul className="mt-6 space-y-2.5">
                {stats.aiBenefits.map((b, i) => (
                  <li key={b.label} className="flex items-baseline gap-3 text-sm text-ink-600">
                    <StatCounter
                      value={b.value}
                      suffix="%"
                      className={`font-display text-2xl font-bold ${benefitTextColors[benefitColors[i]]}`}
                    />
                    <span>{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {aiProcess.map((step) => {
                const stepColors: IconColor[] = ["brand", "accent", "value", "danger"];
                const color = stepColors[(step.step - 1) % stepColors.length];
                const stepBg: Record<IconColor, string> = {
                  brand:  "bg-brand-50 text-brand-600 ring-brand-200",
                  accent: "bg-accent-50 text-accent-600 ring-accent-200",
                  danger: "bg-danger-50 text-danger-500 ring-danger-200",
                  value:  "bg-value-50 text-value-600 ring-value-200",
                };
                return (
                  <li
                    key={step.step}
                    className="relative rounded-2xl border border-ink-200 bg-white p-5 shadow-card"
                  >
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold ring-1 ring-inset ${stepBg[color]}`}
                    >
                      {step.step}
                    </span>
                    <h4 className="mt-3 font-display text-base font-semibold text-ink-800">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-ink-500">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" size="lg">
              Explore AI Solutions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
