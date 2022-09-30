import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import posts from "../../../api/posts";


function PostDetail() {
    const [comment, setComment] = useState('')
    // const dispatch = useDispatch();    
     const { id } = useParams()
    
    // useEffect (() => {
    // dispatch(postDetail(id))
    // }, [dispatch])


    //const posts = useSelector((state) => state.posts)
    
    const post = posts.find(post => post.id == id)

    function handleComment (e) {
        setComment(comment + e.target.value)
    }
    // function saveComment () {
    //     dispatch(newComment(comment, id))
    // }

    return (
        <div>
            <img width='200px' height='200px' src={post.images[0]} ></img>
            <div>
                {
                post.images.map((img) => {
                    return (
                        <img width='50px' height='50px' src={img} ></img>
                    )
                    }
                    )
                }
            </div>
            <div>
                <h2>{post.title}</h2>
                <h3>Nombre del arquitecto</h3>
                <p>{post.description}</p>
            </div>
            <div>
                <img/>
                <textarea
                placeholder='add a comment'
                onChange={(e) => handleComment(e)} />
                <button 
                //onClick={saveComment()}    
                >Send</button>
            </div>
            {/* <div>
                {
                    post.comments.map((c) => {
                        <div>
                            <img src={c.image}/>
                            <h4>{c.userName}</h4>
                            <h4>{c.date}</h4>
                            <p>{c.comment}</p>
                        </div>
                    })
                }
            </div> */}
        </div>    
    )
  
}

export default PostDetail