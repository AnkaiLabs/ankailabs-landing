"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#como-trabaja", label: "Servicios" },
  { href: "#vuelve", label: "VUELVE" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() { setOpen(false); }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/10 bg-grafito/95 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <SectionContainer className="flex h-16 items-center justify-between">
          <Link href="#" onClick={close} className="text-lg font-extrabold tracking-tight text-white">
            ANKAI LABS
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contacto"
              className={cn(buttonVariants({ variant: "default" }), "hidden md:inline-flex")}
            >
              Agendar reunión
            </Link>

            {/* Hamburger — solo móvil */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-5 bg-white origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="block h-0.5 w-5 bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-5 bg-white origin-center"
              />
            </button>
          </div>
        </SectionContainer>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-grafito/98 px-6 py-10 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex items-center py-4 text-2xl font-extrabold text-white border-b border-white/[0.06]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-8"
            >
              <Link
                href="#contacto"
                onClick={close}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full justify-center")}
              >
                Agendar reunión gratuita
              </Link>
            </motion.div>

            <p className="mt-6 text-center text-xs tracking-widest text-text-tertiary uppercase">
              Inteligencia con esencia
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
