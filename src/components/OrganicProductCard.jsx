/* eslint-disable react/prop-types */
const OrganicProductCard = ({ title, price, rating, image }) => {
  return (
    //create dynamic card
    <div className="flex align-center justify-between w-88 rounded h-28 mt-6 bg-white border">
      <img src={image} alt="" />
      <div className="m-0 pr-6 column justify-between mt-4">
        <p className="text-black ">{title}</p>
        <p className="text-black">{price}</p>
        <p className="">{rating}</p>
      </div>
    </div>
  );
};

export default OrganicProductCard;
