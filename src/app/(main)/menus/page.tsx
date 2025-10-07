import ExpandableCardDemo from "@/components/Home/ExpandableCardDemo";
import MenuSection from "@/components/reusable-components/MenuSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";
import { beverageItems, breakfastItems, dessertItems, dinnerItems, lunchItems, specialItems } from "@/utils/constant/menuConstant";
import Heading from "@/components/reusable-components/Heading";
import tableBookingBackgroundImage from "../../../../public/menu-cover.jpg";

export async function generateMetadata() {
  return generateDynamicMetadata({
    title: "Taste Hub | Menu ",
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
    <div style={{
      backgroundImage:
        `url(${tableBookingBackgroundImage.src})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
    }} className="bg-[#F4F6F8] dark:bg-gray-600 pt-20 ">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-24 lg:gap-y-4 container mx-auto px-4 ">
        <MenuSection title="Breakfast" items={breakfastItems} />
        <MenuSection title="Lunch" items={lunchItems} />
        <MenuSection title="Dinner" items={dinnerItems} />
        <MenuSection title="Dissert" items={dessertItems} />
        <MenuSection title="Beverage" items={beverageItems} />
        <MenuSection title="Special Menu" items={specialItems} />
      </section>


      <div className="h-1 w-full from-cyan-600 via-white to-[#c9b48c] bg-gradient-to-r mt-4 "></div>

      <Heading className="text-xl md:text-2xl lg:text-3xl text-center py-4 text-orange-600">Our Food List</Heading>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-24 lg:gap-y-4 container mx-auto px-4 lg:px-0 pb-4 ">
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
        <ExpandableCardDemo></ExpandableCardDemo>
      </section>

    </div>
  )
}

export default Home;
