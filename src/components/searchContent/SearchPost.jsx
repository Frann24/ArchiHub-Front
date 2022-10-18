import React from 'react'

function SearchPost({posts}) {
  const ratingFormat = (rating) => {
    return Number.parseFloat(rating).toFixed(1)
  }

  if(!posts.length) return <div>No posts found!</div>
  return (
    <div className='flex flex-col gap-8'>
      <div className="hidden lg:flex w-full  gap-4 items-center border-b pb-8">
        <img className='w-1/2 h-[35vw] object-cover object-bottom' src={posts[0].image[0]} alt="" />
        <div className='flex flex-col gap-4'>
        <p className='text-xl font-bold'>{posts[0].title}</p>
        <p className='text-base line-clamp-6'>{posts[0].description}</p>
        <p className=''>{ratingFormat(posts[0].rating)}</p>
        </div>
      </div>
      <div className='flex w-full flex-wrap'>
        {posts.map((e,i) => {
          if(i===0) return (
            <div key={i} className="flex lg:hidden flex-col gap-2 lg:w-1/2 px-2 pb-8 border-b">
            <img className='w-full h-[50vw] lg:h-[25vw] object-cover object-bottom' src={e.image[0]} alt="" />
            <p className='text-base font-bold'>{e.title}</p>
            <p className='line-clamp-2'>{e.description}</p>
            </div>)
          else{
          return (
            <div key={i} className="flex flex-col gap-2 lg:w-1/2 px-2 pb-8 border-b">
              <img className='w-full h-[50vw] lg:h-[25vw] object-cover object-bottom' src={e.image[0]} alt="" />
              <p className='text-base font-bold'>{e.title}</p>
              <p className='line-clamp-2'>{e.description}</p>
            </div>
          )}
        })}
      </div>
    </div>
  )
}

export default SearchPost