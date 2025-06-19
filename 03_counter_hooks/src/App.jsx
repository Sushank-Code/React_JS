import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let counter_value = 0;
  let [counter, setCounter] = useState(counter_value)
  function addvalue(){
      setCounter(prev => prev +1)
      setCounter(prev => prev +1)
      setCounter(prev => prev +1)
      
  }
  function subvalue(){
      if(counter > 0){
        setCounter(counter-1)
      }
      else{
        setCounter(0)
      }
  }
  return (
    <>
      <h1> Counter Project</h1>
      <h2> Counter Value : { counter }</h2>
      <button onClick={addvalue}> Add Value </button>
      <hr />
      <button onClick={subvalue}> Subtract Value </button>
    </>
  )
}

export default App
