import { Badge } from "@/components/ui/badge";
import type { ProductStatus } from "@/types/content";

const STATUS_LABEL: Record<ProductStatus, string> = {
  live: "Live",
  beta: "In beta",
  "in-development": "In development",
  archived: "Archived",
};

const STATUS_VARIANT: Record<
  ProductStatus,
  "default" | "secondary" | "outline" | "accent"
> = {
  live: "default",
  beta: "accent",
  "in-development": "secondary",
  archived: "outline",
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  return <Badge variant={STATUS_VARIANT[status]}>{STATUS_LABEL[status]}</Badge>;
}
