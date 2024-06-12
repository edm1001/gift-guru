
export const About = () => {
  return (
    // create two columns: left: about component with header and paragraph + right: image
    <section className="grid grid-cols-3 flex p-8">
      <div className="col-span-2">
        <h2 className="text-2xl pb-4">About Component</h2>
        <p className="mr-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum fugit! Omnis sit debitis ullam exercitationem maxime corrupti iure impedit?</p>
      </div>
      <div className="col-span-1 bg-blue m-8"> 
        <img src="https://via.placeholder.com/500" alt="about image" />
      </div>
    </section>
  )
}
