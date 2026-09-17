/**
 * Monograma de ANKAI LABS — la K con los dos puntos cuadrados.
 *
 * El viewBox va recortado al contenido real (el archivo de marca deja un 26% de
 * aire alrededor del trazo, que a tamaño de navbar encoge el símbolo sin motivo).
 *
 * La K usa `currentColor`, así que hereda el color del contexto: blanca sobre el
 * fondo oscuro del sitio, y correcta si algún día se usa sobre claro. Los verdes
 * son fijos porque son marca, no tema.
 */

const VERDE = "#00C896";

// Geometría corregida el 14-09-2026 sobre el PNG de marca («ankai-K..png»). La
// exportación SVG anterior traía una K de otras proporciones y el bloque verde
// recortado fuera de lugar (asomaba una franja blanca bajo la diagonal). Esta K es
// la del lockup `.ANKAI.` escalada, y la diagonal va como forma propia, sin clipPath.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="44.72 66.29 230.38 187.58"
      // width/height fijan la proporción intrínseca. Sin ellos, un SVG con
      // `w-auto` dentro de un contenedor flex puede colapsar a cero de ancho.
      width="230"
      height="188"
      role="img"
      aria-label="ANKAI LABS"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* La K completa */}
      <path
        fill="currentColor"
        d="M106.46,253.87L106.46,66.29L141.89,66.29L141.89,152.78L213.28,66.29L256.53,66.29L178.11,158.78L261.48,253.87L216.66,253.87L141.89,168.42L141.89,253.87Z"
      />

      {/* La diagonal inferior, en verde */}
      <path
        fill={VERDE}
        d="M141.89,158.78L178.11,158.78L261.48,253.87L216.66,253.87L141.89,168.42Z"
      />

      {/* Los dos puntos — los mismos de .ANKAI. */}
      <rect x="238.1" y="139.57" width="37" height="37" fill={VERDE} />
      <rect x="44.72" y="139.57" width="37" height="37" fill={VERDE} />
    </svg>
  );
}

/**
 * El monograma junto al nombre. Es el bloque de marca del navbar y del footer.
 *
 * El nombre acompaña al símbolo a propósito: el monograma todavía no se reconoce
 * solo, y la asociación se construye viéndolos juntos en el mismo lugar de todas
 * las páginas. Cuando eso esté hecho, el texto puede salir.
 */
export function Wordmark({
  className,
  showName = true,
}: {
  className?: string;
  showName?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Logo className="h-[26px] w-auto shrink-0 text-white" />
      {showName && (
        <span className="text-[17px] font-extrabold tracking-tight text-white">
          ANKAI LABS
        </span>
      )}
    </span>
  );
}
