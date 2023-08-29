import React, {useEffect, useState } from "react";
import RestaurantCard ,{withDiscountLabel}from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";



const Body = () => {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant]=useState([]);
  const [searchText,setSearchText]=useState("");
  const RestaurantCardDiscounted = withDiscountLabel(RestaurantCard);

  console.log("Body Rendered",listOfRestaurants);
  useEffect(() => {
    console.log(fetchData());
  }, []);

  const fetchData = async () => {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      
        
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
    );
    console.log("json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants");
  };
   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false)
   return(<div>
    <h1>Looks like your are offline!!Please check your internet connection;</h1>
   
   </div>)
    
    return listOfRestaurants.length === 0 ?(<Shimmer/>):(
    <div className="body">
     <div className="filter flex">
      <div className="search m-4 p-4 rounded-lg">
        <input type="text" className="search-box"  value={searchText} placeholder="  Search for Restaurant " onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="px-4 py-2 bg-green-100 m-4" onClick={()=>{
          const filteredRestaurant=listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurant(filteredRestaurant);
        }}>Search</button>
      
        </div>
        <div className="search m-4 p-4 flex items-center"><button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              console.log("button clicked");
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurant
          </button></div>
          
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {
              
              (restaurant?.info?.aggregatedDiscountInfoV3?.header) ?
           (
              <RestaurantCardDiscounted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
