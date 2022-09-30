import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clearInputSearch = (e) => {
    e.preventDefault()
    setInputSearch("")
  }

  return (
    <form>
      <div className="py-8 my-2 text-center">
        <input
          className={`${inputSearch ? 'w-1/2':'w-1/4'} bg-white shadow-md outline-none border-gray-700 p-4 focus:outline-none transition-all duration-300 ease-in  focus:w-1/2 text-base text-gray-700 pl-4 pr-20"`}
          type="text"
          placeholder="Search..."
          value={inputSearch}
          onChange={handleChange}
        />
          <span title="Search clean" className="-ml-20 text-gray-300 cursor-pointer">
            {inputSearch && <FontAwesomeIcon onClick={clearInputSearch} icon={faXmark}/> }
          </span>
        <button
          className="bg-transparent transition-all duration-200 ease-in cursor-pointer bg-gray-500 text-gray-50 font-medium shadow-md py-2 px-8 hover:bg-gray-400 ml-4 active:scale-105"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
