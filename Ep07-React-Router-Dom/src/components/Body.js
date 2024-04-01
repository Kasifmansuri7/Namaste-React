import { useEffect, useState } from "react";
import RestaurantsCard from "../components/RestaurantsCard";
import axios from "axios";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  });

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
