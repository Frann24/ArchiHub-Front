import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../../redux/slices/post/postActions';


function PostDetail() {
    const dispatch = useDispatch();    
    const { id } = useParams()
    const post = useSelector((state) => state.post.post)
    useEffect (() => {
    dispatch(getPost(id))
    }, [dispatch])

 
    return (
        <div>
            {
                post.image.length !== 0 ? (
                    <img width='200px' height='200px' src={post.image[0]} ></img>
                ) : null
            }


            {/* <div>
                {
                post.image.map((img) => {
                    return (
                        <img width='50px' height='50px' src={img} ></img>
                    )
                    }
                    )
                }
            </div> */}
            <div>
                <h2>{post.title}</h2>
                {
                    post.authors.map((el) => {
                        return (
                            <h3>{el}</h3>
                        )
                    })
                }
            </div>
            <div>
                <h4>{post.mts2} m2</h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            {/* <div>
                <img/>
                <textarea
                placeholder='add a comment'
                onChange={(e) => handleComment(e)} />
                <button 
                //onClick={saveComment()}    
                >Send</button>
            </div> */}
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