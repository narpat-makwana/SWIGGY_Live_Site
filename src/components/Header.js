import logo from "../Images/logo.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useContext } from "react";
import UserContext from "../UserContext";
import { useSelector } from "react-redux";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaQuestionCircle,
  FaBell,
} from "react-icons/fa";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm">
      <div className="flex items-center">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <span className="text-orange-600 font-bold text-lg ml-2">
          FlavorFly
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-600 hover:text-orange-600 cursor-pointer" />
          <FaBell className="text-gray-600 hover:text-orange-600 cursor-pointer" />
          <FaQuestionCircle className="text-gray-600 hover:text-orange-600 cursor-pointer" />
          <FaUserCircle className="text-gray-600 hover:text-orange-600 cursor-pointer" />
        </div>

        <ul className="flex items-center space-x-6">
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer">
            Status: {onlineStatus ? "✅" : "⭕"}
          </li>
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer flex items-center">
            <FaShoppingCart className="mr-1" />
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-2 hover:text-orange-600 font-medium cursor-pointer">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
