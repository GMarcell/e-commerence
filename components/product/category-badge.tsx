"use client";

import { useProductCategories } from "@/hooks/useProductCategories";
import { Badge } from "../ui/badge";

export default function CategoryBadges() {
  const { data } = useProductCategories();
  console.log("categories", data);
  return (
    <div className="flex gap-2 p-2 overflow-x-scroll">
      {data?.map((category) => (
        <Badge key={category.slug}>
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            {category.name}
          </h4>
        </Badge>
      ))}
    </div>
  );
}
