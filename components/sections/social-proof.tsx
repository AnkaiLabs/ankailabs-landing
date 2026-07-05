import { SectionContainer } from "@/components/shared/section-container";

const MARKERS = [
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

export function SocialProof() {
  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <SectionContainer>
        <p className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
          No vendemos IA en abstracto. La aplicamos primero en lo nuestro.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {MARKERS.map((marker) => (
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
      </SectionContainer>
    </section>
  );
}
