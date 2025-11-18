import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import axios from "axios";
import { About } from "../components/About";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="">
      <div className="flex flex-col h-full h-full p-8 my-24 mx-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-blue mb-4">{product.name} </h1>
        <p className="text-sm font-semibold text-grey">
          Company: {product.company}
        </p>
        <p className="text-end mr-4 text-grey">${product.price}</p>
        <hr className="mb-8 border-1 border-darkblue" />
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Gallery feature for images can go here */}
          <img
            src={product.image[0].url}
            alt={product.name}
            className="w-full md:w-1/2 h-auto rounded-lg shadow-sm mb-8 md:mb-0"
          />
          <div className="md:flex-1">
            <div className=" opacity-50">
              <p className=" p-4 text-sm bg-black text-white rounded-lg">
                {product.description}
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="p-2 rounded-lg hover:opacity-50 text-lightblue active:ring-2 active:ring-darkblue">
                <FaLink size={28} color="darkblue" />
              </button>
              {/* <button className="bg-darkblue text-white px-4 py-2 rounded hover:opacity-50">Add to Cart</button> */}
            </div>
          </div>
        </div>
      </div>
      <About/>
    </section>
  );
};

export default ProductPage;
