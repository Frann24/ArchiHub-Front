import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getQueryPost } from '../../redux/slices/post/ordenAndFilterActions'
import { getAllPosts } from '../../redux/slices/post/postActions'
import { getAllProjects, getQueryProjects } from '../../redux/slices/project/projectActions'
import { getNews1, getQueryNews } from '../../redux/slices/sliceNews/newsActions'
import { getAllUsers, getQueryUser } from '../../redux/slices/user/userActions'
import SearchbarContent from './SearchbarContent'

function SearchContent() {
  const [params] = useSearchParams()
  const {allPosts,queryPost} = useSelector(state => state.post)
  const {allUsers, queryUsers} = useSelector(state => state.user)
  const {allProjects, queryProjects} = useSelector(state => state.project)
  const {news, queryNews} = useSelector(state=>state.newsSlice)
  const search = params.get("s") || null

  const dispatch = useDispatch()
  useEffect(()=>{
    if(!allPosts.length) dispatch(getAllPosts())
    if(queryPost.length && allPosts.length !== 0) dispatch(getQueryPost(allPosts,search))
    
    if(!allUsers.length) dispatch(getAllUsers())
    if(queryUsers.length && allUsers.length !== 0) dispatch(getQueryUser(allUsers,search))

    if(!allProjects.length) dispatch(getAllProjects())
    if(queryProjects.length && allProjects.length !== 0) dispatch(getQueryProjects(allProjects,search))

    if(!news.length) dispatch(getNews1())
    if(queryNews.length && news.length !== 0) dispatch(getQueryNews(news,search))

  },[dispatch,allPosts,allUsers,allProjects,news])

  return (
    <div>
      <p>{`SEARCH RESULTS FOR: "${params.get("s")}"`}</p>
      <SearchbarContent/>
    </div>
  )
}

export default SearchContent