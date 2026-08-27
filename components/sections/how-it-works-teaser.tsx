import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Kicker } from "@/components/shared/kicker";
import { SectionContainer } from "@/components/shared/section-container";
import { METHODOLOGY_STEPS } from "@/lib/content/methodology";
import { cn } from "@/lib/utils";

export function HowItWorksTeaser() {
  return (
    <section id="como-trabaja" className="border-t border-white/5 py-20 md:py-28">
      <SectionContainer className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <Kicker>Cómo trabaja ANKAI</Kicker>
          <h2 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
            Todo empieza con una conversación gratuita, no con una
            cotización.
          </h2>
          <p className="mt-4 text-text-secondary">
            Medimos antes de construir, y acompañamos después de construir.
            Nunca al revés.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-violeta-light">
            {METHODOLOGY_STEPS.map((step, i) => (
              <span key={step.name} className="flex items-center gap-2">
                {i > 0 && <span className="text-text-tertiary">→</span>}
                {step.name}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/como-trabajamos"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "shrink-0 border-white/20 text-white hover:bg-white/5"
          )}
        >
          Ver metodología completa →
        </Link>
      </SectionContainer>
    </section>
  );
}
