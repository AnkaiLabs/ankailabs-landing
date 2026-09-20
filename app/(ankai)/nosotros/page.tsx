import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/shared/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Nosotros";
const PAGE_DESCRIPTION =
  "ANKAI LABS recién empieza y lo decimos directo. La autoridad no son logos ni testimonios — es el método, aplicado primero en nuestra propia operación.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: `${PAGE_TITLE} — ANKAI LABS`,
    description: PAGE_DESCRIPTION,
    url: "https://ankailabs.cl/nosotros",
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

const STACK_MARKERS = [
  {
    label: "Metodología propia",
    detail:
      "Diagnóstico estructurado en tres etapas, no una plantilla genérica de consultoría.",
  },
  {
    label: "Construido, no prometido",
    detail:
      "VUELVE, nuestro propio producto SaaS, ya está en producción — no es un mockup.",
  },
  {
    label: "Stack real de automatización",
    detail:
      "n8n, Claude y OpenAI aplicados primero a nuestra propia operación, antes que a la tuya.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        kicker="Quién está detrás"
        glow="mixed"
        title="La autoridad no son logos, es el método."
        description="ANKAI LABS recién empieza — y eso lo decimos directo, no lo escondemos. Lo que sostiene esto no es una lista de clientes, es cómo pensamos y lo que ya construimos con nuestras propias reglas."
      />

      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionContainer>
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            El método antes que la venta.
          </h2>
          <p className="mt-5 max-w-2xl text-text-secondary md:text-lg">
            No pedimos que confíes en una promesa. En la reunión de 20
            minutos hacemos visible, con tu propia operación, la diferencia
            entre lo que se ve desde afuera y lo que realmente está pasando
            por dentro. Esa lectura —no un discurso de ventas— es lo que
            decide si conversamos de un Diagnóstico.
          </p>
        </SectionContainer>
      </section>

      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionContainer>
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            Quién construye esto.
          </h2>
          <p className="mt-5 max-w-2xl text-text-secondary md:text-lg">
            Detrás de ANKAI LABS está Renato Herrera. No hay todavía años de
            casos de clientes que mostrar — lo que sí hay es el método con el
            que se audita cada operación, y la disposición a mostrarlo en la
            reunión de 20 minutos antes de pedir nada a cambio.
          </p>
        </SectionContainer>
      </section>

      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionContainer>
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            Recién empezamos, y lo decimos directo.
          </h2>
          <p className="mt-5 max-w-2xl text-text-secondary md:text-lg">
            ANKAI LABS SpA se constituyó en julio de 2026. Ya factura a
            clientes reales, pero no vamos a mostrarte un logo inventado ni un
            testimonio que no exista para parecer más grandes de lo que
            somos. El primer restaurante operando con VUELVE está publicado con
            nombre en{" "}
            <Link
              href="/vuelve"
              className="font-semibold text-verde-bright underline underline-offset-4"
            >
              la página del producto
            </Link>
            , y los que vengan van a estar ahí igual — mientras tanto, la
            honestidad es el activo.
          </p>
        </SectionContainer>
      </section>

      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionContainer>
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            El mismo stack, aplicado primero en lo nuestro.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {STACK_MARKERS.map((marker) => (
              <div key={marker.label}>
                <p className="text-sm font-medium text-verde-bright">
                  {marker.label}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {marker.detail}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/vuelve"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-10 border-white/20 text-white hover:bg-white/5"
            )}
          >
            Conocer VUELVE →
          </Link>
        </SectionContainer>
      </section>

      <CtaBanner />
    </>
  );
}
