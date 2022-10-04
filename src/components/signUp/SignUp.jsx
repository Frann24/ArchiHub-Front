import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../redux/slices/auth/loginActions"
import {Navlink, useNavigate} from "react-router-dom"
import { showSigIn, showSignUp } from "../../redux/slices/header/headerSlice";


function SignUp() {
  const {modalSignIn, modalSignUp} = useSelector(state => state.header)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const toggleSignIn = (e) => {
    e.preventDefault()
    dispatch(showSignUp(!modalSignUp))
    dispatch(showSigIn(!modalSignIn))
  }
  const [name, setName]=useState("")
  const [lastname, setLastname]=useState("")
  const [nickname, setNickname]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [confirmPassword, setConfirmPassword]=useState("")


  const[user,setUser]=useState({
    name:null,
    lastname:null,
    nickname:null,
    email:null,
    password:null,
    confirmPassword:null,
    loggedIn:false
  })

const handleRegister=async(e)=>{
  e.preventDefault();
      setUser({
        name,
        lastname,
        nickname,
        email,
        password,
        confirmPassword,
        loggedIn:true
      })
      dispatch(registerUser(user))
      navigate("/home")
}
  return (
    <div className="py-6 px-6 lg:px-8 font-raleway">
      <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">
        Sign Up
      </h3>
      <form className="space-y-6" onSubmit={handleRegister}>
        <div>
          <label
           
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="first name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label
          
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Lastname
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="lastname"
            onChange={(e)=>setLastname(e.target.value)}
            value={lastname}
          />
        </div>
        <div>
          <label
           
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nickname
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="nickname"
            onChange={(e)=>setNickname(e.target.value)}
            value={nickname}

          />
        </div>
       
        <div>
          <label
       
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="name@example.com"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}


          />
        </div>
        <div>
          <label
            
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500 "
            onChange={(e)=>setPassword(e.target.value)}
            value={password}


          />
        </div>
        <div>
          <label

            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500 "
            onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmPassword}
         />
        </div>
        <div className="flex justify-between"></div>
        <button
          type="submit"
          className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        >
          Create account & Login
        </button>
        {/* <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        >
          Sign up with Google
        </button> */}
        <div className="text-sm font-medium text-gray-900">
          Have an account?
          <span className="cursor-pointer text-gray-600 underline pl-1" onClick={toggleSignIn}>
            Sign in
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
