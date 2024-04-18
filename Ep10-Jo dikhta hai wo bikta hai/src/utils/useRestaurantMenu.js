import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    setRestaurant(res.data.data.cards);
  }
  return restaurant;
};
export default useRestaurantMenu;
