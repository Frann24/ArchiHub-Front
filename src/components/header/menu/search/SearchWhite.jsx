import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQueryPost } from "../../../../redux/slices/post/ordenAndFilterActions";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  getAllUsers,
  getQueryUser,
} from "../../../../redux/slices/user/userActions";
// import { getAllProjects, getQueryProjects } from "../../../../redux/slices/project/projectActions";
import { getAllProjects } from "../../../../redux/slices/project/projectActions";
import { getQueryProjects } from "../../../../redux/slices/project/projectActions";
import { getAllPosts } from "../../../../redux/slices/post/postActions";
import { getQueryNews } from "../../../../redux/slices/sliceNews/newsActions";

function SearchWhite() {
  const [inputSearch, setInputSearch] = useState("");
  const { allPosts } = useSelector((state) => state.post);
  const { allUsers } = useSelector((state) => state.user);
  const { allProjects } = useSelector((state) => state.project);
  const { news } = useSelector((state) => state.newsSlice);
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };
  useEffect(() => {
    /*     dispatch(getAllPosts())
    dispatch(getAllUsers()) */
    dispatch(getAllProjects());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSearch("");
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ s: inputSearch, c: "all" })}`,
    });
    /* setParams({
      s: inputSearch
    }) */
    dispatch(getQueryPost(allPosts, inputSearch));
    dispatch(getQueryUser(allUsers, inputSearch));
    dispatch(getQueryProjects(allProjects, inputSearch));
    dispatch(getQueryNews(news, inputSearch));
  };

  const clearInputSearch = (e) => {
    e.preventDefault();
    setInputSearch("");
    dispatch(getQueryPost(allPosts, ""));
  };

  return (
    <div className="w-full">
      <form className="w-full">
        <div className="flex text-sm w-full">
          <div className="flex items-center py-2 w-full">
            <input
              className="block border-2 pr-16 bg-transparent placeholder-gray-300 border-white px-4 py-2 w-3/4 focus:w-full duration-700 text-base text-white focus:outline-none
                "
              // onKeyDown={handlesubmit}
              type="text"
              placeholder="Search..."
              value={inputSearch}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span
              title="Search clean"
              className="text-white cursor-pointer"
            >
              {inputSearch && (
                <FontAwesomeIcon onClick={clearInputSearch} icon={faXmark}  className="-ml-14"/>
              )}
            </span>
            <FontAwesomeIcon
              onClick={handleSubmit}
              cursor="pointer"
              className="-ml-8 text-base text-white"
              icon={faMagnifyingGlass}
            />
          </div>
          {/* <div
            onClick={handleSubmit}
            className="w-12 md:w-16 bg-gray-100 text-center text-gray-50 cursor-pointer shadow-lg hover:bg-gray-200 flex justify-center items-center"
          >
            <button>
              <FontAwesomeIcon className="text-gray-400" icon={faSearch} />
            </button>
          </div> */}
        </div>
      </form>
      {/* <div>
        {inputSearch.length ? <div className="w-full flex justify-center py-2"><p className="text-">{`Results for "${inputSearch}"`}</p></div> : <></>}
      </div> */}
    </div>
  );
}

export default SearchWhite;
