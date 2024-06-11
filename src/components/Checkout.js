import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CAT_IMG_URL } from "../constants";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false); // State to manage order placement
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate total price
  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice +=
        item.card.info.price !== undefined
          ? item.card.info.price / 100
          : item.card.info.defaultPrice / 100;
    });
    setTotal(totalPrice.toFixed(2));
  };

  // Calculate total when component mounts or cartItems change
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  // Handle order placement
  const handlePlaceOrder = () => {
   
    setOrderPlaced(true);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-orange-600 text-xl mb-4">Checkout Page</h1>
      <div className="w-6/12 h-auto border-2 mb-12 rounded-xl shadow-xl mx-auto">
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="flex justify-between items-center text-left m-2 p-1"
          >
            <div className="text-sm font-normal">{item.card.info.name}</div>
            <div className="text-sm font-medium">
              ₹
              {item.card.info.price !== undefined
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
          </div>
        ))}
      </div>
      <div className="font-bold text-lg">Total: ₹{total}</div>
      {!orderPlaced ? (
        <button
          onClick={handlePlaceOrder}
          className="m-1 p-2 bg-orange-500 text-white rounded-md"
        >
          Proceed with CashOnDelivery
        </button>
      ) : (
          <p>Your order has been placed successfully!</p>
      )}
    </div>
  );
};

export default Checkout;
