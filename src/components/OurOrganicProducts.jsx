import { GiStarShuriken } from "react-icons/gi";
import { useState } from "react";
import OrganicProductCard from "./OrganicProductCard";

const OurOrganicProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const organicItems = [
    {
      name: "Green Apple",
      price: 14.99,
      image: "src/assets/images/OrganicImg/green apple.png",
      rating: "⭐⭐⭐⭐",
      category: "Fruit",
    },
    {
      name: "Eggplant",
      price: 14.99,
      image: "src/assets/images/OrganicImg/eggplant.png",
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Potato",
      price: 14.99,
      image: "src/assets/images/OrganicImg/potato.png",
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Orange",
      price: 14.99,
      image: "src/assets/images/OrganicImg/orange.png",
      rating: "⭐⭐⭐⭐",
      category: "Fruit",
    },
    {
      name: "Okra",
      price: 14.99,
      image: "src/assets/images/OrganicImg/okra.png",
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Corn",
      price: 14.99,
      image: "src/assets/images/OrganicImg/corn.png",
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Lettuce",
      price: 14.99,
      image: "src/assets/images/OrganicImg/lettuce.png",
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Tomato",
      price: 14.99,
      image: "src/assets/images/OrganicImg/tomato.png",
      rating: "⭐⭐⭐⭐",
      category: "Vegetable",
    },
    {
      name: "Cauliflower",
      price: 14.99,
      image: "src/assets/images/OrganicImg/coliflower.png",
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
    <div className="w-full   h-[75vh] bg-black text-white px-8 ">
      <div className="w-[80%] mx-auto my-4">
        {/* Title */}
        <p className="flex items-center gap-2 mt-4 text-lg">
          <GiStarShuriken /> Fresh From Our Farm <GiStarShuriken />
        </p>

        {/* Heading & Filter Options */}
        <div className="flex flex-col  md:flex-row justify-between items-center  gap-6">
          <p className="text-4xl font-bold">Our Organic Products</p>
          <div className="flex  mr-16 gap-10 py-2 px-14 bg-white rounded-xl text-xl text-green-700">
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
        <div className="flex flex-col lg:flex-row justify-between  mt-10 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
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
              className="h-[50vh] mt-6 ml-20 mr-80"
              src="src/assets/images/OrganicImg/vgcard.png"
              alt="Vegetable Card"
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-emerald-500 text-white p-2 mb-10 rounded-lg text-lg hover:bg-emerald-600 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurOrganicProducts;
// // // responsive for sm screen:responsive:

// // // ----------------------------best=----------------------------
// import { GiStarShuriken } from "react-icons/gi";
// import OrganicProductCard from "./OrganicProductCard";

// const OurOrganicProducts = () => {
//   const organicItems = [
//     {
//       name: "Green Apple",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/green apple.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Eggplant",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/eggplant.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Potato",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/potato.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Orange",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/orange.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Okra",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/okra.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Corn",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/corn.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Lettuce",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/lettuce.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Tomato",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/tomato.png",
//       rating: "⭐⭐⭐⭐",
//     },
//     {
//       name: "Cauliflower",
//       price: 14.99,
//       image: "src/assets/images/OrganicImg/coliflower.png",
//       rating: "⭐⭐⭐⭐",
//     },
//   ];

//   //Filtered products based on selected category

//   return (
//     <div className=" lg:w-full bg-black text-white mt-8">
//       <div className=" mx:w-[80%] pl-70 py-8 mt-4 ">
//         <p className="flex mt-6 ">
//           <GiStarShuriken /> Fresh From our Farm <GiStarShuriken />
//         </p>
//         <div className="flex aligh-center justify-between mr-80 ">
//           <p className="text-4xl">Our Organic Products</p>

//           <div className="options-bar text-green-700 text-xl flex gap-2 px-4 py-2 bg-white rounded-xl w-114 radius-4 align-center justify-between">
//             <p>All</p>
//             <p>Vegetable</p>
//             <p>Fruit</p>
//             <p>Bread</p>
//           </div>
//         </div>

//         <div className="flex justify-between ">
//           <div className=" fruits-bar grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 1fr gap-8  ">
//             {organicItems.map((item, index) => (
//               <OrganicProductCard
//                 key={index}
//                 title={item.name}
//                 price={item.price}
//                 rating={item.rating}
//                 image={item.image}
//               />
//             ))}
//           </div>
//           {/* <div className="w-187 h-[40vh] m-4  "> */}
//           <div className=" mr-80 mt-6 ">
//             <img
//               className="h-[50vh]px-6 p-2 pl-10"
//               src="src/assets/images/OrganicImg/vgcard.png"
//               alt=""
//             />
//           </div>
//           {/* </div> */}
//         </div>
//         <div className="flex justify-center mr-70 mt-10">
//           <button className="bg-emerald-500 text-white px-4 py-3 rounded-lg text-lg hover:bg-emerald-600 transition">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurOrganicProducts;
// // -------------------best-------------------
