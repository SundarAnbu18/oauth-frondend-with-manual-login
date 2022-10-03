import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './app.css'
import Login from './pages/Login'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Landingpage from './pages/landingpage'
const App = () => {
  const [user,setUser]=useState(null)

  useEffect(()=>{
    const getUser=()=>{
      fetch('http://localhost:4000/auth/login/success',{
        method:'GET',
        credentials:'include',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials":true
        }
      }).then(response=>{
        if(response.status ===200 ) return response.json();
        throw new Error('authication failed')

      }).then(resObject=>{
        setUser(resObject.user)
        console.log(setUser(resObject.user))
      }).catch(err=>{
        console.log(err)
      })
    };
    getUser();
  },[])

  console.log(user)


  return (
    <BrowserRouter>
      <div><Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={user ? <Navigate to ="/" />:<Login/>} />
          <Route path='/landingpage' element={user ? <Navigate to ="/landingpage" />:<Login/>}/>
        </Routes>
        </div>
    </BrowserRouter>

  )
}

export default App