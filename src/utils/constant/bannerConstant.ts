import { Slide } from "@/types/bannerDataType";
import bannerImage1 from "../../../public/Food/wooden-board-with-cooked-meat.jpg";
import bannerImage2 from "../../../public/Food/top-view-traditional-caucasian-cuisine-saj-kebab-with-chicken-eggplans-tomatoes-potatoes-peppers.jpg";
import bannerImage3 from "../../../public/Food/top-view-chicken-sac-with-fried-potatoes-tomato-lavash-smoke.jpg";

export const slides: Slide[] = [
  {
    id: 1,
    title: "OUR SIGNATURE SPECIALTIES",
    description:
      "Savor handcrafted dishes made with the finest ingredients — where tradition meets innovation and every bite tells a story.",
    image: bannerImage1.src,
    thumb: bannerImage1.src,
  },
  {
    id: 2,
    title: "A JOURNEY OF EXQUISITE TASTES",
    description:
      "From farm to table, experience a symphony of flavors designed by our chefs to delight, surprise, and inspire your senses.",
    image: bannerImage2.src,
    thumb: bannerImage2.src,
  },
  {
    id: 3,
    title: "THE ART OF CULINARY EXCELLENCE",
    description:
      "Every plate is a masterpiece — blending artistry, passion, and precision to create unforgettable dining moments.",
    image: bannerImage3.src,
    thumb: bannerImage3.src,
  }
];