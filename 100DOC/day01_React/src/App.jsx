import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
     <postComponent></postComponent>  
    </>
  )
}
// whe the value of state variable changes,
// the componet that uses the state variable re-renders

const style = { width : 200 , backgroundColor : "white", borderRadious : 10 , borderColor : "gray" , borderWidth : 1}
function postComponent() {
  return <div style={style}>
    <img src={"https://media.licdn.com/dms/image/v2/D5603AQGL4hVLCQN3mg/profile-displayphoto-shrink_800_800/B56ZO4hTgCGkAc-/0/1733967559813?e=1757548800&v=beta&t=hAM4rNaLcHLkwwh6G_V5CYgHzrECAceLV-5SNVHYPXA"} alt="Profile Image" /> style = {{
      width : 20, height : 20, borderRadius : 20,
    }}

  </div>
}
export default App
