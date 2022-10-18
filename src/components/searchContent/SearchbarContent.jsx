import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";


function SearchbarContent() {
  const [inputSearch, setInputSearch] = useState("");
  const {allPosts} = useSelector(state=>state.post)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputSearch(e.target.value)
    /* dispatch(getQueryPost(allPosts,e.target.value)) */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSearch("");
    /* dispatch(getQueryPost(allPosts,inputSearch)) */
  };

  const clearInputSearch = (e) => {
    e.preventDefault();
    setInputSearch("");
   /*  dispatch(getQueryPost(allPosts,"")) */
  };

  return (
    <div className="">
      
    </div>
  );
}

export default SearchbarContent;