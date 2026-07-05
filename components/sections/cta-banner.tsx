import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="border-t border-white/5 bg-violeta/10 py-14">
      <SectionContainer className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-lg text-lg font-medium text-white">
          Si algo de esto te sonó familiar, conversemos 20 minutos — sin
          costo y sin compromiso.
        </p>
        <Link
          href="#contacto"
          className={cn(buttonVariants({ variant: "default", size: "lg" }), "shrink-0")}
        >
          Agendar reunión gratuita
        </Link>
      </SectionContainer>
    </section>
  );
}
