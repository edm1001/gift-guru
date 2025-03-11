
export const About = () => {
  return (
<section className="p-36 bg-darkblue ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-2">
      <h2 className="text-3xl font-bold pb-4 text-white">About Us</h2>
      <hr className="border border-grey" />
      <p className="text-base text-lightblue leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum fugit! Omnis sit debitis ullam exercitationem maxime corrupti iure impedit?
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
</section>

  )
}
