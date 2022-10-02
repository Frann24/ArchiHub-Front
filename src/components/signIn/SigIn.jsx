import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { logUser } from "../../redux/slices/auth/loginActions"
import { useNavigate} from "react-router-dom"


function SigIn() {
  
    const dispatch = useDispatch()
    const navigate = useNavigate();


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  
  const handleLogin = async(e) => {
      e.preventDefault();
      dispatch(logUser(email, password))
      navigate("/home")
    }
  
  return (
    <div className="py-6 px-6 lg:px-8 font-raleway">
    
      <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">Sign In</h3>
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input type="email"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="name@example.com"
            value={email} name='email' onChange={handleEmailChange}
          />
        </div>
        <div>
          <label for="password"
            className="block mb-2 text-sm font-medium text-gray-900">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500 "
            value={password} onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-gray-600"
              />
            </div>
            <label for="remember"
              class="ml-2 text-sm font-medium text-gray-900">
              Remember me
            </label>
          </div>
           {/* <span className="cursor-pointer text-sm text-gray-900 hover:underline">
            Lost Password?
          </span> */}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        >
          Login
        </button>
        {/* <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        >
          Sign in with Google
        </button> */}
        <div class="text-sm font-medium text-gray-900">
        {/* //NAVLINK  A SIGNUP*/}
        Not registered?
        <span class="cursor-pointer text-gray-600 hover:underline">
        </span> 
        </div>
      </form>
      </div>
  );
}

export default SigIn;
