import React,{ useState } from 'react'
import './App.css'

function App() {
  const [date,setDate] = useState( new Date().toLocaleTimeString());
  const [count,setCount] = useState(0);
  const increaseCount = () =>{ 
    setCount(count+1);
    setCount((prevCount)=>(prevCount+1));
  }

  setInterval(()=>setDate(new Date().toLocaleTimeString()),1000);
  
  const decreaseCount = () => setCount(count-1);
  return (
    <>
     <h1>React Counter</h1>
     <div>Time: {date}</div>
     <h2>count: {count}</h2>
     <p>{count}</p>
     <button onClick={increaseCount}>Increase</button>
     {" "}
     <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
