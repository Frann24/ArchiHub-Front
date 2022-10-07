import React from 'react'


export default function Favourites() {
  return (
    <div >
        <div className="font-bold text-lg capitalize mt-12">Favourites</div>
    <h4 className="ml-6 mb-6 font-semibold font-size:26px">News</h4>
    <div className="container mx-auto margin-top: 16px">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
        {newsPaginado.map((e,index) => (
          <Link key={index} to={`/newsDetail/${e.id}`}>
            <div>
              {e.id === 2 ? (
                <img
                  src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664405309/news/Screen_Shot_2022-09-28_at_19.44.45_zocf1r.png"
                  className="w-full aspect-[3/2]"
                  alt=""
                />
              ) : (
                <img
                  src={e.image}
                  width="600px"
                  alt="news"
                  className="w-full aspect-[3/2]"
                />
              )}
              <div className="text-gray-400 mt-6">{e.date}</div>
              <p className="font-semibold truncate text-transform: uppercase ">
                {e.title}
              </p>
              <div className="font-light truncate" >{e.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div
      className="mr-8 text-xl my-9 font-semibold flex flex-row-reverse cursor-pointer"
      onClick={(e) => paginado(e)}
    >
      See more...
    </div>
  </div>
  )
}
