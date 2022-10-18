import React from 'react'

function SearchProjects({projects}) {
  const getDate = (date) => {
    const format = date.updatedAt
      .split("T", 1)[0]
      .split("-")
      .reverse()
      .join("/");
    return format;
  };
  if(!projects.length) return <div>No projects found!</div>
  return (
    <div className='flex flex-col gap-4'>
      {projects.map((e,i)=>{
        return(
          <div key={i} className="border-b border-gray-300 py-4">
            <div className='flex flex-row items-center'>
              <p className='text-gray-900 text-lg font-bold w-full uppercase'>{e.title}</p>
              <p className='border text-gray-600 border-gray-400 rounded-lg px-2 text-sm'>{e.visibility}</p>
            </div>
            <p className='line-clamp-1'>{e.description}</p>
            <p className='text-sm font-sans text-gray-600'>Update {getDate(e)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchProjects