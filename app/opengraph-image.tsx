import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ANKAI LABS — Automatización con IA para pymes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow violeta fondo */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,63,160,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Glow verde fondo */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,200,150,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00c896",
              boxShadow: "0 0 12px #00c896",
            }}
          />
          <span
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            ANKAI LABS
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              color: "white",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 760,
            }}
          >
            Automatización con IA{" "}
            <span style={{ color: "#a984d4" }}>para pymes de LATAM</span>
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 24,
              margin: 0,
              maxWidth: 640,
              lineHeight: 1.4,
            }}
          >
            Auditamos tu operación y automatizamos lo que más te quita tiempo.
          </p>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18 }}>
            ankailabs.cl
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#00c896",
              color: "#0a0a0b",
              fontSize: 18,
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: 10,
            }}
          >
            Reunión gratuita de 20 min →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
