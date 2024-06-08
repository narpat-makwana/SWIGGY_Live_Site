import { useDispatch } from "react-redux";
import { CAT_IMG_URL } from "../constants";
import { addItem } from "../utils/cartSlice";

const CategoryList = (items) => {
  console.log(items);
  const dispatch = useDispatch();
  const addHandler = (item) => {
    // console.log('clicked');
    // Displatch an action :
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.list.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-4 m-2 p-2 flex justify-between"
        >
          <div>
            <span className="text-lg font-bold">{item.card.info.name}</span>
            <span className="text-lg font-bold">
              {" "}
              - ₹{" "}
              {item.card.info.price !== undefined
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>{" "}
            <br />
            <span className="text-sm font-semibold">
              {" "}
              {item.card.info.ratings.aggregatedRating.rating} ⭐ (
              {item.card.info.ratings.aggregatedRating.ratingCount})
            </span>
            <br />
            <span className="text-sm font-medium text-slate-500">
              {" "}
              {item.card.info.description}
            </span>
          </div>

          <img
            className="h-32 m-2 p-2 rounded-3xl"
            src={CAT_IMG_URL + item.card.info.imageId}
          />
          <button
            className="mt-28 w-16 h-8 mb-20 absolute text-white bg-black rounded-lg"
            onClick={() => addHandler(item)}
          >
            ADD +
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
