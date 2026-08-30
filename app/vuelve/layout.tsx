import { VuelveNavbar, VuelveFooter } from "@/components/vuelve/chrome";

/**
 * Chrome de VUELVE: fondo blanco y los tres colores del logo.
 *
 * VUELVE es marca autónoma, no endosada (docs/vuelve-marca.md §1): sus colores
 * no heredan el verde/violeta de ANKAI a propósito, porque le habla al dueño de
 * un restaurante y no a un founder. Por eso esta ruta no usa el marco oscuro del
 * resto del sitio, aunque viva en el mismo dominio.
 */
export default function VuelveLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-vuelve-tinta">
      <VuelveNavbar />
      <main className="flex-1">{children}</main>
      <VuelveFooter />
    </div>
  );
}
