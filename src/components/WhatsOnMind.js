import React, { useEffect, useState } from "react";
import { API_MAIN } from "../constants";
import { DISH_URL } from "../constants";

const WhatsOnMind = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_MAIN);
        const json = await data.json();
        
        setDishes(json.data.cards[0].card.card.imageGridCards.info);
    }

    return (
        <>
        <h3 className="mx-24 mt-8 p-4 text-2xl font-bold">What's on your mind?</h3>
        <div className="flex overflow-x-auto mx-28 ts ">
            
            {dishes.map((dish) => (
                <img className="w-40"
                    key={dish.id} 
                    src={DISH_URL + dish.imageId} 
                />
            ))}
        </div>
        </>
    );
}

export default WhatsOnMind;
