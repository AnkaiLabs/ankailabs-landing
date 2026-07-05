import { cn } from "@/lib/utils";

type GlowVariant = "verde" | "violeta" | "mixed";

const VARIANT_LAYERS: Record<GlowVariant, string[]> = {
  verde: ["bg-verde/30"],
  violeta: ["bg-violeta/40"],
  mixed: ["bg-violeta/40", "bg-verde/25"],
};

export function GlowBackground({
  variant = "mixed",
  className,
}: {
  variant?: GlowVariant;
  className?: string;
}) {
  const layers = VARIANT_LAYERS[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {layers.map((layer, i) => (
        <div
          key={layer}
          className={cn(
            "absolute h-[28rem] w-[28rem] rounded-full blur-3xl",
            layer,
            i === 0
              ? "top-[-6rem] right-[-6rem]"
              : "bottom-[-8rem] left-[-4rem]"
          )}
        />
      ))}
    </div>
  );
}
