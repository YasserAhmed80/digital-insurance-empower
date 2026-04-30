import { Reveal } from "@/components/ui/Reveal";
import { IconTile, type IconColor } from "@/components/ui/IconTile";
import { certifications } from "@/lib/data/content";

const tileColors: IconColor[] = ["brand", "accent", "brand", "value", "accent", "brand"];

export function Certifications() {
  return (
    <section aria-label="Team certifications" className="border-y border-ink-100 bg-ink-50 py-12 sm:py-14">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-center shadow-sm transition-shadow duration-200 hover:shadow-md">
                <IconTile
                  icon={cert.icon}
                  color={tileColors[i % tileColors.length]}
                  size="md"
                />
                <div>
                  <p className="font-display text-sm font-bold text-ink-800">
                    {cert.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-400">
                    {cert.description.split("–")[0].trim()}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
