import { useState } from "react";
import SearchIcon from "../assets/search.svg";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center justify-center h-fit">
      <div className="w-[45%] flex border-1 rounded-md items-center justify-around">
        <input
          type="text"
          className="py-1 outline-0 w-[90%] h-10 text-xl"
          placeholder="Search Movies Here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search-icon"
          className="cursor-pointer"
          onClick={() => {
            console.log(query);
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
