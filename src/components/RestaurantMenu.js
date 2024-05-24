import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "./useResMenu";
import ResCategory from "./ResCategory";
const RestrauntMenu = () => {
  const { resId } = useParams();
  // console.log(param = useParams());

  const { resInfo, menuInfo, category } = useResMenu(resId);
  console.log(resInfo);
  // console.log(category);

  const categories = category?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
    feeDetails,
  } = resInfo;

  return (
    <>
      <div className="w-6/12 items-center m-auto ">
      <h1 className="text-3xl font-extrabold my-4 mx-4">{name}</h1>
      <div className="w-full flex flex-col border-2 rounded-3xl m-0 p-4 shadow-xl">
        <h6 className="font-medium p-2">
          ⭐ {avgRatingString} ({totalRatingsString}) 🔸 {costForTwoMessage}
        </h6>
        <h7 className="px-2 mx-5 font-bold text-base text-orange-500 underline">
          {cuisines.join(", ")}
        </h7>
        <h6 className="p-2 text-sm font-semibold flex gap-2">
          📍 Outlet <p className="font-normal text-slate-500">{areaName}</p> 🔻
        </h6>
        <h5 className="text-sm font-semibold px-2 border-b-2">
          📍 {sla.slaString}
        </h5>
        <h6 className="m-2 p-2 gap-5">
          🚴 {sla.lastMileTravelString} | ₹{feeDetails.amount / 100} Delivery
          fee will apply{" "}
        </h6>
      </div>
      <br />
    </div>

    <div className="w-full items-center m-auto">
      {/* Category Accordions */}

      {categories.map((category) => (
        <ResCategory key={resId} data={category?.card.card} />
      ))}
    </div>
    </>
  );
};

export default RestrauntMenu;
