import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoriesData from "../db/Shop/Categories.json";
import { FaLink } from "react-icons/fa";

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
      {/* turn h1 into the affiliate link to the product */}
      <h1 className="text-3xl text-blue mb-4">{product.name}</h1> 
      <p className="text-sm font-semibold text-darkblue">Company: {product.company}</p>
      <p className="text-end mr-4 text-black">${product.price}</p>
      <hr className="mb-8 border-1 border-darkblue"/>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Gallery feature for images can go here */}
        <img src={product.images} alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-sm mb-8 md:mb-0"/>
        <div className="md:flex-1">
          <p className="text-sm text-black">{product.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores? Omnis rerum, esse beatae deleniti aspernatur accusamus repudiandae illum fugit incidunt a mollitia reprehenderit quam nihil ea dicta nemo obcaecati deserunt optio, sed aliquam cum sint eius assumenda. Reiciendis praesentium voluptatibus laboriosam, nisi quis vitae facere. Quis eos totam saepe architecto enim quasi molestias, modi recusandae molestiae reiciendis animi at similique. Perferendis earum repellat, optio pariatur vitae ipsum non, cupiditate quasi doloremque nesciunt in tempore assumenda, maxime placeat odio voluptatibus? Minima, officia quasi libero, omnis voluptatum voluptatem illo aliquam optio ea facilis quidem vitae rerum odit pariatur harum. At, quasi.</p>
          <div className="mt-8 flex justify-end">
            <button className="p-2 rounded-lg hover:opacity-50 text-darkblue focus:ring-1 focus:ring-blue"><FaLink size={24}/></button>
            {/* <button className="bg-darkblue text-white px-4 py-2 rounded hover:opacity-50">Add to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ProductPage;

