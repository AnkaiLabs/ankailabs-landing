import { SectionContainer } from "@/components/shared/section-container";

/**
 * Encabezado de las páginas de VUELVE.
 *
 * No reutiliza el PageHeader compartido a propósito: aquel resuelve el sistema
 * de ANKAI —texto blanco sobre grafito, con resplandores verde y violeta— y aquí
 * el fondo es blanco. Lo que sí comparte es la estructura: kicker, titular,
 * bajada y, cuando el titular afirma una cifra, la fuente al pie.
 */
export function VuelvePageHeader({
  kicker,
  title,
  description,
  footnote,
}: {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  footnote?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-10">
      {/* Una insinuación de los colores de marca, no un resplandor ambiental:
          sobre blanco, el neón del sistema de ANKAI ensuciaría la página. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-vuelve-amarillo/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-vuelve-azul/10 blur-3xl"
      />

      <SectionContainer className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-vuelve-rojo">
          {kicker}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-tight text-vuelve-tinta text-balance sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base text-vuelve-gris md:text-lg">
            {description}
          </p>
        )}
        {footnote && (
          <p className="mt-5 max-w-2xl text-xs text-vuelve-gris-claro">
            {footnote}
          </p>
        )}
      </SectionContainer>
    </section>
  );
}
