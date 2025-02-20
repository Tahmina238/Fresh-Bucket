// /* eslint-disable no-unused-vars */
import { GiStarShuriken } from "react-icons/gi";

// eslint-disable-next-line react/prop-types, no-unused-vars
const International = ({ title, subtitle, details }) => {
  return (
    <div>
      <div className=" flex align-center justify-between w-[80%] h-[38vh] mb-10 m-auto mt-10 border rounded-xl bg-green-500">
        <img
          className="relative pl-20 "
          src="src/assets/images/international/plate.png"
          alt="plate"
        />
        <img
          className="absolute  "
          src="src/assets/images/international/cherryTomato.png"
          alt="cherry"
        />
        <img
          className=" absolute w-44 h-44 mt-50"
          src="src/assets/images/international/salad.png"
          alt="salad"
        />
        <div className="m-0 pr-6 column justify-between mt-4">
          <p className="flex pl-30 text-white text-4xl items-center mt-10">
            <GiStarShuriken /> 2024 <GiStarShuriken />
          </p>

          <p className="text-white text-3xl">International Year of Fruits</p>
          <p className="pl-30 text-white text-3xl">& Vegetables</p>
          <p className="text-white mr-70">
            The titles are organized to emphasize different aspects of <br />
            the organic offerings, starting from the overall concept of a <br />
            <p className="pl-33">sustainable life</p>
          </p>

          <button className="bg-amber-500  p-3 text-white rounded  ml-40 mt-10  ">
            view more
          </button>
        </div>
      </div>
    </div>
  );
};

export default International;
