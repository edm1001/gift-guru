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
        <div className="text-white font-bold text-2xl">Gift Guide</div>
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
        <div className="hidden sm:flex space-x-4">
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border-2 focus:border-grey" to="/">Home</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border-2 focus:border-grey" to="/categorylist">Gift List</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border-2 focus:border-grey" to="/trending">Trending</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-grey focus:border-2 focus:border-grey" to="/quicklinks">Quicklinks</Link>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden mt-4 bg-brown-900  shadow-sm p-4 text-center">
          <Link className="block text-gold font-bold py-2 px-4 hover:opacity-50 " to="/" onClick={toggleMenu}>Home</Link>
          <Link className="block text-gold font-bold py-2 px-4 hover:opacity-50" to="/categorylist" onClick={toggleMenu}>Gift List</Link>
          <Link className="block text-gold font-bold py-2 px-4 hover:opacity-50" to="/trending" onClick={toggleMenu}>Trending</Link>
          <Link className="block text-gold font-bold py-2 px-4 hover:opacity-50" to="/quicklinks" onClick={toggleMenu}>Quicklinks</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
