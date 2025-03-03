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
  const handleOpen = (item) => {
    setSelectedItem(item);
  }; //open modal
  const handleClose = () => {
    setSelectedItem(null);
  }; //close modal

  return (
    <div className="m-4">
      {" "}
      {/* Grab state and render the newest posts created on the website */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg cursor-pointer">
        {postsData.map((item) => (
          <div
            onClick={() => handleOpen(item)}
            key={item.id}
            className="hover:scale-105 hover:ring-4 hover:ring-blue-300 transform transition-all duration-200"
          >
            {/* Card */}
            <div className="bg-white p-4 shadow-md border-b border-gray-300 flex flex-col rounded-md">
              {/* Image */}
              <div className="flex justify-center mb-1">
                <img
                  src={item.image}
                  alt={`post image ${item.id}`}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
              {/* Title and content */}
              <div className="flex-grow">
                <h3 className="text-md text-start text-darkblue font-semibold">
                  {item.title}
                </h3>
                <div className="grid grid-cols-2">
                  <p className="mr-1 text-start text-gray-500 underline col-span-1 text-xs md:text-base">
                    {item.company}
                  </p>
                  <p className="ml-1 text-end text-gray-500 col-span-1 text-xxs md:text-sm">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
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
        className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 shadow-lg"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-lg p-1 text-white hover:text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-darkblue mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 mb-4 text-center">{item.description}</p>
          <div className="text-sm text-gray-500">
            <p>{`Company: ${item.company}`}</p>
            <p>{`Date: ${item.date}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
