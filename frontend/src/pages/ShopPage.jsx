import { useEffect, useState } from "react";
import categoriesData from "../db/Shop/Categories.json";
import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const toggleDropdown = (id) => {
    if (openCategory === id) {
      setOpenCategory(null);
    } else {
      setOpenCategory(id);
    }
  };

  useEffect(() => {
    setCategories(categoriesData.categories);
  }, []);

  useEffect(() => {
    const products = [];
    categories.forEach((category) => {
      category.subcategories?.forEach((subcategory) => {
        subcategory.products?.forEach((product) => {
          products.push({
            ...product,
            categoryId: category.id,
            subcategoryId: subcategory.id,
          });
        });
      });
    });
    products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setAllProducts(products);
  }, [categories]);

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
    <section className="min-h-screen mt-24 bg-slate-100 bg-gradient-to-r from-lightblue to-blue">
      <div
        className="relative w-full h-96 bg-cover bg-center shadow-lg"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_vector-1689096905639-a1d0a2e1bed5?bg=FFFFFF&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xzZU5jQ296Z3lyTXx8ZW58MHx8fHx8")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full ">
          <h2 className="text-lightblue text-2xl md:text-4xl font-bold text-center">
            Find a Gift for Every Occasion!
          </h2>
        </div>
      </div>
      <div className="text-center p-8 mb-2 bg-gray-200">Ad Section</div>
      {/* Category menu  */}

      {/* FIXME: fix dropdown */}
      <div className="category-menu space-y-4 flex justify-center ">
        <div className="flex flex-wrap justify-center space-x-4 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className=" category w-auto text-darkblue text-center mt-2"
            >
              <button
                onClick={() => toggleDropdown(category.id)}
                className="flex justify-between items-center w-auto p-1 text-sm font-bold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
              >
                <span className="focus:text-indigo-200">{category.name}</span>
              </button>
              {openCategory === category.id && (
                <div className="mt-2 p-4 rounded shadow-inner ">
                  <div className="flex flex-col space-y-1 text-black">
                    {category.subcategories.map((subcategory) => (
                      <div
                        key={subcategory.id}
                        className="w-full px-4 py-2 rounded item-categories hover:bg-blue hover:text-white focus:bg-blue focus:text-white cursor-pointer"
                      >
                        <button
                          onClick={() => setSelectedSubcategory(subcategory.id)}
                          className="hover:text-lightblue text-xs"
                        >
                          {subcategory.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* TODO: create filter component for the products*/}

      {/* Item Card */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 hover:cursor-pointer p-8">
        {(selectedSubcategory
          ? allProducts.filter(
              (product) => product.subcategoryId === selectedSubcategory
            )
          : allProducts
        ).map((product) => (
          <div key={product.id} className="hover:scale-105 hover:bg-darkblue hover:text-white active:bg-blue">
            <Link to={`/shop/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-cover rounded bg-gray-300"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 rounded-b-lg">
              <div className="md:col-span-3 col-span-full text-center md:text-start text-center z-0">
                <h4 className="text-xs md:text-sm font-bold mb-1">
                  {product.name}
                </h4>
                <p className="text-xxs md:text-xs font-bold mb-1 text-lightblue">
                  By: {product.company}
                </p>
              </div>
              <div className="md:col-span-1 col-span-full flex items-center justify-end p-2">
                <p className="text-blue-500 text-xs md:text-sm font-bold bg-darkblue text-lightblue rounded p-1 active:bg-blue ">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ShopPage;

// const [rating, setRating] = useState(0);
{
  /* <div className="left-0 p-1 w-72 mt-12">
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
</div> */
}
