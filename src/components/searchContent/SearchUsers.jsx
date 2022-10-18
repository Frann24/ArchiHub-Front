import React from 'react'
import AvatarUser from '../avatarUser/AvatarUser'

function SearchUsers({users}) {
  console.log(users)
  return (
    <div>
      {users.map((e,i)=>{
        return(
          <div key={i} className="border-b flex flex-col my-8 items-center">
            <AvatarUser img={e.avatar} className="w-14 h-14"/>
            <p className='text-lg font-bold'>{e.nickname}</p>
            <p>{e.name} {e.lastname}</p>
            <div>
              {e.posts.length ? <p>Posts {e.posts.length}</p> : <></>}
              {e.projects.length ? <p>Projects {e.projects.length}</p> : <></>}
            </div>
            {/* <button className='px-2 py-0.5 text-gray-50 rounded-sm bg-gray-900'>View profile</button> */}
          </div>
        )
      })}
    </div>
  )
}

export default SearchUsers