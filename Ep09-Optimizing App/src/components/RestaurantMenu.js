import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  if (restaurant.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1>{restaurant[0]?.card?.card?.text}</h1>
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
