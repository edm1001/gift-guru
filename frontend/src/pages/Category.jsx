import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Category() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value === rating ? 0 : value);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-${
            i <= rating ? "yellow" : "gray"
          }-500 cursor-pointer`}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="absolute left-0 m-12 p-4 w-72 ">
      <div className="shadow-md bg-gray-100 p-6">
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

          {/* Add more filter options here */}
          <div className="mb-4">
            <label className="block mb-1">Rating:</label>
            <div className="flex">{renderStars()}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Category;
