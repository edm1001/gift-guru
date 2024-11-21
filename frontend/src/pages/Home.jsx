import Newsletter from "../components/Newsletter";
import { About } from "../components/About";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

function Home() {
  return (
    <>
      <section className="bg-gray-100 min-h-screen pb-8 mt-16 overflow-x-hidden">
        <Hero />
        <div className="w-full grid grid-cols-1 text-center">
          <div className="col-span-1 bg-gray-200 p-12">Ad Section</div>
          <Posts />
          <div className="bg-gray-200 p-12">Ad Section</div>
        </div>
      </section>
      <About />
      <Newsletter />
    </>
  );
}

export default Home;
