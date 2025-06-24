import { GiStarShuriken } from "react-icons/gi";
import { useState } from "react";
import OrganicProductCard from "./OrganicProductCard";
import Greenapple from "../assets/images/OrganicImg/green apple.png";
import eggplant from "../assets/images/OrganicImg/eggplant.png";
import okra from "../assets/images/OrganicImg/okra.png";
import tomato from "../assets/images/OrganicImg/tomato.png";
import cauliflower from "../assets/images/OrganicImg/coliflower.png";
import lettuce from "../assets/images/OrganicImg/lettuce.png";
import potato from "../assets/images/OrganicImg/potato.png";
import orange from "../assets/images/OrganicImg/orange.png";
import corn from "../assets/images/OrganicImg/corn.png";
import vgcard from "../assets/images/OrganicImg/vgcard.png";
const OurOrganicProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const organicItems = [
    {
      name: "Green Apple",
      price: 14.99,
      image: Greenapple,
      rating: "⭐⭐⭐⭐",
      category: "Fruit",
    },
    {
      name: "Eggplant",
      price: 14.99,
      image: eggplant,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Potato",
      price: 14.99,
      image: potato,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Orange",
      price: 14.99,
      image: orange,
      rating: "⭐⭐⭐⭐",
      category: "Fruit",
    },
    {
      name: "Okra",
      price: 14.99,
      image: okra,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Corn",
      price: 14.99,
      image: corn,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Lettuce",
      price: 14.99,
      image: lettuce,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Tomato",
      price: 14.99,
      image: tomato,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Cauliflower",
      price: 14.99,
      image: cauliflower,
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
  ];

  // Filtered products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? organicItems
      : organicItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full    bg-black text-white px-8 ">
      <div className="w-[80%] mx-auto my-2">
        {/* Title */}
        <p className="flex items-center gap-2 mt-4 text-lg">
          <GiStarShuriken /> Fresh From Our Farm <GiStarShuriken />
        </p>

        {/* Heading & Filter Options */}
        <div className="flex flex-col  md:flex-row justify-between items-center ">
          <p className="text-2xl font-bold">Our Organic Products</p>
          <div className="flex  mr-20 gap-6 px-4 bg-white rounded-xl  text-green-700">
            {["All", "Vegetable", "Fruit", "Bread"].map((category) => (
              <p
                key={category}
                className={`cursor-pointer ${
                  selectedCategory === category
                    ? "text-green-500 font-bold"
                    : "hover:text-green-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {filteredProducts.map((item, index) => (
              <OrganicProductCard
                key={index}
                title={item.name}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>

          {/* Side Image */}
          <div className="hidden lg:block">
            <img
              className="h-full mt-6 gap-10 "
              src={vgcard}
              alt="Vegetable Card"
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-3 mx-auto">
          <button className="bg-emerald-500 text-white  mb-10 rounded-lg  hover:bg-emerald-600 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurOrganicProducts;
