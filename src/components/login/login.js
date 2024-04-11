import React, { useState } from 'react'
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {
  const navigate = useNavigate();

const [input,setInput] = useState({
  email:"",
  password:""
})
const handleSubmit = (e)=>{
  const {name,value} = e.target
  setInput({
    ...input,
    [name]:value
  })
  
}

const login = () => {
  axios.post("http://localhost:9000/login", input)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user);
          navigate("/");
      })
      .catch(error => {
          // Log and handle errors if request fails
          console.error("Error:", error.response.data);
      });
};


  return (
    <div className='login'>
      {/* {console.log("User",input)} */}
      <h1>Login</h1>
      <input type='text' name='email' value={input.email} placeholder='Enter your Email' onChange={handleSubmit}></input>
      <input type='password' name='password' value={input.password} placeholder='Enter your password' onChange={handleSubmit}></input>
      <div className='btn' onClick={login}>Login</div>
      <div>Or</div>
      <div className='btn'onClick={()=>navigate("/register")}>Register</div>
    </div>
  )
}

export default Login
