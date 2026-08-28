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

// El clipPath recorta el bloque verde a la forma de la K. El id es constante: si
// el monograma aparece dos veces (navbar y footer) los dos clipPath son idénticos,
// así que resolver ambos al primero da el mismo resultado.
const CLIP_ID = "ankai-monograma-clip";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="41.07 63.5 237.86 193"
      // width/height fijan la proporción intrínseca. Sin ellos, un SVG con
      // `w-auto` dentro de un contenedor flex puede colapsar a cero de ancho.
      width="238"
      height="193"
      role="img"
      aria-label="ANKAI LABS"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={CLIP_ID}>
          <polygon points="100.19 255.69 100.19 62.69 137.19 62.69 137.19 151.68 211.73 62.69 256.9 62.69 175.01 157.85 262.07 255.69 215.27 255.69 137.19 167.77 137.19 255.69 100.19 255.69" />
        </clipPath>
      </defs>

      {/* La K completa */}
      <path
        fill="currentColor"
        d="M100.93,256.5V63.5h37v88.99l74.54-88.99h45.16l-81.89,95.16,87.06,97.84h-46.79l-78.08-87.92v87.92h-37Z"
      />

      {/* La diagonal inferior, en verde, recortada a la forma de la K */}
      <g clipPath={`url(#${CLIP_ID})`}>
        <rect x="137.19" y="158.69" width="123" height="98" fill={VERDE} />
      </g>

      {/* Los dos puntos — los mismos de .ANKAI. */}
      <rect x="241.93" y="141.5" width="37" height="37" fill={VERDE} />
      <rect x="41.07" y="141.5" width="37" height="37" fill={VERDE} />
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
