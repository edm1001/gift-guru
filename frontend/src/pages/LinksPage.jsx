import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const quickLinksData = [
  { id: "tech", name: "For Tech Geeks" },
  { id: "nature", name: "For Nature Lovers" },
  { id: "food", name: "For Home Chefs" },
  { id: "fitness", name: "For Gym Goers" },
  { id: "books", name: "For Bookworms" },
  { id: "pets", name: "For Pet Owners" },
  { id: "music", name: "For Music Lovers" },
  { id: "diy", name: "For DIY Enthusiasts" },
  { id: "art", name: "For Art Aficionados" },
  { id: "games", name: "For the Gamers" },
  { id: "fashion", name: "For the Fashionistas" },
  { id: "travel", name: "For Travel Addicts" },
];
// TODO: Fix cards because its not grabbing data correctly

// QuickLinks Component
const QuickLinks = ({ onLinkClick }) => {
  return (
    <div className="quick-links-container p-2 mb-12">
      <h1 className="mb-8 text-center text-grey text-2xl">Quick Links</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 h-full gap-4">
        {quickLinksData.map((link) => (
          <div
            key={link.id}
            className="bg-gray-200 rounded-lg hover:scale-105 hover:ring-4 hover:ring-grey flex justify-center"
          >
            <button
              onClick={() => onLinkClick(link.id)}
              className="quick-link-card px-4 py-4 sm:py-12 rounded-lg hover:opacity-70 transition-shadow"
            >
              <h3 className="text-2xxs md:text-lg">{link.name}</h3>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ProductList Component
const ProductList = ({ products }) => {
  return (
    <div className="product-list p-4 mb-8">
      <h1 className="mb-4 text-center text-xl text-grey">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card p-4 rounded-lg shadow-md"
          >
            <img
              src={product.images[0].url}
              alt={product.images[0].alt}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <a
              href={product.affiliateLink}
              className="text-blue-500 hover:underline"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuizBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg">
      <div className="w-full md:w-2/3 p-2 md:p-4">
        <h1 className="text-lg md:text-xl font-semibold mb-2 text-darkblue">
          Discover Your Perfect Gift!
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          Take our quiz to get personalized gift recommendations.
        </p>
      </div>
        <Link
          to="/quiz"
          className="text-base md:text-lg font-semibold text-white hover:text-blue-900"
        >
      <div className="w-full md:w-1/3 bg-darkblue p-2 md:p-4 text-center rounded-lg hover:bg-lightblue transition duration-200 mt-2 md:mt-0 cursor-pointer">
          Take Our Quiz!
      </div>
        </Link>
    </div>
  );
};

// LinksPage Component
const LinksPage = () => {
  const [selectedLinkId, setSelectedLinkId] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleLinkClick = (linkId) => {
    setSelectedLinkId(linkId);
  };

  useEffect(() => {
    // Fetch product data
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/links");
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const data = await response.json();

        // Filter products based on selectedLinkId
        if (selectedLinkId) {
          const filtered = data.categories.flatMap((category) =>
            category.subcategories.flatMap((subcategory) =>
              subcategory.products.filter((product) =>
                product.linkIds.includes(selectedLinkId)
              )
            )
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(
            data.categories.flatMap((category) =>
              category.subcategories.flatMap(
                (subcategory) => subcategory.products
              )
            )
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [selectedLinkId]);

  return (
    <div className="mt-16 bg-white p-8 h-screen">
      <QuickLinks onLinkClick={handleLinkClick} />
      {selectedLinkId && <ProductList products={filteredProducts} />}
      <QuizBanner />
    </div>
  );
};

export default LinksPage;
