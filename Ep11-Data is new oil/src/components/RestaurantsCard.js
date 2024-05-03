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
      <div className="border rounded-md p-4 m-2 w-[260px] flex flex-col h-[480px] hover:bg-slate-50 hover:shadow-md">
        <img
          className="rounded-md border aspect-square object-cover"
          src={IMG_URL + cloudinaryImageId}
        />
        <h3 className="text-2xl py-2 flex-grow font-semibold">{name}</h3>
        <div className=" flex-grow">
          <p>Area: {areaName}</p>
          <p>Cuisines: {cuisines.join(", ")}</p>
          <p>Avg Rating: {avgRatingString}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </Link>
  );
};

const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label>😎</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export { withOpenLabel };
export default RestaurantsCard;
