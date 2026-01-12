"use client";

import CategoryBadges from "@/components/product/category-badge";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CategoryBadges />
    </div>
  );
}
