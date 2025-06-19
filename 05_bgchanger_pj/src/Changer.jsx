import React, { useState } from 'react'

const Changer = () => {

  // usestate
  let [color, setColor] = useState("black")

  const colorarr = [
    { id: 0, color: "red" },
    { id: 1, color: "yellow" },
    { id: 2, color: "green" },
    { id: 3, color: "blue" },
    { id: 4, color: "purple" },
    { id: 5, color: "orange" },
    { id: 6, color: "white" },
    { id: 7, color: "black" },
    { id: 8, color: "indigo" },
  ]

  // we can use map inside return too

  let btnlist = colorarr.map((c) =>
    <button key={c.id} type="button" className="px-8 py-3 ml-0 font-semibold border rounded-full border-black dark:bg-gray-100 dark:text-gray-800 cursor-pointer" style={{ backgroundColor: c.color }} onClick={() => setColor(c.color)}> {c.color}</button>
  )

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>

        <div className='w-5xl h-20  ml-30 p-4 rounded-full relative top-180 left-40 bg-white'>
          {btnlist}
        </div>
      </div>
    </>
  )
}

export default Changer