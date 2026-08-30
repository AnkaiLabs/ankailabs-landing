import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorksTeaser } from "@/components/sections/how-it-works-teaser";
import { VuelveTeaser } from "@/components/sections/vuelve-teaser";
import { Icp } from "@/components/sections/icp";
import { LeadForm } from "@/components/sections/lead-form";

export default function Home() {
  return (
    <>
      <Hero />
      {/* VUELVE va inmediatamente después del hero: es el producto principal,
          no un caso al final. La consultoría queda después, como servicio. */}
      <VuelveTeaser />
      <Problem />
      <HowItWorksTeaser />
      <Icp />
      <LeadForm />
    </>
  );
}
