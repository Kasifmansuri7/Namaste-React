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
      <div class="border rounded-md p-4 m-2 w-[260px] flex flex-col h-[480px] hover:bg-slate-50 hover:shadow-md">
        <img
          class="rounded-md border aspect-square object-cover"
          src={IMG_URL + cloudinaryImageId}
        />
        <h3 class="text-2xl py-2 flex-grow font-semibold">{name}</h3>
        <div class=" flex-grow">
          <p>Area: {areaName}</p>
          <p>Cuisines: {cuisines.join(", ")}</p>
          <p>Avg Rating: {avgRatingString}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantsCard;
