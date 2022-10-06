
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { deleteFavourite, updateFavourite } from '../../../../redux/slices/favourite/favouriteActions';
import { getUser } from '../../../../redux/slices/user/userActions';

export default function FavouritePost() {
  const [favourite, setFavourite] = useState("") 
  const [habilited, setHabilited] = useState(false) 
  const { id } = useParams();
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.user)
  const userId = "633a0309c70ce774c970a0c1" 

  useEffect(() => {
/*      dispatch(getUser(userId));    */

  }, [dispatch])


    const handleClick = (e)=>{
      e.preventDefault();
      setFavourite(!favourite);
      const change = !favourite
      if(change) dispatch(updateFavourite(id,{user_id:userId}))
      else dispatch(deleteFavourite(id,{user_id:userId}))} 

    
    if(user.length===0){
      return(
        <div>
          <button>Add from Favourite</button>
        </div>
      )
    }
    else if(habilited){
      return (
        <div>
        {favourite?<button onClick={handleClick}>Remove from Favourite</button>:<button onClick={handleClick}>Add from Favourite</button>}
           </div> 
      )
    }
      else{
        if (user.favourites.find(e=>e===id)){
          setFavourite(true);
          setHabilited(true);
        }else{
          setFavourite(false);
          setHabilited(true);
        } 
         }
      };
        
    


