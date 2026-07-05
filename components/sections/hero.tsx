"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { GlowBackground } from "@/components/shared/glow-background";
import { Kicker } from "@/components/shared/kicker";
import { SectionContainer } from "@/components/shared/section-container";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "12 h",  label: "ahorradas hoy",    color: "text-verde-bright" },
  { value: "847",   label: "tareas ejecutadas", color: "text-white" },
  { value: "0",     label: "errores humanos",   color: "text-violeta-light" },
];

const DONE_TASKS = [
  { label: "Facturas del mes → Google Sheets",  time: "hace 2 min" },
  { label: "Leads nuevos → CRM + WhatsApp",     time: "hace 5 min" },
  { label: "Reporte de ventas → Gerencia",       time: "hace 1 h"  },
];

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#4dedbc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Tarjeta flotante: nuevo lead ── */
function FloatingLead() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24, y: -8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
      className="absolute -right-4 -top-12 z-20 w-64 hidden md:block"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-verde/20 bg-[#0d0d12]/90 p-4 shadow-xl shadow-black/40 backdrop-blur-sm"
      >
        <div className="flex items-start gap-3">
          <div className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-verde/15">
            <span className="text-base">🔔</span>
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-verde" />
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white">Nuevo lead recibido</p>
            <p className="mt-0.5 truncate text-[11px] text-white/50">Clínica Los Robles · 3 sucursales</p>
            <p className="mt-2 text-[11px] font-semibold text-verde">→ Notificado a Slack + CRM</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Tarjeta flotante: reporte listo ── */
function FloatingReport() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.65, duration: 0.6, ease: "easeOut" }}
      className="absolute -bottom-12 -left-4 z-20 w-60 hidden md:block"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="rounded-2xl border border-violeta/25 bg-[#0d0d12]/90 p-4 shadow-xl shadow-black/40 backdrop-blur-sm"
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violeta/15">
            <span className="text-base">📊</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white">Reporte mensual listo</p>
            <p className="mt-0.5 text-[11px] text-white/50">$4.2M facturado este mes</p>
            <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "78%" }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-violeta-light"
              />
            </div>
            <p className="mt-1 text-[10px] text-violeta-light/70">78% vs meta del mes</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full pb-6 pt-4 md:px-10 md:pb-16 md:pt-16"
    >
      {/* Glows de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violeta/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 right-8 h-64 w-64 rounded-full bg-verde/10 blur-3xl" />

      {/* Panel principal */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12] shadow-2xl shadow-black/60">

        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.025] px-4 py-3 md:px-6 md:py-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-white/15" />
            <div className="h-3 w-3 rounded-full bg-white/10" />
            <div className="h-3 w-3 rounded-full bg-white/[0.07]" />
          </div>
          <div className="flex-1 rounded-md bg-white/[0.05] py-1.5 text-center text-xs text-white/25">
            sistema.ankailabs.cl
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-verde" />
            </span>
            <span className="text-xs font-semibold text-verde">en vivo</span>
          </div>
        </div>

        <div className="p-4 md:p-8">

          {/* Stats */}
          <div className="mb-7 grid grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-2 py-4 text-center md:px-4 md:py-5"
              >
                <p className={cn("text-xl font-extrabold tabular-nums md:text-3xl", s.color)}>
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] leading-tight text-white/35 md:mt-1.5 md:text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Separator */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/20">
            Flujos activos
          </p>

          {/* Task list */}
          <div className="space-y-2.5">
            {DONE_TASKS.map((task, i) => (
              <motion.div
                key={task.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-3 py-3 md:px-5 md:py-3.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-verde/15">
                  <CheckIcon />
                </div>
                <p className="flex-1 truncate text-sm text-white/65">{task.label}</p>
                <span className="shrink-0 text-xs text-white/25">{task.time}</span>
              </motion.div>
            ))}

            {/* En ejecución */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.96 }}
              className="flex items-center gap-3 rounded-xl border border-violeta/25 bg-violeta/[0.07] px-3 py-3 md:px-5 md:py-3.5"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violeta/40 bg-violeta/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  className="h-3.5 w-3.5 rounded-full border border-transparent border-t-violeta-light"
                />
              </div>
              <p className="flex-1 truncate text-sm text-violeta-light">
                Procesando cotizaciones pendientes…
              </p>
              <span className="shrink-0 text-xs text-violeta/60">ahora</span>
            </motion.div>

            {/* En cola */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.03] px-3 py-3 opacity-30 md:px-5 md:py-3.5"
            >
              <div className="h-6 w-6 shrink-0 rounded-full border border-white/20" />
              <p className="flex-1 truncate text-sm text-white/50">Resumen diario → Slack</p>
              <span className="shrink-0 text-xs text-white/20">en cola</span>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25 }}
            className="mt-6 text-center text-xs text-white/20"
          >
            Ejecutando mientras tú atiendes a tus clientes
          </motion.p>
        </div>
      </div>

      {/* Tarjetas flotantes */}
      <FloatingLead />
      <FloatingReport />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-32 md:min-h-[88vh] md:pt-32 md:pb-40">
      <GlowBackground variant="mixed" className="opacity-50" />

      <SectionContainer className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-w-0 w-full"
        >
          <Kicker>Automatización para pymes</Kicker>

          <h1 className="mt-5 text-3xl leading-[1.1] font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Tu pyme ya genera los datos.{" "}
            <span className="text-violeta-light">
              Nosotros construimos el sistema
            </span>{" "}
            que decide con ellos.
          </h1>

          <p className="mt-6 text-base text-text-secondary md:text-lg md:max-w-lg">
            Auditamos tu operación, encontramos dónde se pierden horas y
            decisiones, y automatizamos ese proceso con IA — sin agregar otra
            herramienta que aprender.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <Link
              href="#contacto"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full justify-center md:w-auto")}
            >
              Agendar reunión gratuita de 20 min
            </Link>
            <Link
              href="#como-trabaja"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full justify-center border-white/20 text-white hover:bg-white/5 md:w-auto"
              )}
            >
              Ver cómo funciona
            </Link>
          </div>

          <p className="mt-6 text-xs tracking-widest text-text-tertiary uppercase">
            Inteligencia con esencia
          </p>
        </motion.div>

        <HeroVisual />
      </SectionContainer>
    </section>
  );
}
