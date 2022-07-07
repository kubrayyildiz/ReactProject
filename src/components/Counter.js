import {useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const Azalt=()=>{
        setCount(count-1);

    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Arttır</button>
        <button onClick={Azalt}>Azalt</button>
    </div>
  )
}

export default Counter