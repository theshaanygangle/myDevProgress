import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [currentCount, setcurrentCount] = useState(0);
  const timer = useRef();

  function startClock (){
    let value = setInterval (function (){
      setcurrentCount (c => c+1)
    },1000);
    timer.current = value ;
  } 

  function stopClock (){
    console.log(timer);
    clearInterval(timer.current);
  }

  return (
    <>
    <h1>{currentCount}</h1>

    <button onClick={startClock} style={{padding : 10, margin : 2 , color : 'green'}}>Start</button> 
    <button onClick={stopClock} style={{padding : 10, margin : 2 , color : 'red'}}>Stop</button> 
    </>
  )
}

export default App
