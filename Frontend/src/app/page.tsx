import { About } from "@/components/sections/About";
import { AISolutions } from "@/components/sections/AISolutions";
import { Expertise } from "@/components/sections/Expertise";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <Expertise />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <AISolutions />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <FinalCTA />
    </>
  );
}
