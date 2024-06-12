// import { useState } from "react";
// import { FaStar } from "react-icons/fa";


function Category() {
  // const [rating, setRating] = useState(0);
  // const handleStarClick = (value) => {
  //   setRating(value === rating ? 0 : value);
  // };
  // const renderStars = () => {
  //   const stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     stars.push(
  //       <FaStar
  //         key={i}
  //         style={{color: i <=rating ? "#FFD700" : "#4B5563"}}
  //         className="cursor-pointer"
  //         onClick={() => handleStarClick(i)}
  //       />
  //     );
  //   }
  //   return stars;
  // };

  // TODO: have a welcome component
  return (
    <section className="bg-white mt-24">
      {/* filter card */}
    {/* create item cards here; they will leads to a single page for the product */}
    <div className="bg-red-200 ">
      <p>hello</p>
    </div>
   </section>
);
}
export default Category;


{/* <div className="left-0 p-1 w-72 mt-12">
  <div className="shadow-md bg-gray-100 p-3">
    <h3 className="font-bold text-xl">Filter by</h3>
    <form>
      <div className="mb-2">
        <label className="block mb-1 text-md font-bold">Price Range:</label>
        <div>
          <input type="checkbox" className="mr-2" id="priceRange1" />
          <label htmlFor="priceRange1">$0-$25</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" id="priceRange1" />
          <label htmlFor="priceRange1">$25-$75</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" id="priceRange1" />
          <label htmlFor="priceRange1">$0-$25</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" id="priceRange1" />
          <label htmlFor="priceRange1">$100+</label>
        </div>
      </div>
      <div className="mb-3 flex">
        <label className="">Rating:</label>
        <div className="flex mt-1 mx-3">{renderStars()}</div>
      </div>
      <button className="border-2 border-green-400 text-green-500 p-2 rounded-md hover:bg-green-400 hover:text-white">Filter!</button>
    </form>
  </div>
</div> */ }