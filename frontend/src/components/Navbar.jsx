import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "react-hamburger-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 right-0  z-50 shadow-md">
      <div className="flex justify-between items-center p-4 bg-darkblue opacity-80">
        <div className="text-white font-bold text-2xl">
          <Link to="/">Gift Guide</Link>
        </div>
        <div className="sm:hidden">
          <Hamburger
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={20}
            height={14}
            strokeWidth={2}
            rotate={0}
            color="lightblue"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        {/* desktop nav */}
        <nav className="hidden sm:flex space-x-4 text-sm text-lightblue">
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue"
            to="/categories"
          >
            Gifts
          </Link>
          {/* TODO: Set Up When Blog is ready with content */}
          {/* <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue"
            to="/blog"
          >
            Trending
          </Link> */}
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue"
            to="/links"
          >
            Quicklinks
          </Link>
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue"
            to="/quiz"
          >
            Discover
          </Link>
          <Link
          className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue"
          to="/contact"
         >Contact Us</Link>
        </nav>
      </div>
      {isOpen && (
        // mobile nav
        <nav className="sm:hidden pb-4 shadow-sm text-center text-lightblue bg-darkblue opacity-90 rounded-b-md text-sm">
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue"
            to="/shop"
            onClick={toggleMenu}
          >
            Gifts
          </Link>
          {/* <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue"
            to="/blog"
            onClick={toggleMenu}
          >
            Trending
          </Link> */}
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue"
            to="/links"
            onClick={toggleMenu}
          >
            Quicklinks
          </Link>
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue"
            to="/quiz"
            onClick={toggleMenu}
          >
            Discover
          </Link>
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue"
            to="/contact"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
