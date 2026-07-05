import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";

export const metadata: Metadata = {
  title: "Política de privacidad — ANKAI LABS",
  description:
    "Cómo recopilamos, usamos y protegemos tus datos personales en ANKAI LABS.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-20 md:py-28">
      <SectionContainer className="max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl font-extrabold text-white md:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-3 text-sm text-text-tertiary">
          Última actualización: julio de 2026
        </p>

        <div className="mt-10 space-y-8 text-text-secondary [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-extrabold [&_h2]:text-white">

          <p>
            ANKAI LABS SpA (RUT 78.459.328-2), en adelante «ANKAI LABS», es
            responsable del tratamiento de los datos personales que recopila a
            través de su sitio web <strong className="text-white">ankailabs.cl</strong>.
            La presente política describe qué datos recogemos, cómo los usamos y
            qué derechos tienes sobre ellos, en cumplimiento de la Ley N.° 19.628
            sobre protección de la vida privada de Chile.
          </p>

          <h2>1. Datos que recopilamos</h2>
          <p>
            Cuando completas el formulario de contacto de nuestro sitio web,
            recopilamos la siguiente información:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Nombre completo</li>
            <li>Cargo</li>
            <li>Nombre de la empresa</li>
            <li>Rubro o sector</li>
            <li>Correo electrónico</li>
            <li>Número de WhatsApp</li>
            <li>Descripción del proceso que más tiempo consume en tu operación</li>
          </ul>

          <h2>2. Finalidad del tratamiento</h2>
          <p>
            Los datos se recopilan con el único propósito de contactarte para
            coordinar una reunión gratuita de 20 minutos y evaluar si existe
            una oportunidad de colaboración. No los usamos para publicidad de
            terceros ni para perfilamiento automatizado.
          </p>

          <h2>3. Base legal</h2>
          <p>
            El tratamiento se basa en tu consentimiento explícito al enviar el
            formulario de contacto.
          </p>

          <h2>4. Almacenamiento y seguridad</h2>
          <p>
            Los datos se transfieren y almacenan en sistemas de automatización
            propios de ANKAI LABS (n8n, Airtable). Aplicamos medidas técnicas
            razonables para proteger la información contra acceso no autorizado,
            alteración o pérdida.
          </p>

          <h2>5. Retención</h2>
          <p>
            Conservamos tus datos mientras exista una relación comercial activa
            o potencial. Si no avanzamos en ninguna conversación, los eliminamos
            dentro de los 12 meses siguientes a la última comunicación.
          </p>

          <h2>6. Compartición con terceros</h2>
          <p>
            No vendemos ni cedemos tus datos a terceros. Podemos compartirlos
            únicamente con proveedores de servicio que actúan bajo instrucciones
            de ANKAI LABS (por ejemplo, plataformas de mensajería para
            coordinar la reunión).
          </p>

          <h2>7. Tus derechos</h2>
          <p>
            De acuerdo con la Ley N.° 19.628, tienes derecho a acceder,
            rectificar, cancelar u oponerte al tratamiento de tus datos. Para
            ejercerlos, escríbenos a{" "}
            <a
              href="mailto:contacto@ankailabs.com"
              className="text-verde-bright hover:underline"
            >
              contacto@ankailabs.com
            </a>{" "}
            indicando tu nombre completo y la solicitud específica. Responderemos
            dentro de los plazos legales.
          </p>

          <h2>8. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política cuando sea necesario. La fecha de
            «última actualización» al inicio de la página refleja siempre la
            versión vigente.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Para cualquier consulta sobre privacidad, escríbenos a{" "}
            <a
              href="mailto:contacto@ankailabs.com"
              className="text-verde-bright hover:underline"
            >
              contacto@ankailabs.com
            </a>
            .
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}
