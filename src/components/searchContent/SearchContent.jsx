import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getQueryPost } from '../../redux/slices/post/ordenAndFilterActions'
import { getAllPosts } from '../../redux/slices/post/postActions'
import { getAllUsers, getQueryUser } from '../../redux/slices/user/userActions'
import SearchbarContent from './SearchbarContent'

function SearchContent() {
  const [params] = useSearchParams()
  const {allPosts,queryPost} = useSelector(state => state.post)
  const {allUsers, queryUsers} = useSelector(state => state.user)
  const search = params.get("s") || null

  const dispatch = useDispatch()
  useEffect(()=>{
    if(!allPosts.length) dispatch(getAllPosts())
    if(queryPost.length && allPosts.length !== 0) dispatch(getQueryPost(allPosts,search))
    
    if(!allUsers.length) dispatch(getAllUsers())
    if(queryUsers.length && allUsers.length !== 0) dispatch(getQueryUser(allUsers,search))

  },[dispatch,allPosts,allUsers])

  return (
    <div>
      <p>{`SEARCH RESULTS FOR: "${params.get("s")}"`}</p>
      <SearchbarContent/>
    </div>
  )
}

export default SearchContent