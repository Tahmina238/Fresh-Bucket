// import { GiStarShuriken } from "react-icons/gi";
import vector8 from "../assets/images/concious/Vector (8).png";
import vector9 from "../assets/images/concious/Vector (9).png";
import arrowicon from "../assets/images/concious/arrowIcon.png";
import salad from "../assets/images/concious/salad.png";
import tomato from "../assets/images/concious/tomato.png";
import rectangle38 from "../assets/images/concious/Rectangle 38 (1).png";
import rectangle39 from "../assets/images/concious/Rectangle 39 (1).png";
import circleImg from "../assets/images/concious/circleimg.png";
import { GiStarShuriken } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const ConsciousItem = ({ images, title }) => {
  return (
    <div className="relative flex items-center gap-2">
      <img className="w-6 relative" src={images[0]} alt={title} />
      <img
        className="w-5 ml-2 absolute left- top-2"
        src={images[1]}
        alt={title}
      />
      <p className="m-0">{title}</p>
    </div>
  );
};

const Concious = () => {
  const consciousItems = [
    { name: "Fruits", images: [vector9, vector8] },
    { name: "Breads", images: [vector9, vector8] },
    { name: "Juices", images: [vector9, vector8] },
    { name: "Vegetables", images: [vector9, vector8] },
    { name: "Dried", images: [vector9, vector8] },
  ];

  return (
    <div className="w-[80%] mb-20 mx-auto bg-amber-50">
      <div className="flex-col mt-8">
        <p className="flex text-red-500 pl-6 items-center mt-2 gap-2">
          <GiStarShuriken /> Fresh From our Farm <GiStarShuriken />
        </p>
        <h1 className="text-2xl font-bold pl-6 mb-4">
          Trusted Organic Food Store Conscious
        </h1>

        <div className="flex justify-between relative">
          {/* Left Image */}
          <img
            className="w-[30%] relative lg:rounded-xl"
            src={salad}
            alt="Salad"
          />

          {/* Overlay Text + Arrow */}
          <p className="absolute  bg-white px-2 py-1 rounded font-semibold text-sm">
            Explore our <br />
            Solutions
          </p>
          <img
            className="absolute left-[7%] top-[%] w-10 h-11 bg-white rounded-full"
            src={arrowicon}
            alt="Arrow"
          />

          {/* Right Content Section */}
          <div className="flex-col mx-6 w-[60%]">
            {/* Description Section */}
            <div className="flex gap-4 w-full rounded-2xl m-2 bg-lime-50">
              <img
                className="w-[20%] h-[18%] m-2"
                src={circleImg}
                alt="Circle"
              />
              <p className="m-4">
                The titles are organized to emphasize different aspects of the
                organic offerings, starting from the overall concept of a
                sustainable life to specific components such as fresh
                vegetables, fruits, and healthy foods.
              </p>
            </div>

            {/* Two side-by-side images */}
            <div className="flex justify-between w-full p-2 rounded-2xl mt-2 bg-amber-200">
              <img className="w-[48%]" src={rectangle38} alt="Image 1" />
              <img className="w-[48%]" src={rectangle39} alt="Image 2" />
            </div>

            {/* Grid + Tomato Image */}
            <div className="flex w-full rounded-2xl mt-2 bg-lime-50">
              <div className="m-2 grid grid-cols-4 gap-4">
                {consciousItems.map((item, index) => (
                  <ConsciousItem
                    key={index}
                    images={item.images}
                    title={item.name}
                  />
                ))}
              </div>
              <div className="mr-10">
                <img src={tomato} alt="Tomato" />
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-amber-500 text-white rounded mt-4 ml-60 px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concious;
