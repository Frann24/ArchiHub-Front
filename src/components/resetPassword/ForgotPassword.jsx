import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { forgotPass } from '../../redux/slices/auth/loginActions'

 function ForgotPassword (){


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e)=>{
        setEmail(email)
        dispatch(forgotPass(email))
        navigate("/home")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <h1>Forgot your password?, insert Your Email to reset </h1>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          </label>
          <input type="email"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="name@example.com"
            value={email} name='email' onChange={handleEmailChange}
          />
        </div>
                <button type='submit'>Send</button>
        </form>
    </div>
  )
}


export default ForgotPassword