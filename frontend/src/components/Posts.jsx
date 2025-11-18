/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

const postsData = [
  {
    id: 1,
    title: "Post 1",
    company: "AquaLife Co.",
    date: "2024-10-31",
    image: "https://via.placeholder.com/300",
    description: "Discover top-quality aquarium essentials for all aquarists.",
  },
  {
    id: 2,
    title: "Post 2",
    company: "Oceanic Goods",
    date: "2024-10-30",
    image: "https://via.placeholder.com/300",
    description: "A range of ocean-inspired products for marine enthusiasts.",
  },
  {
    id: 3,
    title: "Post 3",
    company: "Coral World",
    date: "2024-10-29",
    image: "https://via.placeholder.com/300",
    description: "Premium coral care products to enhance reef ecosystems.",
  },
  {
    id: 4,
    title: "Post 4",
    company: "Fish Haven",
    date: "2024-10-28",
    image: "https://via.placeholder.com/300",
    description:
      "A haven for fish lovers with diverse aquatic species and supplies.",
  },
  {
    id: 5,
    title: "Post 5",
    company: "Aquarium Experts",
    date: "2024-10-27",
    image: "https://via.placeholder.com/300",
    description: "Expertly curated products for aquariums of all sizes.",
  },
  {
    id: 6,
    title: "Post 6",
    company: "Aqua Supplies",
    date: "2024-10-26",
    image: "https://via.placeholder.com/300",
    description:
      "Everything you need to create a thriving aquatic environment.",
  },
  {
    id: 7,
    title: "Post 7",
    company: "Freshwater Friends",
    date: "2024-10-25",
    image: "https://via.placeholder.com/300",
    description: "Specialized products for freshwater aquarium enthusiasts.",
  },
  {
    id: 8,
    title: "Post 8",
    company: "Saltwater Solutions",
    date: "2024-10-24",
    image: "https://via.placeholder.com/300",
    description:
      "Solutions designed to meet the unique needs of saltwater aquariums.",
  },
  {
    id: 9,
    title: "Post 9",
    company: "Tropical Fish Inc.",
    date: "2024-10-23",
    image: "https://via.placeholder.com/300",
    description:
      "A vibrant collection of tropical fish and aquarium essentials.",
  },
];

export default function Posts() {
  const [selectedItem, setSelectedItem] = useState(null);

  const sortedPosts = postsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  const handleOpen = (item) => {
    setSelectedItem(item);
  }; //open modal
  const handleClose = () => {
    setSelectedItem(null);
  }; //close modal

  return (
    <div className="m-4 space-y-8">
      {/* Featured Post Section */}
      <div
        onClick={() => handleOpen(featuredPost)}
        className="cursor-pointer rounded-sm transition-transform transform hover:ring-4 hover:ring-secondary-300 hover:scale-105"
      >
        <div className="bg-white p-6 shadow-lg flex flex-col md:flex-row items-center rounded-sm">
          <img
            src={featuredPost.image}
            alt={`Featured ${featuredPost.title}`}
            className="w-full md:w-1/2 h-64 object-cover rounded-md"
          />
          <div className="mt-4 text-start  md:mt-0 md:ml-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-secondary">
              {featuredPost.title}
            </h2>
            <p className="text-gray-700 my-2">{featuredPost.description}</p>
            <p className="text-sm text-gray-500">
              {featuredPost.company} • {featuredPost.date}
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Other Posts */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
        {otherPosts.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpen(item)}
            className="bg-white p-4 shadow-md border border-gray-200 rounded-sm hover:scale-105 hover:ring-4 hover:ring-secondary transition-transform cursor-pointer"
          >
            <img
              src={item.image}
              alt={`post image ${item.id}`}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-secondary">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.company}</p>
            <p className="text-xs text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>

      {selectedItem && <Modal item={selectedItem} closeModal={handleClose} />}
    </div>
  );
}

// Modal
function Modal({ item, closeModal }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
      <div
        ref={modalRef}
        className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 shadow-lg relative ring-4 ring-secondary"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <img
            src={item.image}
            alt={`post image ${item.id}`}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            {item.title}
          </h3>
          <p className="text-accent mb-4 text-center">{item.description}</p>
          <div className="text-sm text-gray-500 text-center">
            <p>{`Company: ${item.company}`}</p>
            <p>{`Date: ${item.date}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
