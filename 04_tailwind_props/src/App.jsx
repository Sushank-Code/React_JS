import { useState } from 'react'
import Card from './components/card'

function App() {

  return (
    <>
      <div >
        <h1 className="text-3xl text-white text-center bg-fuchsia-400 w-32 rounded-sm p-8 m-20 "> Hello world! </h1>
      </div>
      <Card channel="Game and Code" title="Gaming" />
      <Card channel="Movie and Code"  />
      
    </>
  )
}

export default App
