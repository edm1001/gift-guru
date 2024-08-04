import Newsletter from "../components/Newsletter";
import { About } from "../components/About";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <section className="bg-gray-200 min-h-screen pb-8 mt-16 overflow-x-hidden">
        <Hero />
        <div className="w-full grid grid-cols-1 text-center">
          <div className="col-span-1 bg-gray-200 p-12">Ad Section</div>

          {/* Newest Posts Section */}
          <div className="bg-blue-500 p-8">
            {" "}
            {/* Grab state and render the newest posts created on the website */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg">
              {Array.from({ length: 9 }).map((_, i) => (
                <Link
                  to={`/product/${i + 1}`}
                  key={i}
                  className="hover:scale-105 hover:ring-4 hover:ring-gray-300 transform transition-all duration-200"
                >
                  <div className="bg-white p-4 shadow-md border-b border-gray-300 flex flex-col">
                    {/* Image */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="https://via.placeholder.com/300"
                        alt={`post image ${i + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    {/* Title and content */}
                    <div className="flex-grow">
                      <h3 className="text-lg text-start text-darkblue font-semibold">
                        {`Post ${i + 1}`}
                      </h3>
                      <div className="grid grid-cols-2">
                        <p className="pr-1 text-start text-gray-500 underline col-span-1 text-xs sm:text-sm md:text-base">
                          company name
                        </p>
                        <p className="ml-1 text-end text-gray-500 col-span-1 text-2xxs sm:text-xs md:text-sm">
                          {`${new Date().toLocaleDateString()}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
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
