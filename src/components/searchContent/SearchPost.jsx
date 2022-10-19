import React, { useState } from 'react'
import NoFound from './NoFound'
import SearchbarContent from './SearchbarContent'

function SearchPost({posts, allPosts,numberPost = 6}) {
  const ratingFormat = (rating) => {
    return Number.parseFloat(rating).toFixed(1)
  }
  const [page, setPage] = useState(1);
  const indexLastCard = numberPost * page;
  const currentPost =posts.slice(0, indexLastCard) 
  function paginado() {
    setPage(page + 1);
  }
  function previous(){
    setPage(page-1)
  }
  return (
    <div className='flex flex-col gap-8'>
      {!posts.length ? <NoFound text={"posts"}/>:<>
        <div className='flex w-full flex-wrap gap-4 justify-between'>
          {currentPost.map((e,i) => {
            return (
              <div key={i} className="flex flex-col gap-2 lg:w-[40vw] xl:w-[38vw] 2xl:w-[23vw] pb-8 w-full">
                <img className='w-full h-[50vw] lg:h-[25vw] xl:h-[20vw] 2xl:h-[15vw] object-cover object-bottom' src={e.image[0]} alt="" />
                <p className='text-base font-bold'>{e.title}</p>
                <p className='line-clamp-2'>{e.description}</p>
              </div>
            )
          })}
          {posts.length !== currentPost.length && 
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
      </>
      }
    </div>
  )
}

export default SearchPost