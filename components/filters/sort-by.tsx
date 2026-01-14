"use client";

import { SortByOption, useProductFilterStore } from "@/store/product-filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const options: { label: string; value: SortByOption }[] = [
  { label: "Title", value: "title" },
  { label: "Price", value: "price" },
  { label: "Rating", value: "rating" },
];

export default function SortBy() {
  const { sortBy, setSortBy } = useProductFilterStore();

  return (
    <div className="space-y-1 p-4">
      <label className="text-sm font-semibold">Sort By</label>
      <Select
        onValueChange={(e) => setSortBy(e as SortByOption)}
        value={sortBy}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Props</SelectLabel>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
