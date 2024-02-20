import { useState } from "react";


export default function Counter(){
  
  const [count,setCount] = useState(0);

  function incrementCount(){
    setCount (count +  1);
    return setCount;
  }

  function resetValue(){
    setCount (0);
  }

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increments</button>
    <button onClick={resetValue}>Reset</button>

  </div>
);



}