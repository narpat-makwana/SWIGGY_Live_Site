const Search = () => {
    return (
      <div className="m-4 p-4">
        <input
          type="text"
          className="m-8 p-4"
          placeholder="Your Food is a click away"
          value={searchText}
          onChange={(e) => setSearch}
        />
        <button className="">Search</button>
      </div>
    );
  };

  export default Search;