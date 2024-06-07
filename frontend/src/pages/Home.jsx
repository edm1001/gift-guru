import { FaArrowRight } from "react-icons/fa";
import Newsletter from "../components/Newsletter";

function Home() {
  return (

    <section className="bg-olive min-h-screen pt-24">

      <div className="w-full grid grid-cols-1 sm:grid-cols-4 text-center">
        <div className="col-span-1 bg-gray-200 p-12">Ad Section</div>

        {/* FIXME: Posts */}
        <div className="col-span-2 bg-blue-500">
          {/* Grab state and render the newest posts created in website */}
          <div className="grid grid-row-1 sm:grid-col-4 lg:grid-row-4 ">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 shadow-md border-b border-gray-300 flex"
              >
                {/* Image */}
                <div className="mr-4">
                  <img src="https://via.placeholder.com/300" alt="post image" className="max-w-36"/>
                </div>
                {/* Title and content */}
                <div className="flex-grow text-xs">
                <h3 className="text-lg text-start font-semibold">{`Post ${i + 1}`}</h3>
                <p className="mt-2 ">{`This is post ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo auctor, lacinia tellus non, interdum nunc. Suspendisse feugiat, quam vel malesuada pharetra, urna nunc consequat massa, in aliquet ante ante id metus.`}</p>
                <div className="grid grid-cols-2">
                <p className="mt-4 text-gray-600 col-span-1">{`Published on: ${new Date().toLocaleDateString()}`}</p>                
                {/* Link icon to item */}
                <p className="mt-4 text-blue-500 col-span-1 hover:underline cursor-pointer">
                  Read more
                  <FaArrowRight className="inline ml-1" />
                </p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 bg-gray-200 p-12">Ad Section</div>
      </div>
      <Newsletter/>
    </section>
  );
}

export default Home;
