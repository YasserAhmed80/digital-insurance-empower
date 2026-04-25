import { ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section section-white">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -bottom-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
            />
            <div className="relative">
              <h2 className="heading-lg text-white">
                Ready to accelerate your digital insurance journey?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/75">
                Let&apos;s discuss how our insurance technology solutions can
                transform your operations, enhance customer experience, and
                drive growth.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg" onDark>
                  Request a Consultation <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" size="lg" variant="secondary" onDark>
                  <CalendarClock className="h-4 w-4" /> Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
