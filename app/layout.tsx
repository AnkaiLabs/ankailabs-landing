import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-XRX59FXMNJ";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ankailabs.cl"),
  title: "ANKAI LABS — Automatización con IA para pymes",
  description:
    "Auditamos la operación de tu pyme y automatizamos los procesos que más tiempo y decisiones consumen, con IA y automatización. Inteligencia con esencia.",
  openGraph: {
    title: "ANKAI LABS — Automatización con IA para pymes",
    description:
      "Auditamos la operación de tu pyme y automatizamos los procesos que más tiempo y decisiones consumen, con IA y automatización.",
    url: "https://ankailabs.cl",
    siteName: "ANKAI LABS",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANKAI LABS — Automatización con IA para pymes",
    description:
      "Auditamos la operación de tu pyme y automatizamos los procesos que más tiempo y decisiones consumen, con IA y automatización.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
