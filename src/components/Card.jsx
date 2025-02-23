/* eslint-disable react/prop-types */
const Card = ({ backgroundColor, icon, title, description, imageSrc }) => {
  return (
    <div className="max-w-sm rounded relative overflow-hidden shadow-lg mb-4 bg-emerald-50">
      {/* Round Image */}
      <div className="absolute top-10 w-10 rounded-r-full bg-green-400 text-white text-center ">
        15%
      </div>
      <img
        className=" w-52 h-52 object-cover  rounded-full mx-auto mt-4 border-4 border-white"
        src={imageSrc}
        alt="Card Image"
      />
      {icon}

      <div className="px- py-">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          {backgroundColor}
        </h2>

        <div className="px-2 gap-2 py-">
          {/* Title */}
          <p className="text-md font-semibold text-gray-800">{title}</p>
          {/* Description */}
          <hr />
          <br />
          <div className="flex align-center justify-between">
            <p className="text-green-400 text-xl ">{description}</p>
          </div>
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Button */}
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
