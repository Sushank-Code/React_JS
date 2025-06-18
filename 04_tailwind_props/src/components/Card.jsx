import React from 'react'
import photo1 from '../assets/photo1.jpg'

function Card({channel,title="Whatever"}) {
    
  return (
    <div className="max-w-xs p-6 m-20 rounded-md shadow-md bg-black">
        <img
          src={photo1}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide text-white">{channel}</h2>
        </div>
        <p className="text-gray-300">
          Sushank Lamsal
          <br />
          Learning React
        </p>
      </div>
  )
}

export default Card