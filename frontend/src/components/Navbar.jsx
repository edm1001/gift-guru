import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="">
      {/* top nav */}
      <div className="fixed block top-0 right-0 inline p-4">
        <div className="nav-top-sctn">
          <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" to="/">Home</Link> 
          <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" to="/categorylist">Gift List </Link> 
          <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" to="/">Trending </Link> 
          <Link className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" to="/">Quicklinks  </Link>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}

export default Navbar;
