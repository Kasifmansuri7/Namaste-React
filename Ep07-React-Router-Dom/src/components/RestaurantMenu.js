import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    console.log("resmenu: ", res);
    setRestaurant(res.data.data);
  }

  console.log("restaurant: ", restaurant);

  if (restaurant.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1>
        {restaurant?.cards[0]?.card?.card?.info?.name} -
        {restaurant?.cards[0]?.card?.card?.info?.city}
      </h1>
      <ol>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Chicken peri peri</li>
        <li>Mulberry lassi</li>
      </ol>
    </>
  );
};

export default RestaurantMenu;
