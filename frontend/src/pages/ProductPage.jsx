import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoriesData from "../db/Shop/Categories.json";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Flatten the products array from all categories
    const allProducts = categoriesData.categories.flatMap(category => 
      category.subcategories.flatMap(subcategory => subcategory.products)
    );

    // Find the product with the matching id
    const selectedProduct = allProducts.find(p => p.id === parseInt(id, 10));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-16">
    <div className="flex flex-col h-full min-h-screen p-12 bg-gradient-to-r from-gray-100 to-gray-200">
      <h1 className="text-3xl text-blue mb-4">{product.name}</h1>
      <p className="text-sm font-semibold text-darkblue">Company: {product.company}</p>
      <p className="text-end mr-4 text-black">${product.price}</p>
      <hr className="mb-8 border-1 border-darkblue"/>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Gallery feature for images can go here */}
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-sm mb-8 md:mb-0"/>
        <div className="md:flex-1">
          <p className="text-sm text-black">{product.description}</p>
          <div className="mt-8 flex space-x-4 justify-end">
            <button className="bg-darkblue text-white px-4 py-2 rounded hover:opacity-50">Buy Now</button>
            <button className="bg-darkblue text-white px-4 py-2 rounded hover:opacity-50">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ProductPage;

