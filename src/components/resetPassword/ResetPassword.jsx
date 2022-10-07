import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useParams, useNavigate} from "react-router-dom"
import { resetPass } from '../../redux/slices/auth/loginActions'
import { getUser} from "../../redux/slices/user/userActions"

const ResetPassword = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate
    const {id, token} = useParams()
   
    useEffect(()=>{
            dispatch(getUser(id))
    },[dispatch])

    const email = useSelector(state=> state.user.user.email)

    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handlePassword2Change = (e)=>{
        setPassword2(e.target.value)
    }


    const handleSubmit=(e)=>{

        dispatch(resetPass(id, token ,email, password, password2))
        navigate("/home")
    }

  return (
    <div>
        <p>Reset password for {email}</p>
        <form onSubmit={handleSubmit}>
            <label for="password">Password </label>

                <input value={password} type="password" name="password" id="password" onChange={handlePasswordChange}/>

                <label for="password2">Confirm Password </label>
            
                <input value={password2} type="password" name="password2" id="password2" onChange={handlePassword2Change}/>

            <button type='submit'>Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword