import CategoryBadges from "@/components/product/category-badge";
import Navbar from "@/components/layout/navbar";
import ProductList from "@/components/product/product-list";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CategoryBadges />
      <ProductList />
    </div>
  );
}
