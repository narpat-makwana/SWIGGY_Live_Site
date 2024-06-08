import logo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
import useOnlineStatus from "./useOnlineStatus";
import {useContext} from "react";
import UserContext from '../UserContext'
import { useSelector } from 'react-redux';
const Header = () => {

  const {loggedInUser} = useContext(UserContext); 

  const onlineStatus = useOnlineStatus();

  // subscribing to store using selectorr:
  const cartItems  = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between shadow-sm">
        <img className="w-20" src={logo} />
  
        <div className="">
          <ul className='flex m-4 p-4'>
            <li className='px-2 hover:text-orange-600 font-medium  cursor-pointer'>Status: {onlineStatus?"✅":"⭕"}</li>
            <li className='px-2  hover:text-orange-600 font-medium cursor-pointer'><Link to="/">Home</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium cursor-pointer'><Link to="/about">About</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium cursor-pointer'><Link to="/contact">Contact Us</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium cursor-pointer'><Link to="/grocery">Grocery</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium cursor-pointer'><Link to="/cart">Cart ({cartItems.length} items)</Link></li> 
            <li className='px-2  hover:text-orange-600 font-medium cursor-pointer'>{loggedInUser} </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;