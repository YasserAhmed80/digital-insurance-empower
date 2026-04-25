import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconTile, type IconColor } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/content";

const cardColors: IconColor[] = ["brand", "accent", "danger", "brand", "value", "accent"];

const tagStyles: Record<IconColor, string> = {
  brand: "bg-brand-500/10 text-brand-500 ring-brand-500/20",
  accent: "bg-accent-500/10 text-accent-500 ring-accent-500/20",
  danger: "bg-danger-500/10 text-danger-500 ring-danger-500/20",
  value: "bg-value-500/10 text-value-500 ring-value-500/20",
};

export function Services() {
  return (
    <section id="services" className="section section-gray">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Comprehensive insurance technology solutions. Tailored for insurers."
            description="Our specialized digital insurance solutions are designed to address the unique challenges of the insurance industry — from legacy system modernization to cutting-edge AI innovation."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const color = cardColors[i % cardColors.length];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <article className="card-surface group flex h-full flex-col">
                  <IconTile icon={s.icon} color={color} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-800">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {s.description}
                  </p>
                  <span
                    className={`mt-5 inline-flex w-max items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${tagStyles[color]}`}
                  >
                    {s.tag}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-8 lg:p-12">
            <div>
              <h3 className="heading-md">
                Customer experience in insurance: a priority.
              </h3>
              <p className="mt-4 text-ink-500">
                Exceptional customer experience in insurance is no longer
                optional — it&apos;s essential. Our digital insurance solutions
                prioritize user experience at every touchpoint, creating
                intuitive interfaces for both staff and policyholders.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
