import { SectionContainer } from "@/components/shared/section-container";

const PAIN_POINTS = [
  "Tu equipo copia y pega lo mismo entre WhatsApp, Excel y el sistema de siempre.",
  "Las decisiones esperan a que alguien tenga tiempo de revisar los datos.",
  "Un error de tipeo en una planilla termina costando plata real.",
  "Si esa persona se enferma o renuncia, nadie más sabe cómo se hacía.",
];

function FrictionIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Problem() {
  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <SectionContainer>
        <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
          Todo eso que tu equipo hace a mano, en algún momento, deja de
          escalar.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 transition-colors hover:border-white/[0.12]"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/30">
                <FrictionIcon />
              </div>
              <p className="text-base leading-relaxed text-text-secondary">
                {point}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
