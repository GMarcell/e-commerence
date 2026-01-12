"use client";

import { useProductCategories } from "@/hooks/useProductCategories";
import { Badge } from "../ui/badge";
import { useProductFilterStore } from "@/store/product-filter";

export default function CategoryBadges() {
  const categorySelected = useProductFilterStore((state) => state.category);
  const setCategory = useProductFilterStore((state) => state.setCategory);
  const { data: categories } = useProductCategories();

  return (
    <div className="flex gap-2 p-2 overflow-x-scroll">
      <Badge
        onClick={() => setCategory(null)}
        variant={categorySelected === null ? "default" : "secondary"}
      >
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          All
        </h4>
      </Badge>
      {categories?.map((category) => (
        <Badge
          key={category.slug}
          onClick={() => setCategory(category.slug)}
          variant={categorySelected === category.slug ? "default" : "secondary"}
        >
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            {category.name}
          </h4>
        </Badge>
      ))}
    </div>
  );
}
