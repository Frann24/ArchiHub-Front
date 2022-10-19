import React, { useState } from 'react'
import AvatarUser from '../avatarUser/AvatarUser'
import NoFound from './NoFound'

function SearchUsers({users, numberUsers=6}) {
  const [page, setPage] = useState(1);
  const indexLastCard = numberUsers * page;
  const currentUsers =users.slice(0, indexLastCard) 
  function paginado() {
    setPage(page + 1);
  }
  function previous(){
    setPage(page-1)
  }
  if(!users.length) return <NoFound text={"users"}/>
  return (
    <div className='flex flex-col sm:flex-row gap-8 w-full sm:flex-wrap sm:justify-between '>
      {currentUsers.map((e,i)=>{
        return(
          <div key={i} className="flex mx-auto flex-col items-center w-full lg:w-[26vw] xl:w-[20vw] bg-gray-50 shadow-md rounded-md p-4">
            <AvatarUser img={e.avatar} className="w-14 h-14"/>
            <p className='text-lg font-bold'>{e.nickname}</p>
            <p>{e.name} {e.lastname}</p>
            <div className='flex gap-4 m-2'>
              {e.posts.length ? <p className='bg-gray-600 rounded-md px-2 text-gray-50'>{e.posts.length} Posts</p> : <></>}
              {e.projects.length ? <p className='bg-gray-600 rounded-md px-2 text-gray-50'> {e.projects.length} Projects</p> : <></>}
            </div>
            {/* <button className='px-2 py-0.5 text-gray-50 rounded-sm bg-gray-900'>View profile</button> */}
          </div>
        )
      })}

      {users.length !== currentUsers.length && 
            <div className="w-full flex justify-between font-medium ">
            {page !== 1 
            ? <p 
            onClick={(e) => previous(e)} 
            className='cursor-pointer text-base text-gray-50 px-2 py-1.5 bg-gray-500 rounded-md' 
            >
              Show less
            </p>
            :<div></div>}
             <p 
             onClick={(e) => paginado(e)} 
             className='cursor-pointer text-end text-base text-gray-50 px-2 py-1.5 bg-gray-700 rounded-md'
             >
              See more...
             </p>
            </div>
          }
    </div>
  )
}

export default SearchUsers