import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const dropdownRef = useRef(null);

  // Toggle category dropdown
  const toggleDropdown = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  // Fetch categories and subcategories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        if (Array.isArray(response.data)) {
          const catWithSubcats = response.data.map((category) => ({
            ...category,
            subcategories: category.subcategories || [],
          }));
          setCategories(catWithSubcats);
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        if (Array.isArray(response.data)) {
          setAllProducts(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter products based on selected subcategory
  const filteredProducts = selectedSubcategory
    ? allProducts.filter(
        (product) =>
          product.subcategories.includes(selectedSubcategory)
      )
    : selectedCategory
    ? allProducts.filter((product) =>
        product.categories.includes(selectedCategory)
      )
      : allProducts;

  return (
    <section className="min-h-screen mt-16 bg-gray-100 dark:bg-background">
      {/* Hero Banner */}
      <div
        className="relative w-full h-96 bg-cover bg-center shadow-lg"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_vector-1689096905639-a1d0a2e1bed5?bg=FFFFFF&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xzZU5jQ296Z3lyTXx8ZW58MHx8fHx8")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            Find a Gift for Every Occasion!
          </h2>
        </div>
      </div>

      {/* Ad Section */}
      <div className="text-center p-8 mb-2 bg-gray-200">Ad Section</div>

      {/* Category Menu */}
      <div className="category-menu flex justify-center space-y-4">
        <div className="flex flex-wrap justify-center space-x-4">
          {categories.map((category) => (
            <div
              key={category._id}
              className="relative text-primary dark:text-white text-center mt-2"
            >
              {/* Category Button */}
              <button
                onClick={() => toggleDropdown(category._id)}
                className="font-bold rounded hover:bg-gray-300 focus:ring-2 focus:ring-blue-300 p-1 text-xs"
              >
                {category.name}
              </button>

              {/* Subcategory Dropdown */}
              {openCategory === category._id && (
                <div ref={dropdownRef} className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-4 rounded shadow-md bg-gray-300 w-56 z-10">
                  <div className="flex flex-col space-y-1 text-background">
                    {category.subcategories.length > 0 ? (
                      category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory._id}
                          onClick={() => {
                            setSelectedSubcategory(subcategory._id);
                            setOpenCategory(null);
                          }}
                          className={`hover:underline hover:text-primary text-sm ${
                            selectedSubcategory === subcategory._id
                              ? "font-bold"
                              : ""
                          }`}
                        >
                          {subcategory.name}
                        </button>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm">No subcategories</p>
                    )}
                    <button
                      onClick={() => {
                        setSelectedCategory(category._id);
                        setSelectedSubcategory(null);
                        setOpenCategory(null);
                      }}
                      className="hover:underline hover:text-gray-200 text-sm font-bold"
                    >
                      Show All
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}



      {/* Products Grid */}
      <div className="min-h-screen pt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {filteredProducts.map((product) => (
          <Link
            to={`/shop/${product._id}`}
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-sm font-bold">{product.name}</h4>
              <p className="text-xs text-secondary">By: {product.company}</p>
              <p className="text-lg font-semibold text-secondary">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
        
      </div>
                {/* Show Number of Products */}
          <div className="w-full">
            <h4 className="p-4 pb-12 text-center text-gray-600 dark:text-secondary">
              Showing {filteredProducts.length} Gifts!
            </h4>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ShopPage;
