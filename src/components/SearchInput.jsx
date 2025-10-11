import React from "react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className=" w-full bg-light-100/5 px-4 py-3 rounded-lg max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <img
          src="search.svg"
          alt="search"
          className="absolute left-2 h-5 w-5"
        />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-850 placeholder-light-200 outline-hidden border-1 rounded-lg"
        />
      </div>
    </div>
  );
};
export default SearchInput;
