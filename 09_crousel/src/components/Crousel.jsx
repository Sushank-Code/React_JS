import React, { useState } from 'react'
import imageData from './image'

const Crousel = () => {
    const [index, setIndex] = useState(0)
    let iData = imageData[index]
    function handleNext() {
        if(index === imageData.length-1 ){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }
    function handlePrev() {
        if(index === 0){
            setIndex(imageData.length -1)
        }
        else{
            setIndex(index - 1)
        }
    }
    return (
        <div className='w-1/2 m-20'>
            <img src={iData.url} alt="" />
            <div className='m-10 flex flex-row space-x-120'>

                <button className="relative block group cursor-pointer" onClick={handlePrev}>
                    <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
                    <div className="transition bg-white relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                        <div className="p-2 ">
                            <p className="text-xl font-outerSans font-medium">Previous</p>
                        </div>
                    </div>
                </button>

                <button className="relative block group cursor-pointer" onClick={handleNext}>
                    <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
                    <div className="transition bg-white relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                        <div className="p-2 ">
                            <p className="text-xl font-outerSans font-medium ">Next</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Crousel