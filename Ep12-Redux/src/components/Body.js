import { useEffect, useState } from "react";
import RestaurantsCard, { withOpenLabel } from "../components/RestaurantsCard";
import axios from "axios";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) {
    return <h1>Looks like you are off line!</h1>;
  }

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      setRestaurantList(
        res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Axios Error: ", error);
    }
  }

  const RestaurantCardWithOpen = withOpenLabel(RestaurantsCard);

  function handleFilter() {
    const filteredRes = restaurantList.filter(
      (each) => each.info.avgRating > 4.2
    );

    setRestaurantList(filteredRes);
  }

  if (restaurantList?.length === 0) {
    return <h1 className="text-3xl animate-pulse">Loading....</h1>;
  }

  return (
    <section>
      <button
        className="text-white border p-2 bg-amber-500 rounded-md hover:bg-amber-400 shadow-md mt-4"
        onClick={handleFilter}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap mt-2">
        {restaurantList?.length &&
          restaurantList.map((res, index) => {
            index % 2 == 0 ? (res.info.isOpen = false) : true;
            return res.info.isOpen ? (
              <RestaurantCardWithOpen key={res.info.id} {...res.info} />
            ) : (
              <RestaurantsCard key={res.info.id} {...res.info} />
            );
          })}
      </div>
    </section>
  );
};

export default Body;
