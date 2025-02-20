/* eslint-disable react/prop-types */
const BadgeCard = ({
  icon = "",
  title = "",
  subtitle = "",
  bgColor = "#4ade80",
  badgeColor = "#f87171",
  badgeInnerColor = "#fca5a5",
}) => {
  return (
    <div className="badge-card" style={{ backgroundColor: bgColor }}>
      <div className="badge" style={{ backgroundColor: badgeColor }}>
        <div
          className="badge-inner"
          style={{ backgroundColor: badgeInnerColor }}
        >
          {icon}
        </div>
      </div>
      <div className="content">
        <p>{title}</p>
        <p className="subtitle ">{subtitle}</p>
      </div>
    </div>
  );
};

export default BadgeCard;
