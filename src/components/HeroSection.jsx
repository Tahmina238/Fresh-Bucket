import bannerImg from "../assets/images/bucket.png";
const HeroSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between bg-orange-100 py-10 pl-30">
      {/* Text Section */}
      <div className="max-w-[80%] md:max-w-[50%] mx-auto text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-black">
          A Sustainable life with <br />
          Fresh Fruits, Vegetables <br />
          and Healthy Foods
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-700">
          The titles are organized to emphasize different aspects of the
          <br />
          organic offerings, starting from the overall concept of a sustainable{" "}
          <br />
          life to the specific components such as fresh vegetables, fruits, and{" "}
          <br />
          healthy foods
        </p>
        <button className="mt-6 w-full sm:w-auto bg-amber-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-amber-600 transition text-center mx-auto md:mx-0">
          Subscribe
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center">
        <img className="w-[70%] md:w-[55%]" src={bannerImg} alt="Fresh Foods" />
      </div>
    </div>
  );
};

export default HeroSection;
/* <div className="absolute ">
              <p>Special offer</p>
              <p>50% off</p>
              <button>Shop now</button>
            </div> */
