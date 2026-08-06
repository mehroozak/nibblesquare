import type { ProductFeature } from "@/types/content";

type ProductFeatureGridProps = {
  features: ProductFeature[];
};

export function ProductFeatureGrid({ features }: ProductFeatureGridProps) {
  return (
    <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <li key={feature.title}>
          <span className="bg-accent text-accent-foreground grid size-10 place-items-center rounded-lg">
            <feature.icon className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
