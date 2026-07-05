import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Kicker } from "@/components/shared/kicker";
import { SectionContainer } from "@/components/shared/section-container";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    name: "Diagnóstico",
    price: "Desde $120.000 CLP",
    description:
      "Auditamos tu operación y entregamos un roadmap priorizado: qué automatizar primero y por qué.",
    accent: "verde" as const,
  },
  {
    number: "02",
    name: "Implementación",
    price: "Desde $750.000 CLP",
    description:
      "Construimos las automatizaciones detectadas en el diagnóstico, con IA y las herramientas correctas para tu operación.",
    accent: "verde" as const,
  },
  {
    number: "03",
    name: "Mantenimiento",
    price: "Desde $90.000/mes CLP",
    description:
      "Acompañamiento mensual: monitoreamos, ajustamos y evolucionamos lo que ya está automatizado.",
    accent: "violeta" as const,
  },
];

const ACCENT_CLASSES = {
  verde: "text-verde-bright",
  violeta: "text-violeta-light",
};

export function HowItWorks() {
  return (
    <section id="como-trabaja" className="border-t border-white/5 py-20 md:py-28">
      <SectionContainer>
        <Kicker>Cómo trabaja ANKAI</Kicker>
        <h2 className="mt-4 max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
          Todo empieza con una conversación gratuita, no con una cotización.
        </h2>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-violeta/30 bg-violeta/10 p-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-violeta-light">
              Antes de todo — sin costo
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-white">
              Reunión de 20 minutos
            </h3>
            <p className="mt-2 max-w-lg text-sm text-text-secondary">
              Conversamos sobre tu operación y te mostramos qué detectamos a
              simple vista. Sin compromiso, sin costo — decides después si
              quieres avanzar con el Diagnóstico.
            </p>
          </div>
          <Link
            href="#contacto"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "shrink-0")}
          >
            Agendar reunión gratuita
          </Link>
        </div>

        <p className="mt-12 text-sm font-medium text-text-tertiary">
          Si decides avanzar, así siguen las etapas:
        </p>

        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <span className="text-sm text-text-tertiary">{step.number}</span>
              <h3 className="mt-2 text-xl font-extrabold text-white">
                {step.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm font-medium",
                  ACCENT_CLASSES[step.accent]
                )}
              >
                {step.price}
              </p>
              <p className="mt-4 text-sm text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-text-secondary">
          <span className="font-medium text-verde-bright">
            El Diagnóstico es 100% acreditable a la Implementación
          </span>{" "}
          si avanzas dentro de los primeros 30 días.
        </p>
      </SectionContainer>
    </section>
  );
}
