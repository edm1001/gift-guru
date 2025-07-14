import { About } from "../components/About";
import Posts from "../components/Posts";

function PostsPage() {
  return (
    <>
      <section className="bg-gray-200 min-h-screen p-8">
        <div className="text-center py-12">
          <h1 className="text-center text-4xl text-blue font-bold text-center">
            Product Reviews
          </h1>
          <p>Find THAT product for YOU.</p>
        </div>
        <Posts />
      </section>
      <About />
    </>
  );
}

export default PostsPage;
