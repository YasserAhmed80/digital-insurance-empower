import { Quote } from "lucide-react";
import { IconTile, type IconColor } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, knowPillars } from "@/lib/data/content";

const certColors: IconColor[] = ["brand", "accent", "value", "danger", "brand", "accent"];

export function Team() {
  return (
    <section id="team" className="section section-gray">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Expert hands. Strategic minds."
            description="At the heart of InsurTech-Egypt is a team of certified professionals with decades of hands-on experience, having delivered 100+ end-to-end insurance projects across the full lifecycle."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mx-auto mt-10 max-w-3xl rounded-2xl border border-ink-200 bg-white p-8 text-center shadow-card">
            <Quote className="mx-auto h-7 w-7 text-brand-600" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-xl text-ink-800 sm:text-2xl">
              &ldquo;We don&apos;t just understand the business — we&apos;ve
              lived it.&rdquo;
            </blockquote>
          </figure>
        </Reveal>

        <Reveal>
          <h3 className="mt-20 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Global Certifications
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <article className="card-surface h-full">
                <div className="flex items-center gap-4">
                  <IconTile icon={c.icon} color={certColors[i % certColors.length]} />
                  <h4 className="font-display text-xl font-semibold text-ink-800">
                    {c.title}
                  </h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  {c.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>

      <Reveal>
        <div className="mt-16 w-full bg-brand-50 py-12 sm:py-16">
          <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {knowPillars.map((p) => (
              <div key={p.title} className="text-center">
                <p className="font-display text-xl font-bold text-brand-500">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
