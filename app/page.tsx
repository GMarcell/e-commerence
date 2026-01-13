import CategoryBadges from "@/components/filters/category-badge";
import Navbar from "@/components/layout/navbar";
import ProductList from "@/components/product/product-list";
import PriceFilter from "@/components/filters/price-filter";
import ProductPagination from "@/components/product/product-pagination";
import RatingFilter from "@/components/filters/rating-filter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CategoryBadges />
      <PriceFilter />
      <RatingFilter />
      <ProductList />
      <ProductPagination />
    </div>
  );
}
