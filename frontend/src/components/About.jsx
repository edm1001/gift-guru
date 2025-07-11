import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="">
      <div className="bg-blue grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 p-16">
          <h2 className="text-3xl font-bold text-white">About Us</h2>
          <hr className="border border-lightblue mb-2" />
          <p className="text-base text-white leading-relaxed">
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

      <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* add a place holder img col besides*/}
        <div className="col-span-1 flex justify-center items-center m-2 ml-6">
          <img
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Placeholder"
            className=""
          />
        </div>
        <div className="col-span-2 text-blue p-16">
          <h2 className="text-3xl font-bold">
            Find the Coolest Products
          </h2>
          <hr className="border border-blue mb-2" />
          <p className="text-base text-darkblue loading-relaxed">
            Discover unique, trending, and innovative finds curated just for
            you.
          </p>
          <Link  to="/shop" >
          <button className="bg-blue hover:bg-lightblue text-white font-semibold p-4 mt-4 rounded transition">Browse Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
