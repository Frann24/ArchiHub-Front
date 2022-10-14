import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQueryPost } from "../../../../redux/slices/post/ordenAndFilterActions";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { getAllUsers, getQueryUser } from "../../../../redux/slices/user/userActions";
import { getAllProjects, getQueryProjects } from "../../../../redux/slices/project/projectActions";
import { getAllPosts } from "../../../../redux/slices/post/postActions";
import { getQueryNews } from "../../../../redux/slices/sliceNews/newsActions";
function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const {allPosts} = useSelector(state=>state.post)
  const {allUsers} = useSelector(state=>state.user)
  const {allProjects} = useSelector(state=>state.project)
  const {news} = useSelector(state=>state.newsSlice)
  const [params, setParams] = useSearchParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputSearch(e.target.value)
  };
  useEffect(() => {
/*     dispatch(getAllPosts())
    dispatch(getAllUsers()) */
    dispatch(getAllProjects())
  }, [dispatch])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSearch("");
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({s:inputSearch})}`
    })
    /* setParams({
      s: inputSearch
    }) */
    dispatch(getQueryPost(allPosts,inputSearch))
    dispatch(getQueryUser(allUsers,inputSearch))
    dispatch(getQueryProjects(allProjects,inputSearch))
    dispatch(getQueryNews(news,inputSearch))
  };

  const clearInputSearch = (e) => {
    e.preventDefault();
    setInputSearch("");
    dispatch(getQueryPost(allPosts,""))
  };

  return (
    <div className="">
      <form className="">
        <div className="m-4 flex justify-center text-sm
        md:mx-8
        lg:mx-16 lg:text-base
        xl:mx-32 xl:text-lg
        ">
          <div className="flex w-3/4 justify-between py-2 border border-gray-100 shadow-lg ">
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
          <div onClick={handleSubmit} className="w-12 md:w-16 bg-gray-100 text-center text-gray-50 cursor-pointer shadow-lg hover:bg-gray-200 flex justify-center items-center">
            <button><FontAwesomeIcon className="text-gray-400" icon={faSearch}/></button>
          </div>
        </div>
      </form>
      {/* <div>
        {inputSearch.length ? <div className="w-full flex justify-center py-2"><p className="text-">{`Results for "${inputSearch}"`}</p></div> : <></>}
      </div> */}
    </div>
  );
}

export default Search;
