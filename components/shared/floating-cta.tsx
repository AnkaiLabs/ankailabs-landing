"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [pastHero, setPastHero] = useState(false);
  const [overContact, setOverContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contacto");
    const observer = contact
      ? new IntersectionObserver(([entry]) => setOverContact(entry.isIntersecting), {
          rootMargin: "0px 0px -20% 0px",
        })
      : null;
    if (contact && observer) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !overContact;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="#contacto"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "shadow-lg shadow-black/40"
            )}
          >
            Agendar reunión gratuita
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
