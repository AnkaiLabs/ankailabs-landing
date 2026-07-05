"use client";

import { motion } from "motion/react";

export function ScanIllustration() {
  return (
    <div className="relative flex aspect-square w-full max-w-xs items-center justify-center justify-self-center">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-verde/30 to-violeta/30 blur-3xl"
      />

      {/* QR token being scanned, peeking behind the phone */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute right-2 bottom-20 flex h-24 w-24 items-center justify-center rounded-xl bg-white shadow-xl"
      >
        <svg viewBox="0 0 100 100" className="h-16 w-16">
          <rect x="0" y="0" width="30" height="30" fill="#0A0A0B" />
          <rect x="35" y="0" width="5" height="5" fill="#0A0A0B" />
          <rect x="70" y="0" width="30" height="30" fill="#0A0A0B" />
          <rect x="5" y="5" width="20" height="20" fill="white" />
          <rect x="75" y="5" width="20" height="20" fill="white" />
          <rect x="10" y="10" width="10" height="10" fill="#0A0A0B" />
          <rect x="80" y="10" width="10" height="10" fill="#0A0A0B" />
          <rect x="0" y="35" width="5" height="5" fill="#0A0A0B" />
          <rect x="45" y="40" width="15" height="5" fill="#0A0A0B" />
          <rect x="0" y="70" width="30" height="30" fill="#0A0A0B" />
          <rect x="5" y="75" width="20" height="20" fill="white" />
          <rect x="10" y="80" width="10" height="10" fill="#0A0A0B" />
          <rect x="45" y="55" width="10" height="10" fill="#0A0A0B" />
          <rect x="70" y="70" width="10" height="5" fill="#0A0A0B" />
          <rect x="85" y="75" width="10" height="10" fill="#0A0A0B" />
        </svg>
      </motion.div>

      {/* Phone frame with scanning viewfinder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 h-72 w-40 rounded-[2rem] border-[6px] border-white/15 bg-grafito/95 shadow-2xl"
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-white/15" />

        {/* Viewfinder */}
        <div className="absolute inset-4 top-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="absolute left-3 top-3 h-4 w-4 rounded-tl-lg border-l-2 border-t-2 border-verde-bright" />
          <div className="absolute right-3 top-3 h-4 w-4 rounded-tr-lg border-r-2 border-t-2 border-verde-bright" />
          <div className="absolute bottom-3 left-3 h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-verde-bright" />
          <div className="absolute bottom-3 right-3 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-verde-bright" />

          <motion.div
            aria-hidden
            animate={{ top: ["18%", "78%", "18%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-3 right-3 h-0.5 rounded-full bg-verde-bright shadow-[0_0_8px_2px_rgba(77,237,188,0.6)]"
          />
        </div>
      </motion.div>

      {/* Abstract hand grip, holding the phone from below */}
      <div aria-hidden className="absolute bottom-6 z-20 flex gap-1.5">
        <div className="h-10 w-6 rounded-full bg-white/20" />
        <div className="h-14 w-7 rounded-full bg-white/25" />
        <div className="h-11 w-6 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
