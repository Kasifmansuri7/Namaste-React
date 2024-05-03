const ItemList = ({ item, isLastItem }) => {
  return (
    <li
      className={`list-none py-5 flex items-center text-left ${
        !isLastItem && "border-b-2"
      } transition-transform transform`}
    >
      <div className="p-2 w-9/12">
        <span className="p-2">
          {item?.info?.itemAttribute?.vegClassifier === "NONVEG" ? "🚫" : "✅"}
        </span>
        <span className="text-xl">{item?.info?.name}</span>
        <p className="p-2 text-sm font-semibold">
          &#x20b9;{" "}
          {item?.info?.price
            ? Math.ceil(item?.info?.price / 100)
            : Math.ceil(item?.info?.defaultPrice / 100)}
        </p>
        <p className="p-2 text-sm text-gray-500">{item?.info?.description}</p>
      </div>
      <div className="w-3/12 h-44 mr-4 relative">
        <button className="absolute  text-green-600 rounded-md bg-white px-4 h-8 w-20 bottom-[-8%] left-[33%] hover:bg-gray-200">
          Add +
        </button>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.info.imageId}`}
          className="h-full w-full object-cover rounded-md shadow-xl"
          alt={item.info.name}
        />
      </div>
    </li>
  );
};

export default ItemList;
