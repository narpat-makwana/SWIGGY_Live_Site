import logo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
import useOnlineStatus from "./useOnlineStatus";
const Header = () => {

  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between shadow-sm">
        <img className="w-20" src={logo} />
  
        <div className="">
          <ul className='flex m-4 p-4'>
            <li className='px-2 hover:text-orange-600 font-medium  cursor-pointer'>Status: {onlineStatus?"✅":"⭕"}</li>
            <li className='px-2  hover:text-orange-600 font-medium '><Link to="/">Home</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium '><Link to="/about">About</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium '><Link to="/contact">Contact Us</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium '><Link to="/grocery">Grocery</Link></li>
            <li className='px-2  hover:text-orange-600 font-medium '>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;