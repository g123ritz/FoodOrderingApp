import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
  };

  // const isItemInCart = cartItems.length !== 0 ? true : false;
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === items.id);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative w-3/12 p-4">
            <div className="absolute bottom-2 right-2 bg-white border-2 border-green-800 text-green-800 text-xs px-3 py-1 rounded">
              <button className="px-2" onClick={() => handleDeleteItem(item)}>
                -
              </button>

              <button className="px-2" onClick={() => handleAddItem(item)}>
                +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
