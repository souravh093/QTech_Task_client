import HeroSection from "@/components/shared/HeroSection";
import ProductCard from "@/components/shared/ProductCard";
import ProductCardSkeleton from "@/components/shared/ProductCardSkeleton";
import StartShopping from "@/components/shared/StartShopping";
import { useGetProductsQuery } from "@/redux/services/baseApi";
import type { IProduct } from "@/types/product/product.interface";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  console.log(products);
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium products at
              unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : products?.data.map((product: IProduct) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </section>

      <StartShopping />
    </div>
  );
};

export default Home;
