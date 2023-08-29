import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
//   const[showItems,setShowItems]=useState(false);
  const handleChange=()=>{
//    setShowItems(!showItems);
    setShowIndex();

  }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleChange}>
         
          <span className="font-bold text-lg">
  
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
