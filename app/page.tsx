import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { SocialProof } from "@/components/sections/social-proof";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Vuelve } from "@/components/sections/vuelve";
import { Icp } from "@/components/sections/icp";
import { LeadForm } from "@/components/sections/lead-form";
import { Footer } from "@/components/sections/footer";
import { FloatingCta } from "@/components/shared/floating-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <SocialProof />
        <HowItWorks />
        <Vuelve />
        <Icp />
        <LeadForm />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
