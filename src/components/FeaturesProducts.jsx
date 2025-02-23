import BadgeCard from "./BadgeCard";
import { CiDeliveryTruck } from "react-icons/ci";

import percentageSquare from "../assets/images/percentage-square.png";
import Vector1 from "../assets/images/Vector1.png";
import DollarIcon from "../assets/images/dollar.png";
import PowerIcon from "../assets/images/power.png";

const FeaturesProducts = () => {
  return (
    <div className="w-full max-w-[80%] mx-auto py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <BadgeCard
          title="Free Delivery"
          subtitle="From $99"
          bgColor="#FFF5D9"
          badgeInnerColor="#FBBC05"
          icon={<CiDeliveryTruck className="w-6 h-6" />}
        />
        <BadgeCard
          title="Customer Feedback"
          subtitle="95.50%"
          bgColor="#FDE6E4"
          badgeInnerColor="#F4847A"
          icon={
            <img
              src={percentageSquare}
              alt="Discount Icon"
              className="w-6 h-6"
            />
          }
        />
        <BadgeCard
          title="Free Return"
          subtitle="365 Days"
          bgColor="#F5EBFC"
          badgeInnerColor="#D4A0F9"
          icon={<img src={Vector1} alt="Return Icon" className="w-6 h-6" />}
        />
        <BadgeCard
          title="Payment"
          subtitle="Secure System"
          bgColor="#EBEFFF"
          badgeInnerColor="#355BFB"
          icon={<img src={DollarIcon} alt="Dollar Icon" className="w-6 h-6" />}
        />
        <BadgeCard
          title="100% Safe"
          subtitle="Secure Shopping"
          bgColor="#FEEEE9"
          badgeInnerColor="#F55522"
          icon={<img src={PowerIcon} alt="Power Icon" className="w-6 h-6" />}
        />
      </div>
    </div>
  );
};

export default FeaturesProducts;
