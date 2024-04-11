import { useState } from 'react';
import './App.css';
import Homepage from "./components/home/home";
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  const [user,setLoginUser]=useState({});
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element= {user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} />
          <Route exact path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
