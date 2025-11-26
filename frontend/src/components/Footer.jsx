import { FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="bg-gray-200 p-4 text-center dark:bg-gray-700 dark:text-white">
      {/* Create a row for all footer items */}
      <div className="flex flex-wrap justify-around items-center text-xs sm:text-sm">
        <div className="p-2 sm:p-4 hover:text-secondary hover:underline cursor-pointer">
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
        </div>
        <div className="p-2 sm:p-4 hover:text-secondary hover:underline cursor-pointer">
          <Link to="/shop" onClick={scrollToTop}>
            Products
          </Link>
        </div>
        <div className="p-2 sm:p-4 hover:text-secondary hover:underline cursor-pointer">
          <Link to="/links" onClick={scrollToTop}>
            Personalized Gifts
          </Link>
        </div>
        <div className="p-2 sm:p-4 hover:text-secondary hover:underline cursor-pointer">
          <Link to="/contact" onClick={scrollToTop}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex-grow p-4 flex items-center space-x-2 justify-center dark:text-white">
        <p className="text-gray-700 dark:text-white">Follow us:</p>
        <FaYoutube
          size={20}
          color="red"
          className="hover:scale-125 cursor-pointer"
        />
        <FaTiktok size={14} className="hover:scale-125 cursor-pointer" />
      </div>
      <p className="text-xs sm:text-sm text-accent dark:text-white mt-4">
        &copy; 2025 GiftGuide. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
