// app/about/page.tsx
import AboutSection from "@/components/AboutUs/AboutSection";
import AboutBanner from "@/components/AboutUs/AboutUsBanner";
import StatsSection from "@/components/AboutUs/StatsSection";
import TeamSection from "@/components/AboutUs/TeamSection";
import ValuesSection from "@/components/AboutUs/ValuesSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";

export async function generateMetadata() {
  return generateDynamicMetadata({
    title: "About Us | Bistro Elegante - Culinary Excellence Since 2010",
    description: "Discover the story behind Bistro Elegante - where passion meets perfection. For over a decade, we've been crafting unforgettable dining experiences with locally sourced ingredients and innovative cuisine.",
    keywords: [
      "restaurant about us", "culinary excellence", "fine dining",
      "chef story", "restaurant history", "gourmet cuisine",
      "local ingredients", "award-winning restaurant", "dining experience",
      "food philosophy", "restaurant team", "culinary heritage"
    ],
  });
}

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
        <AboutBanner />
        <AboutSection />
        <ValuesSection />
        <StatsSection />
        <TeamSection />
    </div>
  )
}

export default AboutPage;