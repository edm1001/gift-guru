import { FaArrowRight } from "react-icons/fa";


// Create seeds json for the posts below


function Home() {
  return (
    // TODO: create a home page consisting of posts, ads, nav & footer

    <section className="bg-green-100 min-h-screen pt-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 text-center">
        <div className="md:col-span-1 bg-red-200 p-12">Ad Section</div>

        <div className="md:col-span-2 bg-blue-500">
          {/* TODO: Make  4 posts  */}
          {/* Grab state and render the newest posts created in website */}
          <div className="grid grid-row-1 sm:grid-row-2 lg:grid-cols-4 ">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 shadow-md border-b border-gray-300"
              >
                <h3 className="text-xl font-bold">{`Post ${i + 1}`}</h3>
                <p className="mt-2">{`This is post ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo auctor, lacinia tellus non, interdum nunc. Suspendisse feugiat, quam vel malesuada pharetra, urna nunc consequat massa, in aliquet ante ante id metus.`}</p>
                <div className="grid grid-cols-2">
                {/* Rating stars for item */}
                <div className="mt-4">star rating here</div>
                {/* Link icon to item */}
                <p className="mt-4 text-blue-500 col-span-1 hover:underline cursor-pointer">
                  Read more
                  <FaArrowRight className="inline ml-1" />
                </p>
                </div>
                <p className="mt-4 text-gray-600 col-span-1">{`Published on: ${new Date().toLocaleDateString()}`}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:md-span-1 bg-red-200 p-12">Ad Section</div>
      </div>
    </section>
  );
}

export default Home;
