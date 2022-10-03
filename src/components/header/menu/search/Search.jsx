import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQueryPost } from "../../../../redux/slices/post/ordenAndFilterActions";
function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const {allPosts} = useSelector(state=>state.post)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputSearch(e.target.value)
    dispatch(getQueryPost(allPosts,e.target.value))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSearch("");
    dispatch(getQueryPost(allPosts,inputSearch))
  };

  const clearInputSearch = (e) => {
    e.preventDefault();
    setInputSearch("");
    dispatch(getQueryPost(allPosts,""))
  };

  return (
    <form className="">
      <div className="m-4 flex justify-center text-sm
      md:mx-8
      lg:mx-16 lg:text-base
      xl:mx-32 xl:text-lg
      ">
        <div className="flex w-3/4 justify-between mr-4 py-2 border border-gray-100 shadow-lg ">
          <div className="w-11/12">
            <FontAwesomeIcon
              className="px-2 text-base text-gray-400 lg:px-4"
              icon={faMagnifyingGlass}
            />
            <input
              className=" w-4/5 outline-none
              sm:w-11/12
              "
              type="text"
              placeholder="Search..."
              value={inputSearch}
              onChange={e=>{handleChange(e)}}
            />
          </div>
           <span
            title="Search clean"
            className=" px-2 text-gray-300 cursor-pointer"
          >
            {inputSearch && (
              <FontAwesomeIcon onClick={clearInputSearch} icon={faXmark} />
            )}
          </span> 
        </div>
        <div onClick={handleSubmit} className="w-24 bg-gray-700 text-center text-gray-50 cursor-pointer shadow-lg hover:bg-gray-600">
          <button className="p-2">Search</button>
        </div>
      </div>
    </form>
  );
}

export default Search;
