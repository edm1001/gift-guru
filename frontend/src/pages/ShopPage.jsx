import { useEffect, useState } from "react";
import categoriesData from "../db/Shop/Categories.json";
// import { FaStar } from "react-icons/fa";


function Category() {
const [categories, setCategories] = useState([]);
const [openCategory, setOpenCategory] = useState(null);

const toggleDropdown = (id) => {
  if (openCategory === id) {
    setOpenCategory(null);
  } else {
    setOpenCategory(id);
  }
}

useEffect(() => {
  setCategories(categoriesData.categories);
},[])
  
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

  // TODO: add categories for shop

  return (
    <section className="min-h-screen mt-24">
    <div className="relative w-full h-96 bg-cover bg-center shadow-lg" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_vector-1689096905639-a1d0a2e1bed5?bg=FFFFFF&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xzZU5jQ296Z3lyTXx8ZW58MHx8fHx8")' }}>
    <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex items-center justify-center h-full ">
        <h2 className="text-lightblue text-2xl md:text-4xl font-bold text-center">
          Find a Gift for Every Occasion!
        </h2>
      </div>
    </div>
    
    {/* Category menu  */}
    <div className="category-menu space-y-4">
      <div className="flex flex-wrap space-x-4">
    {categories.map((category) => (
      <div key={category.id} className="category">
        <button
          onClick={() => toggleDropdown(category.id)}
          className="flex justify-between items-center w-full px-4 py-2 text-lg font-bold bg-blue-500 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
          >
            <span>{category.name}</span>
            <span>{openCategory === category.id ? '-' : '+'}</span>
          </button>
          {openCategory === category.id && (
            <div className="mt-2 rounded shadow-inner p-4"> 
            <div className="space-y-1">
              {category.subcategories.map((subcategory) => (
                <button
                key={subcategory.id}
                className="px-4 py-2 text-black hover:bg-gray-100"
                >
                  {subcategory.name}
                </button>
              ))}
            </div>
            </div>
          )}
        </div>
           ))}
           </div>
        </div>
    {/* TODO: create filter component for the products*/}
    {/* create item cards here; they will leads to a single page for the product */}
   </section>
);
}
export default Category;

// const [rating, setRating] = useState(0);
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