"use client";

import { useProductCategories } from "@/hooks/useProductCategories";
import { Badge } from "../ui/badge";
import { useProductFilterStore } from "@/store/product-filter";
import { Skeleton } from "../ui/skeleton";

export default function CategoryBadges() {
  const {
    category: categorySelected,
    setCategory,
    setOrderBy,
    setSortBy,
  } = useProductFilterStore();
  const { data: categories, isLoading } = useProductCategories();

  if (isLoading || categories === undefined) {
    return (
      <div>
        <Skeleton className="w-full" />
      </div>
    );
  }
  return (
    <div className="flex gap-2 p-2 overflow-x-scroll">
      <Badge
        onClick={() => {
          setCategory(null);
          setOrderBy("asc");
          setSortBy("title");
        }}
        variant={categorySelected === null ? "default" : "secondary"}
      >
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          All
        </h4>
      </Badge>
      {categories?.map((category) => (
        <Badge
          key={category.slug}
          onClick={() => {
            setCategory(category.slug);
            setOrderBy("asc");
            setSortBy("title");
          }}
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
