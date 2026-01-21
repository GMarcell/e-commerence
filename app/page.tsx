import CategoryBadges from "@/components/filters/category-badge";
import ProductList from "@/components/product/list";
import ProductPagination from "@/components/product/pagination";
import ProductFilters from "@/components/filters";

export default function Home() {
  return (
    <div>
      <CategoryBadges />
      <ProductFilters />
      <ProductList />
      <ProductPagination />
    </div>
  );
}
