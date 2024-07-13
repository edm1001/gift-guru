import { FaArrowRight } from "react-icons/fa";
import Newsletter from "../components/Newsletter";
import { About } from "../components/About";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-gray-200 min-h-screen pb-8 mt-16">
        <div className="w-full grid grid-cols-1 text-center">
          <div className="col-span-1 bg-gray-200 p-12">Ad Section</div>

          {/* Newest Posts Section */}
          <div className="bg-blue-500 p-8">
            {/* Grab state and render the newest posts created in website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-4 shadow-md border-b border-gray-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://via.placeholder.com/300"
                      alt="post image"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  {/* Title and content */}
                  <div className="flex-grow text-xs">
                    <h3 className="text-lg text-start text-darkblue font-semibold">{`Post ${
                      i + 1
                    }`}</h3>
                    {/* TODO: shorten the content and read more leads to the singlepostpage */}
                    <div className="grid grid-cols-2 mt-2">
                      <p className="text-start text-gray-500 col-span-1 text-xs">
                        {`${new Date().toLocaleDateString()}`}
                      </p>
                      {/* Link icon to item */}
                      <Link
                        to={`/product/${i + 1}`}
                        className="text-blue-500 col-span-1 hover:underline cursor-pointer text-right"
                      >
                        Read more
                        <FaArrowRight className="inline ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-200 p-12">Ad Section</div>
        </div>
      </section>
      <About />
      <Newsletter />
    </>
  );
}

export default Home;
