import { Check, Lightbulb, ShieldCheck } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/data/content";

const strengths = [
  "Deep domain experience and skills",
  "Experience in building all insurance modules",
  "Understand business pains",
  "Fast delivery for any core module in months",
];

export function About() {
  return (
    <section id="about" className="section section-white pb-0">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Driven by innovation. Built on expertise."
            description="With decades inside the insurance industry, we pair domain depth with modern engineering to ship solutions that move the needle."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card-surface h-full">
              <div className="flex items-center gap-3">
                <IconTile icon={Lightbulb} color="brand" />
                <h3 className="heading-md text-xl">Industry Experience</h3>
              </div>
              <p className="mt-4 leading-relaxed text-ink-500">
                With over <strong className="text-ink-800">23 years</strong> of
                experience in both insurance domain and technology, we have
                excellent track records to build, develop, and solve insurance
                challenges across all lines of business.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="card-surface h-full">
              <div className="flex items-center gap-3">
                <IconTile icon={ShieldCheck} color="accent" />
                <h3 className="heading-md text-xl">Our Strengths</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="mt-16 w-full bg-brand-50 py-12 sm:py-16">
          <div className="container-x grid gap-6 sm:grid-cols-3">
            <Stat value={stats.experience}       suffix="+" label="Years of experience" />
            <Stat value={stats.coreApps}         suffix="+" label="Delivered core insurance applications" />
            <Stat value={stats.projects}         suffix="+" label="Delivered projects" />
            <Stat value={stats.changes}          suffix="+" label="Changes delivered" />
            <Stat value={stats.problemSolving}   suffix="+" label="Problems solved" />
            <Stat value={stats.analyticsReports} suffix="+" label="Analytics & reports" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <StatCounter
        value={value}
        suffix={suffix}
        className="font-display text-4xl font-bold text-brand-500 sm:text-5xl"
      />
      <p className="mt-2 text-sm uppercase tracking-widest text-ink-500">
        {label}
      </p>
    </div>
  );
}
