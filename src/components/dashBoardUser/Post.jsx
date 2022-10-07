import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../../redux/slices/post/postActions' 

export default function Post(id) {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.allPosts)
  const postsUser = posts.filter(posts => posts.created_by === "633a026b092c0858a7bb580b")
  const [search, setSearch] = useState('')


  useEffect(() => {
    dispatch(getAllPosts())                                                                                                               //este useEffect cuando este echa la ruta no seria necesario porque el state ya estaria cargado cuando se monta home
  }, [dispatch])

  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = postsUser.filter(posts => posts.title.toLowerCase().includes(e.target.value.toLowerCase()))
    postsSearch.length ? setSearch(postsSearch) : setSearch('not found')
  }
  function handleOrderDate(e) {
    
  }

  return (
    <div>
      <div>
        <label>Search </label>
        <input
        type='text'
        onChange={(e) => handleSearch(e)}
        />
        
        <button>Type</button>
        <button onClick={(e) => handleOrderDate(e)}>Date</button>
        <button>New</button>
      
      </div>
      {
        search === 'not found' ? 
        <div>
          <p>there are no matches with your search</p>
        </div> 
        :
        search.length ? search.map((post) => {
          return (
            <div>
              <img src={post.image[0]}/>
              <p>{post.createdAt.slice(0, 10)}</p>
              <h3>{post.title}</h3>
              <p>{post.description.slice(0, 70)}...</p>
            </div>
            )
        }) :
       postsUser.length ? postsUser.map((post) => {
          return (
          <div>
            <img src={post.image[0]}/>
            <p>{post.createdAt.slice(0, 10)}</p>
            <h3>{post.title}</h3>
            <p>{post.description.slice(0, 70)}...</p>
          </div>
          )
        }) :
        <div>
          <p>you have no posts created</p>
        </div>
      }
      
      
      {/* <div className="container mx-auto margin-top: 16px">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
          {newsPaginado.map((e, index) => (
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
                <div className="font-light truncate">{e.description}</div>
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
      </div> */}
    </div>
  );
}
