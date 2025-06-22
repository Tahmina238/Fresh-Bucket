import { GiStarShuriken } from "react-icons/gi";
import vector8 from "../assets/images/concious/Vector (8).png";
import vector9 from "../assets/images/concious/Vector (9).png";
import arrowicon from "../assets/images/concious/arrowIcon.png";
import salad from "../assets/images/concious/salad.png";
import tomato from "../assets/images/concious/tomato.png";
import rectangle38 from "../assets/images/concious/Rectangle 38 (1).png";
import rectangle39 from "../assets/images/concious/Rectangle 39 (1).png";
import circleImg from "../assets/images/concious/circleimg.png";

// eslint-disable-next-line react/prop-types
const ConsciousItem = ({ images, title }) => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-6 relative" src={images[0]} alt={title} />
      <img className="w-5 ml-2 absolute" src={images[1]} alt={title} />
      <p className="m-0">{title}</p>
    </div>
  );
};

const Concious = () => {
  const consciousItems = [
    {
      name: "Fruits",
      images: [{ vector9 }, { vector8 }],
    },
    {
      name: "Breads",

      images: [{ vector9 }, { vector8 }],
    },
    {
      name: "Juices",
      images: [{ vector9 }, { vector8 }],
    },

    {
      name: "Juices",
      images: [{ vector9 }, { vector8 }],
    },

    {
      name: "Vegetables",
      images: [{ vector9 }, { vector8 }],
    },
    {
      name: "Dried",
      images: [{ vector9 }, { vector8 }],
    },
    {
      name: "Dried",
      images: [{ vector9 }, { vector8 }],
    },
  ];

  return (
    <div className="w-[80%] h-[auto] mb-20 m-auto bg-amber-50">
      <div className="flex-col mt-8">
        <p className="flex text-red-500 pl-6 items-center mt-2">
          <GiStarShuriken /> Fresh From our Farm <GiStarShuriken />
        </p>
        <h1 className="text-2xl font-bold">
          Trusted Organic Food Store Conscious
        </h1>

        <div className="flex align-center justify-between ">
          <img
            className="w-[30%]  relative lg:rounded-xl"
            src={salad}
            alt="Salad"
          />
          <p className="absolute  bg-white">
            Explore our <br />
            Solutions
          </p>

          <img
            className="absolute ml-22 w-10 h-11 mx-2 bg-white   "
            src={arrowicon}
            alt="Arrow"
          />

          <div className="flex-col mx-6 w-[60%] h-[auto] bg-amber-50;">
            <div className="flex gap-4 w-full  rounded-2xl m-2  bg-lime-50">
              <img
                className="w-[20%] h-[15vh] m-2"
                src={circleImg}
                alt="Circle"
              />
              <p className="m-4  $bg-color:#e9f4ca rounded-lg">
                The titles are organized to emphasize different aspects of the
                organic offerings, starting from the overall concept of a
                sustainable life to specific components such as fresh
                vegetables, fruits, and healthy foods.
              </p>
            </div>

            <div className="flex justify-between w-full p-2 h-35 rounded-2xl mt-2  bg-amber-200 ">
              <img className="w-90" src={rectangle38} alt="Image 1" />
              <img className="w-85" src={rectangle39} alt="Image 2" />
            </div>

            <div className="flex w-full  rounded-2xl h-35 mt-2 bg-lime-50">
              <div className="m-2 grid grid-cols-4 gap-4 not-first">
                {consciousItems.map((item, index) => (
                  <ConsciousItem
                    key={index}
                    images={item.images}
                    title={item.name}
                  />
                ))}
              </div>
              <div className="mr-10 ">
                <img className="" src={tomato} alt="Tomato" />
              </div>
            </div>
            <button className="bg-amber-500  text-white rounded ml-60 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concious;
