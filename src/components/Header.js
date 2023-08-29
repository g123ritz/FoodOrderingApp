import React, {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-24 sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <img className="w-44 h-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>OnlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
         <Link to="/cart" >Cart({cartItems.length}items)</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
