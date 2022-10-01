import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailPost } from '../../../redux/slices/posts/postsActions';


function PostDetail() {
    const [comment, setComment] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch();


    useEffect (() => {
    dispatch(getDetailPost(id))
    }, [dispatch])

    const detailPost = useSelector((state) => state.postDetail)
    
    function savePost (id) {

    }

    function handleComment (e) {
        setComment(comment + e.target.value)
    }

    // function saveComment () {
    //     dispatch(newComment(comment, id))
    // }

    return (
        <div>
            <img width='200px' height='200px' src={detailPost.images[0]} ></img>
            <div>
                {
                detailPost.images.map((img) => {
                    return (
                        <img width='50px' height='50px' src={img} ></img>
                    )}
                    )
                }
            </div>
            <div>
                <h2>{detailPost.title}</h2>
                <h3>{detailPost.created_by}</h3>
            </div>
            <div>
                {/* <button onClick={}>1estr</button>
                <button onClick={}>2estr</button>
                <button onClick={}>3estr</button>
                <button onClick={}>4estr</button>
                <button onClick={}>5estr</button> */}

                <button onClick={savePost()}>Save post</button>
            </div>
            
            <div>
                <h5>{detailPost.mts2} m2</h5>
                <h5>{detailPost.rooms} rooms</h5>
                <h5>{detailPost.bathrooms} bathrooms</h5>
                <h5>{detailPost.year} year</h5>
            </div>
            <div>
                <p>{detailPost.description}</p>
            </div>
            <div>
                <img>imagen de perfil</img>
                <textarea
                placeholder='add a comment'
                onChange={(e) => handleComment(e)} />
                <button 
                //onClick={saveComment()}    
                >Send</button>

                   
                <div>
                {
                    detailPost.comments.map((c) => {
                        <div>
                            <img>imagen de perfil del user</img>
                            <h4>{c.userName}</h4>
                            <h4>{c.date}</h4>
                            <p>{c.comment}</p>
                        </div>
                    })
                }
                </div> 
            </div>
        </div>    
    )
}

export default PostDetail