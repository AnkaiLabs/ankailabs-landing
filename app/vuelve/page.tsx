import type { Metadata } from "next";
import Image from "next/image";
import { VuelvePageHeader } from "@/components/vuelve/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { VUELVE_WHATSAPP_URL } from "@/lib/content/vuelve";

const PAGE_TITLE = "VUELVE";
const PAGE_DESCRIPTION =
  "VUELVE es el sistema de fidelización wallet-native y WhatsApp-first de ANKAI LABS, ya en producción para restaurantes: sin apps, sin tocar la caja, funcionando en 15 minutos.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/vuelve",
  },
  openGraph: {
    title: `${PAGE_TITLE} — ANKAI LABS`,
    description: PAGE_DESCRIPTION,
    url: "https://ankailabs.cl/vuelve",
    siteName: "ANKAI LABS",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} — ANKAI LABS`,
    description: PAGE_DESCRIPTION,
  },
};

const CLIENT_STEPS = [
  {
    title: "Escanea el QR",
    desc: "En la mesa, el mostrador o la caja. El cliente no descarga nada.",
  },
  {
    title: "Tarjeta en el Wallet, con puntos de regalo",
    desc: "Apple Wallet o Google Wallet en 30 segundos, sin registro ni formulario — el negocio puede regalar puntos de bienvenida, así ya hay un avance real hacia la primera recompensa.",
  },
  {
    title: "Gana puntos",
    desc: "Cada compra suma automáticamente. El balance se actualiza solo.",
  },
  {
    title: "WhatsApp lo trae de vuelta",
    desc: "Le avisa cuando acumuló puntos o tiene una recompensa esperándolo.",
  },
];

const CAJERO_TRACKS = [
  {
    label: "Escaneo con la cámara",
    desc: "El cajero apunta el celular al QR de la tarjeta del cliente y el sistema lo encuentra al instante — el mismo gesto de un segundo, incluso en hora punta.",
  },
  {
    label: "Acceso directo, sin apps",
    desc: "Un ícono en la pantalla de inicio del celular abre derecho en la cámara de acreditar — se siente como una app, sin bajar nada de ninguna tienda.",
  },
  {
    label: "Cada cajero, su propio acceso",
    desc: "Cada persona del equipo entra con su propio PIN — nadie comparte cuenta, y cada acreditación queda registrada a nombre de quien la hizo.",
  },
];

const DASHBOARD_TRACKS = [
  {
    label: "Clientes activos",
    desc: "Quién tiene tarjeta, cuándo fue la última visita y cuánto gasta en promedio.",
  },
  {
    label: "Puntos y canjes",
    desc: "Historial completo de puntos otorgados y recompensas canjeadas por cliente.",
  },
  {
    label: "Efectividad del programa",
    desc: "Tasa de retorno, frecuencia de visitas y qué recompensas generan más vueltas.",
  },
  {
    label: "Multi-sucursal real",
    desc: "Un cliente que se inscribe en un local acumula y canjea en cualquiera de tus sucursales — con geolocalización nativa que le avisa cuando está cerca, sin apps de rastreo ni permisos extra.",
  },
];

const PLANS = [
  { name: "Inicio", price: "$29.000" },
  { name: "Crecimiento", price: "$59.000" },
  { name: "Pro", price: "$99.000" },
] as const;

const FEATURE_ROWS = [
  { label: "Mensajes de WhatsApp al mes", values: ["~300", "~1.500", "Ilimitados"] },
  { label: "Recompensas activas", values: ["1", "Ilimitadas", "Ilimitadas"] },
  { label: "Campañas segmentadas", values: ["—", "2 al mes", "Ilimitadas"] },
  { label: "Staff con PIN", values: ["1 (el dueño)", "3", "Ilimitado"] },
  { label: "Analytics", values: ["—", "Básico", "Con IA"] },
  { label: "Multi-local", values: ["—", "—", "Sí"] },
] as const;

const OBJECTIONS = [
  {
    q: "¿Tengo que cambiar mi caja o POS?",
    a: "No. VUELVE funciona en paralelo — no se conecta a tu caja, no la toca, no la interrumpe.",
  },
  {
    q: "¿El cliente tiene que instalar algo?",
    a: "Nada. El QR abre el navegador, el cliente toca un botón y la tarjeta va al Wallet. Listo.",
  },
  {
    q: "¿Cuánto tarda en funcionar?",
    a: "15 minutos: subes tu logo, configuras los puntos, imprimes el QR y lo pones en la mesa.",
  },
];

// Datos estructurados: el producto con sus planes y las objeciones como FAQ.
// Se generan desde las mismas constantes de arriba para que no se desincronicen
// de lo que se ve en pantalla.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "VUELVE",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Apple Wallet, Google Wallet",
      description: PAGE_DESCRIPTION,
      url: "https://ankailabs.cl/vuelve",
      publisher: {
        "@type": "Organization",
        name: "ANKAI LABS",
        url: "https://ankailabs.cl",
      },
      offers: PLANS.map((plan) => ({
        "@type": "Offer",
        name: `Plan ${plan.name}`,
        price: plan.price.replace(/[^0-9]/g, ""),
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
        url: "https://ankailabs.cl/vuelve",
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: OBJECTIONS.map((obj) => ({
        "@type": "Question",
        name: obj.q,
        acceptedAnswer: { "@type": "Answer", text: obj.a },
      })),
    },
  ],
};

export default function VuelvePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <VuelvePageHeader
        kicker="Primer producto de ANKAI LABS"
        title={
          <>
            El 70% de los clientes de un restaurante no vuelven la segunda
            vez.{" "}
            <span className="text-vuelve-rojo">
              No porque no les gustó — sino porque nadie los volvió a
              invitar.
            </span>
          </>
        }
        description="VUELVE es el sistema de fidelización que vive en el celular del cliente — sin app, sin integración con tu caja, en 15 minutos está funcionando."
        footnote="Clientes de primera vez que nunca regresan a un restaurante: 70%. Fuente: Restroworks."
      />

      <section className="pb-16 md:pb-20">
        <SectionContainer>
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-vuelve-rojo/30 bg-vuelve-rojo/10 px-4 py-1.5 text-sm font-semibold text-vuelve-rojo">
              Desde $29.000/mes CLP
            </span>
            <a
              href={VUELVE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-vuelve-rojo px-6 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              Quiero conocer VUELVE
            </a>
          </div>
        </SectionContainer>
      </section>

      {/* ── Recorrido del cliente ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <p className="text-xs font-semibold uppercase tracking-widest text-vuelve-gris-claro">
            Lo que vive el cliente
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-vuelve-tinta md:text-3xl">
            Del QR a la tarjeta en el celular, en 30 segundos.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {CLIENT_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-vuelve-rojo/30 bg-vuelve-rojo/10 text-sm font-bold text-vuelve-rojo">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-extrabold text-vuelve-tinta">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-vuelve-gris">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Ilustraciones: 4 pasos ── */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Paso 1 — QR scan — violeta */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-vuelve-azul/40 to-transparent pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-2xl border border-vuelve-azul/30 bg-[#F8F9F8] shadow-2xl shadow-vuelve-azul/10 transition-colors hover:border-vuelve-azul/50"
                style={{ aspectRatio: "4/5" }}
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-vuelve-azul/15 px-3.5 py-1.5 text-sm font-semibold text-vuelve-azul ring-1 ring-vuelve-azul/30">
                  Sin descarga
                </div>
                <Image
                  src="/vuelve/illus-scan.png"
                  alt="Escaneo QR en el mostrador"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center scale-[1.55] -translate-x-[8%] origin-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-4 pb-4 pt-20">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vuelve-azul/20 text-xs font-bold text-vuelve-azul backdrop-blur-sm">
                      1
                    </span>
                    <p className="text-sm leading-snug text-white/90">
                      El cliente escanea el QR con la cámara.{" "}
                      <span className="text-white/55">Sin descargar nada.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 — Wallet — verde */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-vuelve-rojo/40 to-transparent pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-2xl border border-vuelve-rojo/30 bg-[#F8F9F8] shadow-2xl shadow-vuelve-rojo/10 transition-colors hover:border-vuelve-rojo/50"
                style={{ aspectRatio: "4/5" }}
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-vuelve-rojo/15 px-3.5 py-1.5 text-sm font-semibold text-vuelve-rojo ring-1 ring-vuelve-rojo/30">
                  Sin app
                </div>
                <div className="absolute top-3 right-3 z-10 flex w-[130px] flex-col gap-2">
                  <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-black/85 py-2.5 ring-1 ring-white/25 backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-sm font-semibold tracking-tight text-vuelve-tinta">Apple Pay</span>
                  </div>
                  <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 ring-1 ring-black/10 backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-semibold tracking-tight text-gray-800">Google Pay</span>
                  </div>
                </div>
                <Image
                  src="/vuelve/illus-wallet.png"
                  alt="Tarjeta de puntos en Apple Wallet"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top scale-[1.1] origin-top -translate-y-[8%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-20">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vuelve-rojo/25 text-xs font-bold text-vuelve-rojo backdrop-blur-sm">
                      2
                    </span>
                    <p className="text-sm leading-snug text-white/90">
                      La tarjeta aparece en Apple o Google Wallet en 30 segundos —
                      <span className="text-white/55">
                        {" "}
                        a veces con puntos de regalo ya cargados.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 — Gana puntos — violeta */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-vuelve-azul/40 to-transparent pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-2xl border border-vuelve-azul/30 bg-[#F8F9F8] shadow-2xl shadow-vuelve-azul/10 transition-colors hover:border-vuelve-azul/50"
                style={{ aspectRatio: "4/5" }}
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-vuelve-azul/15 px-3.5 py-1.5 text-sm font-semibold text-vuelve-azul ring-1 ring-vuelve-azul/30">
                  Automático
                </div>
                <Image
                  src="/vuelve/illus-points.png"
                  alt="Pantalla mostrando puntos acumulados"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center scale-[1.15] -translate-y-[12%] origin-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-20">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vuelve-azul/20 text-xs font-bold text-vuelve-azul backdrop-blur-sm">
                      3
                    </span>
                    <p className="text-sm leading-snug text-white/90">
                      Cada compra suma puntos automáticamente. El balance se actualiza solo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4 — WhatsApp — verde */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-vuelve-rojo/40 to-transparent pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-2xl border border-vuelve-rojo/30 bg-[#0B141A] shadow-2xl shadow-vuelve-rojo/10 transition-colors hover:border-vuelve-rojo/50"
                style={{ aspectRatio: "4/5" }}
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-vuelve-rojo/15 px-3.5 py-1.5 text-sm font-semibold text-vuelve-rojo ring-1 ring-vuelve-rojo/30">
                  En tiempo real
                </div>
                <Image
                  src="/vuelve/illus-whatsapp.png"
                  alt="Notificación WhatsApp en lock screen"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top"
                />
                <div className="absolute left-3 right-3 top-14 z-10">
                  <div className="relative rounded-2xl bg-[#E8EBE9] p-3 shadow-xl backdrop-blur-md ring-1 ring-white/20">
                    <div
                      className="absolute -bottom-2 left-5 h-0 w-0"
                      style={{
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "8px solid rgba(255,255,255,0.10)",
                      }}
                    />
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold text-vuelve-tinta">La Trattoria di Nonna</p>
                        <p className="mt-0.5 text-[11px] leading-snug text-white/80">
                          ¡Ganaste +45 puntos hoy! 🎉 Ya puedes canjear tu{" "}
                          <span className="font-semibold text-[#25D366]">Bebida gratis 🥤</span>
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] text-white/40">ahora</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-20">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vuelve-rojo/25 text-xs font-bold text-vuelve-rojo backdrop-blur-sm">
                      4
                    </span>
                    <p className="text-sm leading-snug text-white/90">
                      WhatsApp automático le avisa y lo trae de vuelta a buscar su premio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ── Lo que vive el cajero ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <p className="text-xs font-semibold uppercase tracking-widest text-vuelve-gris-claro">
            Lo que vive el cajero
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-vuelve-tinta md:text-3xl">
            Acreditar puntos toma el mismo gesto de siempre — hasta en hora
            punta.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {CAJERO_TRACKS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-vuelve-linea bg-[#F8F9F8] p-5"
              >
                <p className="text-sm font-semibold text-vuelve-tinta">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-vuelve-gris">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── Vista del dueño ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <p className="text-xs font-semibold uppercase tracking-widest text-vuelve-gris-claro">
            Lo que ve el dueño
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-vuelve-tinta md:text-3xl">
            Un dashboard que te dice quién vuelve, cuánto gasta y qué
            recompensas funcionan.
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DASHBOARD_TRACKS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-vuelve-linea bg-[#F8F9F8] p-5"
              >
                <p className="text-sm font-semibold text-vuelve-tinta">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-vuelve-gris">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-vuelve-linea shadow-2xl shadow-black/10">
            <div className="flex items-center gap-3 border-b border-vuelve-linea bg-[#F1F3F2] px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="h-3 w-3 rounded-full bg-[#C2C7C4]" />
                <div className="h-3 w-3 rounded-full bg-[#D6DAD8]" />
                <div className="h-3 w-3 rounded-full bg-[#E8EBE9]" />
              </div>
              <div className="flex-1 rounded-md bg-[#F1F3F2] px-3 py-1 text-center text-xs text-vuelve-gris-claro">
                vuelve.ankailabs.cl / dashboard
              </div>
            </div>
            <Image
              src="/vuelve/dashboard.png"
              alt="Dashboard de VUELVE — clientes activos, transacciones y canjes"
              width={1440}
              height={900}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-sm text-vuelve-gris">
            Vista en tiempo real desde cualquier dispositivo. Sin instalar nada,
            desde el navegador.
          </p>
        </SectionContainer>
      </section>

      {/* ── Precios ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <h2 className="max-w-2xl text-2xl font-extrabold text-vuelve-tinta md:text-3xl">
            Tres planes mensuales, sin contrato de permanencia.
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">
                Comparación de los planes de VUELVE: qué incluye cada uno y su
                precio mensual en pesos chilenos.
              </caption>
              <thead>
                <tr>
                  <th className="p-4 text-left align-bottom font-normal text-vuelve-gris-claro" />
                  {PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="p-4 text-left align-bottom"
                    >
                      <p className="text-base font-extrabold text-vuelve-tinta">
                        {plan.name}
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-vuelve-rojo">
                        {plan.price}
                        <span className="text-xs font-medium text-vuelve-gris-claro">
                          {" "}
                          / mes CLP
                        </span>
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((row) => (
                  <tr key={row.label} className="border-t border-vuelve-linea">
                    <th
                      scope="row"
                      className="p-4 text-left font-normal text-vuelve-gris"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td key={i} className="p-4 text-vuelve-gris">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-vuelve-gris">
            La inscripción, el Wallet, los puntos y el QR están completos
            desde el Plan Inicio — nunca se limita el núcleo del producto.
          </p>
        </SectionContainer>
      </section>

      {/* ── Pack de Lanzamiento ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <div className="rounded-2xl border border-vuelve-rojo/30 bg-vuelve-rojo/[0.05] p-6 md:p-8">
            <p className="text-sm font-semibold text-vuelve-rojo">
              Pack de Lanzamiento — $30.000 CLP, pago único
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-vuelve-tinta md:text-2xl">
              Para empezar con todo listo, no solo con la cuenta creada.
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-vuelve-gris md:text-base">
              <li>
                3 soportes QR con la marca de tu restaurante — mostrador y las
                2 mesas de mayor tráfico.
              </li>
              <li>Gráfica simple personalizada.</li>
              <li>Configuración guiada completa, en 20 minutos.</li>
              <li>Primer mes de Plan Inicio incluido.</li>
            </ul>
            <p className="mt-5 text-sm text-vuelve-gris">
              Desde el mes 2, precio normal del Plan Inicio: $29.000 CLP/mes.
              Es una condición de lanzamiento: la mantenemos mientras estamos
              afinando el onboarding con los primeros restaurantes.
            </p>
            <a
              href={VUELVE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-vuelve-rojo px-6 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              Quiero el Pack de Lanzamiento
            </a>
          </div>
        </SectionContainer>
      </section>

      {/* ── Implementación / Objeciones ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <p className="text-xs font-semibold uppercase tracking-widest text-vuelve-gris-claro">
            Cómo se implementa
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-vuelve-tinta md:text-3xl">
            15 minutos para que esté funcionando. Sin tocar tu caja.
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {OBJECTIONS.map((obj) => (
              <div
                key={obj.q}
                className="rounded-xl border border-vuelve-linea bg-[#F8F9F8] p-6"
              >
                <p className="text-sm font-semibold text-vuelve-tinta">{obj.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-vuelve-gris">
                  {obj.a}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── Stat + CTA final ── */}
      <section className="border-t border-vuelve-linea py-16 md:py-20">
        <SectionContainer>
          <div className="flex flex-col gap-6 rounded-2xl border border-vuelve-rojo/20 bg-vuelve-rojo/[0.05] p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="text-sm font-semibold text-vuelve-rojo">
                Por qué Wallet y no app
              </p>
              <p className="mt-2 text-sm leading-relaxed text-vuelve-gris">
                Cuando la tarjeta se guarda en el Wallet, entre el{" "}
                <strong className="text-vuelve-tinta">65 y 75% de los clientes</strong>{" "}
                acepta quedársela. Cuando hay que descargar una app, la cifra
                cae al 10-20%. Portillo&apos;s llegó a 2 millones de miembros en
                10 meses con el modelo sin app. La tarjeta vive en la pantalla
                de bloqueo, no en una app que nadie recuerda abrir.
              </p>
              <p className="mt-3 text-xs text-vuelve-gris-claro">
                Fuente: Portillo&apos;s Perks, tasas de enrollment del programa.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={VUELVE_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-vuelve-rojo px-6 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="https://vuelve.ankailabs.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-vuelve-linea px-6 py-3.5 text-base font-bold text-vuelve-tinta transition-colors hover:bg-[#F1F3F2]"
              >
                Ya soy cliente — entrar
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Cierre. El banner compartido resuelve el sistema oscuro de ANKAI, así
          que VUELVE lleva el suyo, con la barra de acento de la marca. */}
      <section className="border-t border-vuelve-linea bg-[#F8F9F8]">
        <div className="flex h-1.5 w-full" aria-hidden="true">
          <span className="flex-1 bg-vuelve-rojo" />
          <span className="flex-1 bg-vuelve-azul" />
          <span className="flex-1 bg-vuelve-amarillo" />
        </div>
        <SectionContainer className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="max-w-lg text-lg font-medium text-vuelve-tinta">
            ¿Tienes un restaurante y hoy no sabes quién vuelve? Escríbenos y lo
            vemos en 10 minutos.
          </p>
          <a
            href={VUELVE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-vuelve-rojo px-6 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Hablar por WhatsApp
          </a>
        </SectionContainer>
      </section>
    </>
  );
}
