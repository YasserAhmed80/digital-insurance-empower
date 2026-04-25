import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconTile, type IconColor } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { functionalExpertise, productExpertise, type IconCard } from "@/lib/data/content";

const cycleColors: IconColor[] = ["brand", "accent", "danger", "value"];

export function Expertise() {
  return (
    <section id="expertise" className="section section-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="360° expertise across the insurance value chain."
            description="From core systems to cutting-edge data analytics, we have the expertise to transform your insurance operations end to end."
          />
        </Reveal>

        <Group title="Functional Expertise" items={functionalExpertise} />
        <Group title="Product Expertise" items={productExpertise} />

        <Reveal>
          <div className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center sm:p-12">
            <h3 className="heading-md">
              Insurance technology expertise that delivers results.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-ink-500">
              From core systems to cutting-edge data analytics, we have the
              expertise to transform your insurance operations.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg">
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Group({ title, items }: { title: string; items: IconCard[] }) {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
          {title}
        </h3>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <article className="card-surface h-full">
              <IconTile icon={item.icon} color={cycleColors[i % cycleColors.length]} />
              <h4 className="mt-4 font-display text-lg font-semibold text-ink-800">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-ink-500">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
