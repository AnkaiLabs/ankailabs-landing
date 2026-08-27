import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";
import { cn } from "@/lib/utils";

export function CtaBanner({
  text = "Si algo de esto te sonó familiar, conversemos 20 minutos — sin costo y sin compromiso.",
  href = "/#contacto",
  label = "Agendar reunión gratuita",
  external = false,
}: {
  text?: string;
  href?: string;
  label?: string;
  /** true cuando el destino sale del sitio (WhatsApp, por ejemplo). */
  external?: boolean;
} = {}) {
  const className = cn(
    buttonVariants({ variant: "default", size: "lg" }),
    "shrink-0"
  );

  return (
    <section className="border-t border-white/5 bg-violeta/10 py-14">
      <SectionContainer className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-lg text-lg font-medium text-white">{text}</p>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {label}
          </a>
        ) : (
          <Link href={href} className={className}>
            {label}
          </Link>
        )}
      </SectionContainer>
    </section>
  );
}
