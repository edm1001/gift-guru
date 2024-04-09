
function Category() {
  return (
    <section className="flex h-screen bg-gray-100 ">
      {/* left filter card */}
      <div className="shadow-md left-0 ">
      Filter by
      <form>
        <input
        type="range" 
        min="0" 
        max="100" 
        // value={}
        // onChange={}
        />
        {/* add other filters */}
         {/*quicklinks  */}
        {/* rating */}
      </form>
      </div>

      {/* add blog type list for items make an component import */}
    </section>
  )
}

export default Category
