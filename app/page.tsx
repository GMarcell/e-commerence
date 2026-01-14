import CategoryBadges from "@/components/filters/category-badge";
import Navbar from "@/components/layout/navbar";
import ProductList from "@/components/product/product-list";
import ProductPagination from "@/components/product/product-pagination";
import ProductFilters from "@/components/filters";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CategoryBadges />
      <ProductFilters />
      <ProductList />
      <ProductPagination />
    </div>
  );
}
