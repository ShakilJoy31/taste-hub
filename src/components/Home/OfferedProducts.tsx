import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import Heading from "../reusable-components/Heading";
import { Product } from "@/types/product/productCardTypes";

interface OfferProductsProps {
  products: Product[];
}

const OfferProducts: React.FC<OfferProductsProps> = ({ products }) => {
  const offeredProducts = products.filter(product => product.isSale);

  return (
    <section className="container mx-auto px-4 py-8">
      <Heading className="text-3xl font-bold text-center mb-8">Offered Products</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {offeredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            className="hover:scale-105 transition-transform"
            imageHeight="h-64"
            showCategory={true}
            showRating={true}
            showActions={true}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferProducts;
