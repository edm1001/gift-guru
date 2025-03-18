import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
// FIXME: FIX rendering product bug
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        if (response.data) {
          setProduct(response.data);
        } else {
          console.error("Product not found:", response.data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }
  , [id]);  

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-16">
    <div className="flex flex-col h-full min-h-screen p-12 bg-grey opacity-90">
      <h1 className="text-3xl text-lightblue mb-4">{product.name}</h1> 
      <p className="text-sm font-semibold text-darkblue">Company: {product.company}</p>
      <p className="text-end mr-4 text-lightblue">${product.price}</p>
      <hr className="mb-8 border-1 border-darkblue"/>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Gallery feature for images can go here */}
        <img src={product.images[0].url}  alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-sm mb-8 md:mb-0"/>
        <div className="md:flex-1 opacity-50">

          <p className=" p-4 text-sm bg-black text-white rounded-lg">{product.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores? Omnis rerum, esse beatae deleniti aspernatur accusamus repudiandae illum fugit incidunt a mollitia reprehenderit quam nihil ea dicta nemo obcaecati deserunt optio, sed aliquam cum sint eius assumenda. Reiciendis praesentium voluptatibus laboriosam, nisi quis vitae facere. Quis eos totam saepe architecto enim quasi molestias, modi recusandae molestiae reiciendis animi at similique. Perferendis earum repellat, optio pariatur vitae ipsum non, cupiditate quasi doloremque nesciunt in tempore assumenda, maxime placeat odio voluptatibus? Minima, officia quasi libero, omnis voluptatum voluptatem illo aliquam optio ea facilis quidem vitae rerum odit pariatur harum. At, quasi.</p>
          <div className="mt-8 flex justify-end">
            <button className="p-2 rounded-lg hover:opacity-50 text-lightblue focus:ring-1 focus:ring-lightblue"><FaLink size={24}/></button>
            {/* <button className="bg-darkblue text-white px-4 py-2 rounded hover:opacity-50">Add to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ProductPage;

