import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getQueryPost } from "../../redux/slices/post/ordenAndFilterActions";
import { getAllPosts } from "../../redux/slices/post/postActions";
import {
  getAllProjects,
  getQueryProjects,
} from "../../redux/slices/project/projectActions";
import {
  getNews1,
  getQueryNews,
} from "../../redux/slices/sliceNews/newsActions";
import { getAllUsers, getQueryUser } from "../../redux/slices/user/userActions";
import { queryUser } from "../../redux/slices/user/userSlice";
import SearchAll from "./SearchAll";
import SearchbarContent from "./SearchbarContent";
import SearchNews from "./SearchNews";
import SearchPost from "./SearchPost";
import SearchProjects from "./SearchProjects";
import SearchUsers from "./SearchUsers";

function SearchContent() {
  const [params] = useSearchParams();
  const { allPosts, queryPost } = useSelector((state) => state.post);
  const { allUsers, queryUsers } = useSelector((state) => state.user);
  const { allProjects, queryProjects } = useSelector((state) => state.project);
  const { news, queryNews } = useSelector((state) => state.newsSlice);
  const search = params.get("s") || null;

  const [components, setComponents] = useState({all: true,});
  const handleClick = (e) =>{
    e.preventDefault()
    setComponents({[e.target.id] : true})
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (!allPosts.length) dispatch(getAllPosts());
    if (queryPost.length && allPosts.length !== 0)
      dispatch(getQueryPost(allPosts, search));

    if (!allUsers.length) dispatch(getAllUsers());
    if (queryUsers.length && allUsers.length !== 0)
      dispatch(getQueryUser(allUsers, search));

    if (!allProjects.length) dispatch(getAllProjects());
    if (queryProjects.length && allProjects.length !== 0)
      dispatch(getQueryProjects(allProjects, search));

    if (!news.length) dispatch(getNews1());
    if (queryNews.length && news.length !== 0)
      dispatch(getQueryNews(news, search));
  }, [dispatch, allPosts, allUsers, allProjects, news]);

  const allResults = queryPost.length + queryUsers.length + queryNews.length;

  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
      <div className="flex flex-col">
        <p className="">
          SEARCH RESULTS FOR: "
          <span className="font-semibold">{params.get("s")}</span>"
        </p>
        <div className="border"></div>
        <p className="text-gray-500">{allResults} results</p>
      </div>
      <SearchbarContent />
      <div className="flex justify-between border-b">
        <div onClick={handleClick}>
          <p id="all">All</p>
        </div>
        <div onClick={handleClick}>
          <p id="posts">Posts</p>
        </div>
        <div onClick={handleClick}>
          <p id="projects">Projects</p>
        </div>
        <div onClick={handleClick}>
          <p id="news">News</p>
        </div>
        <div onClick={handleClick}>
          <p id="users">Users</p>
        </div>
      </div>
      <div className="mt-8">
      {components.all && <SearchAll posts={queryPost} news={queryNews} user={queryUsers} />}
      {components.posts && <SearchPost posts={queryPost}/>}
      {components.projects && <SearchProjects projects={queryProjects}/>}
      {components.news && <SearchNews news={queryNews}/>}
      {components.users && <SearchUsers users={queryUsers}/>}
      </div>
    </div>
  );
}

export default SearchContent;
