import { GiStarShuriken } from "react-icons/gi";

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
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },
    {
      name: "Breads",
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },
    {
      name: "Juices",
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },

    {
      name: "Juices",
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },

    {
      name: "Vegetables",
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },
    {
      name: "Dried",
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },
    {
      name: "Dried",
      images: [
        "src/assets/images/concious/Vector (9).png",
        "src/assets/images/concious/Vector (8).png",
      ],
    },
  ];

  return (
    <div className="w-[80%] h-[70vh] mb-10 m-auto mt- bg-white">
      <div className="flex-col mt-8">
        <p className="flex text-red-500 pl-10 items-center mt-2">
          <GiStarShuriken /> Fresh From our Farm <GiStarShuriken />
        </p>
        <h1 className="text-3xl font-bold">
          Trusted Organic Food Store Conscious
        </h1>

        <div className="flex align-center justify-between mt-6">
          <img
            className="w-[35%] h-[57vh] relative lg:rounded-xl"
            src="src/assets/images/concious/salad.png"
            alt="Salad"
          />
          <p className="absolute text-xl bg-white">
            Explore our <br />
            Solutions
          </p>
          <img
            className="absolute ml-28 w-10 h-10 bg-white   "
            src="src/assets/images/concious/arrowIcon.png"
            alt="Arrow"
          />

          <div className="flex-col gap-4 w-[60%] h-[55vh] $bg-color: #e4f7d9;">
            <div className="flex gap-8 w-full h-40 rounded-2xl mt-4 $bg-color: #e9f4ca;">
              <img
                className="w-[20%] h-[15vh]"
                src="src/assets/images/concious/circleimg.png"
                alt="Circle"
              />
              <p className="mt-6 text-lg $bg-color:#e9f4ca p-2 rounded-lg">
                The titles are organized to emphasize different aspects of the
                organic offerings, starting from the overall concept of a
                sustainable life to specific components such as fresh
                vegetables, fruits, and healthy foods.
              </p>
            </div>

            <div
              className="flex justify-between w-full h-42 rounded-2xl mt-4 $bg-color:#e4f7d9;
; "
            >
              <img
                className="w-110"
                src="src/assets/images/concious/Rectangle 38 (1).png"
                alt="Image 1"
              />
              <img
                className="w-95"
                src="src/assets/images/concious/Rectangle 39 (1).png"
                alt="Image 2"
              />
            </div>

            <div
              className="flex gap-8 w-full h-40 rounded-2xl mt-4 bg-amber-50 $bg-color:#e4f7d9;
;"
            >
              <div className="m-6 grid grid-cols-4 gap-6">
                {consciousItems.map((item, index) => (
                  <ConsciousItem
                    key={index}
                    images={item.images}
                    title={item.name}
                  />
                ))}
              </div>

              <div>
                <img
                  className="ml-10"
                  src="src/assets/images/concious/tomato.png"
                  alt="Tomato"
                />
              </div>
            </div>
            <button className="bg-amber-500 p-2 text-white rounded ml-70 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concious;
