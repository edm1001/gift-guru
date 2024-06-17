import { useParams } from "react-router"

const ProductPage = () => {
  const {productId} = useParams();
// TODO: fetch data from user picked product
  return (
    <div className="text-black flex justify-center">
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Render product details based on fetched data */}
    </div>
  )
}

export default ProductPage