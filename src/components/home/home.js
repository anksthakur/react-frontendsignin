import React from 'react'
import "./home.css"

const Homepage = ({setLoginUser}) => {

  return (
    <div className='home'>
     <h1> Home</h1>
     <div className='btn1' onClick={()=>setLoginUser({})}>
       Logout
     </div>
    </div>
  )
}

export default Homepage;
