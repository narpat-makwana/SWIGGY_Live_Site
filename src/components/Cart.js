import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
const Cart = () => {
  
  const cartItems  = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-2 p-2 font-semibold">
      <h1>Cart Page</h1>
      
        <CategoryList items={cartItems} />
      
    </div>
  );
};

export default Cart;