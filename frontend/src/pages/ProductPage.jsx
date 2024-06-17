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

    <div className="text-black h-screen bg-blue text-center">      
      <p>Name: {product.name}</p>
      <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover" />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Company: {product.company}</p>
    </div>
    </section>
  );
};

export default ProductPage;

