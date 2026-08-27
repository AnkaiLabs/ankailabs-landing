import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-sm font-bold tracking-wide text-verde-bright uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
