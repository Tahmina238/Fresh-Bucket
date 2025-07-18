import { GiStarShuriken } from "react-icons/gi";
import fruitBasket from "../assets/images/Trusted/fruitsBasket.png";
import vegetable from "../assets/images/Trusted/vegetable.png";

const Trusted = () => {
  return (
    <div className=" mx:w-[70%] mt-8 mb-6 h-[44vh]  flex justify-between bg-amber-50">
      <img className="" src={vegetable} alt="" />

      <div className="flex-col mt-8">
        <p className="flex text-red-500 pl-30 items-center mt-4">
          <GiStarShuriken /> Fresh From our Farm <GiStarShuriken />
        </p>
        <h1 className="text-2xl pl-25">
          Trusted Organic Food <br />
          <p className="pl-10">Store Concious</p>
        </h1>
        <p className="mt-2 mb-10">
          The titles are organized to emphasize different aspects of <br /> the
          organic offerings, starting from the overall concept of a <br />
          sustainable life to the specific components such as fresh <br />
          vegetables, fruits, and healthy foods.
          <br />
        </p>
        <button className="  ml-40 p-2 bg-emerald-400 rounded text-white">
          View more
        </button>
      </div>

      <img src={fruitBasket} alt="" />
    </div>
  );
};

export default Trusted;
