"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionContainer } from "@/components/shared/section-container";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    nombre: "",
    cargo: "",
    empresa: "",
    sector: "",
    tamano: "",
    correo: "",
    whatsapp: "",
    proceso: "",
  });

  function set(field: keyof typeof values) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const payload = {
      ...values,
      whatsapp: "+56" + values.whatsapp.replace(/\D/g, ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { event_category: "form" });
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="contacto" className="border-t border-white/5 py-20 md:py-28">
        <SectionContainer className="max-w-xl text-center">
          <p className="text-2xl font-extrabold text-white">
            Recibimos tu solicitud.
          </p>
          <p className="mt-3 text-text-secondary">
            Te contactaremos por WhatsApp para agendar los 20 minutos.
          </p>
        </SectionContainer>
      </section>
    );
  }

  return (
    <section id="contacto" className="border-t border-white/5 py-20 md:py-28">
      <SectionContainer className="max-w-xl">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Agenda tu reunión gratuita de 20 minutos.
        </h2>
        <p className="mt-3 text-sm text-text-tertiary">
          Cupos limitados —{" "}
          <span className="font-medium text-white/60">
            atendemos máximo 4 empresas nuevas por mes.
          </span>
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="nombre" className="text-sm text-text-secondary">
                Nombre <span className="text-white/40">*</span>
              </label>
              <Input
                id="nombre"
                required
                value={values.nombre}
                onChange={set("nombre")}
                className="h-11 border-white/15 bg-white/[0.02]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="cargo" className="text-sm text-text-secondary">
                Cargo <span className="text-white/40">*</span>
              </label>
              <Input
                id="cargo"
                required
                placeholder="Ej: Gerente, Dueño"
                value={values.cargo}
                onChange={set("cargo")}
                className="h-11 border-white/15 bg-white/[0.02]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="empresa" className="text-sm text-text-secondary">
                Empresa <span className="text-white/40">*</span>
              </label>
              <Input
                id="empresa"
                required
                value={values.empresa}
                onChange={set("empresa")}
                className="h-11 border-white/15 bg-white/[0.02]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="sector" className="text-sm text-text-secondary">
                Rubro <span className="text-white/40">*</span>
              </label>
              <Input
                id="sector"
                required
                placeholder="Ej: Restaurante, clínica, retail"
                value={values.sector}
                onChange={set("sector")}
                className="h-11 border-white/15 bg-white/[0.02]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="tamano" className="text-sm text-text-secondary">
              Tamaño del equipo <span className="text-white/40">*</span>
            </label>
            <select
              id="tamano"
              required
              value={values.tamano}
              onChange={set("tamano")}
              className="h-11 w-full rounded-md border border-white/15 bg-white/[0.02] px-3 text-sm text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="" disabled className="bg-background">
                Selecciona un rango
              </option>
              <option value="1-5" className="bg-background">1 a 5 personas</option>
              <option value="5-15" className="bg-background">5 a 15 personas</option>
              <option value="15-50" className="bg-background">15 a 50 personas</option>
              <option value="50+" className="bg-background">Más de 50 personas</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="correo" className="text-sm text-text-secondary">
                Correo <span className="text-white/40">*</span>
              </label>
              <Input
                id="correo"
                type="email"
                required
                value={values.correo}
                onChange={set("correo")}
                className="h-11 border-white/15 bg-white/[0.02]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="whatsapp" className="text-sm text-text-secondary">
                WhatsApp <span className="text-white/40">*</span>
              </label>
              <div className="flex h-11 overflow-hidden rounded-md border border-white/15 bg-white/[0.02] focus-within:ring-2 focus-within:ring-white/20">
                <span className="flex items-center border-r border-white/15 px-3 text-sm text-text-secondary select-none">
                  +56
                </span>
                <Input
                  id="whatsapp"
                  type="tel"
                  required
                  placeholder="9 1234 5678"
                  value={values.whatsapp}
                  onChange={set("whatsapp")}
                  className="h-full flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="proceso" className="text-sm text-text-secondary">
              ¿Qué proceso les quita más tiempo?{" "}
              <span className="text-white/40">*</span>
            </label>
            <Textarea
              id="proceso"
              required
              rows={4}
              placeholder="Describe brevemente el proceso que más les consume tiempo o que más errores genera."
              value={values.proceso}
              onChange={set("proceso")}
              className="border-white/15 bg-white/[0.02]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="w-full"
          >
            {status === "submitting"
              ? "Enviando..."
              : "Agendar mi reunión gratuita"}
          </Button>

          {status === "error" && (
            <p className="text-sm text-destructive">
              Algo falló al enviar tu solicitud. Intenta de nuevo.
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-text-tertiary">
          Es una reunión de 20 minutos, gratuita y sin compromiso.
        </p>
      </SectionContainer>
    </section>
  );
}
