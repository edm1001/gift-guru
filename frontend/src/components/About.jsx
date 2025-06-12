export const About = () => {
  return (
    <section className="flex" >
      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find the Coolest Products Online
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Discover unique, trending, and innovative finds curated just for you.
        </p>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded transition">
          Browse Now
        </button>
      </div>
      <div className="p-36 bg-darkblue ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold pb-4 text-white">About Us</h2>
            <hr className="border border-grey" />
            <p className="text-base text-lightblue leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              ipsum fugit! Omnis sit debitis ullam exercitationem maxime
              corrupti iure impedit?
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="https://via.placeholder.com/600"
              alt="About us"
              className="w-full h-auto rounded-lg shadow-lg max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
