import React, { useState } from 'react'
import "./register.css"

const Register = () => {
const [input,setInput] = useState({
  name:"",
  email:"",
  password:"",
  reEnterPassword:""
});
const handleSubmit = (e) =>{
const {name,value} = e.target
// console.log(name,value)
setInput({
  ...input,
  [name]:value
})
}
  return (
    <div className='register'>
      {/* isko check krne ke ley*/}
      {console.log("User",input)}
      <h1>Register</h1>
      <input type='text' name='name' value={input.name} placeholder='Your Name' onChange={handleSubmit}></input>
      <input type='text' name='email' value={input.email} placeholder='Enter your Email' onChange={handleSubmit}></input>
      <input type='text' name='password' value={input.password} placeholder='Enter your password' onChange={handleSubmit}></input>
      <input type='text' name='reEnterPassword' value={input.reEnterPassword} placeholder='Re-Enter your password' onChange={handleSubmit} ></input>
      <div className='btn'>Register</div>
      <div>Or</div>
      <div className='btn'>Login</div>
    </div>
  )
}

export default Register
