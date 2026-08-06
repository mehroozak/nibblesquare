import type { Value } from "@/types/content";

type ValueCardProps = {
  value: Value;
};

export function ValueCard({ value }: ValueCardProps) {
  return (
    <div className="border-t pt-6">
      <span className="text-primary flex size-9 items-center">
        <value.icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-2 text-base font-semibold">{value.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}
