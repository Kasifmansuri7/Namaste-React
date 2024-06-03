import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center mt-4 p-4 w-6/12 mx-auto">
      <h1 className="font-semibold text-3xl text-gray-600">Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <ItemList
              item={item}
              isLastItem={index === cartItems.length - 1}
              fromCart={true}
              key={item.info.id}
            />
          ))}
          <button
            className="border p-2 rounded-md bg-red-500 text-white flex justify-center mx-auto"
            onClick={handleClearItems}
          >
            {" "}
            Clear Your Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ) : (
        <p className="my-auto text-gray-500">Your Cart Is Empty!</p>
      )}
    </div>
  );
};

export default Cart;
