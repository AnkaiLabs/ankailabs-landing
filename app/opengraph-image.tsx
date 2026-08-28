import { ImageResponse } from "next/og";

export const alt = "ANKAI LABS — Automatización con IA para pymes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El lockup va embebido: la imagen se genera en el build y no puede salir a
// buscar un archivo por red.
const LOCKUP =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDQwIDQ4MCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDEyMykgIC0tPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuc3QwIHsKICAgICAgICBmaWxsOiAjMTQxNDE0OwogICAgICB9CgogICAgICAuc3QxIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuc3QyIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuc3QzIHsKICAgICAgICBmaWxsOiAjMDBjODk2OwogICAgICB9CgogICAgICAuc3Q0IHsKICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xpcHBhdGgpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwcGF0aCI+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05My41NiwyODBsNjEuMTEtMjAwaDU2LjM5bDYxLjExLDIwMGgtMzguODlsLTU0LjQ0LTE3Ni4zOWg3LjIybC01My42MSwxNzYuMzloLTM4Ljg5LDBaTTEzMC4yMiwyMzguMzN2LTM1LjI4aDEwNS41NnYzNS4yOGgtMTA1LjU2Wk0zMDQuOTQsMjgwVjgwaDM4LjMzbDg2Ljk0LDEzMy4zM1Y4MGgzOC4zM3YyMDBoLTM4LjMzbC04Ni45NC0xMzMuMzN2MTMzLjMzaC0zOC4zM1pNNTE1LjIyLDI4MFY4MGgzNy43OHY5Mi4yMmw3Ni4xMS05Mi4yMmg0Ni4xMWwtODMuNjEsOTguNjEsODguODksMTAxLjM5aC00Ny43OGwtNzkuNzItOTEuMTF2OTEuMTFoLTM3Ljc4Wk02OTMuODMsMjgwbDYxLjExLTIwMGg1Ni4zOWw2MS4xMSwyMDBoLTM4Ljg5bC01NC40NC0xNzYuMzloNy4yMmwtNTMuNjEsMTc2LjM5aC0zOC44OSwwWk03MzAuNSwyMzguMzN2LTM1LjI4aDEwNS41NnYzNS4yOGgtMTA1LjU2Wk05MDgsMjgwVjgwaDM3Ljc4djIwMGgtMzcuNzhaIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8Zz4KICAgIDxnPgogICAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTMuNTYsMjgwbDYxLjExLTIwMGg1Ni4zOWw2MS4xMSwyMDBoLTM4Ljg5bC01NC40NC0xNzYuMzloNy4yMmwtNTMuNjEsMTc2LjM5aC0zOC44OSwwWk0xMzAuMjIsMjM4LjMzdi0zNS4yOGgxMDUuNTZ2MzUuMjhoLTEwNS41NlpNMzA0Ljk0LDI4MFY4MGgzOC4zM2w4Ni45NCwxMzMuMzNWODBoMzguMzN2MjAwaC0zOC4zM2wtODYuOTQtMTMzLjMzdjEzMy4zM2gtMzguMzNaTTUxNS4yMiwyODBWODBoMzcuNzh2OTIuMjJsNzYuMTEtOTIuMjJoNDYuMTFsLTgzLjYxLDk4LjYxLDg4Ljg5LDEwMS4zOWgtNDcuNzhsLTc5LjcyLTkxLjExdjkxLjExaC0zNy43OFpNNjkzLjgzLDI4MGw2MS4xMS0yMDBoNTYuMzlsNjEuMTEsMjAwaC0zOC44OWwtNTQuNDQtMTc2LjM5aDcuMjJsLTUzLjYxLDE3Ni4zOWgtMzguODksMFpNNzMwLjUsMjM4LjMzdi0zNS4yOGgxMDUuNTZ2MzUuMjhoLTEwNS41NlpNOTA4LDI4MFY4MGgzNy43OHYyMDBoLTM3Ljc4WiIvPgogICAgICA8ZyBjbGFzcz0ic3Q0Ij4KICAgICAgICA8cmVjdCBjbGFzcz0ic3QzIiB4PSI1NTMiIHk9IjE3OC42MSIgd2lkdGg9IjEyNy41IiBoZWlnaHQ9IjEwMS4zOSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgogIDxyZWN0IGNsYXNzPSJzdDMiIHg9Ijk3NC4yMiIgeT0iMjQzIiB3aWR0aD0iMzciIGhlaWdodD0iMzciLz4KICA8cmVjdCBjbGFzcz0ic3QzIiB4PSIyOS40NCIgeT0iMjQzIiB3aWR0aD0iMzciIGhlaWdodD0iMzciLz4KICA8Zz4KICAgIDxyZWN0IGNsYXNzPSJzdDMiIHg9IjgwIiB5PSIzMDguMzEiIHdpZHRoPSI4ODAiIGhlaWdodD0iODAiLz4KICAgIDxnPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQwLjYwMCAtMjA0LjU3OCkgc2NhbGUoMS42KSI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQzOC44MiwzNjIuODN2LTM0LjU2aDUuNzh2MjkuMTRoMTUuMjZ2NS40MmgtMjEuMDUsMFoiLz48L2c+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjIuNjAwIC0yMDQuNTc4KSBzY2FsZSgxLjYpIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDc4LjM1LDM2Mi44M2wxMC45LTM0LjU2aDguNDdsMTAuOSwzNC41NmgtNS45NWwtOS44OS0zMS4wMWgxLjNsLTkuNzcsMzEuMDFoLTUuOTZaTTQ4NC40MiwzNTUuMzR2LTUuNGgxOC4xNHY1LjRoLTE4LjE0LDBaIi8+PC9nPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA0LjYwMCAtMjA0LjU3OCkgc2NhbGUoMS42KSI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTUyOS43MywzNjIuODN2LTM0LjU2aDEzLjcxYzIuMzMsMCw0LjI1LjQ3LDUuNzUsMS40LDEuNS45NCwyLjYxLDIuMTMsMy4zNCwzLjU5LjczLDEuNDYsMS4wOSwyLjk2LDEuMDksNC41MSwwLDEuOS0uNDUsMy41Mi0xLjM2LDQuODVzLTIuMTMsMi4yMi0zLjY4LDIuNjl2LTEuMmMyLjE4LjUsMy44MywxLjUzLDQuOTYsMy4xczEuNjksMy4zNSwxLjY5LDUuMzUtLjM5LDMuODQtMS4xOCw1LjM4LTEuOTUsMi43NC0zLjQ5LDMuNmMtMS41NC44Ni0zLjQ1LDEuMy01LjcyLDEuM2gtMTUuMTFaTTUzNS41OSwzNDIuMDdoNy43OGMuODMsMCwxLjU3LS4xNiwyLjIzLS40OHMxLjE4LS43OSwxLjU2LTEuNDJjLjM4LS42Mi41OC0xLjM5LjU4LTIuMywwLTEuMi0uMzgtMi4yLTEuMTUtM3MtMS44NC0xLjItMy4yMS0xLjJoLTcuNzh2OC40aDBaTTUzNS41OSwzNTcuMzhoOC41MmMxLjAxLDAsMS45MS0uMiwyLjcxLS42MS44LS40MSwxLjQzLS45OCwxLjg4LTEuNzMuNDYtLjc0LjY4LTEuNjMuNjgtMi42NSwwLS45My0uMi0xLjc2LS42LTIuNS0uNC0uNzQtLjk4LTEuMzItMS43NS0xLjc2cy0xLjY5LS42Ni0yLjc2LS42NmgtOC42OXY5LjkxaDBaIi8+PC9nPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjg2LjYwMCAtMjA0LjU3OCkgc2NhbGUoMS42KSI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTU4OS42MSwzNjMuNTVjLTIuNTMsMC00LjgtLjQ0LTYuODMtMS4zMi0yLjAyLS44OC0zLjY5LTIuMTQtNC45OS0zLjc4LTEuMy0xLjY0LTIuMTMtMy41OS0yLjQ4LTUuODRsNi0uOTFjLjUxLDIuMDUsMS41NiwzLjYzLDMuMTYsNC43NXMzLjQzLDEuNjgsNS41MSwxLjY4YzEuMjMsMCwyLjM5LS4xOSwzLjQ4LS41OCwxLjA5LS4zOCwxLjk3LS45NCwyLjY1LTEuNjguNjgtLjc0LDEuMDItMS42NCwxLjAyLTIuNzEsMC0uNDgtLjA4LS45Mi0uMjQtMS4zM3MtLjQtLjc3LS43MS0xLjA5LS43MS0uNjEtMS4yLS44OGMtLjQ5LS4yNi0xLjA1LS40OS0xLjY5LS42OGwtOC45My0yLjY0Yy0uNzctLjIyLTEuNi0uNTItMi40OC0uOS0uODktLjM4LTEuNzMtLjktMi41Mi0xLjU2cy0xLjQ0LTEuNTEtMS45NC0yLjU0LS43Ni0yLjMxLS43Ni0zLjgzYzAtMi4yMi41Ni00LjA5LDEuNjktNS42czIuNjUtMi42NCw0LjU2LTMuNGMxLjkxLS43NSw0LjA0LTEuMTIsNi4zNy0xLjEsMi4zNy4wMiw0LjQ4LjQyLDYuMzQsMS4yMSwxLjg2Ljc5LDMuNDEsMS45NCw0LjY2LDMuNDRzMi4xMywzLjMyLDIuNjQsNS40NWwtNi4yMiwxLjA4Yy0uMjYtMS4yMi0uNzUtMi4yNS0xLjQ4LTMuMTFzLTEuNjItMS41MS0yLjY2LTEuOTZjLTEuMDUtLjQ1LTIuMTYtLjY5LTMuMzUtLjcyLTEuMTUtLjAyLTIuMjIuMTYtMy4yLjUyLS45OC4zNi0xLjc4Ljg4LTIuMzgsMS41NS0uNi42Ny0uOSwxLjQ2LS45LDIuMzVzLjI2LDEuNTQuNzcsMi4wOGMuNTEuNTQsMS4xNS45NiwxLjkxLDEuMjcuNzYuMzEsMS41My41NywyLjMyLjc4bDYuMTksMS43M2MuODUuMjIsMS44LjUzLDIuODYuOTFzMi4wNy45MiwzLjA1LDEuNjFjLjk4LjY5LDEuNzgsMS41OSwyLjQxLDIuNzEuNjMsMS4xMi45NSwyLjU0Ljk1LDQuMjdzLS4zNywzLjM2LTEuMTIsNC43MmMtLjc0LDEuMzUtMS43NSwyLjQ4LTMuMDEsMy4zN3MtMi43MSwxLjU3LTQuMzMsMi4wMmMtMS42Mi40NS0zLjMyLjY3LTUuMS42N2gtLjAyWiIvPjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==";

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
          padding: "68px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow violeta */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(107,63,160,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Glow verde */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,200,150,0.2) 0%, transparent 70%)",
          }}
        />

        {/* El lockup de marca */}
        <img src={LOCKUP} alt="" width={252} height={116} />

        {/* Titular. Va en dos líneas explícitas en vez de un párrafo con un
            span de color: Satori no reparte un texto mixto en varias líneas,
            y el titular terminaba saliéndose del lienzo. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "white",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.12,
            }}
          >
            Automatización con IA
          </div>
          <div
            style={{
              color: "#a984d4",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.12,
            }}
          >
            para pymes de LATAM
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 25,
              marginTop: 22,
              lineHeight: 1.4,
            }}
          >
            Auditamos tu operación y automatizamos lo que más te quita tiempo.
          </div>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 19 }}>
            ankailabs.cl
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#00c896",
              color: "#0a0a0b",
              fontSize: 19,
              fontWeight: 700,
              padding: "13px 28px",
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
