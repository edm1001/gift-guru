import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
// import { FaGift } from "react-icons/fa";


const quickLinksData = [
  { id: "tech", name: "For Tech Geeks", tagMap: ["tech", "smart", "gadgets"] },
  {
    id: "nature",
    name: "For Nature Lovers",
    tagMap: ["eco-friendly", "outdoor", "travel"],
  },
  {
    id: "food",
    name: "For Home Chefs",
    tagMap: ["cooking", "kitchen", "chef"],
  },
  {
    id: "fitness",
    name: "For Gym Goers",
    tagMap: ["fitness", "muscle", "self-care", "functional"],
  },
  {
    id: "books",
    name: "For Bookworms",
    tagMap: ["books", "reading", "education"],
  },
  {
    id: "pets",
    name: "For Pet Owners",
    tagMap: ["pets", "animals", "furry friends"],
  },
  {
    id: "music",
    name: "For Music Lovers",
    tagMap: ["music", "audio", "instruments"],
  },
  {
    id: "diy",
    name: "For DIY Enthusiasts",
    tagMap: ["diy", "creative", "craft", "maker"],
  },
  {
    id: "art",
    name: "For Art Aficionados",
    tagMap: ["art", "aesthetic", "creative"],
  },
  {
    id: "games",
    name: "For the Gamers",
    tagMap: ["gaming", "fun", "console", "pc"],
  },
  {
    id: "fashion",
    name: "For the Fashionistas",
    tagMap: ["fashion", "style", "accessories"],
  },
  {
    id: "travel",
    name: "For Travel Addicts",
    tagMap: ["travel", "adventure", "explore"],
  },
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
    <div className="product-list p-2 mb-8">
      <h1 className="my-12 text-center text-4xl text-blue">Products</h1>

      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          // quicklink product card
          <Link to={`/shop/${product._id}`} key={product._id} className="">
            <div className="product-card p-4 hover:scale-105 hover:ring-4 hover:ring-grey-300 transform transition-all duration-200 bg-lightblue rounded-md size-32 overflow-y-scroll">
              <img
                src={product.image?.[0].url || "/placeholder.jpg"}
                // alt={product.image[0].alt || product.name}
                // className="w-auto h-auto rounded-lg mb-4"
                className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left justify-center "
              />
              <h3 className="text-md font-bold">{product.name}</h3>
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
    <div className="flex flex-col md:flex-row items-center justify-center bg-lightblue p-12">
      <div className="w-full md:w-2/3 p-2 md:p-4">
        <h1 className="text-lg md:text-xl font-semibold mb-2 text-blue">
          Discover Your Perfect Gift!
        </h1>
        <hr className="border border-grey"></hr>
        <p className="text-xs text-gray-600">
          Take our quiz to get personalized gift recommendations.
        </p>
      </div>
      <Link
        to="/quiz"
        className="text-base md:text-lg font-semibold text-white hover:text-blue-900"
      >
        <div className="w-full bg-blue p-2 md:p-4 text-center rounded-lg hover:bg-darkblue hover: transition duration-200 mt-2 md:mt-0 cursor-pointer">
          {/* <FaGift color="white" /> */}
          <h2>Coming Soon!</h2>
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
    <div className="mt-16 bg-white min-h-screen flex flex-col gap-y-8">
      {/* Quick Links Section */}
      <div className="p-8">
        <QuickLinks onLinkClick={handleLinkClick} />
      </div>
      {selectedLink && <ProductList products={filteredProducts} />}
      <QuizBanner />
      <Hero />
    </div>
  );
};

export default LinksPage;
