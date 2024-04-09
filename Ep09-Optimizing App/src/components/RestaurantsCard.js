import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

const RestaurantsCard = ({
  areaName,
  name,
  cuisines,
  avgRatingString,
  costForTwo,
  cloudinaryImageId,
  id,
}) => {
  return (
    <Link to={"restaurant-menu" + "/" + id}>
      <div className="card">
        <h3>{name}</h3>
        <img src={IMG_URL + cloudinaryImageId} />
        <p>Area: {areaName}</p>
        <p>Cuisines: {cuisines.join(", ")}</p>
        <p>Avg Rating: {avgRatingString}</p>
        <p>{costForTwo}</p>
      </div>
    </Link>
  );
};

export default RestaurantsCard;
