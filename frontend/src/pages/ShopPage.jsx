import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import categoriesData from "../db/Shop/Categories.json";
// import { FaStar } from "react-icons/fa";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const toggleDropdown = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  useEffect(() => {
    // const fetchCategories = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:5173/api/categories');
    //     if (Array.isArray(response.data)) {
    //       setCategories(response.data);
    //     } else {
    //       console.error('API response is not an array:', response.data);
    //     }
    //   } catch (err) {
    //     console.error('Error fetching categories:', err);
    //   }
    // };
    // fetchCategories();
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


  const filteredProducts = selectedSubcategory ? allProducts.filter(product => product.subcategoryId === selectedSubcategory) : allProducts;

  

  // TODO: add a filter result component: by Price Range, or newest
  useEffect(() => {
    console.log("Selected Subcategory:", selectedSubcategory);
    console.log("Filtered Products:", filteredProducts); 
  }, [selectedSubcategory, filteredProducts]);


  return (
    <section className="min-h-screen mt-16 bg-slate-100 bg-gradient-to-r from-lightblue to-blue">
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
      <div className="category-menu space-y-4 flex justify-center ">
        <div className="flex flex-wrap justify-center space-x-4 ">
          {Array.isArray(categories) && categories.map((category) => (
            <div
              key={category.id}
              className=" category text-darkblue text-center mt-2 relative"
            >
              {/* category menu */}
              <button
                onClick={() => toggleDropdown(category.id)}
                className="flex justify-between items-center font-bold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
              >
                <span className="focus:text-indigo-200 p-1 text-xs">{category.name}</span>
              </button>
              {openCategory === category.id && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-4 rounded shadow-inner bg-darkblue w-56 z-10 sm:w-auto sm:max-w-xs sm:left-auto sm:right-0 sm:transform-none sm:mt-0 sm:translate-x-0 sm:static sm:ml-auto sm:mr-auto">
                  <div className="flex flex-col space-y-1 text-black">
                    {category.subcategories.map((subcategory) => (
                      // subcategory result
                      <div
                        key={subcategory.id}
                        className=" rounded item-categories hover:underline hover:text-white focus:bg-blue focus:text-white cursor-pointer"
                      >
                        <button
                          onClick={() => {
                            setSelectedSubcategory(subcategory.id)
                            toggleDropdown(null)
                          }}
                          className="hover:text-lightblue text-2xxs text-white"
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
            <div className="w-full">
              <h4 className=" p-4 text-center text-white">Showing {filteredProducts.length} Gifts !</h4>
            </div>
        </div>
      </div>

      {/* Item Card */}
      <div className="h-vh grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 hover:cursor-pointer p-2">
        {filteredProducts.map((product) => (
          <div key={product.id}  className=" hover:scale-125 hover:bg-darkblue hover:text-white active:bg-blue">
          <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-auto h-auto object-cover rounded bg-gray-300"
              />
              <div className="grid grid-cols-1 md:grid-cols-4 rounded-b-lg">
                <div className="md:col-span-3 col-span-full text-center md:text-start text-center z-0">
                  <h4 className="text-2xxs md:text-sm font-bold">
                    {product.name}
                  </h4>
                  <p className="text-xxs md:text-xs font-bold text-lightblue">
                    By: {product.company}
                  </p>
                </div>
                <div className="md:col-span-1 col-span-full flex items-center justify-end">
                  <p className="text-xs md:text-sm font-bold bg-blue text-lightblue rounded p-1 active:bg-blue ">
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
};
export default ShopPage;
