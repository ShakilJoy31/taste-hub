// app/page.tsx
import HomeBanner from "@/components/Home/Banner";
import ExpandableCardDemo from "@/components/Home/ExpandableCardDemo";
import GoalsHistory from "@/components/Home/GoalsHistory";
import WelcomeSection from "@/components/Home/WelcomeSection";
import RestaurantMenuCarousel from "@/components/reusable-components/RestaurantMenuCarousel";
import MenuSection from "@/components/reusable-components/MenuSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";
import { beverageItems, breakfastItems, dessertItems, dinnerItems, lunchItems, specialItems } from "@/utils/constant/menuConstant";
import Heading from "@/components/reusable-components/Heading";

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

const Home = async () => {
  return (
    <div className="bg-[#F4F6F8] dark:bg-gray-600">
      <HomeBanner></HomeBanner>
      <hr />
      <GoalsHistory></GoalsHistory>
      <WelcomeSection></WelcomeSection>
      <Heading className="text-xl md:text-2xl lg:text-3xl text-center py-4">The Menu You Should Try</Heading>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-24 lg:gap-y-4 max-w-[1440px] mx-auto px-4 lg:px-0">
        <MenuSection title="Breakfast" items={breakfastItems} />
        <MenuSection title="Lunch" items={lunchItems} />
        <MenuSection title="Dinner" items={dinnerItems} />
        <MenuSection title="Dissert" items={dessertItems} />
        <MenuSection title="Beverage" items={beverageItems} />
        <MenuSection title="Special Menu" items={specialItems} />
      </section>

      <div className="h-1 w-full from-cyan-600 via-white to-[#c9b48c] bg-gradient-to-r"></div>

      <Heading className="text-xl md:text-2xl lg:text-3xl text-center py-4">Our Food List</Heading>
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
