const Vegetable = () => {
  return (
    <div className=" w-[80%] mx-auto gap-8 grid grid-cols-1 lg:grid-cols-2  mb-0  mt-8">
      <div className="relative h-[370px]  ">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="src/assets/images/OrganicImg/vegetableimg/card1.png"
          alt=""
        />

        <div className="absolute text-white mt-20 pl-8 ">
          <p>100% Organic</p>

          <div className="flex align-center gap-2">
            <p>Starting at </p>
          </div>
        </div>
      </div>

      <div className="relative  h-[370px] ">
        <div className="absolute inset-0 mt-20 pl-8 text-white">
          <p>Sale of the week</p>
          <p className="text-3xl">Sales of the Year</p>
          <p className="text-3xl">00 : 02 : 18 : 46</p>
          <p className="text-lg">DAYS HOURS MINS SECS</p>
          <button className=" mt-8 p-2 rounded bg-amber-600">Shop Now</button>
        </div>
        <img
          className=" w-full h-full object-cover rounded-xl"
          src="src/assets/images/OrganicImg/vegetableimg/card2.png"
          alt=""
        />
      </div>
      <div className="absolute text-white mt-20 pl-8 ">
        <p>100% Organic</p>
        <p className="text-2xl mt-4">Fruits and Vegetable</p>
        <div className="flex align-center mt-4">
          <p>Starting at </p>
          <button className="bg-amber-500 g-4">$11.99</button>
        </div>
        <button className=" btn mt-4 bg-emerald-400 p-2 rounded">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Vegetable;
