import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { FloatingCta } from "@/components/shared/floating-cta";

/**
 * Chrome de ANKAI LABS: navbar, footer y CTA flotante sobre el fondo oscuro.
 *
 * Vive en un route group —los paréntesis no aparecen en la URL— para que las
 * rutas de la consultora compartan este marco y /vuelve pueda tener el suyo,
 * con la identidad de VUELVE, sin que ninguno le imponga el suyo al otro.
 */
export default function AnkaiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCta />
    </>
  );
}
