import { useState , createContext, useContext} from 'react'
import './App.css'

const BulbContext = createContext();

function BulbProvider ({children}){
   const [bulbOn, setBulb] = useState(false);

  return  <BulbContext.Provider value={{
      bulbOn : bulbOn,
      setBulb : setBulb,
    }}>
      {children}
    </BulbContext.Provider>  
}

function App() {

  return (
    <>
        <BulbProvider>
          <LightBulb/>
        </BulbProvider>
    </>
  )
}

function LightBulb (){

  return <div>

    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}

function ToggleBulbState(){
  const {bulbOn , setBulb} = useContext(BulbContext);
  function toggle (){
    //  setBulb(currentState => !currentState)
   setBulb(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle The Bulb</button>
  </div>
}

export default App  
