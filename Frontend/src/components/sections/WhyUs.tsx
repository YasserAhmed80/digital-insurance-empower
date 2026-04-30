import { IconTile, type IconColor } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { reasons, stats } from "@/lib/data/content";

const reasonColors: IconColor[] = ["brand", "accent", "brand", "danger", "value", "accent"];

export function WhyUs() {
  return (
    <section id="why-us" className="section section-gray">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why Us"
            title="Why leading insurers trust our solutions."
            description="Our expertise in digital transformation and legacy modernization delivers measurable results for insurance companies worldwide."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <article className="card-surface h-full">
                <IconTile icon={r.icon} color={reasonColors[i % reasonColors.length]} />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-800">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {r.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex items-center justify-center rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center">
            <div>
              <StatCounter
                value={stats.satisfaction}
                suffix="%"
                className="font-display text-6xl font-bold text-brand-700"
              />
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-brand-700">
                Client satisfaction
              </p>
              <p className="mt-3 text-sm text-ink-500">
                Based on post-project evaluations and ongoing partnerships with
                leading insurance providers.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
