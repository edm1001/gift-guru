import { useState, useEffect } from "react";
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

// FIXME: Fix cards because its not grabbing data correctly
// TODO: update UI of quicklink card
// TODO: add loading state
 
const quickLinksData = [
  { id: "tech", name: "For Tech Geeks", tagMap: ["tech", "smart", "gadgets"] },
  { id: "nature", name: "For Nature Lovers", tagMap: ["eco-friendly", "outdoor", "travel"] },
  { id: "food", name: "For Home Chefs", tagMap: ["cooking", "kitchen", "chef"] },
  { id: "fitness", name: "For Gym Goers", tagMap: ["fitness", "muscle", "self-care", "functional"] },
  { id: "books", name: "For Bookworms", tagMap: ["books", "reading", "education"] },
  { id: "pets", name: "For Pet Owners", tagMap: ["pets", "animals", "furry friends"] },
  { id: "music", name: "For Music Lovers", tagMap: ["music", "audio", "instruments"] },
  { id: "diy", name: "For DIY Enthusiasts", tagMap: ["diy", "creative", "craft", "maker"] },
  { id: "art", name: "For Art Aficionados", tagMap: ["art", "aesthetic", "creative"] },
  { id: "games", name: "For the Gamers", tagMap: ["gaming", "fun", "console", "pc"] },
  { id: "fashion", name: "For the Fashionistas", tagMap: ["fashion", "style", "accessories"] },
  { id: "travel", name: "For Travel Addicts", tagMap: ["travel", "adventure", "explore"] },
];

// QuickLinks Component
const QuickLinks = ({ onLinkClick }) => {
  return (
    <div className="quick-links-container p-2 mb-12">
      <h1 className="mb-8 text-center text-blue text-5xl">Quick Links</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 h-full gap-4">
        {quickLinksData.map((link) => (
          <div
            key={link.id}
            className="bg-gray-200 rounded-lg hover:scale-105 hover:ring-4 hover:ring-grey flex justify-center"
          >
            <button
              onClick={() => onLinkClick(link)}
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
      <h1 className="mb-4 text-center text-3xl text-blue">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          // quicklink product card 
          <Link to={`/shop/${product._id}`} key={product._id}>
            <div className="product-card p-4 rounded-lg shadow-md">
              <img
                src={product.image?.[0].url || "/placeholder.jpg"}
                alt={product.image[0].alt || product.name}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

const QuizBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-4 rounded-lg">
      <div className="w-full  text-center md:w-2/3 p-2 md:p-4">
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
        <div className="w-full bg-darkblue p-2 md:p-4 text-center rounded-lg hover:bg-lightblue transition duration-200 mt-2 md:mt-0 cursor-pointer">
          <FaGift color="white" />
        </div>
      </Link>
    </div>
  );
};

// LinksPage Component
const LinksPage = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedLink) return;

      console.log("Selected TagMap FE:", selectedLink.tagMap);
      try {
        const res = await fetch("/api/products/quick-links", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tagMap: selectedLink.tagMap }),
        });

        const data = await res.json();
        console.log("Filtered Products:", data);
        setFilteredProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, [selectedLink]);

  return (
    <div className="mt-16 bg-white p-8 min-h-screen flex flex-col gap-y-8">
      {/* Quick Links Section */}
      <QuickLinks onLinkClick={handleLinkClick} />
      {selectedLink && <ProductList products={filteredProducts} />}
      <QuizBanner />
    </div>
  );
};

export default LinksPage;
