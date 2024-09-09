import React from 'react'
import Home from './pages/home/Home'
import "./index.css"
import { Routes,Route } from 'react-router-dom'
import Login from './pages/login/Login'




const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/home" element = {<Home />}></Route>
      <Route path="/login" element = {<Login />}></Route>
    </Routes>

  
    
    </>
  )
}

export default App
