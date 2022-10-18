import React from 'react'

function SearchNews({news}) {

  if(!news.length) return <div>No news found!</div>
  return (
    <div className='flex flex-col gap-8'>
      {news.map((e,i)=>{
        return(
          <div key={i} className="flex flex-col gap-2">
            <img className='w-full h-[50vw] object-cover object-bottom' src={e.image} alt="" />
            <p className='font-bold text-gray-900 text-lg text-start'>{e.title}</p>
            <p className='text-gray-500 text-end'>{e.date}</p>
            <p className='line-clamp-3 text-gray-700 text-base'>{e.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchNews