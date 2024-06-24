import { useState, useEffect } from "react"


const quickLinksData = [
  { id: 'tech', name: 'For Tech Geeks'},
  { id: 'nature', name: 'For Nature Lovers'},
  {id:'food', name: 'For Home Chefs'},
  {id:'fitness', name: 'For Gym Goers'},
  {id:'books', name: 'For Bookworms'},
  {id:'pets', name: 'For Pet Owners'},
  {id:'music', name: 'For Music Lovers'},
  {id:'diy', name: 'For DIY Enthusiasts'},
  {id:'art', name: 'For Art Aficionados'},
  {id:'games', name: 'For the Gamers'},
  {id:'fashion', name: 'For the Fashionistas'},
  {id:'travel', name: 'For Travel Addicts'},
]
// TODO: Fix cards because its not grabbing data correctly
// make sure it is 4x4 in cards but possibly add 4 more

// QuickLinks Component
const QuickLinks = ({ onLinkClick }) => {
  return (
    <div className="quick-links-container p-4">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {quickLinksData.map((link) => (
          <div
          key={link.id}
          className="bg-darkblue text-white rounded-lg hover:scale-105 hover:ring-4 hover:ring-lightblue">
          <button
            
            onClick={() => onLinkClick(link.id)}
            className="quick-link-card p-4 rounded-lg hover:opacity-70 transition-shadow"
            >
            <h3 className="text-2xl text-center  mb-2">{link.name}</h3>
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
    <div className="product-list p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="product-card p-4 rounded-lg shadow-md">
            <img src={product.images[0].url} alt={product.images[0].alt} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-semibold">${product.price.toFixed(2)}</p>
            <a href={product.affiliateLink} className="text-blue-500 hover:underline">Buy Now</a>
          </div>
        ))}
      </div>
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
      const response = await fetch('../db/Shop/Categories.json');
      const data = await response.json();

      // Filter products based on selectedLinkId
      if (selectedLinkId) {
        const filtered = data.categories.flatMap(category =>
          category.subcategories.flatMap(subcategory =>
            subcategory.products.filter(product => product.linkIds.includes(selectedLinkId))
          )
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(data.categories.flatMap(category =>
          category.subcategories.flatMap(subcategory => subcategory.products)
        ));
      }
    };

    fetchProducts();
  }, [selectedLinkId]);

  return (
    <div className="mt-16 bg-grey">
      <QuickLinks onLinkClick={handleLinkClick} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default LinksPage;
