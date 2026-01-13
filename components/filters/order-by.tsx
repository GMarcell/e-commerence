"use client";

import { OrderByOption, useProductFilterStore } from "@/store/product-filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const options: { label: string; value: OrderByOption }[] = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

export default function OrderBy() {
  const { orderBy, setOrderBy } = useProductFilterStore();

  return (
    <div className="space-y-1 p-4">
      <label className="text-sm font-semibold">Order By</label>
      <Select
        onValueChange={(e) => setOrderBy(e as OrderByOption)}
        value={orderBy}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Order By" />
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
