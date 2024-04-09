import { useEffect, useState } from "react";
import RestaurantsCard from "../components/RestaurantsCard";
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

  function handleFilter() {
    const filteredRes = restaurantList.filter(
      (each) => each.info.avgRating > 4.2
    );

    setRestaurantList(filteredRes);
  }

  if (restaurantList?.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <button className="filter-btn" onClick={handleFilter}>
        Top Rated Restaurants
      </button>
      <section className="res-container">
        {restaurantList?.length &&
          restaurantList.map((res) => (
            <RestaurantsCard key={res.info.id} {...res.info} />
          ))}
      </section>
    </>
  );
};

export default Body;
