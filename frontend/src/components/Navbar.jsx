import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "react-hamburger-menu";
import DarkModeSwitch from "./DarkModeSwitch";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-100 opacity-90 z-50 dark:bg-background  shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="text-primary font-bold text-2xl">
          <Link to="/">WTFinds</Link>
        </div>
        <div className="sm:hidden">
          <Hamburger
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={20}
            height={14}
            strokeWidth={2}
            rotate={0}
            borderRadius={0}
            animationDuration={0.5}
            color="gray"
          />
        </div>
        {/* desktop nav */}
        <nav className="hidden sm:flex space-x-4 text-sm text-primary dark:text-white">
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-secondary focus:underline"
            to="/shop"
          >
            Gifts
          </Link>
          {/* TODO: Set Up When Blog is ready with content */}
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-secondary focus:underline"
            to="/posts"
          >
            Trending
          </Link>
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-secondary focus:underline"
            to="/links"
          >
            Quicklinks
          </Link>
          {/* <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-secondary focus:underline"
            to="/quiz"
          >
            Discover
          </Link> */}
          <Link
            className="font-bold py-2 px-4 hover:opacity-50 focus:text-secondary focus:underline"
            to="/contact"
          >
            Contact Us
          </Link>
          <DarkModeSwitch/>
        </nav>
      </div>

      {isOpen && (
        // mobile nav
        <nav className="sm:hidden pb-4 shadow-sm text-center text-primary dark:text-white focus:text-underline focus:text-secondary bg-gray-300 dark:bg-background opacity-90 rounded-b-md text-sm">
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:underline"
            to="/shop"
            onClick={toggleMenu}
          >
            Gifts
          </Link>
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:underline"
            to="/posts"
            onClick={toggleMenu}
          >
            Trending
          </Link>
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:underline"
            to="/links"
            onClick={toggleMenu}
          >
            Quicklinks
          </Link>
          {/* <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:underline"
            to="/quiz"
            onClick={toggleMenu}
          >
            Discover
          </Link> */}
          <Link
            className="block font-bold py-2 px-4 hover:opacity-50 hover:underline"
            to="/contact"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <DarkModeSwitch/>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
