import { Link } from "react-router-dom";

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
        to="#"
        className="text-base md:text-lg font-semibold text-white hover:text-blue-900"
        onClick={(e) => {
          e.preventDefault();
          alert("Quiz coming soon!");
        }}
      >
        <div className="w-full bg-secondary p-2 md:p-4 text-center rounded-lg hover:bg-darkblue hover: transition duration-200 mt-2 md:mt-0 cursor-pointer">
          {/* <FaGift color="white" /> */}
          <h2>Coming Soon!</h2>
        </div>
      </Link>
    </div>
  );
};
export default QuizBanner;
