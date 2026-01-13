import CategoryBadges from "@/components/product/category-badge";
import Navbar from "@/components/layout/navbar";
import ProductList from "@/components/product/product-list";
import PriceFilter from "@/components/product/price-filter";
import ProductPagination from "@/components/product/product-pagination";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CategoryBadges />
      <PriceFilter />
      <ProductList />
      <ProductPagination />
    </div>
  );
}
