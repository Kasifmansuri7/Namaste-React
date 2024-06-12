import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(-1);
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  if (restaurant.length === 0) {
    return <h1 className="text-3xl">Loading....</h1>;
  }

  const categories =
    restaurant[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((each) =>
      each?.card?.card["@type"].includes("ItemCategory")
    );

  return (
    <div className="text-center">
      <h1 className="text-3xl my-6">{restaurant[2]?.card?.card?.info?.name}</h1>
      {/* accrrdion - collapsable menu*/}
      {/* // controlled component */}
      {categories.map((c, index) => (
        <RestaurantCategory
          key={Math.random()}
          data={c?.card?.card}
          setShowIndex={() => setShowIndex(index)}
          removeShowIndex={() => setShowIndex(-1)}
          showItem={index === showIndex ? true : false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
