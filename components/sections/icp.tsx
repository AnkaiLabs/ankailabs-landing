import { SectionContainer } from "@/components/shared/section-container";

const FIT = [
  "Pymes de 5 a 50 personas, en cualquier rubro de LATAM.",
  "Procesos manuales que se repiten cada semana y le quitan horas a tu equipo.",
  "Ya identificaste qué te quita más tiempo, pero nadie ha tenido tiempo de arreglarlo.",
  "Buscas resultados en semanas, no un proyecto de TI de seis meses.",
];

const NOT_FIT = [
  "Buscas una app o software a medida, sin una auditoría previa.",
  "Tu operación cambia por completo cada mes — no hay nada estable que automatizar.",
  "Esperas resultados sin involucrar a tu equipo en el proceso.",
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Icp() {
  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <SectionContainer>
        <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
          Para quién es ANKAI — y para quién no.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-verde/20 bg-verde/[0.04] p-6">
            <p className="text-sm font-semibold text-verde-bright">
              Es para ti si
            </p>
            <ul className="mt-5 space-y-4">
              {FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-verde/20 text-verde-bright">
                    <CheckIcon />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
            <p className="text-sm font-semibold text-text-tertiary">
              No es para ti si
            </p>
            <ul className="mt-5 space-y-4">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/30">
                    <XIcon />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
