import { IMG_URL } from "../utils/constants";

const RestaurantsCard = ({
  areaName,
  name,
  cuisines,
  avgRatingString,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={IMG_URL + cloudinaryImageId} />
      <p>Area: {areaName}</p>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Avg Rating: {avgRatingString}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantsCard;
