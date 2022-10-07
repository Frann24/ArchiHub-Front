import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";




export default function FormEditProfile(id){
    const [state, setState] = useState({})



    function handleChangeStatus (id, e) {
        // dispatch(updateUser(id, {status: e.target.value}))
    }

    function handleDescription (e){
        setState({
            ...state,
            description: e.target.value
        })
    };
    function handleNickName (e){
        setState({
            ...state,
            nickName: e.target.value
        })
    };
    function handleLocation (e){
        setState({
            ...state,
            location: e.target.value
        })
    };
    function handleJob (e){
        setState({
            ...state,
            job: e.target.value
        })
    };


    return (
    <form>
        <input placeholder='image'></input>
        <input 
            placeholder='description'
            onChange={(e) => handleDescription(e)}
            ></input>
        <input 
            placeholder='nickName'
            onChange={(e) => handleNickName(e)}
        ></input>
        <input 
            placeholder='location'
            onChange={(e) => handleLocation(e)}
            ></input>
        <input 
            placeholder='job'
            onChange={(e) => handleJob(e)}
            ></input>
        <input placeholder='sitio web'></input>
        <button >Save</button>
    </form>
    )
}