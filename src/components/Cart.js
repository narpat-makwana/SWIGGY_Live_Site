import { useSelector } from "react-redux";
import { CAT_IMG_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="text-center mb-8 p-1 font-semibold">
      <h1>Cart Page</h1>
      {cartItems.length > 0 ? (
        <div className="">
          {cartItems.map((item) => (
            <div
              key={item.card.info.id}
              className="border-b-4 m-2 p-2 flex justify-between w-6/12 ml-80"
            >
              <div>
                <span className="text-sm font-normal ml-2">
                  {item.card.info.name}
                  <p className="text-sm ml-2 mt-2 font-medium text-left">
                    - ₹{" "}
                    {item.card.info.price !== undefined
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </p>
                </span>
              </div>

              <img
                className="h-14 m-1 p-1 rounded-xl"
                src={CAT_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            </div>
          ))}
          <div>
            <button
              className="m-2 p-1 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-orange-500"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Please add some items to your cart.</p>
      )}
    </div>
  );
};

export default Cart;
