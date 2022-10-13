import React from "react";
import { getUser } from "../../redux/slices/user/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../redux/slices/project/projectActions";
import VisualizePDF from "../home/projects/VisualizePDF";

 export default function Projects({id}) {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.allProjects)
    const projectsUser = projects.filter(project => project.created_by == id)
    const [search, setSearch] = useState('')

    console.log(projects)
    console.log(projectsUser)
    useEffect(() => {
      dispatch(getAllProjects());
    }, [dispatch]);

    function handleSearch(e) {
        e.preventDefault();
        const projectsSearch = projectsUser.filter(posts => posts.title.toLowerCase().includes(e.target.value.toLowerCase()))
        projectsSearch.length ? setSearch(projectsSearch) : setSearch('not found')
      }

//     const [page, setPage] = useState(1);
//     const indexLastCard = 3 * page;
//     const currentCards =posts.slice(0, indexLastCard) /* condition
//       ? post.slice(0, indexLastCard)
//       : posts.slice(0, indexLastCard);
//    */
//     function paginado() {
//       setPage(page + 1);
//     }

   return (
        <div>
            {
                projectsUser.length ?
                <div>
                    <label>Search </label>
                    <input
                    type='text'
                    onChange={(e) => handleSearch(e)}
                    />
                </div> :
                <div></div>
            }
            <Link to={'/createproject'}>
             <button>New</button>
            </Link>
            {
                search === 'not found' ?
                <div>
                    <p>there are no matches with your search</p>
                </div> 
                 :
                search.length ? search.map((project) => {
                    return (
                        <div>
                            <img src={project.pdf_file}/>
                            <h3>{project.title}</h3>
                            <p>{project.description.slice(0, 50)}</p>
                        </div>
                    )
                }) :
                projectsUser.length ? projectsUser.map((project) => {
                    return (
                        <div>
                            <VisualizePDF url={project.pdf_initial_file[0].url}/>
                            <h3>{project.title}</h3>
                            <p>{project.description.slice(0, 50)}</p>
                        </div>
                    )
                }) :
                <div>
                    <p>you have no projects created</p>
                </div>
            }
            
        </div>



//     <div >
//     <div className="font-bold text-lg capitalize mt-12">Favourites</div>
// <h4 className="ml-6 mb-6 font-semibold font-size:26px">News</h4>
// <div className="container mx-auto margin-top: 16px">
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
//     {newsPaginado.map((e,index) => (
//       <Link key={index} to={`/newsDetail/${e.id}`}>
//         <div>
//           {e.id === 2 ? (
//             <img
//               src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664405309/news/Screen_Shot_2022-09-28_at_19.44.45_zocf1r.png"
//               className="w-full aspect-[3/2]"
//               alt=""
//             />
//           ) : (
//             <img
//               src={e.image}
//               width="600px"
//               alt="news"
//               className="w-full aspect-[3/2]"
//             />
//           )}
//           <div className="text-gray-400 mt-6">{e.date}</div>
//           <p className="font-semibold truncate text-transform: uppercase ">
//             {e.title}
//           </p>
//           <div className="font-light truncate" >{e.description}</div>
//         </div>
//       </Link>
//     ))}
//   </div>
// </div>
// <div
//   className="mr-8 text-xl my-9 font-semibold flex flex-row-reverse cursor-pointer"
//   onClick={(e) => paginado(e)}
// >
//   See more...
// </div>
// </div>
   );
 }