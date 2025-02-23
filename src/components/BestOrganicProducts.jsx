import { GiStarShuriken } from "react-icons/gi";
import Card from "./Card";

const BestOrganicProducts = () => {
  return (
    <div className="w-full max-w-[80%] mx-auto mt-">
      {/* Title Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
        <p className="flex items-center text-lg font-semibold">
          <GiStarShuriken className="text-green-500 mx-2" /> Fresh From Our Farm{" "}
          <GiStarShuriken className="text-green-500 mx-2" />
        </p>
        <button className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500 transition mx-auto sm:mx-0">
          View More
        </button>
      </div>

      {/* Section Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-center md:text-left mt-4">
        Best Organic Products
      </h2>

      {/* Product Cards Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          bgColor="#F4F1D0"
          title="Organic Cabbage"
          description="$50"
          imageSrc="src/assets/images/bestOrganicImg/tomato.png"
        />
        <Card
          title="Organic Orange"
          description="$50"
          imageSrc="src/assets/images/bestOrganicImg/orange.png"
        />
        <Card
          title="Organic Cabbage"
          description="$50"
          imageSrc="src/assets/images/bestOrganicImg/tomato.png"
        />
        <Card
          title="Organic Smile"
          description="$50"
          imageSrc="src/assets/images/bestOrganicImg/smile.png"
        />
      </div>
    </div>
  );
};

export default BestOrganicProducts;
