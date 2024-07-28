import { FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 text-center">
    {/* Create a row for all footer items */}
    <div className="flex flex-wrap justify-around items-center text-sm space-x-2 sm:space-x-4">
      <div className="flex-grow p-2 sm:p-4 hover:text-blue hover:underline cursor-pointer">
        <Link
        to="/">
          Home
          </Link>
          </div>
      <div className="flex-grow p-2 sm:p-4 hover:text-blue hover:underline cursor-pointer">
        <Link to="/shop" >
        Products
        </Link>
        </div>
      <div className="flex-grow p-2 sm:p-4 hover:text-blue hover:underline cursor-pointer">
        <Link to="/links">
        Personalized Gifts
        </Link>
        </div>
      <div className="flex-grow p-2 sm:p-4 hover:text-blue hover:underline cursor-pointer">
        <Link to="/contact">
        Contact Us
        </Link>
        </div>
    </div>
      <div className="flex-grow p-2 sm:p-4 flex items-center space-x-2 justify-center">
        <p className="text-gray-700">Follow us:</p>
        <FaYoutube size={20} color="red" className="hover:scale-125 cursor-pointer" />
        <FaTiktok size={14} className="hover:scale-125 cursor-pointer" />
      </div>
    <p className="text-xs sm:text-sm text-gray-700 mt-4">&copy; 2024 GiftGuide. All rights reserved.</p>
  </div>
  );
};

export default Footer;
