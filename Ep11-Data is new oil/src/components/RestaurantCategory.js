import { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItem,
  setShowIndex,
  removeShowIndex,
}) => {
  return (
    <div className="flex flex-col items-center mx-10 my-4">
      <AccordionHeader
        title={data?.title}
        count={data?.itemCards?.length}
        showItem={showItem}
        setShowIndex={setShowIndex}
        removeShowIndex={removeShowIndex}
      />

      <div className="w-6/12 overflow-hidden flex-col items-center">
        {showItem &&
          data?.itemCards?.length &&
          data?.itemCards?.map((item, index) => (
            <ItemList
              key={item?.card?.info?.id}
              item={item?.card}
              isLastItem={index === data?.itemCards?.length - 1}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
