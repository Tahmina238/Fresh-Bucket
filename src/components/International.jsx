// /* eslint-disable no-unused-vars */
import { GiStarShuriken } from "react-icons/gi";
import plate from "../assets/images/international/plate.png";
import cherryTomato from "../assets/images/international/cherryTomato.png";
import salad from "../assets/images/international/salad.png";

// eslint-disable-next-line react/prop-types, no-unused-vars
const International = ({ title, subtitle, details }) => {
  return (
    <div>
      <div className=" flex align-center justify-between w-[80%] h-[auto] m-auto border rounded-xl bg-green-500">
        <img
          className="relative w-[50vh] h-[40vh] m-6 pl-20 "
          src={plate}
          alt="plate"
        />
        <img className="absolute w-54 h-34 " src={cherryTomato} alt="cherry" />
        <img
          className=" absolute w-34 h-34 mt-50 ml-10"
          src={salad}
          alt="salad"
        />
        <div className="m-0 pr-6 column justify-between mt-4">
          <p className="flex pl-30 text-white text-3xl items-center mt-10">
            <GiStarShuriken /> 2024 <GiStarShuriken />
          </p>

          <p className="text-white pl-15 text-xl">
            International Year of Fruits
          </p>
          <p className="pl-30 text-white text-xl">& Vegetables</p>
          <p className="text-white mr-45">
            The titles are organized to emphasize different aspects of <br />
            the organic offerings, starting from the overall concept of a <br />
            <p className="pl-33">sustainable life</p>
          </p>

          <button className="bg-amber-500   text-white rounded   p-1 ml-35 mt-2  ">
            view more
          </button>
        </div>
      </div>
    </div>
  );
};

export default International;
