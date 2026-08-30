import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/shared/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Cómo trabajamos";
const PAGE_DESCRIPTION =
  "Diagnóstico, Implementación y Mantenimiento: las tres etapas de ANKAI LABS, con precios reales y el mecanismo de crédito entre Diagnóstico e Implementación.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/como-trabajamos",
  },
  openGraph: {
    title: `${PAGE_TITLE} — ANKAI LABS`,
    description: PAGE_DESCRIPTION,
    url: "https://ankailabs.cl/como-trabajamos",
    siteName: "ANKAI LABS",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} — ANKAI LABS`,
    description: PAGE_DESCRIPTION,
  },
};

export default function ComoTrabajamosPage() {
  return (
    <>
      <PageHeader
        kicker="Metodología ANKAI"
        title="Tres etapas, en el orden que corresponde."
        description="Primero medimos. Después construimos lo que esa medición justifica. Por último, acompañamos lo que ya funciona. Nunca al revés."
        glow="violeta"
      />

      <section className="py-16 md:py-20">
        <SectionContainer>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-violeta/30 bg-violeta/10 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-sm font-medium text-violeta-light">
                Antes de todo — sin costo
              </p>
              <h2 className="mt-1 text-xl font-extrabold text-white md:text-2xl">
                Reunión de 20 minutos
              </h2>
              <p className="mt-3 max-w-xl text-sm text-text-secondary md:text-base">
                Es una lectura desde afuera: conversamos sobre tu operación y
                te mostramos qué detectamos a simple vista, con lo que se ve
                en 20 minutos. No es un mini-Diagnóstico — el Diagnóstico real
                mide con tus números; esto solo hace visible si existe una
                brecha que valga la pena medir. Sin compromiso, sin costo,
                decides después.
              </p>
            </div>
            <Link
              href="/#contacto"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "shrink-0"
              )}
            >
              Agendar reunión gratuita
            </Link>
          </div>
        </SectionContainer>
      </section>

      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionContainer>
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            Si decides avanzar, así siguen las tres etapas.
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm text-text-tertiary">01</span>
                <h3 className="text-xl font-extrabold text-white md:text-2xl">
                  Diagnóstico
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-text-secondary md:text-base">
                Auditamos tu operación completa y entregamos un roadmap
                priorizado: qué automatizar primero y por qué. Entrega en
                Notion (informe) y Miro (procesos dibujados).
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm font-semibold text-violeta-light">
                    Esencial — $120.000 CLP
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Operaciones de 5 a 15 personas. Cerca de 2 días de
                    trabajo, entrega en aproximadamente 5 días hábiles.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm font-semibold text-violeta-light">
                    Integral — $150.000 CLP
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Operaciones de 15 a 50 personas. Cerca de 3 días de
                    trabajo, entrega en aproximadamente 7 días hábiles.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-text-tertiary">
                Más de 50 personas o múltiples sedes: se cotiza aparte.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm text-text-tertiary">02</span>
                <h3 className="text-xl font-extrabold text-white md:text-2xl">
                  Implementación
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-text-secondary md:text-base">
                Construimos lo que el Diagnóstico priorizó, con IA y las
                herramientas correctas para tu operación. Entrega en n8n + IA.
                Nunca es lo primero que se vende — sale del Diagnóstico.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 p-4">
                <p className="text-sm font-semibold text-violeta-light">
                  Desde $750.000 CLP
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  El precio final sale del Diagnóstico — nunca se cotiza
                  antes. Duración típica: entre 2 y 6 semanas según alcance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm text-text-tertiary">03</span>
                <h3 className="text-xl font-extrabold text-white md:text-2xl">
                  Mantenimiento
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-text-secondary md:text-base">
                Monitoreamos, ajustamos y evolucionamos lo que ya está
                automatizado. Mantener lo construido, no construir lo
                nuevo — eso es otra Implementación, y se cotiza aparte.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 p-4">
                <p className="text-sm font-semibold text-violeta-light">
                  $90.000 – $110.000 CLP / mes
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Aproximadamente 10-15% del valor de lo construido. Los
                  costos de infraestructura (hosting, APIs) van por fuera,
                  según lo que uses.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionContainer>
          <div className="rounded-2xl border border-verde/30 bg-verde/10 p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">
              El Diagnóstico es 100% acreditable a la Implementación
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-text-secondary md:text-base">
              Si avanzas dentro de los primeros 30 días después de recibir el
              Diagnóstico, todo lo que pagaste se descuenta del precio de la
              Implementación. Por ejemplo: un Diagnóstico Integral de
              $150.000 se descuenta completo de una Implementación de
              $750.000 — quedan $600.000 por pagar.
            </p>
          </div>
        </SectionContainer>
      </section>

      <CtaBanner />
    </>
  );
}
