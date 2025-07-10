import { useEffect, useState } from "react"


function App() {
 const [display, setDisplay] = useState(true); // Add this to control display

  return (
    <>
      <div>
        HI Shaany!
      </div>
      <Counter></Counter>
  
       <h1>{display ? <Timer></Timer> : null}</h1>

    </>
  )
}

function Counter() {

  const [count , setCount ] = useState(0);

  function decreaseCount (){
    setCount (count - 1);
  }
  function increaseCount(){
    setCount (count + 1);
  }

  function resetCount (){
    setCount (0);
  }

  return <div>
    <h1> {count} </h1> 
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    <button onClick={resetCount}>Reset</button>
  </div>
  
}

function Timer (){
  const [time , setTime ] = useState(0);

  console.log("Timer");

   useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // ✅ correct updater function
    }, 1000);

    return () => clearInterval(intervalId); // ✅ cleanup interval

    

  },[]/*Dependency Array*/ );



//Condetionally Render Timer
  if (time%2==0) {
    return <div>
    {time}
  </div>
  } else {
    return null
  }

  
}


export default App
