import React, { useState } from 'react'
import NoFound from './NoFound'

function SearchNews({news, numberNews = 8}) {
  const [page, setPage] = useState(1);
  const indexLastCard = numberNews * page;
  const currentNews =news.slice(0, indexLastCard) 
  function paginado() {
    setPage(page + 1);
  }
  function previous(){
    setPage(page-1)
  }

  if(!news.length) return <NoFound text={"news"}/>
  return (
    <div className='flex flex-col gap-8 w-full lg:flex-wrap lg:flex-row lg:justify-between'>
      {currentNews.map((e,i)=>{
        return(
          <div key={i} className="flex flex-col gap-2 lg:w-[40vw] xl:w-[38vw] 2xl:w-[22vw]">
            <img className='w-full h-[50vw] lg:h-[35vw] xl:h-[25vw] 2xl:h-[15vw] object-cover object-bottom' src={e.image} alt="" />
            <p className='font-bold text-gray-900 text-lg text-start'>{e.title}</p>
            <p className='text-gray-500 text-end'>{e.date}</p>
            <p className='line-clamp-3 text-gray-700 text-base'>{e.description}</p>
          </div>
        )
      })}
      {news.length !== currentNews.length && 
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

export default SearchNews