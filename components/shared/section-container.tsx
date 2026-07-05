import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
