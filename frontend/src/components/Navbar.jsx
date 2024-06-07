import { Link } from "react-router-dom";

function Navbar() {
  return (
      <div className="fixed block top-0 right-0 inline p-4 b-gray-800 z-50">
      <div className="flex justify-end space-x-2">
      <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" to="/">Home</Link> 
      <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" to="/categorylist">Gift List</Link> 
      <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" to="/">Trending</Link> 
      <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" to="/">Quicklinks</Link>
    </div>
  </div>
  );
}

export default Navbar;
