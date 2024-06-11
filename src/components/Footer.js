import { useContext } from "react";
import UserContext from '../UserContext';
import playStore from '../Images/playStore.png'
import appStore from '../Images/appStore.png'
import swiggyLogo from '../Images/swiggyLogo.png'

const Footer = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <footer className="bg-black text-white pt-6 pb-4">
      <div className="text-center pb-6">
        <h2 className="text-lg font-bold">For better experience, download the Swiggy app now</h2>
        <div className="flex justify-center gap-4 mt-4">
          <a href="">
            <img src={playStore} alt="Get it on Google Play" className="h-10 rounded-lg"/>
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920">
            <img src={appStore} alt="Download on the App Store" className="h-10 rounded-lg"/>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <img src={swiggyLogo} alt="Swiggy" className="h-10 mb-4 rounded-lg"/>
            <p>&copy; 2024 Bundl Technologies Pvt. Ltd</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Swiggy One</a></li>
              <li><a href="#" className="hover:underline">Swiggy Instamart</a></li>
              <li><a href="#" className="hover:underline">Swiggy Genie</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Partner with us</a></li>
              <li><a href="#" className="hover:underline">Ride with us</a></li>
            </ul>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Legal</h3>
              <ul>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">We deliver to:</h3>
            <ul>
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>
                <select className="bg-black border border-gray-700 mt-2">
                  <option value="589">589 cities</option>
                  {/* Add more cities here */}
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        {loggedInUser && <p>Logged in as: {loggedInUser}</p>}
      </div>
    </footer>
  );
};

export default Footer;
