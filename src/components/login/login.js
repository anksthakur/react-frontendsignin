import React, { useState } from 'react'
import "./login.css"

const Login = () => {
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
  return (
    <div className='login'>
      {console.log("User",input)}
      <h1>Login</h1>
      <input type='text' name='email' value={input.email} placeholder='Enter your Email' onChange={handleSubmit}></input>
      <input type='password' name='password' value={input.password} placeholder='Enter your password' onChange={handleSubmit}></input>
      <div className='btn'>Login</div>
      <div>Or</div>
      <div className='btn'>Register</div>
    </div>
  )
}

export default Login
