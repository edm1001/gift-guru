import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// TODO: add categories to subcategory script 
const ShopPage = () => {
  const [categories ] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  // Toggle category dropdown
  const toggleDropdown = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

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

  // Filter products based on selected subcategory
  const filteredProducts = selectedSubcategory
    ? allProducts.filter(
        (product) => product.subcategoryId === selectedSubcategory
      )
    : allProducts;

  return (
    <section className="min-h-screen mt-16 bg-gray-100">
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
              className="relative text-darkblue text-center mt-2"
            >
              {/* Category Button */}
              <button
                onClick={() => toggleDropdown(category._id)}
                className="font-bold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 p-1 text-xs"
              >
                {category.name}
              </button>

              {/* Subcategory Dropdown */}
              {openCategory === category._id && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-4 rounded shadow-lg bg-darkblue w-56 z-10">
                  <div className="flex flex-col space-y-1 text-white">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory._id}
                        onClick={() => {
                          setSelectedSubcategory(subcategory._id);
                          toggleDropdown(null);
                        }}
                        className="hover:underline hover:text-gray-200 text-sm"
                      >
                        {subcategory.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Show Number of Products */}
          <div className="w-full">
            <h4 className="p-4 text-center text-gray-600">
              Showing {filteredProducts.length} Gifts!
            </h4>
          </div>
        </div>
      </div>

      {/* Products Grid */}
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
              <p className="text-xs text-gray-600">By: {product.company}</p>
              <p className="text-lg font-semibold text-blue-600">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopPage;
