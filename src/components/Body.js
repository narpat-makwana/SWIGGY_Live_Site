import Card from "./Card";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import WhatsOnMind from "./WhatsOnMind";
import useOnlineStatus from "./useOnlineStatus";
import useFetch from "./useFetch"

const Body = () => {

  // const {restList,filteredRestList} = useFetch(resId);

  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const SearchHandle = () => {
    const filteredRest = restList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestList(filteredRest);
  };

  const handleFilter = () => {
    const filteredList = restList.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4.0
    );
    setFilteredRestList(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks You are OFFLINE. Check your internet connection and try again{" "}
      </h1>
    );
  }

  if (restList.length === 0) {
    return (
      <div className="flex flex-wrap justify-start flex-row">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />    
      </div>
    );
  }

  return (
    <>
      <div className="m-4 text-center">
        <input
          type="text"
          className="border border-black m-1 p-2 w-2/5 rounded-full"
          placeholder="Your Food is a click away"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="m-4 bg-orange-400 rounded-full p-2 " onClick={SearchHandle}>
          Search
        </button>
      </div>

      <div className="mx-28 p-2 bg-orange-400 w-48 rounded-2xl">
        <button className="" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

        <WhatsOnMind />

      <h1 className="mx-24 p-4 text-2xl font-bold">Restaurants with online food delivery in Pune</h1>
      <div className="flex flex-wrap mx-28 mt-4">
        {filteredRestList.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <Card resData={restaurant?.info} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
