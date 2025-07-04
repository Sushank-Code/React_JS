import React, { useState } from 'react'
import data from './data'

const Accordion = () => {
  const [selected, setselected] = useState(null)
  const handlesingle = (getid) => {
    setselected(getid === selected ? null : getid)
  }
  return (
    <div className='flex flex-col items-center mt-30'>
      {data && data.length > 0 ? (
        data.map((accordion) => (
          <div className='w-5xl bg-amber-400 p-5' key={accordion.id} >
            <div onClick={() => handlesingle(accordion.id)} className='cursor-pointer'>
              <h1> {accordion.question} </h1>
              {
                selected === accordion.id ?
                  <p>{accordion.answer}</p>
                  : null
              }
              {/* <button className=''> +  </button> */}
              <hr className='mt-2' />
            </div>
          </div>
        ))
      ) : (
        <div> No data found </div>
      )}

    </div>
  )
}

export default Accordion