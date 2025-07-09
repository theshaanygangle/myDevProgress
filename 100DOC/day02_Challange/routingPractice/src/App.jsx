import { useState } from 'react'
import {BrowserRouter , Routes, Route , Link , useNavigate} from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
     <div>
      
      <BrowserRouter>
      <Link to="/">Allen</Link>
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
       <Routes>
        <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
        <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
        <Route path='/' element={<Landing/>}/>
       </Routes>
    </BrowserRouter>
     </div>
      
    </>
  )
} 

function Class11Program(){
  return <div>
    Neet Program For Class 11
  </div>
}

function Class12Program(){

  const nevigate = useNavigate();

const redirectUsre = () => nevigate("/");

  return <div>
    Neet Program for class 12
    <button onClick={redirectUsre}>Go TO Home Page</button>
  </div>
}

function Landing(){
  return <div>
    Landing Page : Welcome to Allen
  </div>
}

export default App
