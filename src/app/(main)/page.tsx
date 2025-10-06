// app/page.tsx
import HomeBanner from "@/components/Home/Banner";
import CategorySection from "@/components/Home/CategorySection";
import ExpandableCardDemo from "@/components/Home/ExpandableCardDemo";
import GoalsHistory from "@/components/Home/GoalsHistory";
import NewProduct from "@/components/Home/NewProduct";
import OfferProducts from "@/components/Home/OfferedProducts";
import TopSoldProducts from "@/components/Home/TopSoldProduct";
import WelcomeSection from "@/components/Home/WelcomeSection";
import RestaurantMenuCarousel from "@/components/reusable-components/RestaurantMenuCarousel";
import MenuSection from "@/components/reusable-components/MenuSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";
import { breakfastItems } from "@/utils/constant/menuConstant";
import { getAllCategories, getProductsByCategory, getProductsData } from "@/utils/helper/dataFetcher";

export async function generateMetadata() {
  return generateDynamicMetadata({
    title: "Premium Online Store | Home ",
    description: "Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, home goods and more. Free shipping on orders over $50. Secure checkout guaranteed.",
    keywords: [
      "online shopping", "ecommerce store", "buy products online",
      "electronics", "fashion", "home decor", "premium products",
      "discounts", "free shipping", "secure checkout", "best deals",
      "shopping", "online store", "quality products", "affordable prices"
    ],
  });
}

// Update the interface to reflect that searchParams is a Promise
interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  // Await the searchParams promise first
  const resolvedSearchParams = await searchParams;
  
  // Get category from URL params or use default
  const category = typeof resolvedSearchParams.category === 'string'
    ? resolvedSearchParams.category
    : "Electronics";

  // Fetch products data on the server
  const products = await getProductsData();

  // Fetch categories and products for the selected category
  const rawCategories = await getAllCategories();
  const categories = rawCategories.map((cat: { name: string }) => ({
    ...cat,
    name: typeof cat.name === "string" ? cat.name : String(cat.name),
  }));

  const categoryProducts = await getProductsByCategory(category);
  
  return (
    <div className="bg-[#F4F6F8] dark:bg-gray-600">
      <HomeBanner></HomeBanner>
      <hr />
      <GoalsHistory></GoalsHistory>
      <WelcomeSection></WelcomeSection>
      <section className="grid lg:flex gap-4 lg:gap-24 max-w-[1440px] mx-auto px-4 lg:px-0">
        <MenuSection title="Breakfast" items={breakfastItems} />
        <MenuSection title="Lunch" items={breakfastItems} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-24 max-w-[1440px] mx-auto px-4 lg:px-0">
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
      </section>
      {/* <ExpandableCardDemo></ExpandableCardDemo> */}
      <RestaurantMenuCarousel></RestaurantMenuCarousel>
    </div>
  )
}

export default Home;
