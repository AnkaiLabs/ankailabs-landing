import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { VUELVE_WHATSAPP_URL } from "@/lib/content/vuelve";

/**
 * Barra de acento de VUELVE: los tres colores del logo, siempre en el mismo
 * orden y a color pleno, pegados sin separación.
 *
 * El logo lleva varios colores a propósito —le habla a todo el mundo, no a un
 * segmento— así que reducirla a un solo color desperdiciaría esa idea. Es el
 * mismo recurso que usan las piezas de Instagram de VUELVE.
 */
export function BarraAcento() {
  return (
    <div className="flex h-1.5 w-full" aria-hidden="true">
      <span className="flex-1 bg-vuelve-rojo" />
      <span className="flex-1 bg-vuelve-azul" />
      <span className="flex-1 bg-vuelve-amarillo" />
    </div>
  );
}

function Marca() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/vuelve/brand/vuelve-mark.png"
        alt=""
        width={40}
        height={40}
        className="h-8 w-auto"
        priority
      />
      <span className="text-[19px] font-extrabold tracking-tight text-vuelve-tinta">
        VUELVE
      </span>
    </span>
  );
}

export function VuelveNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <BarraAcento />
      <div className="border-b border-vuelve-linea">
        <SectionContainer className="flex h-16 items-center justify-between">
          <Link href="/vuelve" aria-label="VUELVE — ir al inicio">
            <Marca />
          </Link>

          <div className="flex items-center gap-5">
            <a
              href="https://ankailabs.cl"
              className="hidden text-sm text-vuelve-gris transition-colors hover:text-vuelve-tinta sm:inline"
            >
              Un producto de ANKAI LABS
            </a>
            <a
              href={VUELVE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-vuelve-rojo px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </SectionContainer>
      </div>
    </header>
  );
}

export function VuelveFooter() {
  return (
    <footer className="border-t border-vuelve-linea bg-white py-12">
      <SectionContainer className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Marca />
          <p className="mt-3 max-w-xs text-sm text-vuelve-gris">
            Programa de fidelización para restaurantes. Sin app, sin cambiar tu
            caja.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={VUELVE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-vuelve-tinta hover:underline"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="https://vuelve.ankailabs.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vuelve-gris hover:text-vuelve-tinta"
          >
            Ya soy cliente — entrar
          </a>
          <a href="https://ankailabs.cl" className="text-vuelve-gris hover:text-vuelve-tinta">
            ANKAI LABS
          </a>
          <Link href="/privacidad" className="text-vuelve-gris hover:text-vuelve-tinta">
            Política de privacidad
          </Link>
        </div>
      </SectionContainer>
    </footer>
  );
}
