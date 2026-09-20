import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { GlowBackground } from "@/components/shared/glow-background";
import { Kicker } from "@/components/shared/kicker";
import { ScanIllustration } from "@/components/shared/scan-illustration";
import { SectionContainer } from "@/components/shared/section-container";
import { cn } from "@/lib/utils";

export function VuelveTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-20 md:py-28">
      <GlowBackground variant="verde" className="opacity-15" />

      <SectionContainer className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <Kicker>Nuestro producto</Kicker>
          <h2 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
            VUELVE hace que los clientes de un restaurante vuelvan una segunda
            vez.
          </h2>
          <p className="mt-5 max-w-lg text-text-secondary">
            Un programa de fidelización que vive en la billetera del celular —{" "}
            <span className="text-verde-bright">
              wallet y WhatsApp, sin apps
            </span>{" "}
            — y que hoy está atendiendo clientes reales en un restaurante de
            San Felipe. Es donde está puesto nuestro trabajo, y la prueba de
            que construimos lo que proponemos.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-verde/30 bg-verde/10 px-4 py-1.5 text-sm font-semibold text-verde-bright">
              Desde $29.000/mes CLP
            </span>
            <Link
              href="/vuelve"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Conocer VUELVE →
            </Link>
          </div>
        </div>

        <ScanIllustration />
      </SectionContainer>
    </section>
  );
}
