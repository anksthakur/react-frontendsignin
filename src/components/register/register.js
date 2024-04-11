import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
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

const register = ()=>{
  // kya field required hai
  const {name , email,password,reEnterPassword} = input
  // submit krne se phle check krne ke ley ki sari field shi se fill hai ya nhi
  if(name && email && password && (password === reEnterPassword)){
    // alert("posted")
    // axios se post req bhejni hai backend wale post pe
  axios.post("http://localhost:9000/register",input)
  // post krne ke baad ye resp return krta hai jo .then promise ko handle krne ke ley post req ke baad ye execute hoga
  .then(res =>alert(res.data.message));
  navigate("/login")
  }else{
    alert("invaild input")
  }
  
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
      <div className='btn' onClick={register}>Register</div>
      <div>Or</div>
      <div className='btn' onClick={()=>navigate('/login')}>Login</div>
    </div>
  )
}

export default Register
