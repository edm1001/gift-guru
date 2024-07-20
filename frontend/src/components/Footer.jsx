import { FaYoutube, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-200 p-1 text-center">
      {/* create two columns that lead to other pages */}
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 bg-gray-200 p-4 hover:text-blue hover:underline cursor-pointer">Products</div>
        <div className="col-span-1 bg-gray-200 p-4 hover:text-blue hover:underline cursor-pointer">Personalized Gifts</div>
        <div className="col-span-1 bg-gray-200 p-4 hover:text-blue hover:underline cursor-pointer">Contact Us</div>
        <div className="col-span-1 bg-gray-200 p-4 flex space-x-2 justify-end mr-8">
          <p className="text-gray-700 text-sm">Follow us on social media:</p>
          <FaYoutube size={20} color="red" className="hover:scale-125 cursor-pointer"/>
          <FaTiktok size={14} className="hover:scale-125 cursor-pointer" />
        </div>
      </div>
      <p className="text-xs text-grey mt-4">&copy; 2024 GiftGuide All rights reserved.</p>
    </div>
  );
};

export default Footer;
