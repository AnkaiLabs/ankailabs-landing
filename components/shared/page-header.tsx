import { GlowBackground } from "@/components/shared/glow-background";
import { Kicker } from "@/components/shared/kicker";
import { SectionContainer } from "@/components/shared/section-container";

export function PageHeader({
  kicker,
  title,
  description,
  footnote,
  glow = "mixed",
}: {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  /** Cita de la fuente cuando el titular afirma una cifra. */
  footnote?: React.ReactNode;
  glow?: "verde" | "violeta" | "mixed";
}) {
  return (
    <section className="relative overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20">
      <GlowBackground variant={glow} className="opacity-40" />
      <SectionContainer>
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-5 max-w-3xl text-3xl leading-[1.1] font-extrabold text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base text-text-secondary md:text-lg">
            {description}
          </p>
        )}
        {footnote && (
          <p className="mt-5 max-w-2xl text-xs text-text-tertiary">{footnote}</p>
        )}
      </SectionContainer>
    </section>
  );
}
