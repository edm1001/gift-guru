import Hero from "./Hero";

export const About = () => {
  return (
    <section className="">
      <div className="bg-blue grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 p-12">
          <h2 className="text-3xl font-bold pb-4 text-white">About Us</h2>
          <hr className="border border-grey" />
          <p className="text-base text-lightblue leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum
            fugit! Omnis sit debitis ullam exercitationem maxime corrupti iure
            impedit?
          </p>
        </div>
        <div className="col-span-1 flex justify-center items-center m-2 ml-6">
          <img
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Placeholder"
            className=""
          />
        </div>
      </div>
      <div className="bg-darkblue grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* add a place holder img col besides*/}
        <div className="col-span-1 flex justify-center items-center m-2 ml-6">
          <img
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Placeholder"
            className=""
          />
        </div>
        <div className="col-span-2 text-white p-12">
          <h2 className="text-3xl font-bold pb-2">
            Find the Coolest Products Online
          </h2>
          <hr className="border border-grey" />
          <p className="text-base text-lightblue loading-relaxed">
            Discover unique, trending, and innovative finds curated just for
            you.
          </p>
          <button className="bg-blue hover:bg-lightblue text-white font-semibold p-4 mt-4 rounded transition">
            Browse Now
          </button>
        </div>
      </div>
    </section>
  );
};
