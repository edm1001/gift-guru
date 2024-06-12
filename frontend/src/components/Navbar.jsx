import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "react-hamburger-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue to-white p-4 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl"><Link to="/">Gift Guide</Link></div>
        <div className="sm:hidden">
          <Hamburger
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <nav className="hidden sm:flex space-x-4 text-sm">
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border focus:border-grey" to="/shoppage">Gifts</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border focus:border-grey" to="/blogpage">Trending</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border focus:border-grey" to="/quicklinks">Quicklinks</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border focus:border-grey" to="/quizpage">Discover</Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="sm:hidden mt-4 bg-brown-900  shadow-sm p-4 text-center">
          <Link className="block font-bold py-2 px-4 hover:opacity-50" to="/shoppage" onClick={toggleMenu}>Gifts</Link>
          <Link className="block font-bold py-2 px-4 hover:opacity-50" to="/blogpage" onClick={toggleMenu}>Trending</Link>
          <Link className="block font-bold py-2 px-4 hover:opacity-50" to="/quicklinks" onClick={toggleMenu}>Quicklinks</Link>
          <Link className="block font-bold py-2 px-4 hover:opacity-50" to="/quizpage" onClick={toggleMenu}>Discover</Link>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
