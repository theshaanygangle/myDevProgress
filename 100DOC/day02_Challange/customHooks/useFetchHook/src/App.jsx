
import { useState } from 'react';
import './App.css'
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';

  function App() {
    const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/1");

    const [state, setState] = useState(0);
    const prev = usePrev(state);

  return (
    <>
    <div>
      {JSON.stringify(finalData)}
    </div>


     <div>
      <p>{state}</p>
      <button onClick={()=> {
        setState((curr) => curr + 1)
      }}>Click Me</button>

      <p>Prev state was {prev}</p>
      </div>
    </>
  );
}




export default App
