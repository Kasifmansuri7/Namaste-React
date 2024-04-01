import RestaurantsCard from "./RestaurantsCard";
import { useState, useEffect } from "react";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <button
        className="filter-btn"
        onClick={() =>
          setRestaurantList((prev) =>
            prev.filter((each) => each.info.avgRating > 4.2)
          )
        }
      >
        Top Rated Restaurants
      </button>
      <section className="res-container">
        {restaurantList.map((res) => (
          <RestaurantsCard key={res.info.id} {...res.info} />
        ))}
      </section>
    </>
  );
};

export default Body;
