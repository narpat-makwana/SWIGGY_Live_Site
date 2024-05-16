import { useEffect, useState } from "react";
import {MENU_API} from "../constants";

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);
    

    useEffect(()=>{
        FetchData();
    },[]);


    const FetchData = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data.cards[2].card.card.info);
        setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);    
    };

    return {resInfo,menuInfo};  
};
export default useResMenu; 