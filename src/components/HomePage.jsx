import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col items-center text-white">
        <h1>Awesome home page thingy!</h1>
        <h2>Search for a movie ^^</h2>
        <p>Or... you know...</p>
        <p>don't search for a movie</p>
        <p>Life is full of hard choices like this...</p>
      </div>
    </>
  )
};

export default HomePage;