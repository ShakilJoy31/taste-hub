// components/product/ProductDetail.tsx
"use client";
import { motion } from "framer-motion";
import { Product } from "@/types/product/productCardTypes";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";
import TabsSection from "./TabsSection";
import RecommendedProducts from "./RecommendedProducts";
import ProductDetailsSection from "./ProductDetailsSection";

interface ProductDetailProps {
    product: Product;
    recommendedProducts?: Product[];
}

export default function ProductDetail({ product, recommendedProducts }: ProductDetailProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Product Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProductGallery product={product} />
                </motion.div>

                {/* Right Column - Product Details */}
                <ProductDetailsSection product={product} />
            </div>

            {/* Additional Information Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Product Information */}
                <div className="lg:col-span-1">
                    <ProductInformation product={product} />
                </div>

                {/* Tabs Section */}
                <div className="lg:col-span-2">
                    <TabsSection
                        productId={parseInt(product.id)}
                        productName={product.name}
                        description={product.description}
                        specification={product.specification}
                        rating={product.rating}
                        reviews={[
                            {
                                id: "1",
                                name: "Alex Johnson",
                                rating: 5,
                                content: "Absolutely love this product! The sound quality is amazing and the battery lasts forever.",
                                createdAt: "2023-10-15"
                            },
                            {
                                id: "2",
                                name: "Sarah Miller",
                                rating: 4,
                                content: "Great product overall. Comfortable to wear for long periods. Noise cancellation could be better though.",
                                createdAt: "2023-10-10"
                            }
                        ]}
                    />
                </div>
            </div>

            {/* Recommended Products */}
            <RecommendedProducts
                currentProductId={product.id}
                initialProducts={recommendedProducts}
            />
        </div>
    );
}