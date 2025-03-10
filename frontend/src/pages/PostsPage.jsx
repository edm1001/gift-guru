import Posts from "../components/Posts";

function PostsPage() {
  return (
    <section className="bg-gray-200 min-h-screen p-8">
      <div className="text-center py-12">
        <h1 className="text-center text-2xl text-grey font-bold text-center">
          Product Reviews
        </h1>
        <p>See products that we have reviewed.</p>
      </div>
      <Posts />
    </section>
  );
}

export default PostsPage;
