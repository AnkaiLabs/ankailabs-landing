const N8N_WEBHOOK_URL =
  process.env.N8N_LEAD_WEBHOOK_URL ||
  "https://ankai-project-n8n.fg1v4k.easypanel.host/webhook/lead-landing";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.error("[lead-form] n8n respondió con error:", res.status);
      return Response.json({ ok: false }, { status: 500 });
    }
  } catch (err) {
    console.error("[lead-form] Error al contactar n8n:", err);
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
}
