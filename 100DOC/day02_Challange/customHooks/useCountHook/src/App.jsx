import { useState } from 'react'

import './App.css'

//custom Hook
function useCounter (){
  const [count,setcount] = useState(0)

  function increaseCount (){
    setcount(count+1)
  }
  return {count : count , increaseCount : increaseCount}
}

function App() {
  const {count, increaseCount} = useCounter();
  return (
    <>
    <button onClick={increaseCount}>Increase : {count}</button>
    </>
  )
}

export default App
