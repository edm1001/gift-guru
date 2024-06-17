import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "react-hamburger-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed bg-blue top-0 left-0 right-0  p-4 z-50 shadow-lg opacity-90">
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
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue" to="/shop">Gifts</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue" to="/blog">Trending</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue" to="/links">Quicklinks</Link>
          <Link className="font-bold py-2 px-4 hover:opacity-50 focus:text-lightblue focus:border focus:ring-lightblue" to="/quiz">Discover</Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="sm:hidden bg-brown-900  shadow-sm p-4 text-center">
          <Link className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue" to="/shop" onClick={toggleMenu}>Gifts</Link>
          <Link className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue" to="/blog" onClick={toggleMenu}>Trending</Link>
          <Link className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue" to="/links" onClick={toggleMenu}>Quicklinks</Link>
          <Link className="block font-bold py-2 px-4 hover:opacity-50 hover:text-lightblue" to="/quiz" onClick={toggleMenu}>Discover</Link>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
