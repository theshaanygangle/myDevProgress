import React from 'react';
import './App.css'
import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from "recoil"

const CounterAtom = atom({
	key: "counter",
	default: 0
})

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter/>
        <Buttons/>
      </RecoilRoot>
      
    </>
  )
}

function Counter() {
  const count = useRecoilValue(CounterAtom);
  return <div>
    <h1>{count}</h1>
  </div>
}


function Buttons() {
  const setCount = useSetRecoilState(CounterAtom);

  function increase() {
    setCount(c => c + 1)
  }
  
  function decrease() {
    setCount(c => c - 1)
  }
  
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App
